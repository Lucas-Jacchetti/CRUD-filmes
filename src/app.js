const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send({
        team: 'gremio',
        rival: 'inter'
    })
    return res.json('hello world')
})

app.post('/team/:id', (req, res) => {
    const { id } = req.params;
    const { team } = req.body;
    
    res.send({
        team: 'time com ${id} como id',
    })
})

app.listen(port, () => {
    console.log('Servidor up')
})