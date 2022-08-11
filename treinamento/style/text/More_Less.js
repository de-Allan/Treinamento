import { useState } from "react"
import { SafeAreaView, StyleSheet, Text } from "react-native"

const App = () => {

    const [Full, setFull] = useState(false)
    const texto = 'sdgasdgakjshdaslkajsdlkajsldkjalskdajslkdjalsjdalkjdlaksjdlajsklsjldjalsdjkakld. comecando uma novo texto pois tenho tempo para digitar'

    return(
        <SafeAreaView style={styles.container}>
            {Full ? (
            <Text>
                {texto}
                <Text
                    style={styles.more_less}
                    onPress = {() => setFull(false)}
                > Less
                </Text>
            </Text>
            ) : (
                <Text>
                    {texto.split('.')[0] + '.'}
                <Text
                    style={styles.more_less}
                    onPress = {() => setFull(true)}
                > More
                </Text>
            </Text>
            )}
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
    more_less: {
        color: '#589603',
        fontWeight: '500'
    } 
})

export default App