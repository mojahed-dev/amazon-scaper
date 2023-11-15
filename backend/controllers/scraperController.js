const scraper = require('../scraper');

const scrapeAmazonController = async (req, res) => {
  try {
    const keyword = req.query.keyword;
    const data = await scraper.scrapeAmazon(keyword);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { scrapeAmazonController };
