import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.yellow}>Just yellow Text</Text>
      <Text style = {styles.largGreen}> This is Big Green</Text>
      <Text style = {[styles.yellow, styles.largGreen]}>Yellow Text, then large green</Text>
      <Text style = {[styles.largGree, styles.yellow]}>Large green Text, then yellow</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    marginTop: 60,
},
largGreen: {
  color: 'green',
  fontWeight: 'bold',
  fontSize: 20,
},
yellow: {
  color: 'yellow',
  fontSize: 10,
}

});