import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function App() {
  return (
    <View>
      <View style = {{width: 40, height: 40, backgroundColor: 'red'}}/>
      <View style = {{width: 100, height: 100, backgroundColor: 'yellow'}}/>
      <View style = {{width: 100, height: 100, backgroundColor: 'black'}}/>
    </View>
  );
}

