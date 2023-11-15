const express = require('express');
const app = express();
const scraper = require('./backend/scraper');
const path = require('path');

app.use(express.json());

// Serve static files from the 'frontend' folder
app.use(express.static(path.join(__dirname, 'frontend')));

// Handle API route
app.get('/api/scrape', async (req, res) => {
  try {
    const keyword = req.query.keyword;
    const data = await scraper.scrapeAmazon(keyword);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Handle all other routes by sending the 'index.html' file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
