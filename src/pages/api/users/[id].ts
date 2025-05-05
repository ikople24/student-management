import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();
  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      const user = await User.findById(id);
      return res.status(200).json(user);

    case 'PUT':
      const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(200).json(updatedUser);

    case 'DELETE':
      await User.findByIdAndDelete(id);
      return res.status(204).end();

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}