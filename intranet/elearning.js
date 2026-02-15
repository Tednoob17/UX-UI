/* ========================================================================
   E-learning – Application Logic  (42-intra inspired)
   YouTube Player API · Auto-play · Course progress · Keyboard shortcuts
   ======================================================================== */
"use strict";

/* ── CONFIG ──────────────────────────────────────────────────────────────── */
const ELEARN_WATCHED_KEY  = "uxui_elearn_watched";
const ELEARN_NOTES_KEY    = "uxui_elearn_notes";
const ELEARN_LAST_KEY     = "uxui_elearn_last";      // last-played video id
const ELEARN_AUTOPLAY_KEY = "uxui_elearn_autoplay";   // autoplay toggle

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

const getAllVideos = () =>
  courses.flatMap((c) =>
    c.videos.map((v) => ({ ...v, courseId: c.id, courseTitle: c.title, track: c.track }))
  );

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

/** Parse "mm:ss" to total seconds */
const durationToSecs = (dur) => {
  const parts = dur.split(":").map(Number);
  return parts.length === 3 ? parts[0] * 3600 + parts[1] * 60 + parts[2]
                             : parts[0] * 60 + parts[1];
};

/** Format total seconds as "Xh Ym" */
const formatTotalTime = (secs) => {
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
};

/* ── STATE ───────────────────────────────────────────────────────────── */
let activeCourse    = "all";
let activeVideoId   = null;
let filterTrack     = "all";
let filterDifficulty = "all";
let searchTerm      = "";
let ytPlayer        = null;   // YouTube IFrame API player instance
let autoplayEnabled = localStorage.getItem(ELEARN_AUTOPLAY_KEY) !== "false"; // default ON

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

/* ── RENDER: Horizontal course tabs (with progress bars) ─────────────── */
function renderCourseTabs() {
  const nav = $("course-nav");
  nav.innerHTML = "";
  const watched = getWatched();

  // "All" tab — overall progress
  const allVids   = getAllVideos();
  const allDone   = allVids.filter((v) => watched.includes(v.id)).length;
  const allPct    = allVids.length ? Math.round((allDone / allVids.length) * 100) : 0;

  const allTab    = document.createElement("a");
  allTab.className = `elearn-tab${activeCourse === "all" ? " active" : ""}`;
  allTab.innerHTML = `
    <span class="elearn-tab-icon all">ALL</span>
    <span class="elearn-tab-label">All Videos</span>
    <span class="elearn-tab-count">${allVids.length}</span>
    <span class="elearn-tab-progress" title="${allPct}% watched">
      <span class="elearn-tab-progress-fill" style="width:${allPct}%"></span>
    </span>
  `;
  allTab.addEventListener("click", () => { activeCourse = "all"; render(); });
  nav.appendChild(allTab);

  courses.forEach((course) => {
    const done    = course.videos.filter((v) => watched.includes(v.id)).length;
    const pct     = course.videos.length ? Math.round((done / course.videos.length) * 100) : 0;
    const trackCl = course.track.toLowerCase();
    const tab     = document.createElement("a");
    tab.className = `elearn-tab${activeCourse === course.id ? " active" : ""}`;
    tab.innerHTML = `
      <span class="elearn-tab-icon ${trackCl}">${course.icon}</span>
      <span class="elearn-tab-label">${course.title}</span>
      <span class="elearn-tab-count">${done}/${course.videos.length}</span>
      <span class="elearn-tab-progress" title="${pct}% watched">
        <span class="elearn-tab-progress-fill${pct === 100 ? " complete" : ""}" style="width:${pct}%"></span>
      </span>
    `;
    tab.addEventListener("click", () => { activeCourse = course.id; render(); });
    nav.appendChild(tab);
  });
}

