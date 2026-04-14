# 📝 Markdown Notes App (Full Stack)

A full-stack web application for creating, editing, deleting, and managing notes with **Markdown support and live preview**. Built using modern web technologies with a clean UI and REST API architecture.

---

## 🚀 Live Demo
*(Add your deployed link here if available)*  
Example: https://your-app-link.com

---

## 📌 Features

- ➕ Create notes with title and markdown content  
- ✏️ Edit existing notes  
- ❌ Delete notes instantly  
- 👀 Live Markdown preview  
- 💾 Persistent storage using database  
- 🎨 Clean and responsive card-based UI  
- 🔄 Real-time updates after actions  

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- React Markdown
- JavaScript (ES6+)

### Backend
- Node.js
- Express.js
- REST API

### Database
- SQLite

---

## 📁 Project Structure
markdown-notes-app
│
├── frontend
│ ├── src
│ ├── public
│ └── package.json
│
├── backend
│ ├── server.js
│ ├── notes.db
│ └── package.json
│
└── README.md

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/markdown-notes-app.git
cd markdown-notes-app

2️⃣Setup Backend
cd backend
npm install
node server.js

Backend runs on:

http://localhost:5000

3️⃣ Setup Frontend
cd frontend
npm install
npm start

Frontend runs on:

http://localhost:3000

🔗 API Endpoints
| Method | Endpoint   | Description       |
| ------ | ---------- | ----------------- |
| GET    | /notes     | Get all notes     |
| POST   | /notes     | Create a new note |
| PUT    | /notes/:id | Update a note     |
| DELETE | /notes/:id | Delete a note     |

👨‍💻 Author
Name: Venkatesh
GitHub: https://github.com/venkyvenkatesh5
