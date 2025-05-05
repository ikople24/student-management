// models/Class.js
import mongoose from 'mongoose';

const classSchema = new mongoose.Schema({
  class_name: { type: String, required: true },
  room_number: String,
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

export default mongoose.models.Class || mongoose.model('Class', classSchema);