import React, {Component ,useEffect, useState } from 'react'
import SQLite from 'react-native-sqlite-2'
import {View, Button, FlatList, StyleSheet, Image, TouchableOpacity, Share} from 'react-native';
import {Container, Header, Content,Thumbnail,Card, CardItem, Body,Left,Right, Text} from 'native-base';
import Database from '../db/Database'
const myDB= new Database()

const db = SQLite.openDatabase('note.db', '1.0', '', 1) 
function HomeScreen({ navigation }) {

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const [myItems, setItems] = useState('');

  var data= [];
    useEffect(()=>{
      db.transaction(function(trx){
        trx.executeSql("select * from tbl_note",[],function(tx, res){
        //  console.log(res.rows);
          for(let i=0; i<res.rows.length; i++){
              var id =res.rows.item(i).id;
              var title=res.rows.item(i).title;
              var description = res.rows.item(i).description;
              var dateNote = res.rows.item(i).dateNote;
              var timeNote = res.rows.item(i).timeNote;
              data.push({id, title, description, dateNote, timeNote})
          }
          setItems(data);
        })
      })})

const renderItem=({item})=>(
  <Card style={[styles.height, styles.myItems]}>
      <CardItem>
            <Left>
               <Thumbnail source={require('../images/1.png')} />
               <Body>
                    <Text>{item.title}</Text>
                    <Text>{item.description}</Text>
               </Body>
            </Left>
            <Right>
                <Body>
                  <TouchableOpacity onPress={()=>{
                    myDB.deleteNote(item.id)
                  }}>
                         <Image source={require('../images/delete.png')} style={{height:30, width: 33}} />
                  </TouchableOpacity>
                    
                   <TouchableOpacity onPress={onShare}>
                         <Image source={require('../images/share.png')} style={{height:30, width: 33, marginTop: 10}} />
                   </TouchableOpacity>
                </Body>
            </Right>
      </CardItem>
  </Card>
)


    return (
      <View >
             <FlatList
             data={myItems}
             renderItem={renderItem}
             />
              <View style={{backgroundColor:'#3f51b5', width:44, height:44, borderRadius: 44/2, position:'relative', left: 20, bottom:20, alignItems: 'center', justifyContent:'center', alignContent:'center' }}>
                 <TouchableOpacity onPress={()=>{
                  navigation.navigate('AddNote')
                 }}>
                      <Text style={{fontSize:20, color:'#ffffff'}}>+</Text> 
                 </TouchableOpacity>
              </View>
      </View>
    );
  }

  export default HomeScreen;
  const styles= StyleSheet.create({
    height:{
      height: 90,
      elevation: 3,
    },
    myItems:{
      margin: 20,
    }
  })