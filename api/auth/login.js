const { loadUsers, hashPasswordIfNeeded } = require("../_lib/users");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed." });
    return;
  }

  const { username, password } = req.body || {};
  if (!username || !password) {
    res.status(400).json({ message: "Username and password are required." });
    return;
  }

  const passwordHash = hashPasswordIfNeeded(password);
  const users = await loadUsers();
  const user = users.find(
    (entry) =>
      entry.username === username &&
      String(entry.password).toLowerCase() === passwordHash
  );

  if (!user) {
    res.status(401).json({ message: "Invalid username or password." });
    return;
  }

  const { password: _, ...safeUser } = user;
  res.status(200).json({ user: safeUser });
};
