// /pages/api/attendance/[id].ts
import dbConnect from '@/lib/mongodb'
import Attendance from "@/models/Attendance";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === "GET") {
    const record = await Attendance.findById(id).populate('student').populate('subject');
    return res.status(200).json(record);
  }

  if (req.method === "PUT") {
    const updated = await Attendance.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json(updated);
  }

  if (req.method === "DELETE") {
    await Attendance.findByIdAndDelete(id);
    return res.status(204).end();
  }

  res.status(405).end();
}