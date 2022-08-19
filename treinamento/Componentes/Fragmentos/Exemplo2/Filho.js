import { View, Text } from "react-native"
import style from './Style.filho'

export const Filho1 = () => {
    return(
        <>
            <View style={style.qua1} />
            <View style={style.qua2} />
        </>
    )
}

export const Filho2 = () => {

    const texto = 'Um texto qualquer digitado auqui jhsagdjashgdjahgjd'

    return(
        <>
            <Text>{texto}</Text>
        </>
    )
}

const FilhoPrincipal = () => {
    return(
            <Text>Dentro do Filho Principal</Text>
    )
}

export default FilhoPrincipal