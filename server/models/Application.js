import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  company: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Applied', 'Interview', 'Offer', 'Rejected'],
    default: 'Applied'
  },
  appliedDate: {
    type: Date,
    default: Date.now
  },
  location: String,
  salary: String,
  jobUrl: String,
  notes: String,
  contacts: [{
    name: String,
    email: String,
    phone: String,
    role: String
  }],
  interviews: [{
    date: Date,
    type: String,
    notes: String
  }]
}, { timestamps: true });

export default mongoose.model('Application', applicationSchema);
