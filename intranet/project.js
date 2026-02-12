const projectCatalog = {
  "ux-quest-1-athele-keep-hydrated": {
    title: "UX Quest 1 - Athele, keep hydrated",
    track: "UX",
    subtitle: "Understand hydration routines and map the user story.",
    time: "8-12 hours",
    description:
      "Run interviews and synthesize findings to define the problem, then outline early concepts.",
  },
  "ux-quest-2-going-on-holidays-with-friends": {
    title: "UX Quest 2 - Going on holidays with friends",
    track: "UX",
    subtitle: "Design a group planning flow that reduces friction.",
    time: "8-12 hours",
    description:
      "Collect insights, map journeys, and frame the right problem before ideation.",
  },
  "ux-quest-3-lets-fight-harassment": {
    title: "UX Quest 3 - Lets fight harassment",
    track: "UX",
    subtitle: "Create a safe reporting experience with trust signals.",
    time: "8-12 hours",
    description:
      "Audit competitors, gather survey data, and define an empathetic response flow.",
  },
  "ux-quest-4-the-olympics": {
    title: "UX Quest 4 - The Olympics",
    track: "UX",
    subtitle: "Shape an engaging fan experience with clear flows.",
    time: "8-12 hours",
    description:
      "Explore multiple ideation paths and turn them into a tested flow.",
  },
  "ux-quest-5-music-on": {
    title: "UX Quest 5 - Music on",
    track: "UX",
    subtitle: "Build IA and testing plans for a music product.",
    time: "9-12 hours",
    description:
      "Define jobs to be done, create structure, and validate with quick tests.",
  },
  "ux-quest-6-sunday-night-movie": {
    title: "UX Quest 6 - Sunday night movie",
    track: "UX",
    subtitle: "Design a weekly ritual from flow to iteration.",
    time: "9-12 hours",
    description:
      "Create flows, wireframes, and iterate based on targeted testing.",
  },
  "ux-quest-7-seamstress": {
    title: "UX Quest 7 - Seamstress",
    track: "UX",
    subtitle: "Move from strategy to testable prototype.",
    time: "10-14 hours",
    description:
      "Define the problem and craft a prototype that can be tested quickly.",
  },
  "ui-quest-1-colors-and-moodboard": {
    title: "UI Quest 1 - Colors and moodboard",
    track: "UI",
    subtitle: "Set visual direction and practice quick UI challenges.",
    time: "6-10 hours",
    description:
      "Explore palettes, typography, and UI challenges to sharpen instincts.",
  },
  "ui-quest-2-atomic-design": {
    title: "UI Quest 2 - Atomic design",
    track: "UI",
    subtitle: "Build a component library and explore design systems.",
    time: "6-10 hours",
    description:
      "Create reusable components and explore consistent UI patterns.",
  },
  "ui-quest-3-rules": {
    title: "UI Quest 3 - Rules",
    track: "UI",
    subtitle: "Master grids, accessibility, and controls.",
    time: "6-10 hours",
    description:
      "Apply UI rules to improve clarity, accessibility, and structure.",
  },
  "ui-quest-4-building-an-interface": {
    title: "UI Quest 4 - Building an interface",
    track: "UI",
    subtitle: "Design a full interface with testing and motion.",
    time: "7-10 hours",
    description:
      "Deliver screens, motion, and desirability testing artifacts.",
  },
  "ui-quest-5-heuristics": {
    title: "UI Quest 5 - Heuristics",
    track: "UI",
    subtitle: "Audit and improve real interfaces.",
    time: "6-8 hours",
    description:
      "Perform audits and craft actionable recommendations.",
  },
  "project-1-get-a-room-ux": {
    title: "Project 1 - Get a room (UX)",
    track: "UX",
    subtitle: "Deliver the UX research and flow for the product.",
    time: "2-3 days",
    description:
      "Produce research, journey maps, and a tested flow ready for UI work.",
  },
  "project-1-get-a-room-ui": {
    title: "Project 1 - Get a room (UI)",
    track: "UI",
    subtitle: "Deliver the UI system and screens.",
    time: "2-3 days",
    description:
      "Define the visual system and build polished screens for handoff.",
  },
  "project-2-lets-do-some-sports-ux": {
    title: "Project 2 - Lets do some sports (UX)",
    track: "UX",
    subtitle: "Create the UX flow for a sports experience.",
    time: "2-4 days",
    description:
      "Plan research, define the experience, and validate the flow.",
  },
  "project-2-lets-do-some-sports-ui": {
    title: "Project 2 - Lets do some sports (UI)",
    track: "UI",
    subtitle: "Create the UI system and screen set.",
    time: "2-4 days",
    description:
      "Build the interface, UI kit, and final screens.",
  },
  "project-3-lets-fair-trade-ux": {
    title: "Project 3 - Lets fair trade (UX)",
    track: "UX",
    subtitle: "Shape the UX for an ethical commerce flow.",
    time: "2-4 days",
    description:
      "Define the journey, highlight trust, and validate the concept.",
  },
  "project-3-lets-fair-trade-ui": {
    title: "Project 3 - Lets fair trade (UI)",
    track: "UI",
    subtitle: "Deliver a visual system for fair trade.",
    time: "2-4 days",
    description:
      "Design a cohesive UI and build the key screens.",
  },
  "project-4-a-table-ux": {
    title: "Project 4 - A table (UX)",
    track: "UX",
    subtitle: "Define the UX for a table booking flow.",
    time: "2-4 days",
    description:
      "Create the flow, test assumptions, and finalize the journey.",
  },
  "project-4-a-table-ui": {
    title: "Project 4 - A table (UI)",
    track: "UI",
    subtitle: "Design the UI for the table booking flow.",
    time: "2-4 days",
    description:
      "Deliver a clean UI kit and final screens.",
  },
};

