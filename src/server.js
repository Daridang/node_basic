'use strict'

const express = require('express')
const { posts, town } = require('./modules/data')
const app = express()
const port = 3000

app.get('/api/town', (req, res) => {
    res.status(200).send(town)
})

app.get('/posts', (req, res) => {
    res.status(200).send(posts)
})

app.get('/', (req, res) => {
    res.status(200).send(`<h1>Helliiooouu from back end</h1>`)
})

app.listen(port, () => {
    console.log(`App listning on port ${port}`)
})