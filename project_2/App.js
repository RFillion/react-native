import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import Header from './components/Header/Header';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Lobster-Regular': require('./assets/fonts/Lobster-Regular.ttf'),
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
    'inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <Header styles={s.header} />
          <View style={s.body}>
            <Text>body</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <Text>footer</Text>
      </View>
    </>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30394a',
    paddingHorizontal: 20,
  },
  header: { flex: 1 },
  body: { flex: 5 },
  footer: { height: 120, backgroundColor: '#232936', padding: 20 },
});
