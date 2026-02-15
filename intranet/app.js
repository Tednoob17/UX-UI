/* ========================================================================
   UX-UI Pool Intranet – Application Logic
   ======================================================================== */
"use strict";

/* ── CONFIG ──────────────────────────────────────────────────────────────── */
const PROGRESS_PREFIX = "uxui_progress_";
const USERS_KEY = "uxui_users";
const CURRENT_USER_KEY = "uxui_current_user";
const ACTIVITY_PREFIX = "uxui_activity_";
const TIME_PREFIX = "uxui_time_";

/* ── TASK DATA ───────────────────────────────────────────────────────────── */
const tasks = [
  /* ─── UX Quest 1 ─── */
  {
    section: "UX Quest 1 – Empathy",
    items: [
      { id: "ux1-1", label: "User interviews", link: "subjects/ux/athele-keep-hydrated/user-interviews/README.md" },
      { id: "ux1-2", label: "Personas", link: "subjects/ux/athele-keep-hydrated/personas/README.md" },
      { id: "ux1-3", label: "User journey", link: "subjects/ux/athele-keep-hydrated/user-journey/README.md" },
      { id: "ux1-4", label: "Problem statement", link: "subjects/ux/athele-keep-hydrated/problem-statement/README.md" },
      { id: "ux1-5", label: "Ideation", link: "subjects/ux/athele-keep-hydrated/ideation/README.md" },
      { id: "ux1-6", label: "Prototyping", link: "subjects/ux/athele-keep-hydrated/prototyping/README.md" },
      { id: "ux1-7", label: "Analytics", link: "subjects/ux/athele-keep-hydrated/analytics/README.md" },
    ],
  },
  /* ─── UX Quest 2 ─── */
  {
    section: "UX Quest 2 – Going on holidays",
    items: [
      { id: "ux2-1", label: "Interview guide", link: "subjects/ux/going-on-holidays-with-friends/interview-guide/README.md" },
      { id: "ux2-2", label: "Run interviews", link: "subjects/ux/going-on-holidays-with-friends/run-interviews/README.md" },
      { id: "ux2-3", label: "Affinity diagram", link: "subjects/ux/going-on-holidays-with-friends/affinity-diagram/README.md" },
      { id: "ux2-4", label: "Problem statement", link: "subjects/ux/going-on-holidays-with-friends/problem-statement/README.md" },
      { id: "ux2-5", label: "Ideation", link: "subjects/ux/going-on-holidays-with-friends/ideation/README.md" },
      { id: "ux2-6", label: "User flow", link: "subjects/ux/going-on-holidays-with-friends/user-flow/README.md" },
      { id: "ux2-7", label: "Prototyping", link: "subjects/ux/going-on-holidays-with-friends/prototyping/README.md" },
    ],
  },
  /* ─── UX Quest 3 ─── */
  {
    section: "UX Quest 3 – Let's fight harassment",
    items: [
      { id: "ux3-1", label: "Competitive analysis", link: "subjects/ux/lets-fight-harassment/competitive-analyss/README.md" },
      { id: "ux3-2", label: "Interviews", link: "subjects/ux/lets-fight-harassment/interviews/README.md" },
      { id: "ux3-3", label: "Broadcast strategy", link: "subjects/ux/lets-fight-harassment/broadcast-stategy/README.md" },
    ],
  },
  /* ─── UX Quest 4 ─── */
  {
    section: "UX Quest 4 – Seamstress",
    items: [
      { id: "ux4-1", label: "Empathy / exploration", link: "subjects/ux/seamstress/README.md" },
    ],
  },
  /* ─── UX Quest 5 ─── */
  {
    section: "UX Quest 5 – Sunday Night Movie",
    items: [
      { id: "ux5-1", label: "Design sprint", link: "subjects/ux/sunday-night-movie/README.md" },
    ],
  },
  /* ─── UX Quest 6 ─── */
  {
    section: "UX Quest 6 – Music On",
    items: [
      { id: "ux6-1", label: "Research & concept", link: "subjects/ux/music-on/README.md" },
    ],
  },
  /* ─── UX Quest 7 ─── */
  {
    section: "UX Quest 7 – The Olympics",
    items: [
      { id: "ux7-1", label: "User research", link: "subjects/ux/the-olympics/README.md" },
    ],
  },
  /* ─── UI Quest 1 ─── */
  {
    section: "UI Quest 1 – Colors & Moodboard",
    items: [
      { id: "ui1-1", label: "Find the colors", link: "subjects/ui/colors-and-moodboard/find-the-colors/README.md" },
      { id: "ui1-2", label: "Color codes", link: "subjects/ui/colors-and-moodboard/color-codes/README.md" },
      { id: "ui1-3", label: "Color combinations", link: "subjects/ui/colors-and-moodboard/color-combinations/README.md" },
      { id: "ui1-4", label: "Typography", link: "subjects/ui/colors-and-moodboard/typography/README.md" },
      { id: "ui1-5", label: "Moodboard", link: "subjects/ui/colors-and-moodboard/moodboard/README.md" },
      { id: "ui1-6", label: "Typography moodboard", link: "subjects/ui/colors-and-moodboard/typography-moodboard/README.md" },
      { id: "ui1-7", label: "UI challenge – Bitcoin", link: "subjects/ui/colors-and-moodboard/ui-challenge-bitcoin-dashboard/README.md" },
      { id: "ui1-8", label: "UI challenge – Flight", link: "subjects/ui/colors-and-moodboard/ui-challenge-flight/README.md" },
      { id: "ui1-9", label: "UI challenge – Timer", link: "subjects/ui/colors-and-moodboard/ui-challenge-timer/README.md" },
      { id: "ui1-10", label: "UI challenge – Watches", link: "subjects/ui/colors-and-moodboard/ui-challenge-watches/README.md" },
      { id: "ui1-11", label: "UI challenge – Spotify", link: "subjects/ui/colors-and-moodboard/ui-challenge-spotify/README.md" },
    ],
  },
  /* ─── UI Quest 2 ─── */
  {
    section: "UI Quest 2 – Rules",
    items: [
      { id: "ui2-1", label: "Grids", link: "subjects/ui/rules/grids/README.md" },
      { id: "ui2-2", label: "Multi-state", link: "subjects/ui/rules/multi-state/README.md" },
      { id: "ui2-3", label: "Consistency", link: "subjects/ui/rules/consistency/README.md" },
      { id: "ui2-4", label: "Breadcrumbs", link: "subjects/ui/rules/breadcrumbs/README.md" },
      { id: "ui2-5", label: "Toggle buttons", link: "subjects/ui/rules/toggle-buttons/README.md" },
      { id: "ui2-6", label: "Radio buttons", link: "subjects/ui/rules/radio-buttons/README.md" },
      { id: "ui2-7", label: "Calendars", link: "subjects/ui/rules/calendars/README.md" },
      { id: "ui2-8", label: "Time pickers", link: "subjects/ui/rules/time-pickers/README.md" },
      { id: "ui2-9", label: "Micro-interactions", link: "subjects/ui/rules/micro-interactions/README.md" },
      { id: "ui2-10", label: "Accessibility – Website", link: "subjects/ui/rules/accessbility-website/README.md" },
      { id: "ui2-11", label: "Accessibility – App", link: "subjects/ui/rules/accessbility-app/README.md" },
    ],
  },
  /* ─── UI Quest 3 ─── */
  {
    section: "UI Quest 3 – Heuristics",
    items: [
      { id: "ui3-1", label: "Heuristic audit", link: "subjects/ui/heuristics/audit/README.md" },
      { id: "ui3-2", label: "Recommendations", link: "subjects/ui/heuristics/recommendations/README.md" },
    ],
  },
  /* ─── UI Quest 4 ─── */
  {
    section: "UI Quest 4 – Atomic Design",
    items: [
      { id: "ui4-1", label: "Material Design", link: "subjects/ui/atomic-design/material-design/README.md" },
      { id: "ui4-2", label: "Browsing", link: "subjects/ui/atomic-design/browsing/README.md" },
      { id: "ui4-3", label: "Library – Climbing addicts", link: "subjects/ui/atomic-design/library-for-climbing-addicts/README.md" },
      { id: "ui4-4", label: "Library – Dating app", link: "subjects/ui/atomic-design/library-for-a-dating-app/README.md" },
      { id: "ui4-5", label: "Design system library", link: "subjects/ui/atomic-design/design-system-library/README.md" },
    ],
  },
  /* ─── UI Quest 5 ─── */
  {
    section: "UI Quest 5 – Building an Interface",
    items: [
      { id: "ui5-1", label: "Styleguide", link: "subjects/ui/building-an-interface/styleguide/README.md" },
      { id: "ui5-2", label: "Design screens", link: "subjects/ui/building-an-interface/design-screens/README.md" },
      { id: "ui5-3", label: "Design system library", link: "subjects/ui/building-an-interface/design-system-library/README.md" },
      { id: "ui5-4", label: "Animation", link: "subjects/ui/building-an-interface/animation/README.md" },
      { id: "ui5-5", label: "Desirability testing", link: "subjects/ui/building-an-interface/desirability-testing/README.md" },
    ],
  },
  /* ─── Projects ─── */
  {
    section: "Projects",
    items: [
      { id: "proj-1", label: "A Table – UX", link: "subjects/project-a-table/ux/README.md" },
      { id: "proj-2", label: "A Table – UI", link: "subjects/project-a-table/ui/README.md" },
      { id: "proj-3", label: "Get A Room – UX", link: "subjects/project-get-a-room/ux/README.md" },
      { id: "proj-4", label: "Get A Room – UI", link: "subjects/project-get-a-room/ui/README.md" },
      { id: "proj-5", label: "Let's Do Some Sports – UX", link: "subjects/project-lets-do-some-sports/ux/README.md" },
      { id: "proj-6", label: "Let's Do Some Sports – UI", link: "subjects/project-lets-do-some-sports/ui/README.md" },
      { id: "proj-7", label: "Let's Fair Trade – UX", link: "subjects/project-lets-fair-trade/ux/README.md" },
      { id: "proj-8", label: "Let's Fair Trade – UI", link: "subjects/project-lets-fair-trade/ui/README.md" },
    ],
  },
];

