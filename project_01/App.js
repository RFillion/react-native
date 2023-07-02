import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import InputTemp from './components/InputTemp/InputTemp';
import TempDisplay from './components/TempDisplay/TempDisplay';
import { default_temp, default_unit } from './constante';
import { getOppositUnit, convertTemp, isCold } from './services/temp-service';
import ButtonConvert from './components/ButtonConvert/ButtonConvert';

export default function App() {
  const [inputValue, setInputvalue] = useState(default_temp);
  const [currentUnit, setCurrentUnit] = useState(default_unit);
  const [currentBackground, setCurrentBackground] = useState([]);

  const oppositeUnit = getOppositUnit(currentUnit);

  const hotTempGradient = ['#ffed00', '#ff8f00'];
  const coldTempGradient = ['#00ccff', '#04338b'];

  useEffect(() => {
    const tempAsFloat = Number.parseFloat(inputValue);
    if (!isNaN(tempAsFloat)) {
      const isColdBackground = isCold(inputValue, currentUnit);
      setCurrentBackground(isColdBackground ? coldTempGradient : hotTempGradient);
    }
  }, [inputValue, currentUnit]);

  function getConvertedTemp() {
    const valueFloat = Number.parseFloat(inputValue);
    return isNaN(valueFloat) ? '' : convertTemp(oppositeUnit, valueFloat).toFixed(2);
  }

  return (
    <LinearGradient colors={currentBackground} style={s.container}>
      <View style={s.workspace}>
        <TempDisplay value={getConvertedTemp()} unit={oppositeUnit} />
        <InputTemp defaultValue={default_temp} onChangeText={setInputvalue} unit={currentUnit} />
        <View>
          <ButtonConvert onPress={() => setCurrentUnit(oppositeUnit)} unit={currentUnit} />
        </View>
      </View>
    </LinearGradient>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  workspace: {
    height: 250,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
