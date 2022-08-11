this.Cor = 'red'

const Diga = () => {
    console.log(this.Cor)
}

const Carro = {
    Cor: 'blue',
    Fale: Diga
}

const Abacaxi = {
    Cor: 'Verde e Laranja ',
    FaleCor: Carro.Fale
}

function OutraFuncão () {
    console.log(this.Cor)
}

Diga()
Carro.Fale()
Abacaxi.FaleCor()
OutraFuncão()

