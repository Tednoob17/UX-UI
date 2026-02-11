const loginCard = document.getElementById("login-card");
const dashboard = document.getElementById("dashboard");
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");
const registerForm = document.getElementById("register-form");
const registerError = document.getElementById("register-error");
const welcome = document.getElementById("welcome");
const taskList = document.getElementById("task-list");
const progressBar = document.getElementById("progress-bar");
const progressMeta = document.getElementById("progress-meta");
const resetBtn = document.getElementById("reset-btn");
const logoutBtn = document.getElementById("logout-btn");
const exportBtn = document.getElementById("export-btn");
const statDone = document.getElementById("stat-done");
const statRemaining = document.getElementById("stat-remaining");
const statProjects = document.getElementById("stat-projects");
const statStreak = document.getElementById("stat-streak");
const statTime = document.getElementById("stat-time");
const sectionProgress = document.getElementById("section-progress");
const figmaFileInput = document.getElementById("figma-file");
const figmaResult = document.getElementById("figma-result");
const projectBrowserGrid = document.getElementById("project-browser-grid");
const profileAvatar = document.getElementById("profile-avatar");
const profileCity = document.getElementById("profile-city");
const profileStatus = document.getElementById("profile-status");
const profileRole = document.getElementById("profile-role");
const levelNumber = document.getElementById("level-number");
const levelPercent = document.getElementById("level-percent");
const calendarGrid = document.getElementById("calendar-grid");
const calendarMonth = document.getElementById("calendar-month");

