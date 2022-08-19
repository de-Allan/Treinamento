function Saudação(name) { 

    /*
    passar uma função Middleware dentro pois se não ele ia fazer essa a função 
    middleware e não poderia receber o parametro name
    */
    // middleware são basicamente essas funções que tem req, res e next como paramentro

    return function (req, res, next) {
        console.log('Seja bem vindo ' + name)
    }
}

module.exports = Saudação
// é exportado por modulos pelo node