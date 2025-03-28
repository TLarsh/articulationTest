const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['admin', 'therapist', 'assistant', 'client'] },
  subdomain: String,  // therapist subdomains
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
