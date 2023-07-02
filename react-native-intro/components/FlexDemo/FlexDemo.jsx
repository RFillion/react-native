import { StyleSheet, View } from "react-native";

export default function FlexDemo() {
    return (
        <View style={s.container}>
            <View style={s.box1} />
            <View style={s.box2} />
            <View style={s.box3} />
        </View>
    )
}

/* Styles */
const s = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box1: {
        height: 100,
        width: 100,
        backgroundColor: 'blue'
    },
    box2: {
        height: 100,
        width: 100,
        backgroundColor: 'white'
    },
    box3: {
        height: 100,
        width: 100,
        backgroundColor: 'red'
    },
});