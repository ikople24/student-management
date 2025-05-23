// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, enum: ['teacher', 'student', 'admin'], required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', userSchema);