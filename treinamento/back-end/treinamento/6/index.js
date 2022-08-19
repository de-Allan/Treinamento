const express = require('express')
const app = express()

const usuarioAPI = require('./treinamento/6/usuario')

app.post('/usuario', usuarioAPI.Salvar)

app.get('/usuario', usuarioAPI.obter)


app.listen(3000, () => {
    console.log('servidor rodando')
})