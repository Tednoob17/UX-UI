const markdownContainer = document.getElementById("markdown");
const errorEl = document.getElementById("error");
const filePathEl = document.getElementById("file-path");
const rawLink = document.getElementById("raw-link");

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const renderInline = (text) => {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const codePattern = /`([^`]+)`/g;
  const boldPattern = /\*\*([^*]+)\*\*/g;
  const italicPattern = /(^|[^*])\*([^*]+)\*/g;

  let output = text.replace(linkPattern, (_match, label, url) => {
    return `<a href="${url}" target="_blank" rel="noopener">${label}</a>`;
  });

  output = output.replace(codePattern, (_match, code) => {
    return `<code>${escapeHtml(code)}</code>`;
  });

  output = output.replace(boldPattern, (_match, content) => {
    return `<strong>${content}</strong>`;
  });

  output = output.replace(italicPattern, (_match, prefix, content) => {
    return `${prefix}<em>${content}</em>`;
  });

  return output;
};

const markdownToHtml = (markdown) => {
  const lines = markdown.split(/\r?\n/);
  const html = [];
  let inCodeBlock = false;
  let codeBuffer = [];
  let listBuffer = [];
  let listType = null;

  const flushList = () => {
    if (!listBuffer.length) return;
    const wrapper = listType === "ol" ? "ol" : "ul";
    html.push(`<${wrapper}>${listBuffer.join("")}</${wrapper}>`);
    listBuffer = [];
    listType = null;
  };

  lines.forEach((raw) => {
    const line = raw.trimEnd();

    if (line.startsWith("```")) {
      if (inCodeBlock) {
        html.push(
          `<pre><code>${escapeHtml(codeBuffer.join("\n"))}</code></pre>`
        );
        codeBuffer = [];
        inCodeBlock = false;
      } else {
        flushList();
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeBuffer.push(raw);
      return;
    }

    if (!line) {
      flushList();
      html.push("<p></p>");
      return;
    }

    if (line.startsWith(">")) {
      flushList();
      html.push(`<blockquote>${renderInline(line.slice(1).trim())}</blockquote>`);
      return;
    }

    const headingMatch = line.match(/^(#{1,4})\s+(.*)$/);
    if (headingMatch) {
      flushList();
      const level = headingMatch[1].length;
      html.push(`<h${level}>${renderInline(headingMatch[2])}</h${level}>`);
      return;
    }

    const orderedMatch = line.match(/^(\d+)\.\s+(.*)$/);
    if (orderedMatch) {
      if (listType && listType !== "ol") flushList();
      listType = "ol";
      listBuffer.push(`<li>${renderInline(orderedMatch[2])}</li>`);
      return;
    }

    const unorderedMatch = line.match(/^[-*]\s+(.*)$/);
    if (unorderedMatch) {
      if (listType && listType !== "ul") flushList();
      listType = "ul";
      listBuffer.push(`<li>${renderInline(unorderedMatch[1])}</li>`);
      return;
    }

    flushList();
    html.push(`<p>${renderInline(line)}</p>`);
  });

  flushList();
  if (inCodeBlock && codeBuffer.length) {
    html.push(`<pre><code>${escapeHtml(codeBuffer.join("\n"))}</code></pre>`);
  }

  return html.join("\n");
};

const loadMarkdown = async () => {
  const params = new URLSearchParams(window.location.search);
  const file = params.get("file");
  if (!file) {
    errorEl.textContent = "Missing file parameter.";
    return;
  }

  filePathEl.textContent = file.replace("../", "");
  rawLink.href = file;

  try {
    const response = await fetch(file);
    if (!response.ok) {
      errorEl.textContent = "Unable to load this file.";
      return;
    }
    const text = await response.text();
    markdownContainer.innerHTML = markdownToHtml(text);
  } catch (error) {
    errorEl.textContent = error.message;
  }
};

loadMarkdown();