/* Count helpers */
const allItems = tasks.flatMap((s) => s.items);
const totalTasks = allItems.length;
const projectItems = tasks.find((s) => s.section === "Projects")?.items || [];
const totalProjects = projectItems.length;

/* ── AUTH SYSTEM ──────────────────────────────────────────────────────── */
const adminUser = {
  username: "admin",
  password: "admin",
  displayName: "Admin",
  city: "Le Havre",
  status: "Available",
  role: "Admin",
};

function loadLocalUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
}

function saveLocalUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

let seedUsers = [];
async function loadSeedUsers() {
  try {
    const res = await fetch("users.json");
    if (res.ok) seedUsers = await res.json();
  } catch {
    /* ignore */
  }
}

function normalizeUser(u) {
  return {
    username: u.username || "",
    password: u.password || "",
    displayName: u.displayName || u.username || "",
    city: u.city || "Unknown",
    status: u.status || "Available",
    role: u.role || "Cadet",
  };
}

function authenticate(uname, pass) {
  if (uname === adminUser.username && pass === adminUser.password)
    return normalizeUser(adminUser);
  const all = [...seedUsers, ...loadLocalUsers()];
  const found = all.find(
    (u) => u.username.toLowerCase() === uname.toLowerCase() && u.password === pass
  );
  return found ? normalizeUser(found) : null;
}

