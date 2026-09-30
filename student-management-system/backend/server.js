const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.json({ message: "Student Management API is running" });
});

// GET all students
app.get("/api/students", async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM students ORDER BY id ASC"
        );

        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch students" });
    }
});

// POST a new student
app.post("/api/students", async (req, res) => {
    try {
        const {
            student_name,
            seat_number,
            semester,
            program,
            department,
            email
        } = req.body;

        const result = await pool.query(
            `INSERT INTO students
            (student_name, seat_number, semester, program, department, email)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *`,
            [
                student_name,
                seat_number,
                semester,
                program,
                department,
                email
            ]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to add student" });
    }
});

// PUT / UPDATE a student
app.put("/api/students/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const {
            student_name,
            seat_number,
            semester,
            program,
            department,
            email
        } = req.body;

        const result = await pool.query(
            `UPDATE students
             SET student_name = $1,
                 seat_number = $2,
                 semester = $3,
                 program = $4,
                 department = $5,
                 email = $6
             WHERE id = $7
             RETURNING *`,
            [
                student_name,
                seat_number,
                semester,
                program,
                department,
                email,
                id
            ]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Student not found" });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to update student" });
    }
});

// DELETE a student
app.delete("/api/students/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            "DELETE FROM students WHERE id = $1 RETURNING *",
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Student not found" });
        }

        res.json({
            message: "Student deleted successfully",
            student: result.rows[0]
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to delete student" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});