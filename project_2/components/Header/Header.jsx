import { StyleSheet, Text, View } from "react-native"

export default function Header({styles}) {
    return (
    <View style={[styles]}>
        <Text style={s.logo}>Listo</Text>
    </View>
    )
}

const s = StyleSheet.create({
    logo: {
        fontFamily: 'Lobster-Regular',
        color: '#7492c2',
        fontSize: 100,
        marginBottom: 10
    },

})