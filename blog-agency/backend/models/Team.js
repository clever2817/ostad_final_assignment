const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: String,
  role: String,
  photo: String,
});

module.exports = mongoose.model('Team', teamSchema);
