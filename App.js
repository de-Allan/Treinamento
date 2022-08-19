import { View, Text, StyleSheet, safeAreaView, FlatList } from 'react-native'
import nome from './src/nome.js'

export default function App() {

    return (
        <View style={styles.container} >

            <FlatList
                data={nome}
                keyExtractor={nome.id}
                renderItem={({ item: nome }) => {
                    return (
                        <Text key={nome.id} >
                            Pessoa {nome.id} tem nome {nome.nome} com idade de {nome.idade}
                        </Text>
                    )
                }}
            />

            {nome.map(nome => {
                return (

                    <Text key={nome.id} >
                        Pessoa {nome.id} tem nome {nome.nome} com idade de {nome.idade}
                    </Text>

                )
            })}
            
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center'
    }

})