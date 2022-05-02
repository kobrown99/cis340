import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <image
        style = {styles.localCSULogo}
        source={csuLogo}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

localCSULogo: {
  width: 50,
  height: 65,
},

urlCSULogo: {
  width: 50,
  height:50
},

stretchLogo: {
  width: 50,
  height: 200,
  resizeMode: 'stretch',
}
});