const express = require('express')
const app = express()

app.use('/opa', (req, res, next) => {
    console.log('Antes')
    next() //colocando esse next ele ira para a proxima que tiver esse masma url /opa
    //pois se não tive-se as prozimas funções não seria chamadas
})

app.use('/opa', (req, res) => {
    console.log('durante')
    res.json({ // faz esse objeto se transformar em um json.
        name: 'iPAd 32GB',
        price: 18899.00,
        discount: 0.12
    })
    
})


app.listen(3000, () => {
    console.log('servidor rodando')
})