import React from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';


const App= ()=> {
  const [counter, setCounter]= React.useState(0);
return(
    <View style={styles.container}>
        <Text style={{color:'white'}} >{counter}</Text>

        <View style={styles.loginButton}>
              <Text style={styles.signUp} onPress={()=> {
                setCounter(counter+1)
              }}>Increment</Text>
        </View>
        
        <View style={styles.loginButton}>
              <Text style={styles.signUp} onPress={()=> {
                setCounter(counter-1)
              }}>Decrement</Text>
        </View>
       
    </View>
)};

class Counter extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0,
    }
  }
  render() {
    return(
      <View style={styles.container}>
        <Text style={{color:'white'}} >{this.state.counter}</Text>

        <View style={styles.loginButton}>
              <Text style={styles.signUp} onPress={()=>{
                this.setState({counter: this.state.counter + 1})
              }}>Increment</Text>
        </View>
        
        <View style={styles.loginButton}>
        <Text style={styles.signUp} onPress={()=>{
                this.setState({counter: this.state.counter - 1})
              }}> Decrement </Text>
        </View>
       
    </View>
    )
  }
}

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
export default App;