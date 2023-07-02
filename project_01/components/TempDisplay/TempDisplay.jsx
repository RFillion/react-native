import { StyleSheet, Text } from "react-native"

export default function TempDisplay({value, unit}) {
    return <Text style={s.text}>{value} {unit}</Text>
}

const s = StyleSheet.create({
    text: {
        fontSize: 50,
        color: 'white'
    }
})