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

//code to write server

// const express = require('express')//creat var & call express library
// const app = express() //create express function & store return in app

// app.get('/', (req, res) => {
//     res.send('You are home')
// })

// app.get('/add/:num1/:num2', (req, res) => {
//     let num1 = parseInt(req.params.num1)
//     let num2 = parseInt(req.params.num2)
//     console.log(num1 + num2)
//     res.send(`${num1 + num2}`)
// })

// app.get('/subtract/:num1/:num2', (req, res) => {
//     let num1 = parseInt(req.params.num1)
//     let num2 = parseInt(req.params.num2)
//     console.log(num1 - num2)
//     res.send(`${num1 - num2}`)
// })
// app.get('/multiply/:num1/:num2', (req, res) => {
//     let num1 = parseInt(req.params.num1)
//     let num2 = parseInt(req.params.num2)
//     console.log(num1 * num2)
//     res.send(`${num1 * num2}`)
// })