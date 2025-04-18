const express = require('express');
const app = express();
const filmRoutes = require('../src/routes/filmRoutes');
const reviewRoutes = require('../src/routes/reviewRoutes');

app.use(express.json())

app.use('/films', filmRoutes);
app.use('/reviews', reviewRoutes);

module.exports = app;