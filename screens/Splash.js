import React from "react";
import {View,Image,Text} from 'react-native';


const Splash= ()=> {
return(
    <View>
        <Image source={require('../images/splash.jpg')} style={{height:'100%', width:'100%'}} />
        <Text style={{color:'#ffffff', position:'relative', zIndex:2, marginTop: -48 , alignItems: 'center'}}>Notepad New version</Text>
    </View>
)}


export default Splash;