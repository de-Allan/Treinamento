import { Text, TextInput, Button } from "react-native"

const Filho = ({ input, setInput, Alterando, alterar  }) => {

    return (
        <>
            <TextInput
                value={input}
                onChangeText={(text) => setInput(text)}
                placeholder={'Digite algo neste campo'}
                keyboardType='numeric'
            />

            <Button
                title='button'
                onPress={() => Alterando()}
            />

            <Text>{input}</Text>
            <Text>{alterar}</Text>
        </>
    )
}

export default Filho