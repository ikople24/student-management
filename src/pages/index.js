import { useEffect, useState } from 'react'

export default function Home() {
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch('/api/students')
      .then(res => res.json())
      .then(data => setStudents(data))
  }, [])

  return (
    <div>
      <h1>Student Management</h1>
      <ul>
        {students.map(s => (
          <li key={s._id}>{s.name} ({s.studentId})</li>
        ))}
      </ul>
    </div>
  )
}