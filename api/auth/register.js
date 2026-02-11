const {
  loadUsers,
  saveUsers,
  normalizeUser,
  hashPasswordIfNeeded,
} = require("../_lib/users");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed." });
    return;
  }

  const { displayName, city, username, password } = req.body || {};
  if (!displayName || !city || !username || !password) {
    res.status(400).json({ message: "All fields are required." });
    return;
  }

  const users = await loadUsers();
  const exists = users.some((entry) => entry.username === username);
  if (exists) {
    res.status(409).json({ message: "Username already exists." });
    return;
  }

  const passwordHash = hashPasswordIfNeeded(password);
  const newUser = normalizeUser({
    username,
    password: passwordHash,
    displayName,
    city,
    status: "Available",
    role: "Cadet",
  });

  if (!newUser) {
    res.status(400).json({ message: "Invalid user payload." });
    return;
  }

  users.push(newUser);
  await saveUsers(users);

  const { password: _, ...safeUser } = newUser;
  res.status(201).json({ user: safeUser });
};