/* ── RENDER: Up-Next playlist ────────────────────────────────────────── */
function renderUpNext() {
  const list = $("up-next-list");
  const container = $("up-next");
  if (!list || !container) return;

  // Determine the current course videos
  let videos;
  if (activeCourse === "all") {
    videos = getAllVideos();
  } else {
    const c = courses.find((c) => c.id === activeCourse);
    videos = c ? c.videos.map((v) => ({ ...v, courseId: c.id, courseTitle: c.title, track: c.track })) : [];
  }

  // Find the index of the active video
  const idx = videos.findIndex((v) => v.id === activeVideoId);
  // Show up to 4 videos after the current one
  const upcoming = idx >= 0 ? videos.slice(idx + 1, idx + 5) : videos.slice(0, 4);

  if (!upcoming.length) {
    container.style.display = "none";
    return;
  }
  container.style.display = "";
  list.innerHTML = "";

  upcoming.forEach((video) => {
    const item = document.createElement("div");
    const watched = isWatched(video.id);
    item.className = `up-next-item${activeVideoId === video.id ? " active" : ""}`;
    item.innerHTML = `
      <div class="up-next-thumb">
        <img src="${ytThumb(video.youtubeId)}" alt="${video.title}" loading="lazy" />
        <span class="up-next-dur">${video.duration}</span>
      </div>
      <div class="up-next-info">
        <div class="up-next-title">${video.title}</div>
        <div class="up-next-meta">${video.track} · ${video.difficulty}</div>
      </div>
      <div class="up-next-watched ${watched ? "" : "hidden"}">
        <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
    `;
    item.addEventListener("click", () => playVideo(video));
    list.appendChild(item);
  });
}

