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

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let total = parseInt(req.params.total)
    let tipPercentage = parseInt(req.params.tipPercentage)
    console.log(tipPercentage * total / 100)
    res.send(`${tipPercentage * total / 100}`)
})

app.listen(3000, () => {
    console.log(`You are listening to Port 3000...`)
})
