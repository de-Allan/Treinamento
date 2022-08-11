import { SafeAreaView, StyleSheet, Text } from "react-native"

const App = () => {

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.Google('orange')}>G</Text>
            <Text style={styles.Google()}>o</Text>
            <Text style={styles.Google('blue')}>o</Text>
            <Text style={styles.Google('#258963')}>g</Text>
            <Text style={styles.Google('#789654')}>l</Text>
            <Text style={styles.Google('purple')}>e</Text>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    Google1: {
        fontSize: 40,
        color: 'red'
    },
    Google2: {
        fontSize: 40,
        color: 'blue'
    },
    Google3: {
        fontSize: 40,
        color: 'purple'
    },
    Google4: {
        fontSize: 40,
        color: '#147896'
    },
    Google5: {
        fontSize: 40,
        color: 'black'
    },
    Google6: {
        fontSize: 40,
        color: 'orange'
    },
    
    Google (color) {
        return {
            fontSize: 40,
            color: color || 'red'
        }
    }

})

const Google = (color) => {
    return {
        fontSize: 40,
        color: color || 'red'
    }
}

export default App