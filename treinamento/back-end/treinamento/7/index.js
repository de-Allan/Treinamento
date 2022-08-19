const express = require('express')
const app = express()
require('./treinamento/7/produto')(app, 'com param')


app.listen(3000, () => {
    console.log('servidor rodando')
})