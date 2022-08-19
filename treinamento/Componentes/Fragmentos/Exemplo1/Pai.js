import { useEffect, useState } from "react"
import { SafeAreaView, StyleSheet } from "react-native"
import Filho from "./treinamento/Componentes/Fragmentos/Exemplo1/Filho"

const App = () => {

    let numero = 0 

    const [alterar, setAlterar] = useState('')
    const [input, setInput] = useState('')

    useEffect( () => {

        const time = setInterval(() => {
            console.log(numero++);
        }, 1000)

        return () => clearInterval(time)

    }, [alterar] )


    const Alterando = () => setAlterar(alterar + ' abacaxi')

    return (
        <SafeAreaView style={styles.container}>

            <Filho
                input={input}
                setInput={setInput}
                Alterando={Alterando}
                alterar={alterar}
            />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

})

export default App