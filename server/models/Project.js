const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: String,
  images: [String],
  sourceCode: String,
  // Add any other fields you need
});

module.exports = mongoose.model('Project', ProjectSchema);