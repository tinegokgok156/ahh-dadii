const express = require('express');
const cors = require('cors');
const quotes = require('./quotes/quotes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/quote', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json({ quote: quotes[randomIndex] });
});

app.listen(PORT, () => {
    console.log(`Motivational Quotes API running on port ${PORT}`);
});
