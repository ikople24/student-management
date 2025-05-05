// src/pages/api/students/index.ts
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/lib/mongodb'
import Student from '@/models/Student'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect()

  if (req.method === 'GET') {
    const students = await Student.find({})
    res.status(200).json(students)
  } else if (req.method === 'POST') {
    const student = await Student.create(req.body)
    res.status(201).json(student)
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}