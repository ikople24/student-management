import Navbar from "@/components/Navbar";
import StudentForm from "@/components/StudentForm";
import StudentList from "@/components/StudentList";
import { useState, useEffect } from "react";

export default function DashboardPage() {
  const [students, setStudents] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  const addStudent = async (newStudent: any) => {
    const res = await fetch("/api/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStudent),
    });
    const data = await res.json();
    setStudents([...students, data]);
  };
  console.log(students)

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="p-4 max-w-4xl mx-auto">
        <StudentForm onAdd={addStudent} />
        <StudentList students={students} />
      </main>
    </div>
  );
}