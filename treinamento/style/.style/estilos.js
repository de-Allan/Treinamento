import { SafeAreaView, StyleSheet } from "react-native"

const App = () => {
    return (
        <SafeAreaView>

        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',

//     justifyContent:      // eixo principal
//     justifyContent: 'center'     // centraliza
//     justifyContent: 'flex-start'     // a partir do inicio 
//     justifyContent: 'flex-end'     // a partir do final
//     justifyContent: 'space-around'     // separa os elemnetos por um espaçamento ao redor de cada um
//     justifyContent: 'space-evenly'     // separa os elementos igualmente 
//     justifyContent: 'space-between'     // coloca o espaçamento apenas entre os elementos

//     alignItems:      // eixo segundario
//     alignItems: 'center'     // centraliza
//     alignItems: 'flex-start'     // a partir do inicio 
//     alignItems: 'flex-end'     // a partir do final
//     alignItems: 'stretch'    // ele estica todos os elementos, porem se o item tiver largura fixa n funciona
//     alignItems: 'baseline'     // coloca todos encostado na linha do eixo principal, mas se todos tiverem o mesmo tamanho não havera diferença

        flexDirection: 'row',
        height: 350,
        width: '100%',
        marginBottom: 10,
        paddingVertical: 10,
        borderRadius: 4,

    }
})

export default App 