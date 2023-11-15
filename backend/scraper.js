const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeAmazon(keyword) {
    const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const products = [];
    $('.s-result-item').each((index, element) => {
        const title = $(element).find('h2 span').text();
        const rating = $(element).find('.a-icon-alt').text();
        const reviews = $(element).find('.a-size-base').text();
        const image = $(element).find('img').attr('src');

        products.push({
            title,
            rating,
            reviews,
            image,
        });
    });

    return products;
}

module.exports = { scrapeAmazon };
