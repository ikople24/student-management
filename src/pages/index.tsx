import { useEffect, useState } from 'react';

interface Student {
  _id: string;
  name: string;
  studentId: string;
  parentName: string;
  parentEmail: string;
}

export default function Home() {
  const [students, setStudents] = useState<Student[]>([]);
  const [newStudent, setNewStudent] = useState({
    name: '',
    studentId: '',
    parentName: '',
    parentEmail: '',
  });

  // โหลดข้อมูลนักเรียน
  useEffect(() => {
    fetch('/api/students')
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  // เพิ่มนักเรียนใหม่
  const handleAddStudent = async () => {
    const res = await fetch('/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newStudent),
    });
    const data = await res.json();
    setStudents([...students, data]);
    setNewStudent({ name: '', studentId: '', parentName: '', parentEmail: '' });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Student Management</h1>
      <div>
        <input
          placeholder="Name"
          value={newStudent.name}
          onChange={e => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        <input
          placeholder="Student ID"
          value={newStudent.studentId}
          onChange={e => setNewStudent({ ...newStudent, studentId: e.target.value })}
        />
        <input
          placeholder="Parent Name"
          value={newStudent.parentName}
          onChange={e => setNewStudent({ ...newStudent, parentName: e.target.value })}
        />
        <input
          placeholder="Parent Email"
          value={newStudent.parentEmail}
          onChange={e => setNewStudent({ ...newStudent, parentEmail: e.target.value })}
        />
        <button onClick={handleAddStudent}>Add Student</button>
      </div>

      <h2>Student List</h2>
      <ul>
        {students.map(s => (
          <li key={s._id}>
            {s.name} ({s.studentId}) - Parent: {s.parentName}
          </li>
        ))}
      </ul>
    </div>
  );
}