function registerUser(display, city, uname, pass) {
  const all = [...seedUsers, ...loadLocalUsers()];
  if (
    uname.toLowerCase() === adminUser.username.toLowerCase() ||
    all.some((u) => u.username.toLowerCase() === uname.toLowerCase())
  )
    return { ok: false, msg: "Username already taken." };
  const newU = normalizeUser({
    username: uname,
    password: pass,
    displayName: display,
    city,
    status: "Available",
    role: "Cadet",
  });
  const locals = loadLocalUsers();
  locals.push(newU);
  saveLocalUsers(locals);
  return { ok: true, user: newU };
}

/* ── PROGRESS PERSISTENCE ────────────────────────────────────────────── */
function storageKey(user) {
  return PROGRESS_PREFIX + user.username.toLowerCase();
}

function loadProgress(user) {
  try {
    return JSON.parse(localStorage.getItem(storageKey(user))) || {};
  } catch {
    return {};
  }
}

function saveProgress(user, progress) {
  localStorage.setItem(storageKey(user), JSON.stringify(progress));
}

/* ── ACTIVITY / STREAK TRACKING ──────────────────────────────────────── */
function activityKey(user) {
  return ACTIVITY_PREFIX + user.username.toLowerCase();
}

function timeKey(user) {
  return TIME_PREFIX + user.username.toLowerCase();
}

