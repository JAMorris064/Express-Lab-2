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


const eightBall = [
 "It is certain",
 "It is decidedly so", 
 "Without a doubt", 
 "Yes definitely",
 "You may rely on it", 
 "As I see it yes", 
 "Most likely", 
 "Outlook good",
 "Yes", 
 "Signs point to yes", 
 "Reply hazy try again", 
 "Ask again later",
 "Better not tell you now", 
 "Cannot predict now", 
 "Concentrate and ask again",
 "Don't count on it",
 "My reply is no",
 "My sources say no",
 "Outlook not so good", 
 "Very doubtful"
]
 app.get('/magic', (req, res) =>{
 res.send(`${req}`)
 res.send(eightBall[req.params.magic])   
 })


const bottles = [0]

app.get('/bottles', (req, res) => {
    res.send('99 Bottles of Beer on the Wall') 
})
app.get('/bottles/:number_of_bottles', (req, res) => {
    if (req.params.number_of_bottles === 0) {
       res.send(bottles[req.params.number_of_bottles])
    } else {
    res.send([req.params.number_of_bottles - 1])}
})


app.listen(3000, () => {
    console.log(`You are listening to Port 3000...`)
})