const defaultData = {
  track: "UX",
  subtitle: "Plan and deliver a focused quest sprint.",
  description:
    "Follow the quest steps, capture your decisions, and deliver the expected assets.",
  format: "Solo",
  time: "6-10 hours",
  xp: "0 XP",
  duration: "5 days",
  evaluation: "7 days",
  session: "UX-UI Pool",
  status: { label: "Open", note: "Ready to start", code: "open" },
  skills: ["Research", "Synthesis", "Communication", "Prototyping"],
  prereqs: ["Complete previous quests", "Organize your workspace"],
  resources: [],
};

const trackDefaults = {
  UX: {
    skills: ["Research", "Synthesis", "Problem framing", "Prototyping"],
    prereqs: ["Review the brief", "Collect 3 references"],
  },
  UI: {
    skills: ["Visual hierarchy", "Typography", "Components", "Accessibility"],
    prereqs: ["Pick a direction", "Create a quick moodboard"],
  },
};

const getProjectId = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("project") || "ux-quest-1-athele-keep-hydrated";
};

const getCurrentUser = () => {
  const username = localStorage.getItem("uxui-user");
  if (!username) return null;
  const raw = localStorage.getItem("uxui-local-users");
  if (!raw) return { username };
  try {
    const users = JSON.parse(raw);
    if (!Array.isArray(users)) return { username };
    return users.find((user) => user.username === username) || { username };
  } catch {
    return { username };
  }
};

const getInitials = (name) => {
  if (!name) return "UX";
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((part) => part[0].toUpperCase()).join("");
};

const loadUserProgress = (username) => {
  if (!username) {
    return { completed: {}, activityDates: [], timeBySection: {} };
  }
  const raw = localStorage.getItem(`uxui-progress-${username}`);
  if (!raw) return { completed: {}, activityDates: [], timeBySection: {} };
  try {
    const parsed = JSON.parse(raw);
    return parsed && parsed.completed
      ? {
          completed: parsed.completed || {},
          activityDates: parsed.activityDates || [],
          timeBySection: parsed.timeBySection || {},
        }
      : { completed: {}, activityDates: [], timeBySection: {} };
  } catch {
    return { completed: {}, activityDates: [], timeBySection: {} };
  }
};

const computeUserStats = (progress) => {
  const completedCount = Object.values(progress.completed || {}).filter(Boolean)
    .length;
  const minutesLogged = Object.values(progress.timeBySection || {}).reduce(
    (sum, value) => sum + value,
    0
  );
  const activeDays = new Set(progress.activityDates || []).size;
  const lastActive = (progress.activityDates || [])
    .slice()
    .sort()
    .pop();
  return { completedCount, minutesLogged, activeDays, lastActive };
};

const formatMinutes = (minutes) => {
  if (!minutes) return "0h";
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  return remainder ? `${hours}h ${remainder}m` : `${hours}h`;
};

