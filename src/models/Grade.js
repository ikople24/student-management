// models/Grade.js
import mongoose from 'mongoose';

const gradeSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
  assignment_name: String,
  score: Number,
  max_score: Number
}, { timestamps: true });

export default mongoose.models.Grade || mongoose.model('Grade', gradeSchema);