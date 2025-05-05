// models/Subject.js
import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
  subject_name: { type: String, required: true },
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' }
}, { timestamps: true });

export default mongoose.models.Subject || mongoose.model('Subject', subjectSchema);