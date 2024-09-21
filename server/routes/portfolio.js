const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');

router.get('/', async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne();
    if (!portfolio) {
      return res.status(404).json({ message: "Portfolio data not found" });
    }
    res.json(portfolio);
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;