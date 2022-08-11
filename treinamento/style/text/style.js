import { useState } from "react"
import { SafeAreaView, StyleSheet, Text } from "react-native"

const App = () => {

    const [Full, setFull] = useState(false)
    const texto = 'sdgasdgakjshdaslkajsdlkajsldkjalskdajslkdjalsjdalkjdlaksjdlajsklsjldjalsdjkakld. comecando uma novo texto pois tenho tempo para digitar'

    return(
        <SafeAreaView style={styles.container}>
            
            <Text style={styles.italico} >{texto}</Text>
            <Text style={styles.Bold} >{texto}</Text>
            <Text style={styles.italico} >{texto}</Text>
            <Text style={styles.italico} >{texto}</Text>

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
    italico: {
        fontStyle: 'italic',
    },
    Bold: {
        fontWeight: '500'
    },
    Undeline: {
        textDecorationLine: 'line-through'
    }
})

export default App