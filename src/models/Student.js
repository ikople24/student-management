import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  name: String,
  studentId: String,
  parentName: String,
  parentEmail: String,
  attendance: [
    {
      date: String,
      status: { type: String, enum: ['present', 'absent', 'late', 'leave'] }
    }
  ],
  scores: [
    {
      subject: String,
      score: Number
    }
  ]
});

export default mongoose.models.Student || mongoose.model("Student", StudentSchema);