const tasks = [
  {
    section: "UX Quest 1 - Athele, keep hydrated",
    items: [
      {
        id: "ux1-1",
        label: "User interviews",
        link: "subjects/ux/athele-keep-hydrated/user-interviews/README.md",
      },
      {
        id: "ux1-2",
        label: "Analytics",
        link: "subjects/ux/athele-keep-hydrated/analytics/README.md",
      },
      {
        id: "ux1-3",
        label: "Personas",
        link: "subjects/ux/athele-keep-hydrated/personas/README.md",
      },
      {
        id: "ux1-4",
        label: "User journey",
        link: "subjects/ux/athele-keep-hydrated/user-journey/README.md",
      },
      {
        id: "ux1-5",
        label: "Problem statement",
        link: "subjects/ux/athele-keep-hydrated/problem-statement/README.md",
      },
      {
        id: "ux1-6",
        label: "Ideation",
        link: "subjects/ux/athele-keep-hydrated/ideation/README.md",
      },
      {
        id: "ux1-7",
        label: "Prototyping",
        link: "subjects/ux/athele-keep-hydrated/prototyping/README.md",
      },
    ],
  },
  {
    section: "UX Quest 2 - Going on holidays with friends",
    items: [
      {
        id: "ux2-1",
        label: "Interview guide",
        link: "subjects/ux/going-on-holidays-with-friends/interview-guide/README.md",
      },
      {
        id: "ux2-2",
        label: "Run interviews",
        link: "subjects/ux/going-on-holidays-with-friends/run-interviews/README.md",
      },
      {
        id: "ux2-3",
        label: "Affinity diagram",
        link: "subjects/ux/going-on-holidays-with-friends/affinity-diagram/README.md",
      },
      {
        id: "ux2-4",
        label: "Problem statement",
        link: "subjects/ux/going-on-holidays-with-friends/problem-statement/README.md",
      },
      {
        id: "ux2-5",
        label: "Ideation",
        link: "subjects/ux/going-on-holidays-with-friends/ideation/README.md",
      },
      {
        id: "ux2-6",
        label: "User flow",
        link: "subjects/ux/going-on-holidays-with-friends/user-flow/README.md",
      },
      {
        id: "ux2-7",
        label: "Prototyping",
        link: "subjects/ux/going-on-holidays-with-friends/prototyping/README.md",
      },
    ],
  },
  {
    section: "UX Quest 3 - Lets fight harassment",
    items: [
      {
        id: "ux3-1",
        label: "Competitive analysis",
        link: "subjects/ux/lets-fight-harassment/competitive-analyss/README.md",
      },
      {
        id: "ux3-2",
        label: "Surveys",
        link: "subjects/ux/lets-fight-harassment/surveys/README.md",
      },
      {
        id: "ux3-3",
        label: "Broadcast strategy",
        link: "subjects/ux/lets-fight-harassment/broadcast-stategy/README.md",
      },
      {
        id: "ux3-4",
        label: "Interviews",
        link: "subjects/ux/lets-fight-harassment/interviews/README.md",
      },
      {
        id: "ux3-5",
        label: "Personas",
        link: "subjects/ux/lets-fight-harassment/personas/README.md",
      },
      {
        id: "ux3-6",
        label: "User journey",
        link: "subjects/ux/lets-fight-harassment/user-journey/README.md",
      },
      {
        id: "ux3-7",
        label: "Problem statement",
        link: "subjects/ux/lets-fight-harassment/problem-statement/README.md",
      },
    ],
  },
  {
    section: "UX Quest 4 - The Olympics",
    items: [
      {
        id: "ux4-1",
        label: "Ideation A",
        link: "subjects/ux/the-olympics/ideation-a/README.md",
      },
      {
        id: "ux4-2",
        label: "Ideation B",
        link: "subjects/ux/the-olympics/ideation-b/README.md",
      },
      {
        id: "ux4-3",
        label: "Ideation C",
        link: "subjects/ux/the-olympics/ideation-c/README.md",
      },
      {
        id: "ux4-4",
        label: "User flow",
        link: "subjects/ux/the-olympics/user-flow/README.md",
      },
      {
        id: "ux4-5",
        label: "Prototyping",
        link: "subjects/ux/the-olympics/prototyping/README.md",
      },
      {
        id: "ux4-6",
        label: "Animation",
        link: "subjects/ux/the-olympics/animation/README.md",
      },
      {
        id: "ux4-7",
        label: "Test",
        link: "subjects/ux/the-olympics/test/README.md",
      },
    ],
  },
  {
    section: "UX Quest 5 - Music on",
    items: [
      {
        id: "ux5-1",
        label: "Heuristics",
        link: "subjects/ux/music-on/heuristics/README.md",
      },
      {
        id: "ux5-2",
        label: "Site map",
        link: "subjects/ux/music-on/site-map/README.md",
      },
      {
        id: "ux5-3",
        label: "JTBD",
        link: "subjects/ux/music-on/jtbd/README.md",
      },
      {
        id: "ux5-4",
        label: "Card sorting",
        link: "subjects/ux/music-on/card-sorting/README.md",
      },
      {
        id: "ux5-5",
        label: "Wireframes",
        link: "subjects/ux/music-on/wireframes/README.md",
      },
      {
        id: "ux5-6",
        label: "Test protocol",
        link: "subjects/ux/music-on/test-protocol/README.md",
      },
      {
        id: "ux5-7",
        label: "Run 5 tests",
        link: "subjects/ux/music-on/run-5-tests/README.md",
      },
    ],
  },
  {
    section: "UX Quest 6 - Sunday night movie",
    items: [
      {
        id: "ux6-1",
        label: "User flow",
        link: "subjects/ux/sunday-night-movie/user-flow/README.md",
      },
      {
        id: "ux6-2",
        label: "Wireframes",
        link: "subjects/ux/sunday-night-movie/wireframes/README.md",
      },
      {
        id: "ux6-3",
        label: "Wireframes animation",
        link: "subjects/ux/sunday-night-movie/wireframes-animation/README.md",
      },
      {
        id: "ux6-4",
        label: "Test feature 1",
        link: "subjects/ux/sunday-night-movie/test-feature-1/README.md",
      },
      {
        id: "ux6-5",
        label: "Test feature 2",
        link: "subjects/ux/sunday-night-movie/test-feature-2/README.md",
      },
      {
        id: "ux6-6",
        label: "Test feature 3",
        link: "subjects/ux/sunday-night-movie/test-feature-3/README.md",
      },
      {
        id: "ux6-7",
        label: "Iteration",
        link: "subjects/ux/sunday-night-movie/iteration/README.md",
      },
    ],
  },
  {
    section: "UX Quest 7 - Seamstress",
    items: [
      {
        id: "ux7-1",
        label: "UX strategy",
        link: "subjects/ux/seamstress/ux-strategy/README.md",
      },
      {
        id: "ux7-2",
        label: "Empathy",
        link: "subjects/ux/seamstress/empathy/README.md",
      },
      {
        id: "ux7-3",
        label: "Define",
        link: "subjects/ux/seamstress/define/README.md",
      },
      {
        id: "ux7-4",
        label: "Problem statement",
        link: "subjects/ux/seamstress/problem-statement/README.md",
      },
      {
        id: "ux7-5",
        label: "Ideation",
        link: "subjects/ux/seamstress/ideation/README.md",
      },
      {
        id: "ux7-6",
        label: "Prototype",
        link: "subjects/ux/seamstress/prototype/README.md",
      },
      {
        id: "ux7-7",
        label: "Test",
        link: "subjects/ux/seamstress/test/README.md",
      },
    ],
  },
  {
    section: "UI Quest 1 - Colors and moodboard",
    items: [
      {
        id: "ui1-1",
        label: "Find the colors",
        link: "subjects/ui/colors-and-moodboard/find-the-colors/README.md",
      },
      {
        id: "ui1-2",
        label: "Color codes",
        link: "subjects/ui/colors-and-moodboard/color-codes/README.md",
      },
      {
        id: "ui1-3",
        label: "Color combinations",
        link: "subjects/ui/colors-and-moodboard/color-combinations/README.md",
      },
      {
        id: "ui1-4",
        label: "Moodboard",
        link: "subjects/ui/colors-and-moodboard/moodboard/README.md",
      },
      {
        id: "ui1-5",
        label: "Typography",
        link: "subjects/ui/colors-and-moodboard/typography/README.md",
      },
      {
        id: "ui1-6",
        label: "Typography moodboard",
        link: "subjects/ui/colors-and-moodboard/typography-moodboard/README.md",
      },
      {
        id: "ui1-7",
        label: "UI challenge timer",
        link: "subjects/ui/colors-and-moodboard/ui-challenge-timer/README.md",
      },
      {
        id: "ui1-8",
        label: "UI challenge watches",
        link: "subjects/ui/colors-and-moodboard/ui-challenge-watches/README.md",
      },
      {
        id: "ui1-9",
        label: "UI challenge flight",
        link: "subjects/ui/colors-and-moodboard/ui-challenge-flight/README.md",
      },
      {
        id: "ui1-10",
        label: "UI challenge spotify",
        link: "subjects/ui/colors-and-moodboard/ui-challenge-spotify/README.md",
      },
      {
        id: "ui1-11",
        label: "UI challenge bitcoin dashboard",
        link: "subjects/ui/colors-and-moodboard/ui-challenge-bitcoin-dashboard/README.md",
      },
    ],
  },
  {
    section: "UI Quest 2 - Atomic design",
    items: [
      {
        id: "ui2-1",
        label: "Browsing",
        link: "subjects/ui/atomic-design/browsing/README.md",
      },
      {
        id: "ui2-2",
        label: "Material design",
        link: "subjects/ui/atomic-design/material-design/README.md",
      },
      {
        id: "ui2-3",
        label: "Design system library",
        link: "subjects/ui/atomic-design/design-system-library/README.md",
      },
      {
        id: "ui2-4",
        label: "Library for climbing addicts",
        link: "subjects/ui/atomic-design/library-for-climbing-addicts/README.md",
      },
      {
        id: "ui2-5",
        label: "Library for a dating app",
        link: "subjects/ui/atomic-design/library-for-a-dating-app/README.md",
      },
    ],
  },
  {
    section: "UI Quest 3 - Rules",
    items: [
      {
        id: "ui3-1",
        label: "Grids",
        link: "subjects/ui/rules/grids/README.md",
      },
      {
        id: "ui3-2",
        label: "Multi state",
        link: "subjects/ui/rules/multi-state/README.md",
      },
      {
        id: "ui3-3",
        label: "Accessibility (website)",
        link: "subjects/ui/rules/accessbility-website/README.md",
      },
      {
        id: "ui3-4",
        label: "Accessibility (app)",
        link: "subjects/ui/rules/accessbility-app/README.md",
      },
      {
        id: "ui3-5",
        label: "Breadcrumbs",
        link: "subjects/ui/rules/breadcrumbs/README.md",
      },
      {
        id: "ui3-6",
        label: "Toggle buttons",
        link: "subjects/ui/rules/toggle-buttons/README.md",
      },
      {
        id: "ui3-7",
        label: "Radio buttons",
        link: "subjects/ui/rules/radio-buttons/README.md",
      },
      {
        id: "ui3-8",
        label: "Calendars",
        link: "subjects/ui/rules/calendars/README.md",
      },
      {
        id: "ui3-9",
        label: "Time pickers",
        link: "subjects/ui/rules/time-pickers/README.md",
      },
      {
        id: "ui3-10",
        label: "Micro interactions",
        link: "subjects/ui/rules/micro-interactions/README.md",
      },
      {
        id: "ui3-11",
        label: "Consistency",
        link: "subjects/ui/rules/consistency/README.md",
      },
    ],
  },
  {
    section: "UI Quest 4 - Building an interface",
    items: [
      {
        id: "ui4-1",
        label: "Styleguide",
        link: "subjects/ui/building-an-interface/styleguide/README.md",
      },
      {
        id: "ui4-2",
        label: "Design system library",
        link: "subjects/ui/building-an-interface/design-system-library/README.md",
      },
      {
        id: "ui4-3",
        label: "Design screens",
        link: "subjects/ui/building-an-interface/design-screens/README.md",
      },
      {
        id: "ui4-4",
        label: "Animation",
        link: "subjects/ui/building-an-interface/animation/README.md",
      },
      {
        id: "ui4-5",
        label: "Desirability testing",
        link: "subjects/ui/building-an-interface/desirability-testing/README.md",
      },
    ],
  },
  {
    section: "UI Quest 5 - Heuristics",
    items: [
      {
        id: "ui5-1",
        label: "Audit",
        link: "subjects/ui/heuristics/audit/README.md",
      },
      {
        id: "ui5-2",
        label: "Recommendations",
        link: "subjects/ui/heuristics/recommendations/README.md",
      },
    ],
  },
  {
    section: "Projects",
    items: [
      {
        id: "proj1-ux",
        label: "Project 1 - Get a room (UX)",
        link: "subjects/project-get-a-room/ux/README.md",
      },
      {
        id: "proj1-ui",
        label: "Project 1 - Get a room (UI)",
        link: "subjects/project-get-a-room/ui/README.md",
      },
      {
        id: "proj2-ux",
        label: "Project 2 - Lets do some sports (UX)",
        link: "subjects/project-lets-do-some-sports/ux/README.md",
      },
      {
        id: "proj2-ui",
        label: "Project 2 - Lets do some sports (UI)",
        link: "subjects/project-lets-do-some-sports/ui/README.md",
      },
      {
        id: "proj3-ux",
        label: "Project 3 - Lets fair trade (UX)",
        link: "subjects/project-lets-fair-trade/ux/README.md",
      },
      {
        id: "proj3-ui",
        label: "Project 3 - Lets fair trade (UI)",
        link: "subjects/project-lets-fair-trade/ui/README.md",
      },
      {
        id: "proj4-ux",
        label: "Project 4 - A table (UX)",
        link: "subjects/project-a-table/ux/README.md",
      },
      {
        id: "proj4-ui",
        label: "Project 4 - A table (UI)",
        link: "subjects/project-a-table/ui/README.md",
      },
    ],
  },
];

