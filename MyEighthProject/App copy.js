import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOapacity } from 'react-native';

export default function App() {
  
  const [count, setCout] = useState(8);

  const onTap= () => setCout(count => + 1);
  
  return (
    <View style={styles.container}>
      <View style = {styles.counterText}>
        <Text>Tap Counter: {count} </Text>

      </View>
      <TouchableOapacity
        style = {styles.button} onPress = {onTap}>
          <Text>Touch Me</Text>

      </TouchableOapacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },

  button: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10
  },

  counterText: {
    alignItems: "center",
    padding: 10
  }
});