function loadActivity(user) {
  try {
    return JSON.parse(localStorage.getItem(activityKey(user))) || {};
  } catch {
    return {};
  }
}

function saveActivity(user, data) {
  localStorage.setItem(activityKey(user), JSON.stringify(data));
}

function recordActivity(user) {
  const today = new Date().toISOString().slice(0, 10);
  const data = loadActivity(user);
  data[today] = (data[today] || 0) + 1;
  saveActivity(user, data);
}

function computeStreaks(user) {
  const data = loadActivity(user);
  const dates = Object.keys(data).sort().reverse();
  if (!dates.length) return 0;
  let streak = 0;
  let d = new Date();
  d.setHours(0, 0, 0, 0);
  for (let i = 0; i < 400; i++) {
    const key = d.toISOString().slice(0, 10);
    if (data[key]) {
      streak++;
      d.setDate(d.getDate() - 1);
    } else if (i === 0) {
      d.setDate(d.getDate() - 1); // today might not have activity yet
    } else {
      break;
    }
  }
  return streak;
}

/* Time tracking */
function loadTime(user) {
  try {
    return JSON.parse(localStorage.getItem(timeKey(user))) || { total: 0, start: null };
  } catch {
    return { total: 0, start: null };
  }
}

function saveTime(user, data) {
  localStorage.setItem(timeKey(user), JSON.stringify(data));
}

function startTimer(user) {
  const t = loadTime(user);
  if (!t.start) {
    t.start = Date.now();
    saveTime(user, t);
  }
}

function getTimeLogged(user) {
  const t = loadTime(user);
  let total = t.total || 0;
  if (t.start) total += Date.now() - t.start;
  return total;
}

function stopTimer(user) {
  const t = loadTime(user);
  if (t.start) {
    t.total = (t.total || 0) + (Date.now() - t.start);
    t.start = null;
    saveTime(user, t);
  }
}

/* ── LEVEL SYSTEM ────────────────────────────────────────────────────── */
function buildLevelGroups() {
  const ux = tasks.filter((s) => s.section.startsWith("UX Quest"));
  const ui = tasks.filter((s) => s.section.startsWith("UI Quest"));
  const groups = [];
  const maxLen = Math.max(ux.length, ui.length);
  for (let i = 0; i < maxLen; i++) {
    const items = [];
    if (ux[i]) items.push(...ux[i].items);
    if (ui[i]) items.push(...ui[i].items);
    groups.push(items);
  }
  return groups;
}

function computeLevelProgress(progress) {
  const groups = buildLevelGroups();
  let level = 0;
  let lastGroupDone = 0;
  let lastGroupTotal = 0;
  for (const g of groups) {
    const done = g.filter((it) => progress[it.id]).length;
    if (done === g.length && g.length > 0) {
      level++;
      lastGroupDone = 0;
      lastGroupTotal = 0;
    } else {
      lastGroupDone = done;
      lastGroupTotal = g.length;
      break;
    }
  }
  const pct = lastGroupTotal > 0 ? Math.round((lastGroupDone / lastGroupTotal) * 100) : 0;
  return { level, pct, done: lastGroupDone, total: lastGroupTotal };
}

/* ── APP STATE ───────────────────────────────────────────────────────── */
let currentUser = null;
let progress = {};
let searchTerm = "";

/* ── DOM REFS ────────────────────────────────────────────────────────── */
const $ = (id) => document.getElementById(id);

/* ── RENDER: PROFILE / STATS ─────────────────────────────────────────── */
function initials(name) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function updateProfileUI() {
  if (!currentUser) return;
  const ini = initials(currentUser.displayName);
  $("profile-avatar").textContent = ini;
  $("topbar-avatar").textContent = ini;
  $("welcome").textContent = currentUser.displayName;
  $("topbar-login").textContent = currentUser.username;
  $("profile-city").textContent = currentUser.city;
  $("profile-status").textContent = currentUser.status;
  $("profile-role").textContent = currentUser.role;
}

function updateStatsUI() {
  const done = allItems.filter((it) => progress[it.id]).length;
  const projDone = projectItems.filter((it) => progress[it.id]).length;

  $("stat-done").textContent = done;
  $("stat-remaining").textContent = totalTasks - done;
  $("stat-projects").textContent = `${projDone}/${totalProjects}`;
  $("stat-streak").textContent = computeStreaks(currentUser);
  const hours = Math.round(getTimeLogged(currentUser) / 3600000);
  $("stat-time").textContent = `${hours}h`;
}