let currentUser = null;
let progress = { completed: {}, activityDates: [], timeBySection: {} };
const adminUser = {
  username: "admin",
  password: "60d8d9e58413edd583caaf8091d364d8425723bb0088f1385456110aa9600cc5",
  displayName: "Admin",
  city: "Le Havre",
  status: "Available",
  role: "Cadet",
};

const localUsersKey = "uxui-local-users";

const storageKey = (username) => `uxui-progress-${username}`;

const saveCurrentUser = (username) => {
  localStorage.setItem("uxui-user", username);
};

const clearCurrentUser = () => {
  localStorage.removeItem("uxui-user");
};

const loadLocalUsers = () => {
  const raw = localStorage.getItem(localUsersKey);
  if (!raw) return [];
  try {
    const data = JSON.parse(raw);
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
};

const saveLocalUsers = (users) => {
  localStorage.setItem(localUsersKey, JSON.stringify(users));
};

const loadAdminUser = async () => adminUser;

const loadProgress = (username) => {
  const raw = localStorage.getItem(storageKey(username));
  if (!raw) return { completed: {}, activityDates: [], timeBySection: {} };
  try {
    const parsed = JSON.parse(raw);
    return parsed && parsed.completed
      ? {
          completed: parsed.completed,
          activityDates: parsed.activityDates || [],
          timeBySection: parsed.timeBySection || {},
        }
      : { completed: {}, activityDates: [], timeBySection: {} };
  } catch {
    return { completed: {}, activityDates: [], timeBySection: {} };
  }
};

const saveProgress = () => {
  if (!currentUser) return;
  localStorage.setItem(storageKey(currentUser.username), JSON.stringify(progress));
};

const buildProjectId = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const renderProjectBrowser = () => {
  if (!projectBrowserGrid) return;
  projectBrowserGrid.innerHTML = "";

  const uxSections = tasks.filter((section) =>
    section.section.startsWith("UX Quest")
  );
  const uiSections = tasks.filter((section) =>
    section.section.startsWith("UI Quest")
  );
  const projectSection = tasks.find((section) => section.section === "Projects");

  const groups = [
    { title: "UX quests", sections: uxSections, type: "quest" },
    { title: "UI quests", sections: uiSections, type: "quest" },
  ];

  if (projectSection) {
    groups.push({ title: "Projects", sections: projectSection.items, type: "project" });
  }

  groups.forEach((group) => {
    const column = document.createElement("div");
    column.className = "project-column";

    const heading = document.createElement("h4");
    heading.textContent = group.title;
    column.appendChild(heading);

    group.sections.forEach((entry) => {
      const label = group.type === "quest" ? entry.section : entry.label;
      const count = group.type === "quest" ? `${entry.items.length} steps` : "Capstone";
      const id = buildProjectId(label);

      const card = document.createElement("div");
      card.className = "quest-card";

      const link = document.createElement("a");
      link.href = `project.html?project=${encodeURIComponent(id)}`;
      link.textContent = label;

      const meta = document.createElement("span");
      meta.className = "quest-meta";
      meta.textContent = count;

      card.appendChild(link);
      card.appendChild(meta);
      column.appendChild(card);
    });

    projectBrowserGrid.appendChild(column);
  });
};

const getInitials = (name) => {
  if (!name) return "UX";
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((part) => part[0].toUpperCase()).join("");
};

const updateProfileUI = () => {
  if (!currentUser) return;
  if (profileAvatar) {
    profileAvatar.textContent = getInitials(currentUser.displayName);
  }
  if (profileCity) {
    profileCity.textContent = currentUser.city || "Le Havre";
  }
  if (profileStatus) {
    profileStatus.textContent = currentUser.status || "Available";
  }
  if (profileRole) {
    profileRole.textContent = currentUser.role || "Cadet";
  }
};

const buildLevelGroups = () => {
  const levels = [];
  tasks.forEach((section) => {
    const match = section.section.match(/^(UX|UI) Quest (\d+)/);
    if (!match) return;
    const index = Number(match[2]) - 1;
    if (!levels[index]) levels[index] = [];
    levels[index].push(section);
  });
  return levels.filter(Boolean);
};

const computeLevelProgress = () => {
  const levels = buildLevelGroups();
  let currentLevel = 1;
  let levelDone = 0;
  let levelTotal = 0;
  let levelPercentValue = 0;

  levels.forEach((sections, index) => {
    if (levelTotal && levelDone < levelTotal) return;
    const total = sections.reduce((sum, section) => sum + section.items.length, 0);
    const done = sections.reduce(
      (sum, section) =>
        sum + section.items.filter((item) => progress.completed[item.id]).length,
      0
    );
    if (total === 0) return;
    currentLevel = index + 1;
    levelDone = done;
    levelTotal = total;
    levelPercentValue = total === 0 ? 0 : Math.round((done / total) * 100);
  });

  if (levelTotal === 0) {
    return { level: 1, percent: 0, done: 0, total: 0 };
  }

  return {
    level: currentLevel,
    percent: levelPercentValue,
    done: levelDone,
    total: levelTotal,
  };
};

const renderCalendar = () => {
  if (!calendarGrid || !calendarMonth) return;
  calendarGrid.innerHTML = "";

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  calendarMonth.textContent = today.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  const firstDay = new Date(year, month, 1);
  const startIndex = (firstDay.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();

  const totalCells = 42;
  for (let i = 0; i < totalCells; i += 1) {
    const cell = document.createElement("div");
    cell.className = "calendar-day";
    let dayNumber = 0;
    let cellDate = null;

    if (i < startIndex) {
      dayNumber = prevMonthDays - startIndex + i + 1;
      cell.classList.add("muted");
      cellDate = new Date(year, month - 1, dayNumber);
    } else if (i >= startIndex + daysInMonth) {
      dayNumber = i - startIndex - daysInMonth + 1;
      cell.classList.add("muted");
      cellDate = new Date(year, month + 1, dayNumber);
    } else {
      dayNumber = i - startIndex + 1;
      cellDate = new Date(year, month, dayNumber);
    }

    if (cellDate.toDateString() === today.toDateString()) {
      cell.classList.add("today");
    }

    cell.textContent = dayNumber.toString();
    calendarGrid.appendChild(cell);
  }
};

const computeTotals = () => {
  const total = tasks.reduce((sum, section) => sum + section.items.length, 0);
  const done = Object.values(progress.completed).filter(Boolean).length;
  return { total, done };
};

const updateProgressUI = () => {
  const levelProgress = computeLevelProgress();
  const percent = levelProgress.percent;
  progressBar.style.width = `${percent}%`;
  progressMeta.textContent = `Level ${levelProgress.level} · ${percent}%`;

  if (levelNumber) {
    levelNumber.textContent = levelProgress.level.toString().padStart(2, "0");
  }
  if (levelPercent) {
    levelPercent.textContent = `${percent}% of level`;
  }
};

const formatMinutes = (minutes) => {
  if (!minutes) return "0h";
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (hrs && mins) return `${hrs}h ${mins}m`;
  if (hrs) return `${hrs}h`;
  return `${mins}m`;
};

const recordActivity = () => {
  const today = new Date();
  const key = today.toISOString().slice(0, 10);
  if (!progress.activityDates.includes(key)) {
    progress.activityDates.push(key);
  }
};

const computeStreaks = () => {
  const dates = Array.from(new Set(progress.activityDates)).sort();
  if (!dates.length) return { current: 0, best: 0 };

  const dateSet = new Set(dates);
  const today = new Date();
  let current = 0;
  for (let i = 0; i < 3650; i += 1) {
    const day = new Date(today);
    day.setDate(today.getDate() - i);
    const key = day.toISOString().slice(0, 10);
    if (!dateSet.has(key)) break;
    current += 1;
  }

  let best = 0;
  let run = 0;
  let lastDate = null;
  dates.forEach((dateStr) => {
    const date = new Date(`${dateStr}T00:00:00`);
    if (!lastDate) {
      run = 1;
    } else {
      const diff = (date - lastDate) / (1000 * 60 * 60 * 24);
      run = diff === 1 ? run + 1 : 1;
    }
    if (run > best) best = run;
    lastDate = date;
  });

  return { current, best };
};

const computeProjectCompletion = () => {
  const pairs = [
    ["proj1-ux", "proj1-ui"],
    ["proj2-ux", "proj2-ui"],
    ["proj3-ux", "proj3-ui"],
    ["proj4-ux", "proj4-ui"],
  ];
  return pairs.filter(
    ([uxId, uiId]) => progress.completed[uxId] && progress.completed[uiId]
  ).length;
};

const updateStatsUI = () => {
  const { total, done } = computeTotals();
  const remaining = total - done;
  const { current, best } = computeStreaks();
  const projectCount = computeProjectCompletion();
  const totalMinutes = Object.values(progress.timeBySection || {}).reduce(
    (sum, value) => sum + value,
    0
  );

  statDone.textContent = done.toString();
  statRemaining.textContent = remaining.toString();
  statProjects.textContent = `${projectCount}/4`;
  statStreak.textContent = `${current} days (best ${best})`;
  statTime.textContent = formatMinutes(totalMinutes);
};

const addTime = (sectionName, minutes) => {
  if (!progress.timeBySection) progress.timeBySection = {};
  const current = progress.timeBySection[sectionName] || 0;
  progress.timeBySection[sectionName] = current + minutes;
  recordActivity();
  saveProgress();
  renderSectionProgress();
  updateStatsUI();
};

const renderSectionProgress = () => {
  sectionProgress.innerHTML = "";
  tasks.forEach((section) => {
    const total = section.items.length;
    const done = section.items.filter((item) => progress.completed[item.id])
      .length;
    const percent = total === 0 ? 0 : Math.round((done / total) * 100);
    const timeSpent = formatMinutes(
      progress.timeBySection[section.section] || 0
    );

    const row = document.createElement("div");
    row.className = "section-row";

    const title = document.createElement("p");
    title.className = "section-title";
    title.textContent = section.section;

    const meta = document.createElement("p");
    meta.className = "section-meta";
    meta.textContent = `${done}/${total} done · ${timeSpent} logged`;

    const bar = document.createElement("div");
    bar.className = "section-bar";
    const barFill = document.createElement("div");
    barFill.className = "section-bar-fill";
    barFill.style.width = `${percent}%`;
    bar.appendChild(barFill);

    const actions = document.createElement("div");
    actions.className = "time-actions";
    [15, 30, 60].forEach((minutes) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "ghost";
      btn.textContent = `+${minutes}m`;
      btn.addEventListener("click", () => addTime(section.section, minutes));
      actions.appendChild(btn);
    });

    row.appendChild(title);
    row.appendChild(meta);
    row.appendChild(bar);
    row.appendChild(actions);
    sectionProgress.appendChild(row);
  });
};

const renderTasks = () => {
  taskList.innerHTML = "";
  tasks.forEach((section) => {
    const sectionEl = document.createElement("div");
    sectionEl.className = "task-section";

    const title = document.createElement("h3");
    title.textContent = section.section;
    sectionEl.appendChild(title);

    section.items.forEach((item) => {
      const row = document.createElement("div");
      row.className = "task-item";

      const left = document.createElement("div");
      left.className = "task-left";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = Boolean(progress.completed[item.id]);
      checkbox.addEventListener("change", () => {
        progress.completed[item.id] = checkbox.checked;
        if (checkbox.checked) {
          recordActivity();
        }
        saveProgress();
        updateProgressUI();
        updateStatsUI();
        renderSectionProgress();
      });

      const label = document.createElement("span");
      label.textContent = item.label;

      left.appendChild(checkbox);
      left.appendChild(label);

      const link = document.createElement("a");
      link.className = "task-link";
      link.href = `preview.html?file=${encodeURIComponent(item.link)}`;
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = "Preview";

      row.appendChild(left);
      row.appendChild(link);
      sectionEl.appendChild(row);
    });

    taskList.appendChild(sectionEl);
  });
};

const showDashboard = () => {
  loginCard.classList.add("hidden");
  dashboard.classList.remove("hidden");
  welcome.textContent = `Welcome, ${currentUser.displayName}`;
  progress = loadProgress(currentUser.username);
  updateProfileUI();
  renderTasks();
  renderProjectBrowser();
  renderCalendar();
  updateProgressUI();
  updateStatsUI();
  renderSectionProgress();
};

const showLogin = () => {
  dashboard.classList.add("hidden");
  loginCard.classList.remove("hidden");
};

const authenticate = async (username, password) => {
  const localUsers = loadLocalUsers();
  const localMatch = localUsers.find(
    (user) => user.username === username && user.password === password
  );
  if (localMatch) return localMatch;

  const admin = await loadAdminUser();
  if (admin && admin.username === username && admin.password === password) {
    return admin;
  }

  return null;
};

const registerUser = async (displayName, city, username, password) => {
  const localUsers = loadLocalUsers();
  const admin = await loadAdminUser();
  const taken = localUsers.some((user) => user.username === username);
  if (taken || (admin && admin.username === username)) {
    throw new Error("Username already exists.");
  }
  const newUser = {
    username,
    password,
    displayName,
    city,
    status: "Available",
    role: "Cadet",
  };
  localUsers.push(newUser);
  saveLocalUsers(localUsers);
  return newUser;
};

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  loginError.textContent = "";

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const user = await authenticate(username, password);
    if (!user) {
      loginError.textContent = "Invalid username or password.";
      return;
    }
    currentUser = user;
    saveCurrentUser(user.username);
    showDashboard();
  } catch (error) {
    loginError.textContent = error.message;
  }
});

