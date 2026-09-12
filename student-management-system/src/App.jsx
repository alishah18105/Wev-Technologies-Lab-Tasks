import { useState } from "react"
import Header from "./components/Header"
import StudentForm from "./components/StudentForm"
import StudentList from "./components/StudentList"

function App() {
  const [students, setStudents] = useState([
    {
      student_name: "Syed Ali Sultan",
      seat_number: "B23110106065",
      semester: "6th",
      program: "BS Software Engineering",
      department: "Computer Science",
      email: "alishah18105@gmail.com"
    },

    {
      student_name: "Neha Rehan",
      seat_number: "B23110006131",
      semester: "6th",
      program: "BS Computer Science",
      department: "Computer Science",
      email: "neharehan2020@gmail.com"
    },

    {
      student_name: "Muhammad Ibrahim Riaz",
      seat_number: "B23110006104",
      semester: "6th",
      program: "BS Computer Science",
      department: "Computer Science",
      email: "ibrahimriaz14605@gmail.com"
    },

  ]);
  const [editingStudent, setEditingStudent] = useState(null);


  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const deleteStudent = (seat_number) =>{
    setStudents(students.filter(student => student.seat_number !== seat_number));
  };

  const editStudent = (updatedStudent) => {
  setStudents(
    students.map(student =>
      student.seat_number === updatedStudent.seat_number
        ? updatedStudent
        : student
    )
  );

  setEditingStudent(null);
};

const startEdit = (student) => {
  setEditingStudent(student);
};

  return (
    <div className="container">
      <Header />
      <StudentForm addStudent={addStudent} editingStudent={editingStudent} editStudent={editStudent} />
      <StudentList students={students} deleteStudent={deleteStudent} startEdit={startEdit} />
    </div>
  )
}

export default App