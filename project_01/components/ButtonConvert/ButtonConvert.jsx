import { StyleSheet, TouchableOpacity, Text } from "react-native"

export default function ButtonConvert({onPress, unit}) {
    return (
        <TouchableOpacity style={s.button} onPress={onPress}>
            <Text style={s.text}>Convertir en {unit}</Text>
        </TouchableOpacity>
    )
}

const s = StyleSheet.create({
    button : {
        alignSelf: 'flex-start',
        borderRadius: 10,
        backgroundColor: '#1A1A1A',
        paddingHorizontal: 45,
        paddingVertical: 15,
    },
    text : {
        color: 'white',
        fontWeight: 'bold'
    }
})