if (registerForm) {
  registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    registerError.textContent = "";

    const displayName = document
      .getElementById("register-display")
      .value.trim();
    const city = document.getElementById("register-city").value.trim();
    const username = document
      .getElementById("register-username")
      .value.trim();
    const password = document
      .getElementById("register-password")
      .value.trim();

    if (!displayName || !city || !username || !password) {
      registerError.textContent = "All fields are required.";
      return;
    }

    try {
      const newUser = await registerUser(displayName, city, username, password);
      currentUser = newUser;
      saveCurrentUser(newUser.username);
      registerForm.reset();
      showDashboard();
    } catch (error) {
      registerError.textContent = error.message;
    }
  });
}

logoutBtn.addEventListener("click", () => {
  currentUser = null;
  clearCurrentUser();
  showLogin();
});

resetBtn.addEventListener("click", () => {
  if (!currentUser) return;
  const confirmed = window.confirm("Reset all progress for this user?");
  if (!confirmed) return;
  progress = { completed: {}, activityDates: [], timeBySection: {} };
  saveProgress();
  renderTasks();
  updateProgressUI();
  updateStatsUI();
  renderSectionProgress();
});

exportBtn.addEventListener("click", () => {
  if (!currentUser) return;
  const payload = {
    user: currentUser.username,
    exportedAt: new Date().toISOString(),
    progress,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `uxui-progress-${currentUser.username}.json`;
  link.click();
  URL.revokeObjectURL(url);
});

const analyzeFigmaFile = async (file) => {
  if (!figmaResult) return;
  figmaResult.textContent = "Analyzing file...";
  try {
    const zip = await JSZip.loadAsync(file);
    const documentFile =
      zip.file("document.json") || zip.file(/document\.json$/i)[0];
    if (!documentFile) {
      figmaResult.textContent = "No document.json found in this .fig file.";
      return;
    }
    const docText = await documentFile.async("text");
    const data = JSON.parse(docText);
    const colors = new Set();
    const fonts = new Set();
    const fontSizes = new Set();

    const toHex = (color) => {
      if (!color) return null;
      const r = Math.round((color.r || 0) * 255);
      const g = Math.round((color.g || 0) * 255);
      const b = Math.round((color.b || 0) * 255);
      return `#${[r, g, b]
        .map((value) => value.toString(16).padStart(2, "0"))
        .join("")}`;
    };

    const walk = (node) => {
      if (!node) return;
      if (node.fills && Array.isArray(node.fills)) {
        node.fills.forEach((fill) => {
          if (fill.type === "SOLID") {
            const hex = toHex(fill.color);
            if (hex) colors.add(hex.toUpperCase());
          }
        });
      }
      if (node.type === "TEXT" && node.style) {
        if (node.style.fontFamily) fonts.add(node.style.fontFamily);
        if (node.style.fontSize) fontSizes.add(node.style.fontSize);
      }
      if (node.children && Array.isArray(node.children)) {
        node.children.forEach(walk);
      }
    };

    walk(data.document);

    let score = 100;
    const colorCount = colors.size;
    const fontCount = fonts.size;
    const sizeCount = fontSizes.size;
    if (colorCount > 8) score -= (colorCount - 8) * 2;
    if (fontCount > 3) score -= (fontCount - 3) * 5;
    if (sizeCount > 10) score -= (sizeCount - 10) * 1;
    score = Math.max(0, Math.min(100, score));

    const warnings = [];
    if (colorCount > 8) {
      warnings.push("High color variety (8+). Consider a tighter palette.");
    }
    if (fontCount > 3) {
      warnings.push("Too many font families. Consider limiting to 2-3.");
    }
    if (sizeCount > 10) {
      warnings.push("Many font sizes detected. Consider a type scale.");
    }

    figmaResult.innerHTML = `
      <strong>Heuristic score:</strong> ${score}/100<br />
      <strong>Colors:</strong> ${colorCount} | <strong>Fonts:</strong> ${fontCount} |
      <strong>Font sizes:</strong> ${sizeCount}<br />
      ${warnings.length ? `<strong>Notes:</strong><br />- ${warnings.join("<br />- ")}` : "Looks consistent based on these checks."}
      <br /><em>This is a quick consistency check, not a final quality grade.</em>
    `;
  } catch (error) {
    figmaResult.textContent = `Unable to analyze file: ${error.message}`;
  }
};

if (figmaFileInput) {
  figmaFileInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;
    analyzeFigmaFile(file);
  });
}

const autoLogin = async () => {
  const savedUser = localStorage.getItem("uxui-user");
  if (!savedUser) return;
  try {
    const localUsers = loadLocalUsers();
    const localMatch = localUsers.find(
      (entry) => entry.username === savedUser
    );
    if (localMatch) {
      currentUser = localMatch;
      showDashboard();
      return;
    }

    const admin = await loadAdminUser();
    if (!admin || admin.username !== savedUser) return;
    currentUser = admin;
    showDashboard();
  } catch {
    showLogin();
  }
};

autoLogin();
