// models/Notification.js
import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: String,
  status: { type: String, enum: ['read', 'unread'], default: 'unread' }
}, { timestamps: true });

export default mongoose.models.Notification || mongoose.model('Notification', notificationSchema);