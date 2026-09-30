# Student Management System

A full-stack Student Management System developed as **Web Technologies Lab Task 7**.

The project uses **React.js** for the frontend, **Node.js + Express.js** for the backend, and **PostgreSQL** for persistent data storage.

## Lab Task

**Course:** Web Technologies
**Lab Task:** 7
**Frontend:** React.js + Vite
**Backend:** Node.js + Express.js
**Database:** PostgreSQL

## Features

* Add/register students
* Edit student information
* Delete students
* Search students
* Display total students
* PostgreSQL database storage
* CRUD operations through REST APIs
* Form validation
* Responsive student table

## Student Information

Each student contains:

* Student Name
* Seat Number
* Semester
* Program
* Department
* Email

The **seat number** is used as the unique identifier.

## Project Architecture

```text
student-management-system/
│
├── frontend/       # React + Vite
├── backend/        # Express.js + PostgreSQL
├── package.json    # Root scripts
└── README.md
```

Application flow:

```text
React Frontend
      ↓
REST API
      ↓
Express.js Backend
      ↓
PostgreSQL Database
```

The root `npm run dev` command runs both frontend and backend using `concurrently`.

## React Concepts Used

* Components
* Props
* `useState`
* `useEffect`
* Controlled components
* Form handling
* Conditional rendering
* `map()`
* `filter()`
* Live search
* API communication

### Frontend Structure

```text
frontend/
└── src/
    ├── components/
    │   ├── Header.jsx
    │   ├── StudentForm.jsx
    │   └── StudentList.jsx
    │
    ├── App.jsx
    ├── index.css
    └── main.jsx
```

## Backend

The backend is built using **Node.js and Express.js** and handles student CRUD operations and communication with PostgreSQL.

```text
backend/
├── server.js
├── package.json
└── ...
```

### Backend Technologies

* Node.js
* Express.js
* PostgreSQL
* `pg`
* CORS
* dotenv

## Technologies Used

| Technology | Purpose               |
| ---------- | --------------------- |
| React.js   | Frontend              |
| Vite       | Development tool      |
| JavaScript | Application logic     |
| HTML5      | Structure and forms   |
| CSS3       | Styling               |
| Node.js    | Backend runtime       |
| Express.js | REST API              |
| PostgreSQL | Database              |
| pg         | PostgreSQL connection |
| dotenv     | Environment variables |

## Installation and Setup

Clone the repository:

```bash
git clone <repository-url>
cd student-management-system
```

Install dependencies:

```bash
npm install
cd frontend
npm install
cd ../backend
npm install
```

Make sure PostgreSQL is running and configure the database credentials in the backend `.env` file.

Example:

```env
DB_USER=your_username
DB_HOST=localhost
DB_NAME=student_management
DB_PASSWORD=your_password
DB_PORT=5432
```

Start the complete project from the root folder:

```bash
npm run dev
```

The frontend will normally run at:

```text
http://localhost:5173
```

## Root Scripts

```json
"scripts": {
  "client": "cd frontend && npm run dev",
  "server": "cd backend && npm run dev",
  "dev": "concurrently \"npm run server\" \"npm run client\""
}
```

## Learning Outcomes

This lab task provided practice with:

* React component-based development
* Props and state management
* React hooks
* Forms and controlled inputs
* REST API communication
* Express.js backend development
* PostgreSQL database integration
* CRUD operations
* Frontend-backend integration

## Conclusion

This project demonstrates a complete **React + Express.js + PostgreSQL** application where the frontend handles the user interface, the backend manages API requests, and PostgreSQL provides persistent student data storage.
