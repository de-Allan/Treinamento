const express = require('express')
const app = express()

const Saudação = require('./treinamento/.6/saudaçãoMid')

app.use(Saudação('João'))

app.listen(3000, () => {
    console.log('servidor rodando')
})

// copie apenas esse arquivo. ele basicamente vai so fazer o importe da função do arquivo ao lado