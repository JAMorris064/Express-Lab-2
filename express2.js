const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('You are home.')
})

app.get('/greeting', (req, res) => {
    res.send(`Nice to see you, Friend!`)
})

app.get('/greeting/:name', (req, res) => {
    res.send(`Nice to meet you, ${req.params.name}!`)
})

app.listen(3000, () => {
    console.log(`You are listening to Port 3000...`)
})
