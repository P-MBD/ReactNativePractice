import React from "react";
import {SafeAreaView, View, Button, Text} from 'react-native';

function Profile({navigation}){
    return(
        <View>
            <Text> Profile Screen </Text>
            <Button title="Go Back"
             onPress={() => {
                navigation.goBack();
             }} 
            />
        </View>
    )
}

export default Profile;