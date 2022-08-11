import { useState } from "react"
import { Alert, SafeAreaView, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from "react-native"

const App = () => {

    const [spinner, setSpinner] = useState(false)

    const enviar = () => {
        Alert.alert('foi enviado com sucesso!') 
        setSpinner(!spinner)
    }

    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity
                style={styles.Button}
                onPress={enviar}
            >
                <Text>Enviar</Text>
                {
                    spinner ?
                    <ActivityIndicator 
                    style={{marginLeft: 20}}
                    color= '#FFF'
                    size={'small'}
                    />
                    : null
                }
            </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    Button: {
        flexDirection: 'row',
        backgroundColor: 'blue',
        elevation: 20,      // android
        shadowColor: 'red',
        shadowOffset: {     // posição da sombra em relação a caixa
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.5, // opacidade da sombra 
        shadowRadius: 5     // determina o raio de desfoque da sombra
    }

})

export default App