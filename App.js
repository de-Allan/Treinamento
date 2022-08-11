import { useState } from "react"
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from "react-native"

const App = () => {

const [k, setk] = useState(false)

function chave () {

    setk(!k)

}

    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity
                style={styles.Button}
                onPress={chave}
            >
                <Text style={styles.pesquisa}>Clique aqui</Text>

            </TouchableOpacity>

            {
                k === true ?
                <Text style={{color:'green'}}>O botao esta true </Text>
                : 
                <Text style={{color: 'red'}}>O botao esta false</Text>
            }

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    pesquisa: {
        color: 'white'
    },

    Button: {
        marginTop: 30,
        width: 100,
        backgroundColor: 'blue',
        borderRadius: 4,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export default App