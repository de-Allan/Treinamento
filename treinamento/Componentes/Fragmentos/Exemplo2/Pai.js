import { SafeAreaView, StyleSheet } from "react-native"
import P , { Filho1, Filho2 } from "./Filho"

export default Pai = () => {
    return(
        <SafeAreaView style={styles.container}>

            <Filho1 />
            <Filho2 />
            <P />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple', 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})