function updateProgressUI() {
  const { level, pct } = computeLevelProgress(progress);
  $("level-number").textContent = String(level + 1).padStart(2, "0");
  $("level-percent").textContent = `${pct}% of level ${level + 1}`;
  $("progress-bar").style.width = `${pct}%`;
  const totalDone = allItems.filter((it) => progress[it.id]).length;
  const totalPct = Math.round((totalDone / totalTasks) * 100);
  $("progress-meta").textContent = `${totalPct}% overall completion · ${totalDone}/${totalTasks} tasks`;
}

/* ── RENDER: SECTION PROGRESS BARS ───────────────────────────────────── */
function renderSectionProgress() {
  const el = $("section-progress");
  if (!el) return;
  el.innerHTML = tasks
    .map((sec) => {
      const done = sec.items.filter((it) => progress[it.id]).length;
      const total = sec.items.length;
      const pct = total > 0 ? Math.round((done / total) * 100) : 0;
      return `
      <div class="section-row">
        <span class="section-label">${sec.section.replace(/ – .+/, "")}</span>
        <div class="section-bar-track">
          <div class="section-bar-fill" style="width:${pct}%"></div>
        </div>
        <span class="section-count">${done}/${total}</span>
      </div>`;
    })
    .join("");
}

/* ── RENDER: PROJECT BROWSER (42 project-card style) ─────────────────── */
function renderProjectBrowser() {
  const el = $("project-browser-grid");
  if (!el) return;

  const projectSections = tasks.filter(
    (s) => s.section === "Projects" || s.section.startsWith("UX Quest") || s.section.startsWith("UI Quest")
  );

  // Build project cards from Projects section + show active quests
  const cards = [];

  // Show actual projects first
  const projSec = tasks.find((s) => s.section === "Projects");
  if (projSec) {
    projSec.items.forEach((it) => {
      const done = !!progress[it.id];
      let status, statusClass;
      if (done) {
        status = "Finished";
        statusClass = "finished";
      } else {
        // Check if there's any activity
        const hasActivity = loadActivity(currentUser);
        status = "Not started";
        statusClass = "not-started";
        // If the user has done at least 1 task, mark project as in-progress
        const totalDone = allItems.filter((i) => progress[i.id]).length;
        if (totalDone > 0 && !done) {
          status = "In progress";
          statusClass = "in-progress";
        }
      }
      cards.push(`
        <a class="project-card" href="${it.link}" target="_blank">
          <span class="pc-track">Project</span>
          <span class="pc-name">${it.label}</span>
          <span class="pc-status ${statusClass}">
            <span class="pc-status-dot"></span>
            ${status}
          </span>
        </a>`);
    });
  }

  if (cards.length === 0) {
    el.innerHTML = '<div class="empty-state">No projects available yet.</div>';
  } else {
    el.innerHTML = cards.join("");
  }
}

/* ── RENDER: CALENDAR (42 heatmap style) ─────────────────────────────── */
function renderCalendar() {
  const grid = $("calendar-grid");
  const monthEl = $("calendar-month");
  if (!grid) return;

  const now = new Date();
  const activity = loadActivity(currentUser);

  // Show last 12 weeks
  const weeks = 12;
  const totalDays = weeks * 7;
  const endDate = new Date(now);
  endDate.setHours(0, 0, 0, 0);
  // Adjust to end on current day
  const startDate = new Date(endDate);
  startDate.setDate(startDate.getDate() - totalDays + 1);
  // Adjust to start on Monday
  const startDay = startDate.getDay();
  const mondayOffset = startDay === 0 ? -6 : 1 - startDay;
  startDate.setDate(startDate.getDate() + mondayOffset);

  const todayStr = now.toISOString().slice(0, 10);

  // Show month range
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  if (monthEl) {
    monthEl.textContent = `${months[startDate.getMonth()]} ${startDate.getFullYear()} — ${months[now.getMonth()]} ${now.getFullYear()}`;
  }

  let html = "";
  const d = new Date(startDate);
  while (d <= endDate) {
    const key = d.toISOString().slice(0, 10);
    const count = activity[key] || 0;
    const isToday = key === todayStr;
    const isFuture = d > now;

    let lvl = "";
    if (count >= 5) lvl = "lvl-4";
    else if (count >= 3) lvl = "lvl-3";
    else if (count >= 2) lvl = "lvl-2";
    else if (count >= 1) lvl = "lvl-1";

    const classes = ["cal-cell"];
    if (isToday) classes.push("today");
    if (isFuture) classes.push("empty");
    else if (lvl) classes.push(lvl);

    const dayNum = d.getDate();
    const tooltip = count > 0
      ? `${count} task${count > 1 ? "s" : ""} on ${key}`
      : key;

    html += `<div class="${classes.join(" ")}" title="${tooltip}">${dayNum}</div>`;
    d.setDate(d.getDate() + 1);
  }

  grid.innerHTML = html;
}

