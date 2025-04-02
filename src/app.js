const express = require('express');
const app = express();
const filmRoutes = require('../src/routes/filmRoutes');
const port = 3000;

app.use(express.json())

app.use('/films', filmRoutes);


app.listen(port, () => {
    console.log('Servidor up')
})