import  React  from 'react';
import { Text, TextInput, View} from 'react-native';

function MySecondApp() {

  return (
    <View>
      <Text> 
        Hello, I am a student in CIS340!
      </Text>
    </View>

   );
}

export default function MultiComp(){
  return(
    <View style = {{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  }}>
      <Text> {"\n\n\n\n\n\n"} Welcome to My Class</Text>
      <MySecondApp/>
      <MySecondApp/>
      <MySecondApp/>
      <MySecondApp/>
    </View>
  )
}
