import React, {Component ,useEffect, useState } from 'react'
import SQLite from 'react-native-sqlite-2'
import {View, Button, FlatList, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Container, Header, Content,Thumbnail,Card, CardItem, Body,Left,Right, Text} from 'native-base';
import Database from '../db/Database'
const myDB= new Database()

const db = SQLite.openDatabase('note.db', '1.0', '', 1) 
function HomeScreen({ navigation }) {

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
                    
                   <TouchableOpacity>
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