import React, {component} from 'react';
import {View, Text, Button} from 'react-native';
function HomeScreen({ navigation }) {
    return (
      <View >
        <Text>Home Screen</Text>
      <Button title="Dashboard" onPress={()=>{navigation.navigate('ProfileStack')}} />
      </View>
    );
  }

  export default HomeScreen;