const express = require('express')
const app = express()

// aqui neste arquivo temos os diferentes meio por onde sera passado o parametro
// no .get o parametro é passado na propria url
// ja no .post é passado dentro do body entao se torna um pouco mais seguro

app.get('/cliente/:id', ( req, res, next )=> {
    res.send(`Cliente ${req.params.id} selecionado!`)
    //http:localhost:3000/cliente/6187681781
})


app.post('/corpo', (req, res) => {
    let corpo = ''
    req.on('data', function(parte) {
        corpo += parte
    })

    req.on('end', function() {
        res.send(corpo)
    })
}) // por ser mais chato de trabalhar usamos a biblioteca body-parser que vai resumir isso
// importante tambem que .post não é para leitura entao não é possivel ver mesmo passado certinho a rota desde



app.listen(3000, () => {
    console.log('servidor rodando')
})