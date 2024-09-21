const express = require('express');
const router = express.Router();
const Project = require('../models/Project'); // You'll need to create this model

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;