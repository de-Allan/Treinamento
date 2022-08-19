/* 
a primeira coisa que faço é importar o express, mas para isso uso o
o require, pois não podemos mais fazer o import do modo como é feito no front-end
como: import {View} from 'react-native'
*/

const express = require('express');
const app = express();

/*
 a variavel app vai ser a que eu irei comandar tudo entao vou pedir para ela rodar
o meu servidor
*/

//app.listen(3000)


/*
o comando a cima vai fazer ele rodar o servidor na porta 3000, porem para eu saber se ele
esta rodando vou chamar uma função callback, uma função callback é uma função que é chamada
quando ocorre algum evento neste caso logo após rodar o servidor na porta 3000, entao vamos la 
*/

app.listen(3000, () => {
    try {
        console.log('servidor rodando')
    } catch (erro) {
        console.log('problema ao rodar o servidor' + erro)
    }
})

/*
ok, temos entao nossa função sua função callback, ele vai usar o metodo try, para tentar
mostrar no terminal 'servidor rodando' logo após rodar o servidor, caso não consiga vai ir para
o catch que é quando ele não consegue, e ele recebe o parametro do erro e diz porque não conseguiu
*/

//agora o mais legal para testar vc precisa abrir seu terminal e digitar node index.js

/*
agora para vc fazer qualquer mudança vc precisa parar o servidor e que é precionando Ctrl + C e 
novamente rodar node index.js mas para não precisar ficar sempre parando e rodando o arquivo, então
usamos o nodemon que vai ver o que foi alterado e automaticamente reinicia :)
para isso ao inves de digitar node index.js digite: nodemon index.js
*/

/*agora que ja vimos isso pode ir para a pasta treimamentos la temos a continuação, mas para testar é
necessario copiar o arquivo e colar aqui neste arquivo.
*/