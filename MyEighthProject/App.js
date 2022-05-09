import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOapacity, Image } from 'react-native';

export default function App() {
  
  const [count, setCout] = useState(0);

  const onTap = () => setCout(count => count + 1);
  
  return (
    <View style={styles.container}>
      <View style = {styles.counterText}>
        <Text>Tap Counter: {count} </Text>

      </View>
      <TouchableOapacity
        style = {styles.button} 
        onPress = {onTap}>
          <Text>Touch Me</Text>
      </TouchableOapacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "FFFFE0"
  },

  button: {
    alignItems: "center",
    backgroundColor: "#778899",
    padding: 10
  },

  inst: {
    fontSize: 18,
    color: "#87CEFA",
    marginHorizontal: 15,
    marginBottom: 10,
  },

  logo: {
    width: 305,
    height: 300,
    marginBottom: 20
  }, 

  buttonText: {
    fontSize: 20,
    color: "#fff"
  }
});