/* ── RENDER: Video grid ──────────────────────────────────────────────── */
function renderVideoGrid() {
  const grid = $("video-grid");
  const empty = $("video-empty");
  const countEl = $("video-count");
  const titleEl = $("video-list-title");
  grid.innerHTML = "";

  let videos =
    activeCourse === "all"
      ? getAllVideos()
      : (() => {
          const c = courses.find((c) => c.id === activeCourse);
          return c
            ? c.videos.map((v) => ({ ...v, courseId: c.id, courseTitle: c.title, track: c.track }))
            : [];
        })();

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

/* ── PLAY VIDEO (YouTube Player API) ──────────────────────────────────── */
function playVideo(video) {
  activeVideoId = video.id;
  localStorage.setItem(ELEARN_LAST_KEY, video.id);   // persist last-played

  const placeholder = $("player-placeholder");
  const title       = $("player-title");
  const desc        = $("player-desc");
  const trackBadge  = $("player-track");
  const difficulty  = $("player-difficulty");
  const duration    = $("player-duration");
  const notesPanel  = $("notes-panel");
  const notesArea   = $("video-notes");

  // YouTube Player API — load or cue video
  if (ytPlayer && typeof ytPlayer.loadVideoById === "function") {
    ytPlayer.loadVideoById(video.youtubeId);
  } else {
    initYTPlayer(video.youtubeId);
  }
  placeholder.classList.add("hidden");

  // Set info
  title.textContent      = video.title;
  desc.textContent       = video.description;
  trackBadge.textContent = video.track;
  trackBadge.dataset.track = video.track;
  difficulty.textContent = video.difficulty;
  duration.textContent   = video.duration;

  // Watch button state
  updateWatchButton(video.id);

  // Load notes
  const notes    = getNotes();
  notesArea.value = notes[video.id] || "";
  notesPanel.classList.add("hidden");

  // Scroll to player
  $("player-section").scrollIntoView({ behavior: "smooth", block: "start" });

  // Re-render grid + up-next to highlight active
  renderVideoGrid();
  renderUpNext();
}

/* ── YOUTUBE IFRAME PLAYER API ───────────────────────────────────────── */
function initYTPlayer(videoId) {
  const container = $("yt-player");
  // The API replaces a DIV with an iframe, so we need a fresh div
  if (container.tagName === "IFRAME") {
    const div = document.createElement("div");
    div.id = "yt-player";
    container.parentNode.replaceChild(div, container);
  }

  ytPlayer = new YT.Player("yt-player", {
    videoId: videoId,
    playerVars: {
      rel: 0,
      modestbranding: 1,
      autoplay: 1,
    },
    events: {
      onStateChange: onPlayerStateChange,
    },
  });
}

/** Called by YouTube API when the player state changes */
function onPlayerStateChange(event) {
  // YT.PlayerState.ENDED === 0
  if (event.data === 0) {
    // Auto-mark as watched
    if (activeVideoId && !isWatched(activeVideoId)) {
      toggleWatched(activeVideoId);
      updateWatchButton(activeVideoId);
      renderVideoGrid();
      renderUpNext();
      renderStats();
      renderCourseTabs();
    }

    // Check for course completion
    checkCourseCompletion();

    // Auto-play next video
    if (autoplayEnabled) {
      const next = getNextVideo();
      if (next) {
        playVideo(next);
      }
    }
  }
}

/** Get the next video in the current list */
function getNextVideo() {
  let videos;
  if (activeCourse === "all") {
    videos = getAllVideos();
  } else {
    const c = courses.find((c) => c.id === activeCourse);
    videos = c ? c.videos.map((v) => ({ ...v, courseId: c.id, courseTitle: c.title, track: c.track })) : [];
  }
  const idx = videos.findIndex((v) => v.id === activeVideoId);
  return idx >= 0 && idx < videos.length - 1 ? videos[idx + 1] : null;
}

/* ── COURSE COMPLETION CELEBRATION ───────────────────────────────────── */
function checkCourseCompletion() {
  const watched = getWatched();
  courses.forEach((course) => {
    const allDone = course.videos.every((v) => watched.includes(v.id));
    const key = `uxui_elearn_celebrated_${course.id}`;
    if (allDone && !localStorage.getItem(key)) {
      localStorage.setItem(key, "1");
      showCelebration(course.title);
    }
  });
}

function showCelebration(courseTitle) {
  const overlay = document.createElement("div");
  overlay.className = "celebration-overlay";
  overlay.innerHTML = `
    <div class="celebration-card">
      <div class="celebration-icon">
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#00BABC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 15l-3 3m0 0l-3-3m3 3V3"/>
          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="#00BABC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/>
          <circle cx="12" cy="8" r="7"/>
        </svg>
      </div>
      <h2 class="celebration-title">Course Complete!</h2>
      <p class="celebration-text">You finished <strong>${courseTitle}</strong></p>
      <p class="celebration-sub">All videos watched — great work!</p>
      <button class="celebration-btn" id="celebration-close">Continue</button>
    </div>
  `;
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add("show"));
  const close = () => {
    overlay.classList.remove("show");
    setTimeout(() => overlay.remove(), 300);
  };
  overlay.querySelector("#celebration-close").addEventListener("click", close);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
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
  const watchedCount = watched.filter((id) => allVideos.some((v) => v.id === id)).length;

  $("stat-total-videos").textContent = allVideos.length;
  $("stat-total-courses").textContent = courses.length;
  $("stat-watched").textContent = watchedCount;

  // Progress %
  const progressEl = $("stat-progress");
  if (progressEl) {
    const pct = allVideos.length ? Math.round((watchedCount / allVideos.length) * 100) : 0;
    progressEl.textContent = pct + "%";
  }

  // Total duration
  const durationEl = $("stat-total-duration");
  if (durationEl) {
    const totalSecs = allVideos.reduce((s, v) => s + durationToSecs(v.duration), 0);
    durationEl.textContent = formatTotalTime(totalSecs);
  }
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
  renderCourseTabs();
  renderVideoGrid();
  renderUpNext();
  renderStats();
  renderUser();
  renderAutoplayToggle();
}

