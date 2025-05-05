import dbConnect from '../../../lib/mongodb'
import Student from '../../../models/Student'

export default async function handler(req, res) {
  await dbConnect()

  if (req.method === 'GET') {
    const students = await Student.find({})
    return res.status(200).json(students)
  }

  if (req.method === 'POST') {
    const student = new Student(req.body)
    await student.save()
    return res.status(201).json(student)
  }

  res.status(405).end() // Method Not Allowed
}