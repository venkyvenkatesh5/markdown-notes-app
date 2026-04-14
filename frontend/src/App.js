import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState(null);

  // Get notes
  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:5000/notes");
    setNotes(res.data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Save or Update note
  const saveNote = async () => {
    if (editId) {
      await axios.put(`http://localhost:5000/notes/${editId}`, {
        title,
        content,
      });
      setEditId(null);
    } else {
      await axios.post("http://localhost:5000/notes", {
        title,
        content,
      });
    }

    setTitle("");
    setContent("");
    fetchNotes();
  };
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
    background: "#f5f5f5",
    minHeight: "100vh",
  },
  input: {
    width: "300px",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  textarea: {
    width: "300px",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    margin: "5px",
    padding: "8px 12px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
  },
  saveBtn: {
    background: "#4CAF50",
    color: "white",
  },
  editBtn: {
    background: "#2196F3",
    color: "white",
  },
  deleteBtn: {
    background: "#f44336",
    color: "white",
  },
  card: {
    background: "white",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
};
   return (
    <div style={styles.container}>
      <h1>Markdown Notes App</h1>

      <input
        style={styles.input}
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <textarea
        style={styles.textarea}
        placeholder="Write markdown..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows="6"
      />

      <br />

      <button
        style={{ ...styles.button, ...styles.saveBtn }}
        onClick={saveNote}
      >
        {editId ? "Update Note" : "Save Note"}
      </button>

      <hr />

      <h2>Your Notes</h2>

      {notes.map((note) => (
        <div key={note.id} style={styles.card}>
          <h3>{note.title}</h3>
          <ReactMarkdown>{note.content}</ReactMarkdown>

          <button
            style={{ ...styles.button, ...styles.editBtn }}
            onClick={() => {
              setEditId(note.id);
              setTitle(note.title);
              setContent(note.content);
            }}
          >
            Edit
          </button>

          <button
            style={{ ...styles.button, ...styles.deleteBtn }}
            onClick={async () => {
              await axios.delete(`http://localhost:5000/notes/${note.id}`);
              fetchNotes();
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;