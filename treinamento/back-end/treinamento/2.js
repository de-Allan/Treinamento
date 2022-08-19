const express = require('express')
const app = express()

app.use('/opa', (req, res) => {
    res.send('Estou <b> bem! </b>') 
})

// ele so vai mandar para a url com esse caminho /opa
// para ver agora vc precisa acessar a rota /opa entao digite:
// http:localhost:3000/opa

/*
temos diversos metodos como .get, .post, .delete, .put
o .get que é com o qual veremos ele vc consegue ler como o arquivo que vc renderizou no arquivo anterior
ele basicamente le pela url.
o .post ele vai literalmente postar/criar algo e enviar
o .delete vai apagar
e o .put vai atualizar 
*/

//usando o metodo .use ele aceita qualquer metodo como get e post, mas se quiser especifico coloque entao
//.get ou .post e etc...
// .options ele é o pré voo ele fala qual metodo aquela url aceita receber.

app.listen(3000, () => {
    console.log('servidor rodando')
})