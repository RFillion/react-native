import { useState } from "react"
import { Text } from "react-native"
import { TouchableOpacity } from "react-native"
import { StyleSheet } from "react-native"

export default function AgeCounter() {
    const [age, setAge] = useState(30);

    return (
        <>
            <TouchableOpacity onPress={() => setAge(age + 1)}>
                <Text>Augmenter</Text>
            </TouchableOpacity>
            <Text>J'ai {age} ans</Text>
        </>
    )
}