/* ── RENDER: TASK LIST ───────────────────────────────────────────────── */
function renderTasks() {
  const el = $("task-list");
  if (!el) return;

  const filteredTasks = searchTerm
    ? tasks
        .map((sec) => ({
          ...sec,
          items: sec.items.filter((it) =>
            it.label.toLowerCase().includes(searchTerm.toLowerCase())
          ),
        }))
        .filter((sec) => sec.items.length > 0)
    : tasks;

  el.innerHTML = filteredTasks
    .map((sec) => {
      const done = sec.items.filter((it) => progress[it.id]).length;
      const total = sec.items.length;
      return `
      <div class="quest-group">
        <div class="quest-group-title">
          ${sec.section}
          <span class="quest-group-count">${done}/${total}</span>
        </div>
        <div class="quest-items">
          ${sec.items
            .map(
              (it) => `
            <div class="task-item">
              <input type="checkbox" id="cb-${it.id}" ${progress[it.id] ? "checked" : ""} data-id="${it.id}" />
              <label for="cb-${it.id}" class="${progress[it.id] ? "done" : ""}">${it.label}</label>
              <a class="task-link" href="${it.link}" target="_blank">Open &rarr;</a>
            </div>`
            )
            .join("")}
        </div>
      </div>`;
    })
    .join("");

  // Checkbox listeners
  el.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
    cb.addEventListener("change", () => {
      const id = cb.dataset.id;
      if (cb.checked) {
        progress[id] = true;
        recordActivity(currentUser);
      } else {
        delete progress[id];
      }
      saveProgress(currentUser, progress);
      refreshUI();
    });
  });
}

/* ── RENDER: ALL ─────────────────────────────────────────────────────── */
function refreshUI() {
  updateProfileUI();
  updateStatsUI();
  updateProgressUI();
  renderSectionProgress();
  renderProjectBrowser();
  renderCalendar();
  renderTasks();
}

/* ── SHOW / HIDE SCREENS ─────────────────────────────────────────────── */
function showDashboard() {
  $("auth-screen").classList.add("hidden");
  $("dashboard").classList.remove("hidden");
  refreshUI();
  startTimer(currentUser);
}

function showLogin() {
  $("auth-screen").classList.remove("hidden");
  $("dashboard").classList.add("hidden");
  if (currentUser) stopTimer(currentUser);
}

