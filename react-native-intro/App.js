import { Text, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { s } from './App.style';
import Human from './components/Human/Human';
import FlexDemo from './components/FlexDemo/FlexDemo';
import AgeCounter from './components/AgeCounter/AgeCounter';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <AgeCounter />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
