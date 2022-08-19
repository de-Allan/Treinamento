const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html') // vai enviar o arquivo index.html para o meu servidor na rota '/'
})

app.get('/sobre', function(req,res){
    res.send('Minha pagina sobre')
})

app.get('/blog', function(req,res){
    res.send('Minha pagina de blog')
})

//como visto anteriormente podemos usar o res.send e enviar tambem trechos html que ele entende.
app.get('/ola/:cargo/:nome', function(req,res){
    res.send('<h1>Hello ' + req.params.nome + '</h1>'
        +'<h2> Seu Cargo é: ' + req.params.cargo + '</h2>')
        +'<h3> Seu cor favortia é: ' + req.params.cor + '</h3>'
})

app.listen(3000, function(){
    console.log('Servidor rodando na url http:localhost8081')
});