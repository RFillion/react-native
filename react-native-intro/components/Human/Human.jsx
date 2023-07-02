import { Image, Text } from "react-native"

export default function Human({firstName, name, age, car, children, isHappy}) {
    return (
        <>
            <Text>Mon prénom est {firstName} et mon nom est {name}, j'ai {age} ans </Text>
            <Text>Ma voiture est une {car.brand}, et elle va au max à {car.maxSpeed}km/h </Text>
            {children}
        </>
    )
}