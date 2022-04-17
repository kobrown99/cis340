import { React } from 'react';
import { Text, Image, View } from 'react-native';

export default function MyDog() {

  let pic = {
    uri: "https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/dog2.png"} 
  return (
    <View>
      <Image source = {pic}
      style = {{width: 200, hight: 200}}
      />
      <Text> Hello. This is my dog </Text>
    </View>
  );
}


