// models/Schedule.js
import mongoose from 'mongoose';

const scheduleSchema = new mongoose.Schema({
  subject: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject' },
  class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class' },
  day_of_week: { type: String }, // Mon, Tue, Wed...
  time_start: String,
  time_end: String
}, { timestamps: true });

export default mongoose.models.Schedule || mongoose.model('Schedule', scheduleSchema);