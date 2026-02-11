const crypto = require("crypto");
const fs = require("fs/promises");
const path = require("path");
const { kv } = require("@vercel/kv");

const USERS_KEY = "uxui-users";
const passwordHashRegex = /^[a-f0-9]{64}$/i;

const normalizeUser = (user) => {
  if (!user || !user.username || !user.password) return null;
  const username = String(user.username).trim();
  if (!username) return null;
  return {
    username,
    password: String(user.password).toLowerCase(),
    displayName: user.displayName ? String(user.displayName) : username,
    city: user.city ? String(user.city) : "Le Havre",
    status: user.status ? String(user.status) : "Available",
    role: user.role ? String(user.role) : "Cadet",
  };
};

const hashPasswordIfNeeded = (password) => {
  const value = String(password || "");
  if (passwordHashRegex.test(value)) return value.toLowerCase();
  return crypto.createHash("sha256").update(value).digest("hex");
};

const loadSeedUsers = async () => {
  try {
    const filePath = path.join(process.cwd(), "intranet", "users.json");
    const raw = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(raw);
    if (!Array.isArray(data)) return [];
    return data.map(normalizeUser).filter(Boolean);
  } catch {
    return [];
  }
};

const loadUsers = async () => {
  let users = [];
  try {
    const stored = await kv.get(USERS_KEY);
    if (Array.isArray(stored)) {
      users = stored.map(normalizeUser).filter(Boolean);
    }
  } catch {
    users = [];
  }

  if (users.length === 0) {
    const seedUsers = await loadSeedUsers();
    if (seedUsers.length) {
      await kv.set(USERS_KEY, seedUsers);
      users = seedUsers;
    }
  }

  return users;
};

const saveUsers = async (users) => {
  const normalized = (users || []).map(normalizeUser).filter(Boolean);
  await kv.set(USERS_KEY, normalized);
  return normalized;
};

module.exports = {
  loadUsers,
  saveUsers,
  normalizeUser,
  hashPasswordIfNeeded,
  passwordHashRegex,
};
