const express = require('express');
const router = express.Router();
const scraperController = require('../controllers/scraperController');

// API route
router.get('/scrape', scraperController.scrapeAmazonController);

module.exports = router;