/* ── RENDER: Autoplay toggle ─────────────────────────────────────────── */
function renderAutoplayToggle() {
  let toggle = $("autoplay-toggle");
  if (!toggle) return;
  toggle.classList.toggle("on", autoplayEnabled);
  toggle.setAttribute("aria-checked", autoplayEnabled);
  toggle.title = autoplayEnabled ? "Autoplay is ON" : "Autoplay is OFF";
}

/* ── LOAD YOUTUBE IFRAME API ─────────────────────────────────────────── */
function loadYouTubeAPI() {
  if (window.YT && window.YT.Player) return; // already loaded
  const tag    = document.createElement("script");
  tag.src      = "https://www.youtube.com/iframe_api";
  const first  = document.getElementsByTagName("script")[0];
  first.parentNode.insertBefore(tag, first);
}

// Called automatically by the YouTube IFrame API when ready
window.onYouTubeIframeAPIReady = function () {
  // If a video was already selected (e.g. session resume), init the player
  if (activeVideoId) {
    const video = getAllVideos().find((v) => v.id === activeVideoId);
    if (video) initYTPlayer(video.youtubeId);
  }
};

/* ── KEYBOARD SHORTCUTS ──────────────────────────────────────────────── */
function initKeyboardShortcuts() {
  document.addEventListener("keydown", (e) => {
    // Ignore when typing in inputs / textarea
    if (e.target.matches("input, textarea, select")) return;

    switch (e.key.toLowerCase()) {
      case "n": { // Next video
        e.preventDefault();
        const next = getNextVideo();
        if (next) playVideo(next);
        break;
      }
      case "m": { // Mark as watched
        e.preventDefault();
        if (!activeVideoId) return;
        toggleWatched(activeVideoId);
        updateWatchButton(activeVideoId);
        renderVideoGrid();
        renderUpNext();
        renderStats();
        renderCourseTabs();
        break;
      }
      case "a": { // Toggle autoplay
        e.preventDefault();
        autoplayEnabled = !autoplayEnabled;
        localStorage.setItem(ELEARN_AUTOPLAY_KEY, autoplayEnabled);
        renderAutoplayToggle();
        break;
      }
    }
  });
}

/* ── SESSION RESUME — Restore last video on page load ────────────────── */
function resumeSession() {
  const lastId = localStorage.getItem(ELEARN_LAST_KEY);
  if (!lastId) return;
  const video = getAllVideos().find((v) => v.id === lastId);
  if (!video) return;

  // Set the active course to match the video's course
  const course = courses.find((c) => c.videos.some((v) => v.id === lastId));
  if (course) activeCourse = course.id;

  // Set the video — don't autoplay on resume
  activeVideoId = video.id;

  // Display info without starting playback
  const title      = $("player-title");
  const desc       = $("player-desc");
  const trackBadge = $("player-track");
  const difficulty = $("player-difficulty");
  const duration   = $("player-duration");

  title.textContent      = video.title;
  desc.textContent       = video.description;
  trackBadge.textContent = video.track;
  trackBadge.dataset.track = video.track;
  difficulty.textContent = video.difficulty;
  duration.textContent   = video.duration;

  updateWatchButton(video.id);

  const notes    = getNotes();
  const area     = $("video-notes");
  if (area) area.value = notes[video.id] || "";
}

/* ── INIT ────────────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  // Load YouTube IFrame API
  loadYouTubeAPI();

  // Restore last session before first render
  resumeSession();
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
    renderUpNext();
    renderStats();
    renderCourseTabs();
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

  // Autoplay toggle button
  const apToggle = $("autoplay-toggle");
  if (apToggle) {
    apToggle.addEventListener("click", () => {
      autoplayEnabled = !autoplayEnabled;
      localStorage.setItem(ELEARN_AUTOPLAY_KEY, autoplayEnabled);
      renderAutoplayToggle();
    });
  }

  // Keyboard shortcuts
  initKeyboardShortcuts();
});
