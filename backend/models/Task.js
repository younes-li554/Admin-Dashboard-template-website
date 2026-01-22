const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'AdminUser' }
});

module.exports = mongoose.model('Task', taskSchema);
