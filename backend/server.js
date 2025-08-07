const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5050;

// קבצי הנתונים
const SUBMISSIONS_FILE = path.join(__dirname, "submissions.json");
const USERS_FILE = path.join(__dirname, "users.json");

app.use(cors());
app.use(bodyParser.json());

/* --------- פונקציות עזר --------- */
function readJSONFile(filepath) {
  if (!fs.existsSync(filepath)) {
    fs.writeFileSync(filepath, "[]");
  }
  const data = fs.readFileSync(filepath, "utf8");
  return JSON.parse(data);
}

function writeJSONFile(filepath, dataArray) {
  fs.writeFileSync(filepath, JSON.stringify(dataArray, null, 2));
}

/* --------- שליחת תוצאה מהשאלון --------- */
app.post("/submit", (req, res) => {
  const newEntry = {
    timestamp: new Date().toISOString(),
    answers: req.body.answers,
    matchedPets: req.body.matchedPets,
  };

  try {
    const dataArray = readJSONFile(SUBMISSIONS_FILE);
    dataArray.push(newEntry);
    writeJSONFile(SUBMISSIONS_FILE, dataArray);
    console.log("✅ Submission saved successfully.");
    res.json({ success: true });
  } catch (err) {
    console.error("❌ Error saving submission:", err);
    res.status(500).json({ success: false });
  }
});

/* --------- הרשמה --------- */
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: "Username and password required." });
  }

  try {
    const users = readJSONFile(USERS_FILE);
    const exists = users.find((u) => u.username === username);

    if (exists) {
      return res.status(409).json({ success: false, message: "Username already exists." });
    }

    users.push({ username, password }); // ⚠️ בעתיד נצפין סיסמאות
    writeJSONFile(USERS_FILE, users);

    console.log(`✅ New user registered: ${username}`);
    res.json({ success: true, message: "User registered successfully." });
  } catch (err) {
    console.error("❌ Error during registration:", err);
    res.status(500).json({ success: false });
  }
});

/* --------- התחברות --------- */
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: "Username and password required." });
  }

  try {
    const users = readJSONFile(USERS_FILE);
    const user = users.find((u) => u.username === username && u.password === password);

    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid username or password." });
    }

    console.log(`✅ User logged in: ${username}`);
    res.json({ success: true, message: "Login successful." });
  } catch (err) {
    console.error("❌ Error during login:", err);
    res.status(500).json({ success: false });
  }
});

/* --------- הפעלת השרת --------- */
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});