import { useEffect, useState } from "react"
import Header from "./components/Header"
import StudentForm from "./components/StudentForm"
import StudentList from "./components/StudentList"

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  // Fetch students from PostgreSQL through the backend
  useEffect(() => {
    fetch("http://localhost:5000/api/students")
      .then(response => response.json())
      .then(data => {
        setStudents(data);
      })
      .catch(error => {
        console.error("Error fetching students:", error);
      });
  }, []);

  const addStudent = async (newStudent) => {
  try {
    const response = await fetch("http://localhost:5000/api/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStudent),
    });

    if (!response.ok) {
      throw new Error("Failed to add student");
    }

    const addedStudent = await response.json();

    setStudents([...students, addedStudent]);
  } catch (error) {
    console.error("Error adding student:", error);
  }
};

  const deleteStudent = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/students/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to delete student");
    }

    setStudents(
      students.filter(student => student.id !== id)
    );
  } catch (error) {
    console.error("Error deleting student:", error);
  }
};

  const editStudent = async (updatedStudent) => {
  try {
    const response = await fetch(
      `http://localhost:5000/api/students/${updatedStudent.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedStudent),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update student");
    }

    const updatedData = await response.json();

    setStudents(
      students.map(student =>
        student.id === updatedData.id
          ? updatedData
          : student
      )
    );

    setEditingStudent(null);
  } catch (error) {
    console.error("Error updating student:", error);
  }
};

  const startEdit = (student) => {
    setEditingStudent(student);
  };

  return (
    <div className="container">
      <Header />

      <StudentForm
        addStudent={addStudent}
        editingStudent={editingStudent}
        editStudent={editStudent}
      />

      <StudentList
        students={students}
        deleteStudent={deleteStudent}
        startEdit={startEdit}
      />
    </div>
  )
}

export default App