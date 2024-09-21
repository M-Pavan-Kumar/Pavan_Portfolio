const mongoose = require('mongoose');

const PortfolioSchema = new mongoose.Schema({
  about: String,
  projects: [{
    title: String,
    description: String,
    imageUrl: String,
    projectUrl: String
  }],
  skills: [String],
  contact: {
    email: String,
    phone: String,
    linkedin: String,
    github: String
  }
});

module.exports = mongoose.model('Portfolio', PortfolioSchema);