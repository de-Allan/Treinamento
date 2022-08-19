const express = require('express')
const app = express()

/*
aqui vamos pedir para ele enviar entao uma mensagem para meu servidor para isso tambem vou utilzar uma função
que recebe tres parametros req de requisição ele basicamete vai pegar as informações, temos tambem o res
de resposta ele vai então enviar uma resposta e temos por ultimo o next. 
*/

// no metodo abaixo pedi para ele enviar a seguinte mensagem: 
// para ver a mensagem digite no seu navegador a seguinte url:
// http:localhost:3000

app.use((req, res) => {
    res.send('Estou <b> bem! </b>') // ele entende html esse <b></b> é negrito
})

// para qualquer url ele vai enviar essa mensagem!!!


app.listen(3000, () => {
    console.log('servidor rodando')
})

//para testar copie e cole esse aquivo no index.js