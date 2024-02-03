import React from "react";
import {SafeAreaView, View, Button, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Chat from "./Chat";
import Call from "./Call";
const Tab = createBottomTabNavigator();
function Dashboard({navigation}){
    return(
        
           <Tab.Navigator>
                  <Tab.Screen name="chat" component={Chat} />
                  <Tab.Screen name="call" component={Call} />
            </Tab.Navigator>
      
    )
}
export default Dashboard;