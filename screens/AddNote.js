import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import SQLite from 'react-native-sqlite-2'
const db = SQLite.openDatabase('note.db', '1.0', '', 1) 
function AddNote(){
    return(
        <View style={styles.container}>
        <Image
          style={styles.bgImage}
          source={{ uri: 'https://www.bootdey.com/image/400x400/FF00FF/FF00FF' }}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Full name"
            underlineColorAndroid="transparent"
          
          />
          <Image
            style={styles.inputIcon}
            source={{
              uri: 'https://img.icons8.com/color/40/000000/circled-user-male-skin-type-3.png',
            }}
          />
        </View>
  
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Description"
            underlineColorAndroid="transparent"
         
          />
          <Image
            style={styles.inputIcon}
            source={{ uri: 'https://img.icons8.com/flat_round/40/000000/secured-letter.png' }}
          />
        </View>
  
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Date"
            underlineColorAndroid="transparent"
         
          />
          <Image
            style={styles.inputIcon}
            source={{ uri: 'https://img.icons8.com/color/40/000000/password.png' }}
          />
        </View>
  
       
  
        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}>
          <Text style={styles.loginText}>Add Note</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          style={styles.buttonContainer}>
          <Text style={styles.btnText}>Have an account?</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DCDCDC',
    },
    inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius: 30,
      borderBottomWidth: 1,
      width: 300,
      height: 45,
      marginBottom: 20,
      flexDirection: 'row',
      alignItems: 'center',
  
      shadowColor: '#808080',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },
    inputs: {
      height: 45,
      marginLeft: 16,
      borderBottomColor: '#FFFFFF',
      flex: 1,
    },
    inputIcon: {
      width: 30,
      height: 30,
      marginRight: 15,
      justifyContent: 'center',
    },
    buttonContainer: {
      height: 45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      width: 300,
      borderRadius: 30,
      backgroundColor: 'transparent',
    },
    btnByRegister: {
      height: 15,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20,
      width: 300,
      backgroundColor: 'transparent',
    },
    loginButton: {
      backgroundColor: '#00b5ec',
  
      shadowColor: '#808080',
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.5,
      shadowRadius: 12.35,
  
      elevation: 19,
    },
    loginText: {
      color: 'white',
    },
    bgImage: {
      flex: 1,
      resizeMode: 'cover',
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
    },
    btnText: {
      color: 'white',
      fontWeight: 'bold',
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
    },
    textByRegister: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
  
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10,
    },
  })

  export default AddNote;