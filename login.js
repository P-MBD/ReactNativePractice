import React from "react";
import {View, Text, TextInput, StyleSheet} from 'react-native';

const Login= ()=> {
return(
    <View style={styles.container}>
        <Text style={styles.logo}>Hey App</Text>
        <View style={styles.inputView}>
               <TextInput style={styles.inputText} placeholder="Username" />
        </View>
      
        <View style= {styles.inputView}>
           <TextInput style={styles.inputText} placeholder="Password" placeholderTextColor="#003f5c" />
        </View>
        <Text style={styles.forgot}> Forgot Password </Text>
        <View style={styles.loginButton}>
           <Text>Login</Text>
        </View>
       
        <Text style={styles.signUp}> Sign Up</Text>
    </View>
)}

const styles= StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'center',
    backgroundColor: '#003f5c',
  },
  logo:{
    fontWeight:'bold',
    fontSize: 50,
    color:'#fb5b5a',
    marginBottom: 40,
  },
  inputView:{
    width:'80%',
    backgroundColor:'#465881',
    borderRadius: 25,
    height:50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:'white',
    fontSize:11
  },
  loginButton:{
    width:'80%',
    backgroundColor:'#fb5b5a',
    borderRadius: 25,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    marginBottom:20,
  },
  signUp:{
    color:'white',
    fontWeight:'bold',
    fontSize:14,
  },
})
export default Login;