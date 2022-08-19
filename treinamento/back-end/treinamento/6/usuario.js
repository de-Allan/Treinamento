function Salvar(req, res) {
    res.send('Usuário > Salvar')
}

function obter(req, res) {
    res.send('Usuário > Obter')
}

module.exports = { Salvar, obter }