/* ========================================================================
   E-learning – Application Logic
   YouTube-embedded video courses for the UX-UI Pool
   ======================================================================== */
"use strict";

/* ── CONFIG ──────────────────────────────────────────────────────────────── */
const ELEARN_WATCHED_KEY = "uxui_elearn_watched";
const ELEARN_NOTES_KEY = "uxui_elearn_notes";

/* ── COURSE & VIDEO DATA ─────────────────────────────────────────────────
   Each course groups related videos. YouTube IDs are used to build
   embed URLs and thumbnail URLs. Duration is display-only.
   Replace the youtubeId values with your own hosted videos.
   ──────────────────────────────────────────────────────────────────────── */
const courses = [
  {
    id: "ux-research",
    title: "UX Research Fundamentals",
    track: "UX",
    icon: "UX",
    videos: [
      {
        id: "ux-r-1",
        title: "What is UX Research?",
        youtubeId: "WpzmOH0hrEM",
        duration: "10:23",
        difficulty: "Beginner",
        description:
          "An introduction to user experience research — why it matters, the core methods, and how it fits into the design process.",
      },
      {
        id: "ux-r-2",
        title: "User Interviews: Planning & Execution",
        youtubeId: "MT4Ig2uqjTc",
        duration: "14:47",
        difficulty: "Beginner",
        description:
          "Learn how to write an interview guide, recruit participants, and run effective user interviews.",
      },
      {
        id: "ux-r-3",
        title: "Creating Personas from Data",
        youtubeId: "u44pBnAn7cM",
        duration: "11:15",
        difficulty: "Intermediate",
        description:
          "Synthesize interview insights into actionable personas that guide your design decisions.",
      },
      {
        id: "ux-r-4",
        title: "Affinity Mapping Workshop",
        youtubeId: "VKoR85FjU-Q",
        duration: "8:32",
        difficulty: "Intermediate",
        description:
          "Organize qualitative data into meaningful clusters using affinity diagrams — live demo included.",
      },
    ],
  },
  {
    id: "ux-design-thinking",
    title: "Design Thinking Process",
    track: "UX",
    icon: "UX",
    videos: [
      {
        id: "ux-dt-1",
        title: "Design Thinking Overview",
        youtubeId: "_r0VX-aU_T8",
        duration: "12:05",
        difficulty: "Beginner",
        description:
          "The five stages of design thinking and how they connect to the UX-UI Pool quests.",
      },
      {
        id: "ux-dt-2",
        title: "Problem Framing & How Might We",
        youtubeId: "sYGPUz7H_TY",
        duration: "9:40",
        difficulty: "Intermediate",
        description:
          "Turn research insights into clear problem statements using the 'How Might We' technique.",
      },
      {
        id: "ux-dt-3",
        title: "Ideation Techniques",
        youtubeId: "56rGPaLWE8k",
        duration: "15:20",
        difficulty: "Intermediate",
        description:
          "Explore brainstorming, crazy 8s, SCAMPER, and other divergent thinking methods.",
      },
      {
        id: "ux-dt-4",
        title: "Prototyping & Testing Loops",
        youtubeId: "JMjozqJS44M",
        duration: "13:55",
        difficulty: "Advanced",
        description:
          "Build quick prototypes, test with real users, and iterate based on feedback.",
      },
    ],
  },
  {
    id: "ux-flows",
    title: "User Flows & Journeys",
    track: "UX",
    icon: "UX",
    videos: [
      {
        id: "ux-fl-1",
        title: "User Journey Mapping",
        youtubeId: "2W13ext26kQ",
        duration: "11:30",
        difficulty: "Beginner",
        description:
          "Map the full user experience from first contact to task completion, identifying pain points and opportunities.",
      },
      {
        id: "ux-fl-2",
        title: "Task Flows vs User Flows",
        youtubeId: "TIV1y11xz7k",
        duration: "7:45",
        difficulty: "Intermediate",
        description:
          "Understand the difference between task flows and user flows, and when to use each.",
      },
    ],
  },
  {
    id: "ui-visual-design",
    title: "Visual Design Foundations",
    track: "UI",
    icon: "UI",
    videos: [
      {
        id: "ui-vd-1",
        title: "Color Theory for Interfaces",
        youtubeId: "GyVMoejbGFg",
        duration: "16:20",
        difficulty: "Beginner",
        description:
          "Understand hue, saturation, and lightness. Learn to build accessible color palettes for digital products.",
      },
      {
        id: "ui-vd-2",
        title: "Typography & Readability",
        youtubeId: "hnRPGLGj_3s",
        duration: "12:10",
        difficulty: "Beginner",
        description:
          "Choose fonts, set type scales, and ensure readability across screen sizes.",
      },
      {
        id: "ui-vd-3",
        title: "Grid Systems & Layout",
        youtubeId: "YqRZq4I1Et4",
        duration: "14:35",
        difficulty: "Intermediate",
        description:
          "Master column grids, baseline grids, and responsive layout principles.",
      },
      {
        id: "ui-vd-4",
        title: "Visual Hierarchy Deep Dive",
        youtubeId: "qZWDJqY27bw",
        duration: "10:50",
        difficulty: "Intermediate",
        description:
          "Control user attention with scale, contrast, proximity, and alignment.",
      },
    ],
  },
  {
    id: "ui-components",
    title: "UI Components & Systems",
    track: "UI",
    icon: "UI",
    videos: [
      {
        id: "ui-cp-1",
        title: "Atomic Design Methodology",
        youtubeId: "W-h1FtNYim4",
        duration: "11:45",
        difficulty: "Intermediate",
        description:
          "Build interfaces from atoms to organisms — a structured approach to design systems.",
      },
      {
        id: "ui-cp-2",
        title: "Building a Design System Library",
        youtubeId: "Dtd40cHQQlk",
        duration: "18:30",
        difficulty: "Advanced",
        description:
          "Create a reusable component library with consistent tokens, variants, and documentation.",
      },
      {
        id: "ui-cp-3",
        title: "Multi-state Components",
        youtubeId: "wIuVvCuiJhU",
        duration: "9:15",
        difficulty: "Intermediate",
        description:
          "Design buttons, inputs, and cards that work across every state: default, hover, focus, disabled, error.",
      },
    ],
  },
  {
    id: "ui-accessibility",
    title: "Accessibility & Heuristics",
    track: "UI",
    icon: "UI",
    videos: [
      {
        id: "ui-ax-1",
        title: "Web Accessibility Basics",
        youtubeId: "z8xUCzToff8",
        duration: "13:20",
        difficulty: "Beginner",
        description:
          "WCAG guidelines, screen readers, color contrast, and ARIA — the essentials every UI designer needs.",
      },
      {
        id: "ui-ax-2",
        title: "Heuristic Evaluation Walkthrough",
        youtubeId: "6Bw0n6Jvwoo",
        duration: "15:40",
        difficulty: "Advanced",
        description:
          "Run a complete heuristic audit using Nielsen's 10 usability heuristics with real examples.",
      },
    ],
  },
  {
    id: "general-tools",
    title: "Tools & Workflow",
    track: "General",
    icon: "GN",
    videos: [
      {
        id: "gen-t-1",
        title: "Figma Crash Course",
        youtubeId: "FTFaQWZBqQ8",
        duration: "22:10",
        difficulty: "Beginner",
        description:
          "Get productive in Figma fast — frames, auto-layout, components, and collaboration features.",
      },
      {
        id: "gen-t-2",
        title: "Design Handoff Best Practices",
        youtubeId: "JMjozqJS44M",
        duration: "10:55",
        difficulty: "Intermediate",
        description:
          "Prepare your designs for development: naming conventions, specs, and redlines.",
      },
      {
        id: "gen-t-3",
        title: "Usability Testing on a Budget",
        youtubeId: "0YL0xoSmyZI",
        duration: "11:30",
        difficulty: "Beginner",
        description:
          "Run guerilla usability tests without a lab — tools, scripts, and analysis tips.",
      },
    ],
  },
];

