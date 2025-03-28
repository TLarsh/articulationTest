const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
  therapistId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  audioFile: String,
  resultScore: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Test', TestSchema);
