import React from "react";
import {SafeAreaView, View, Button, Text} from 'react-native';

function Chat({navigation}){
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text> Chat Screen </Text>
            <Button title="Go Back"
             onPress={() => {
                navigation.goBack();
             }} 
            />
        </View>
    )
}

export default Chat;