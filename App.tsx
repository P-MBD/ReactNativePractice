import * as React from 'react';
import { View, Text, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import AddNote from './screens/AddNote';
import Profile from './screens/Profile';
import Dashboard from './screens/Dashboard';


const Drawer = createDrawerNavigator();

const HomeStack= createNativeStackNavigator();
const HomeStackScreen =({navigation})=>(
  <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} 
         options={{
          Title: "Note",
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('AddNote')}
              title="Info"
              color="#000"
            />
          ),
        }}
        ></HomeStack.Screen>
        <HomeStack.Screen name="AddNote" component={AddNote}></HomeStack.Screen>
  </HomeStack.Navigator>
)
const ProfileStack = createNativeStackNavigator();
const ProfileStackScreen = ()=> (
  <ProfileStack.Navigator  initialRouteName="Dashboard">
      <ProfileStack.Screen name="Profile" component={Profile}></ProfileStack.Screen>
      <ProfileStack.Screen name="Dashboard" component={Dashboard}></ProfileStack.Screen>
  </ProfileStack.Navigator>
)
function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeStack">
          <Drawer.Screen name="HomeStack" component={HomeStackScreen}/> 
          <Drawer.Screen name="ProfileStack" component={ProfileStackScreen}  />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;