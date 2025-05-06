// /pages/api/attendance/index.ts
import Attendance from "@/models/Attendance";
import dbConnect from '@/lib/mongodb'
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  if (req.method === "GET") {
    const attendance = await Attendance.find().populate('student').populate('subject');
    return res.status(200).json(attendance);
  }

  if (req.method === "POST") {
    const newAttendance = new Attendance(req.body);
    await newAttendance.save();
    return res.status(201).json(newAttendance);
  }

  res.status(405).end();
}