import { TextInput, Text, View } from "react-native"
import { StyleSheet } from "react-native"

export default function InputTemp({defaultValue, onChangeText, unit}) {
    return (
    <View style={s.container}>
        <TextInput 
            style={s.input} 
            placeholder="Écrivez une température" 
            keyboardType="numeric" 
            maxLength={4} 
            defaultValue={defaultValue}
            onChangeText={onChangeText} />
        <Text style={s.unit}>{unit}</Text>
    </View>
)}

const s = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 15,
        paddingLeft: 20
    },
    unit: {
        position: 'absolute',
        right: 20
    }
})