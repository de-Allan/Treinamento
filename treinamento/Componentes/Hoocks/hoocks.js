import { useEffect, useState } from "react"
import { SafeAreaView, StyleSheet, Text, TextInput, Button } from "react-native"

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

                <TextInput
                value={input}
                onChangeText={setInput}
                placeholder={'Digite algo neste campo'}
                keyboardType='numeric'
                />

                <Button 
                    title='button' 
                    onPress={() => Alterando()} 
                />

                <Text>{input}</Text>
                <Text>{alterar}</Text>

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