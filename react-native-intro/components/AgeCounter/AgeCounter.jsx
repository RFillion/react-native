import { useState } from "react"
import { Text } from "react-native"
import { TouchableOpacity } from "react-native"
import { StyleSheet } from "react-native"

export default function AgeCounter() {
    const [age, setAge] = useState(30);

    return (
        <>
            <TouchableOpacity style={s.button} onPress={() => setAge(age + 1)}>
                <Text style={{color: 'white'}}>Augmenter</Text>
            </TouchableOpacity>
            <Text>J'ai {age} ans</Text>
        </>
    )
}

const s = StyleSheet.create({
    button : {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#0080FF',
        borderRadius: 10,
        alignSelf: "flex-start"
    }
})