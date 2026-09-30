import { useEffect, useState } from "react";

const StudentForm = ({ addStudent, editingStudent, editStudent }) => {
  const [formData, setFormData] = useState({
  id: null,
  student_name: "",
  seat_number: "",
  semester: "",
  program: "",
  department: "",
  email: ""
});

useEffect(() => {
  if (editingStudent) {
    setFormData({
      id: editingStudent.id,
      student_name: editingStudent.student_name,
      seat_number: editingStudent.seat_number,
      semester: editingStudent.semester,
      program: editingStudent.program,
      department: editingStudent.department,
      email: editingStudent.email
    });
  }
}, [editingStudent]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editingStudent) {
      editStudent(formData);
    } else {
      addStudent(formData);
    }

    setFormData({
  id: null,
  student_name: "",
  seat_number: "",
  semester: "",
  program: "",
  department: "",
  email: ""
});
  };

  return (
    <div className="form-card">
      <h2>{editingStudent ? "Edit Student" : "Register New Student"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">

          <div className="form-group">
            <label htmlFor="student_name">Student Name</label>
            <input
              type="text"
              id="student_name"
              name="student_name"
              value={formData.student_name}
              onChange={handleChange}
              placeholder="Enter student name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="seat_number">Seat Number</label>
            <input
              type="text"
              id="seat_number"
              name="seat_number"
              value={formData.seat_number}
              onChange={handleChange}
              placeholder="e.g. SE-101"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="semester">Semester</label>
            <input
              type="text"
              id="semester"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              placeholder="e.g. 2nd"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="program">Program</label>
            <input
              type="text"
              id="program"
              name="program"
              value={formData.program}
              onChange={handleChange}
              placeholder="e.g. Software Engineering"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="department">Department</label>
            <input
              type="text"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="e.g. Computer Science"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              required
            />
          </div>

        </div>

        <div className="button-container">
          <button type="submit">{editingStudent ? "Update Student" : "Register Student"}</button>
        </div>
      </form>
    </div>

  )
}

export default StudentForm
