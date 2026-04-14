const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3").verbose();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Database
const db = new sqlite3.Database("./notes.db");

// Create table
db.run(`
CREATE TABLE IF NOT EXISTS notes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  content TEXT
)
`);

// GET all notes
app.get("/notes", (req, res) => {
  db.all("SELECT * FROM notes", [], (err, rows) => {
    res.json(rows);
  });
});

// CREATE note
app.post("/notes", (req, res) => {
  const { title, content } = req.body;

  db.run(
    "INSERT INTO notes (title, content) VALUES (?, ?)",
    [title, content],
    function (err) {
      res.json({ id: this.lastID });
    }
  );
});

// UPDATE note
app.put("/notes/:id", (req, res) => {
  const { title, content } = req.body;

  db.run(
    "UPDATE notes SET title=?, content=? WHERE id=?",
    [title, content, req.params.id],
    () => {
      res.send("Updated");
    }
  );
});

// DELETE note
app.delete("/notes/:id", (req, res) => {
  db.run("DELETE FROM notes WHERE id=?", req.params.id, () => {
    res.send("Deleted");
  });
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});