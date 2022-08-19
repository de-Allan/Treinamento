module.exports = (app, text) => {

    function Salvar() {
        res.send('Usuário > Salvar > ' + text)
    }
    
    function obter(req, res) {
        res.send('Usuário > Obter > ' + text)
    }

    app.post('/produto', Salvar)
    app.get('/produto', obter)

    return { Salvar, obter}
}