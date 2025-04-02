const express = require('express');
const app = express();
//const filmRoutes = require('../src/routes/filmRoutes');
const reviewRoutes = require('../src/routes/reviewRoutes');

const port = 3000;

app.use(express.json())

//app.use('/films', filmRoutes);
app.use('/reviews', reviewRoutes);


app.listen(port, () => {
    console.log('Servidor up')
})