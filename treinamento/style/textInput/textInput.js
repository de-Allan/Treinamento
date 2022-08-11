import { useState } from "react"
import { SafeAreaView, StyleSheet, Text, TextInput } from "react-native"

const App = () => {

    const [input, setInput] = useState('')

    return(
        <SafeAreaView style={styles.container}>
        
            <TextInput
                style={{backgroundColor: '#FFF'}} 
                value={input}
                onChangeText={setInput}
                placeholder={'Digite algo neste campo'}
                placeholderTextColor={'#987456'}
                keyboardType='numeric'
                secureTextEntry={true}
                multiline={true}
            />

            <Text>
                {input}
            </Text>

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

})

export default App