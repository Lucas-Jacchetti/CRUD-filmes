const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    return response.json('hello world')
})

app.listen(port, () => {
    console.log('Servidor up')
})