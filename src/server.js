const express = require('express');
const app = require('./app');
const port = 3000;
const filmRoutes = require('../src/routes/filmRoutes');
const reviewRoutes = require('../src/routes/reviewRoutes');

app.use(express.json())

app.use('/films', filmRoutes);
app.use('/reviews', reviewRoutes);

app.listen(port, () => {
    console.log(`Servidor up na porta ${port}`);
});
