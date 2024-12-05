const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  photo: { type: String }, 
});

module.exports = mongoose.model('Team', teamSchema);