const applyProjectData = (data) => {
  const merged = {
    ...defaultData,
    ...data,
    status: { ...defaultData.status, ...(data.status || {}) },
    skills:
      data.skills ||
      trackDefaults[data.track || defaultData.track]?.skills ||
      defaultData.skills,
    prereqs:
      data.prereqs ||
      trackDefaults[data.track || defaultData.track]?.prereqs ||
      defaultData.prereqs,
  };

  document.title = `${merged.title} | UX-UI Intranet`;

  const title = document.getElementById("project-title");
  const track = document.getElementById("project-track");
  const subtitle = document.getElementById("project-subtitle");
  const statusBox = document.getElementById("project-status");
  const statusLabel = document.getElementById("project-status-label");
  const statusNote = document.getElementById("project-status-note");
  const format = document.getElementById("project-format");
  const time = document.getElementById("project-time");
  const xp = document.getElementById("project-xp");
  const duration = document.getElementById("project-duration");
  const evalWindow = document.getElementById("project-eval");
  const session = document.getElementById("project-session");
  const description = document.getElementById("project-description");
  const skills = document.getElementById("project-skills");
  const prereqs = document.getElementById("project-prereqs");
  const attachments = document.getElementById("project-attachments");
  const attachmentsList = document.getElementById("project-attachments-list");
  const attachmentsNote = document.getElementById("project-attachments-note");
  const resourceButton = document.getElementById("project-resource-button");
  const user = getCurrentUser();
  const userAvatar = document.getElementById("project-avatar");
  const userName = document.getElementById("project-user-name");
  const userMeta = document.getElementById("project-user-meta");
  const sidebarNav = document.getElementById("project-sidebar-nav");
  const alerts = document.getElementById("project-alerts");
  const quickStats = document.getElementById("project-quick-stats");

  title.textContent = merged.title;
  track.textContent = `${merged.track} track`;
  subtitle.textContent = merged.subtitle;
  statusBox.dataset.status = merged.status.code;
  statusLabel.textContent = merged.status.label;
  statusNote.textContent = merged.status.note;
  format.textContent = merged.format;
  time.textContent = merged.time || defaultData.time;
  xp.textContent = merged.xp;
  duration.textContent = merged.duration;
  evalWindow.textContent = merged.evaluation;
  session.textContent = merged.session;
  description.textContent = merged.description;

  skills.innerHTML = "";
  merged.skills.forEach((skill) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = skill;
    skills.appendChild(chip);
  });

  prereqs.innerHTML = "";
  merged.prereqs.forEach((req) => {
    const li = document.createElement("li");
    li.textContent = req;
    prereqs.appendChild(li);
  });

  attachmentsList.innerHTML = "";
  if (!merged.resources.length) {
    attachments.classList.add("hidden");
    resourceButton.classList.add("hidden");
  } else {
    attachments.classList.remove("hidden");
    resourceButton.classList.remove("hidden");
    merged.resources.forEach((resource, index) => {
      const link = document.createElement("a");
      link.className = "attachment";
      link.href = resource.href;
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = resource.label || `Resource ${index + 1}`;
      attachmentsList.appendChild(link);
    });
    attachmentsNote.textContent = merged.resourcesNote || "";
    resourceButton.href = merged.resources[0].href;
  }

  if (userAvatar && userName && userMeta) {
    const displayName = user.displayName || user.username || "Student";
    userAvatar.textContent = getInitials(displayName);
    userName.textContent = displayName;
    userMeta.textContent = `${merged.track} track`;
  }

  if (sidebarNav) {
    sidebarNav.innerHTML = "";
    const navItems = [
      { label: "Overview", href: "#project-overview" },
      { label: "Skills", href: "#project-skills-card" },
      ...(merged.resources.length
        ? [{ label: "Resources", href: "#project-attachments" }]
        : []),
      { label: "Evaluation", href: "#project-evaluation-card" },
    ];
    navItems.forEach((item) => {
      const link = document.createElement("a");
      link.href = item.href;
      link.textContent = item.label;
      sidebarNav.appendChild(link);
    });
  }

  if (alerts) {
    alerts.innerHTML = "";
    const progress = loadUserProgress(user?.username);
    const stats = computeUserStats(progress);
    const today = new Date();
    const lastActive = stats.lastActive ? new Date(`${stats.lastActive}T00:00:00`) : null;
    const daysSince = lastActive
      ? Math.floor((today - lastActive) / (1000 * 60 * 60 * 24))
      : null;

    const primary = document.createElement("div");
    primary.className = "alert-item";
    const pill = document.createElement("span");
    pill.className = "alert-pill";
    pill.textContent = `${merged.status.label} alert`;
    const primaryText = document.createElement("p");
    if (stats.completedCount === 0) {
      primaryText.textContent = `No tasks completed yet. Estimated time: ${merged.time}.`;
    } else {
      primaryText.textContent = `You have ${stats.completedCount} tasks done. Estimated time: ${merged.time}.`;
    }
    primary.appendChild(pill);
    primary.appendChild(primaryText);

    const secondary = document.createElement("div");
    secondary.className = "alert-item muted";
    const secondaryText = document.createElement("p");
    if (daysSince !== null && daysSince >= 7) {
      secondaryText.textContent = `No activity in ${daysSince} days. Log time to keep momentum.`;
    } else if (merged.resources.length) {
      secondaryText.textContent = `Resources ready. Start with ${merged.resources[0].label || "the first link"}.`;
    } else {
      secondaryText.textContent = "No resources attached yet. Check back after kickoff.";
    }
    secondary.appendChild(secondaryText);

    alerts.appendChild(primary);
    alerts.appendChild(secondary);
  }

  if (quickStats) {
    const progress = loadUserProgress(user?.username);
    const userStats = computeUserStats(progress);
    const statRows = [
      { label: "Tasks done", value: String(userStats.completedCount) },
      { label: "Time logged", value: formatMinutes(userStats.minutesLogged) },
      { label: "Active days", value: String(userStats.activeDays) },
    ];
    quickStats.innerHTML = "";
    statRows.forEach((stat) => {
      const row = document.createElement("div");
      const label = document.createElement("span");
      label.className = "stat-label";
      label.textContent = stat.label;
      const value = document.createElement("span");
      value.className = "stat-value";
      value.textContent = stat.value;
      row.appendChild(label);
      row.appendChild(value);
      quickStats.appendChild(row);
    });
  }
};

const projectId = getProjectId();
const projectData = projectCatalog[projectId] || {
  title: projectId.replace(/-/g, " "),
  track: projectId.startsWith("ui-") ? "UI" : "UX",
};

applyProjectData(projectData);
