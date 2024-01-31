import * as React from 'react';
import { View, Text, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Profile from './screens/Profile';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Click" 
        onPress={() => {navigation.navigate("Login")}}/>
      <Button
        title="Login"
        onPress={() => {navigation.navigate("Login",{
          title:'Test params',
          id:1,
          name : "Android"
        })}}
       />
        <Button
        title="Profile"
        onPress={() => {navigation.navigate("Profile")}}
       />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
        options={{title: "NotePad"}} 
        />
        <Stack.Screen name="Login" component={Login}
                options={({ route }) => ({ title: route.params.title })}
         />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;