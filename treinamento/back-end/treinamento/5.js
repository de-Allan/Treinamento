const express = require('express')
const app = express()
const body = require('body-parser')

app.use(body.text()) // definimos qual o tipo de varivale que vai ser trabalhada
app.use(body.json())

app.post('/corpo', (req, res) => {

    // let corpo = ''
    // req.on('data', function(parte) {
    //     corpo += parte
    // })

    // req.on('end', function() {
    //     res.send(corpo)
    // })

    res.send(req.body) //precisa apenas dessa linha
})


app.listen(3000, () => {
    console.log('servidor rodando')
})