/* ── EXPORT ──────────────────────────────────────────────────────────── */
function exportProgress() {
  const data = {
    user: currentUser.username,
    displayName: currentUser.displayName,
    exportDate: new Date().toISOString(),
    progress: progress,
    activity: loadActivity(currentUser),
    time: loadTime(currentUser),
    stats: {
      done: allItems.filter((it) => progress[it.id]).length,
      total: totalTasks,
      streak: computeStreaks(currentUser),
    },
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `uxui-progress-${currentUser.username}-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

/* ── FIGMA ANALYZER ──────────────────────────────────────────────────── */
async function analyzeFigmaFile(file) {
  const result = $("figma-result");
  if (!result) return;
  result.innerHTML = '<p style="color: var(--ink-3)">Analyzing…</p>';

  try {
    const zip = await JSZip.loadAsync(file);
    const canvasFile = Object.keys(zip.files).find(
      (f) => f.endsWith("canvas.json") || f === "canvas.json"
    );

    if (!canvasFile) {
      result.innerHTML = '<p style="color:var(--danger)">No canvas.json found in .fig file.</p>';
      return;
    }

    const raw = await zip.files[canvasFile].async("string");
    const data = JSON.parse(raw);

    // Extract colors
    const colors = new Set();
    const fonts = new Set();
    const sizes = new Set();

    function walk(node) {
      if (!node) return;
      if (node.fills) {
        node.fills.forEach((f) => {
          if (f.color) {
            const { r, g, b } = f.color;
            const hex = `#${[r, g, b]
              .map((c) => Math.round(c * 255).toString(16).padStart(2, "0"))
              .join("")}`;
            colors.add(hex);
          }
        });
      }
      if (node.style) {
        if (node.style.fontFamily) fonts.add(node.style.fontFamily);
        if (node.style.fontSize) sizes.add(node.style.fontSize);
      }
      if (node.children) node.children.forEach(walk);
    }

    walk(data);

    let html = '<div style="margin-top:0.75rem">';
    html += `<p><strong>Colors found:</strong> ${colors.size}</p>`;
    html += '<div style="display:flex;gap:6px;flex-wrap:wrap;margin:8px 0">';
    [...colors].slice(0, 20).forEach((c) => {
      html += `<span style="width:28px;height:28px;border-radius:6px;background:${c};border:1px solid var(--border)" title="${c}"></span>`;
    });
    html += "</div>";
    if (fonts.size) {
      html += `<p><strong>Fonts:</strong> ${[...fonts].join(", ")}</p>`;
    }
    if (sizes.size) {
      html += `<p><strong>Font sizes:</strong> ${[...sizes].sort((a, b) => a - b).join(", ")}px</p>`;
    }
    html += "</div>";
    result.innerHTML = html;
  } catch (e) {
    result.innerHTML = `<p style="color:var(--danger)">Error: ${e.message}</p>`;
  }
}

/* ── AUTO-LOGIN ──────────────────────────────────────────────────────── */
function autoLogin() {
  try {
    const saved = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));
    if (saved && saved.username) {
      currentUser = normalizeUser(saved);
      progress = loadProgress(currentUser);
      showDashboard();
      return true;
    }
  } catch {
    /* ignore */
  }
  return false;
}

/* ── INIT ────────────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", async () => {
  await loadSeedUsers();

  // Login form
  $("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const uname = $("username").value.trim();
    const pass = $("password").value;
    const user = authenticate(uname, pass);
    if (user) {
      currentUser = user;
      progress = loadProgress(user);
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
      showDashboard();
      $("login-error").textContent = "";
    } else {
      $("login-error").textContent = "Invalid username or password.";
    }
  });

  // Register form
  $("register-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const display = $("register-display").value.trim();
    const city = $("register-city").value.trim();
    const uname = $("register-username").value.trim();
    const pass = $("register-password").value;
    if (!display || !city || !uname || !pass) {
      $("register-error").textContent = "All fields are required.";
      return;
    }
    const res = registerUser(display, city, uname, pass);
    if (res.ok) {
      currentUser = res.user;
      progress = loadProgress(res.user);
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(res.user));
      showDashboard();
      $("register-error").textContent = "";
    } else {
      $("register-error").textContent = res.msg;
    }
  });

  // Logout
  $("logout-btn").addEventListener("click", () => {
    if (currentUser) stopTimer(currentUser);
    currentUser = null;
    progress = {};
    localStorage.removeItem(CURRENT_USER_KEY);
    showLogin();
  });

  // Reset
  $("reset-btn").addEventListener("click", () => {
    if (!currentUser) return;
    if (!confirm("Reset all progress? This cannot be undone.")) return;
    progress = {};
    saveProgress(currentUser, progress);
    localStorage.removeItem(activityKey(currentUser));
    localStorage.removeItem(timeKey(currentUser));
    refreshUI();
  });

  // Export
  $("export-btn").addEventListener("click", exportProgress);

  // Figma
  const figmaInput = $("figma-file");
  if (figmaInput) {
    figmaInput.addEventListener("change", (e) => {
      if (e.target.files[0]) analyzeFigmaFile(e.target.files[0]);
    });
  }

  // Search
  const searchInput = $("task-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchTerm = e.target.value.trim();
      renderTasks();
    });
  }

  // Tab visibility – pause/resume timer
  document.addEventListener("visibilitychange", () => {
    if (!currentUser) return;
    if (document.hidden) {
      stopTimer(currentUser);
    } else {
      startTimer(currentUser);
    }
  });

  // Auto-login
  autoLogin();
});
