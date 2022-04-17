import { React } from 'react';
import { Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text> Hey. My Name is {props.name}. I am a student in CIS340 </Text>
    </View>
  );
}

export default function MultiComp(){
  return(
    <View>
      <Text> Welcome to CIS340</Text>
      <Student name = "Katherine Brown"/>
      <Student name = "Ally Kipper"/>
      <Student name = "Nancy Cowan"/>
      <Student name = "Samantha Brown"/>
    </View>
  );
}