/* ── HELPERS ─────────────────────────────────────────────────────────── */
const $ = (id) => document.getElementById(id);

const getAllVideos = () => courses.flatMap((c) => c.videos.map((v) => ({ ...v, courseId: c.id, courseTitle: c.title, track: c.track })));

const getWatched = () => {
  try { return JSON.parse(localStorage.getItem(ELEARN_WATCHED_KEY)) || []; }
  catch { return []; }
};
const setWatched = (list) => localStorage.setItem(ELEARN_WATCHED_KEY, JSON.stringify(list));
const isWatched = (videoId) => getWatched().includes(videoId);
const toggleWatched = (videoId) => {
  const w = getWatched();
  if (w.includes(videoId)) {
    setWatched(w.filter((id) => id !== videoId));
  } else {
    w.push(videoId);
    setWatched(w);
  }
};

const getNotes = () => {
  try { return JSON.parse(localStorage.getItem(ELEARN_NOTES_KEY)) || {}; }
  catch { return {}; }
};
const saveNoteFor = (videoId, text) => {
  const notes = getNotes();
  notes[videoId] = text;
  localStorage.setItem(ELEARN_NOTES_KEY, JSON.stringify(notes));
};

const ytThumb = (youtubeId) => `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`;
const ytEmbed = (youtubeId) => `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`;

