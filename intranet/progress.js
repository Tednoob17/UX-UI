const getProgress = () => {
  const username = localStorage.getItem("uxui-user");
  if (!username) return { completed: {} };
  const raw = localStorage.getItem(`uxui-progress-${username}`);
  if (!raw) return { completed: {} };
  try {
    return JSON.parse(raw);
  } catch {
    return { completed: {} };
  }
};

const nodeMap = [
  { key: "ux-quest-1", prefix: "ux1-", total: 7, label: "UX 1" },
  { key: "ux-quest-2", prefix: "ux2-", total: 7, label: "UX 2" },
  { key: "ux-quest-3", prefix: "ux3-", total: 7, label: "UX 3" },
  { key: "ux-quest-4", prefix: "ux4-", total: 7, label: "UX 4" },
  { key: "ux-quest-5", prefix: "ux5-", total: 7, label: "UX 5" },
  { key: "ux-quest-6", prefix: "ux6-", total: 7, label: "UX 6" },
  { key: "ux-quest-7", prefix: "ux7-", total: 7, label: "UX 7" },
  { key: "ui-quest-1", prefix: "ui1-", total: 11, label: "UI 1" },
  { key: "ui-quest-2", prefix: "ui2-", total: 5, label: "UI 2" },
  { key: "ui-quest-3", prefix: "ui3-", total: 11, label: "UI 3" },
  { key: "ui-quest-4", prefix: "ui4-", total: 5, label: "UI 4" },
  { key: "ui-quest-5", prefix: "ui5-", total: 2, label: "UI 5" },
  { key: "project-1", id: "proj1-ux", label: "P1" },
  { key: "project-2", id: "proj2-ux", label: "P2" },
  { key: "project-3", id: "proj3-ux", label: "P3" },
  { key: "project-4", id: "proj4-ux", label: "P4" },
];

const baseNodes = [
  { key: "ux-quest-1", orbit: 120, angle: 20, type: "images" },
  { key: "ux-quest-2", orbit: 170, angle: 60, type: "images" },
  { key: "ux-quest-3", orbit: 220, angle: 100, type: "images" },
  { key: "ux-quest-4", orbit: 260, angle: 140, type: "images" },
  { key: "ux-quest-5", orbit: 220, angle: 200, type: "images" },
  { key: "ux-quest-6", orbit: 170, angle: 240, type: "images" },
  { key: "ux-quest-7", orbit: 120, angle: 300, type: "images" },
  { key: "ui-quest-1", orbit: 140, angle: 340, type: "containers" },
  { key: "ui-quest-2", orbit: 190, angle: 10, type: "containers" },
  { key: "ui-quest-3", orbit: 240, angle: 50, type: "containers" },
  { key: "ui-quest-4", orbit: 290, angle: 90, type: "containers" },
  { key: "ui-quest-5", orbit: 200, angle: 150, type: "containers" },
  { key: "project-1", orbit: 320, angle: 210, type: "community" },
  { key: "project-2", orbit: 360, angle: 250, type: "community" },
  { key: "project-3", orbit: 320, angle: 290, type: "resources" },
  { key: "project-4", orbit: 280, angle: 330, type: "resources" },
];

const colors = {
  wrapper: "#8957e5",
  community: "#f1863f",
  resources: "#facc15",
  you: "#df4e4e",
  images: "#42c170",
  docs: "#7a7a7a",
  containers: "#72bef4",
  complete: "#22c55e",
  active: "#0ea5e9",
  locked: "#94a3b8",
};

const computeNodeStatus = (progress, map) => {
  const completed = progress.completed || {};
  return map.map((entry) => {
    if (entry.id) {
      return {
        key: entry.key,
        done: completed[entry.id] ? 1 : 0,
        total: 1,
        label: entry.label,
      };
    }
    const keys = Object.keys(completed).filter((id) => id.startsWith(entry.prefix));
    const done = keys.filter((id) => completed[id]).length;
    return { key: entry.key, done, total: entry.total, label: entry.label };
  });
};

const canvas = document.querySelector(".progress-canvas");
const ctx = canvas ? canvas.getContext("2d") : null;
let animationFrame = null;
let rotation = 0;

const resizeCanvas = () => {
  if (!canvas) return;
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = rect.width * ratio;
  canvas.height = rect.height * ratio;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
};

const drawOrbit = (cx, cy, radius, alpha) => {
  ctx.save();
  ctx.strokeStyle = `rgba(148, 163, 184, ${alpha})`;
  ctx.setLineDash([4, 6]);
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
};

const drawNode = (cx, cy, radius, label, status, type) => {
  const baseColor = colors[type] || colors.images;
  const statusColor = colors[status] || colors.locked;
  ctx.save();
  ctx.fillStyle = baseColor;
  ctx.globalAlpha = 0.9;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = statusColor;
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.globalAlpha = 1;
  ctx.fillStyle = "#0f172a";
  ctx.font = "600 11px 'Space Grotesk', sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, cx, cy);
  ctx.restore();
};

const render = () => {
  if (!canvas || !ctx) return;
  const rect = canvas.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  const cx = width / 2;
  const cy = height / 2;

  ctx.clearRect(0, 0, width, height);

  const gradient = ctx.createRadialGradient(cx, cy, 20, cx, cy, width * 0.6);
  gradient.addColorStop(0, "rgba(56, 189, 248, 0.18)");
  gradient.addColorStop(1, "rgba(15, 23, 42, 0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  [120, 170, 220, 270, 320, 370].forEach((radius, index) =>
    drawOrbit(cx, cy, radius, 0.25 - index * 0.02)
  );

  ctx.save();
  ctx.fillStyle = colors.wrapper;
  ctx.beginPath();
  ctx.arc(cx, cy, 36, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#0f172a";
  ctx.font = "700 12px 'Space Grotesk', sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Core", cx, cy);
  ctx.restore();

  const progress = getProgress();
  const statuses = computeNodeStatus(progress, nodeMap);
  const statusMap = new Map(statuses.map((item) => [item.key, item]));

  baseNodes.forEach((node) => {
    const status = statusMap.get(node.key);
    const percent = status && status.total ? status.done / status.total : 0;
    let state = "locked";
    if (percent >= 1) state = "complete";
    else if (percent > 0) state = "active";

    const angle = ((node.angle + rotation) * Math.PI) / 180;
    const x = cx + Math.cos(angle) * node.orbit;
    const y = cy + Math.sin(angle) * node.orbit;
    drawNode(x, y, 16, status?.label || "", state, node.type);
  });

  rotation += 0.08;
  animationFrame = requestAnimationFrame(render);
};

if (canvas && ctx) {
  resizeCanvas();
  render();
  window.addEventListener("resize", () => {
    resizeCanvas();
  });
}
