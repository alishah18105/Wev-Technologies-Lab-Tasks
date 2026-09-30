import { Pencil, Trash } from "lucide-react"
import { useState } from "react";

const StudentList = ({ students, deleteStudent, startEdit }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = students.filter((student) =>
  student.student_name.toLowerCase().includes(searchTerm.toLowerCase())
);
  return (
    <div className="students-card">
      <div className="students-header">
        <h2>Registered Students</h2>

        <input
          type="text"
          placeholder="Search students..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <span className="student-count">
          {filteredStudents.length} Students
        </span>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Seat Number</th>
              <th>Semester</th>
              <th>Program</th>
              <th>Department</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={student.seat_number}>
                <td>{index + 1}</td>
                <td>{student.student_name}</td>
                <td>{student.seat_number}</td>
                <td>{student.semester}</td>
                <td>{student.program}</td>
                <td>{student.department}</td>
                <td>{student.email}</td> <td>
                  <div className="action-btns">
                    <button className='edit' onClick={() => startEdit(student)}><Pencil size={15} /></button>
                    <button className='delete' onClick={() => deleteStudent(student.id)}><Trash size={15} /></button>
                  </div>
                </td>
              </tr>))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default StudentList