/* ── STATE ───────────────────────────────────────────────────────────── */
let activeCourse = "all";
let activeVideoId = null;
let filterTrack = "all";
let filterDifficulty = "all";
let searchTerm = "";

/* ── CURRENT USER (read from localStorage, set by main app) ──────────── */
const getCurrentUser = () => {
  try {
    const raw = localStorage.getItem("uxui_current_user");
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
};

const getInitials = (name) => {
  if (!name) return "NA";
  return name.trim().split(/\s+/).slice(0, 2).map((p) => p[0].toUpperCase()).join("");
};

/* ── RENDER: Course sidebar ──────────────────────────────────────────── */
function renderCourseSidebar() {
  const nav = $("course-nav");
  nav.innerHTML = "";

  // "All" item
  const allItem = document.createElement("a");
  allItem.className = `elearn-course-item${activeCourse === "all" ? " active" : ""}`;
  allItem.innerHTML = `
    <span class="elearn-course-icon general">ALL</span>
    <span class="elearn-course-label">All Videos</span>
    <span class="elearn-course-count">${getAllVideos().length}</span>
  `;
  allItem.addEventListener("click", () => { activeCourse = "all"; render(); });
  nav.appendChild(allItem);

  courses.forEach((course) => {
    const item = document.createElement("a");
    const trackClass = course.track.toLowerCase();
    item.className = `elearn-course-item${activeCourse === course.id ? " active" : ""}`;
    item.innerHTML = `
      <span class="elearn-course-icon ${trackClass}">${course.icon}</span>
      <span class="elearn-course-label">${course.title}</span>
      <span class="elearn-course-count">${course.videos.length}</span>
    `;
    item.addEventListener("click", () => { activeCourse = course.id; render(); });
    nav.appendChild(item);
  });
}

/* ── RENDER: Video grid ──────────────────────────────────────────────── */
function renderVideoGrid() {
  const grid = $("video-grid");
  const empty = $("video-empty");
  const countEl = $("video-count");
  const titleEl = $("video-list-title");
  grid.innerHTML = "";

  let videos = activeCourse === "all"
    ? getAllVideos()
    : (() => { const c = courses.find((c) => c.id === activeCourse); return c ? c.videos.map((v) => ({ ...v, courseId: c.id, courseTitle: c.title, track: c.track })) : []; })();

  // Apply filters
  if (filterTrack !== "all") {
    videos = videos.filter((v) => v.track === filterTrack);
  }
  if (filterDifficulty !== "all") {
    videos = videos.filter((v) => v.difficulty === filterDifficulty);
  }
  if (searchTerm) {
    const q = searchTerm.toLowerCase();
    videos = videos.filter(
      (v) =>
        v.title.toLowerCase().includes(q) ||
        v.description.toLowerCase().includes(q) ||
        v.track.toLowerCase().includes(q) ||
        (v.courseTitle && v.courseTitle.toLowerCase().includes(q))
    );
  }

  // Title
  if (activeCourse === "all") {
    titleEl.textContent = "All Videos";
  } else {
    const c = courses.find((c) => c.id === activeCourse);
    titleEl.textContent = c ? c.title : "Videos";
  }

  countEl.textContent = `${videos.length} video${videos.length !== 1 ? "s" : ""}`;

  if (!videos.length) {
    empty.classList.remove("hidden");
    return;
  }
  empty.classList.add("hidden");

  videos.forEach((video) => {
    const card = document.createElement("div");
    card.className = `video-card${activeVideoId === video.id ? " active" : ""}`;
    const watched = isWatched(video.id);
    const trackClass = (video.track || "UX").toLowerCase();

    card.innerHTML = `
      <div class="video-thumb">
        <img src="${ytThumb(video.youtubeId)}" alt="${video.title}" loading="lazy" />
        <div class="video-thumb-overlay">
          <div class="video-thumb-play">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#fff" stroke="none">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </div>
        </div>
        <span class="video-thumb-duration">${video.duration}</span>
        <div class="video-thumb-watched ${watched ? "" : "hidden"}">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
      </div>
      <div class="video-card-body">
        <div class="video-card-track ${trackClass}">${video.track}</div>
        <div class="video-card-title">${video.title}</div>
        <div class="video-card-meta">${video.difficulty} · ${video.duration}</div>
      </div>
    `;

    card.addEventListener("click", () => playVideo(video));
    grid.appendChild(card);
  });
}

/* ── PLAY VIDEO ──────────────────────────────────────────────────────── */
function playVideo(video) {
  activeVideoId = video.id;

  const iframe = $("yt-player");
  const placeholder = $("player-placeholder");
  const title = $("player-title");
  const desc = $("player-desc");
  const trackBadge = $("player-track");
  const difficulty = $("player-difficulty");
  const duration = $("player-duration");
  const watchBtn = $("btn-mark-watched");
  const notesPanel = $("notes-panel");
  const notesArea = $("video-notes");

  // Set iframe src
  iframe.src = ytEmbed(video.youtubeId);
  placeholder.classList.add("hidden");

  // Set info
  title.textContent = video.title;
  desc.textContent = video.description;
  trackBadge.textContent = video.track;
  trackBadge.dataset.track = video.track;
  difficulty.textContent = video.difficulty;
  duration.textContent = video.duration;

  // Watch button state
  updateWatchButton(video.id);

  // Load notes
  const notes = getNotes();
  notesArea.value = notes[video.id] || "";
  notesPanel.classList.add("hidden");

  // Scroll to player
  $("player-section").scrollIntoView({ behavior: "smooth", block: "start" });

  // Re-render grid to highlight active
  renderVideoGrid();
}

function updateWatchButton(videoId) {
  const watchBtn = $("btn-mark-watched");
  const watched = isWatched(videoId);
  watchBtn.classList.toggle("watched", watched);
  watchBtn.innerHTML = watched
    ? `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Watched`
    : `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Mark as watched`;
}

/* ── RENDER: Stats ───────────────────────────────────────────────────── */
function renderStats() {
  const allVideos = getAllVideos();
  const watched = getWatched();
  $("stat-total-videos").textContent = allVideos.length;
  $("stat-total-courses").textContent = courses.length;
  $("stat-watched").textContent = watched.filter((id) => allVideos.some((v) => v.id === id)).length;
}

/* ── RENDER: User info ───────────────────────────────────────────────── */
function renderUser() {
  const user = getCurrentUser();
  const loginEl = $("topbar-login");
  const avatarEl = $("topbar-avatar");
  if (user) {
    const name = user.displayName || user.username || "User";
    loginEl.textContent = name;
    avatarEl.textContent = getInitials(name);
  }
}

/* ── MASTER RENDER ───────────────────────────────────────────────────── */
function render() {
  renderCourseSidebar();
  renderVideoGrid();
  renderStats();
  renderUser();
}

/* ── INIT ────────────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  render();

  // Search
  const searchInput = $("elearn-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchTerm = e.target.value.trim();
      renderVideoGrid();
    });
  }

  // Filters
  $("filter-track").addEventListener("change", (e) => {
    filterTrack = e.target.value;
    renderVideoGrid();
  });
  $("filter-difficulty").addEventListener("change", (e) => {
    filterDifficulty = e.target.value;
    renderVideoGrid();
  });

  // Mark as watched
  $("btn-mark-watched").addEventListener("click", () => {
    if (!activeVideoId) return;
    toggleWatched(activeVideoId);
    updateWatchButton(activeVideoId);
    renderVideoGrid();
    renderStats();
  });

  // Notes toggle
  $("btn-notes").addEventListener("click", () => {
    const panel = $("notes-panel");
    panel.classList.toggle("hidden");
    if (!panel.classList.contains("hidden")) {
      $("video-notes").focus();
    }
  });

  // Save notes
  $("btn-save-notes").addEventListener("click", () => {
    if (!activeVideoId) return;
    saveNoteFor(activeVideoId, $("video-notes").value);
    $("notes-panel").classList.add("hidden");
  });
});
