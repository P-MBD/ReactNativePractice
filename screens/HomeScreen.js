import React, {Component ,useEffect, useState } from 'react'
import SQLite from 'react-native-sqlite-2'
import {View, Text, Button, FlatList} from 'react-native';
const db = SQLite.openDatabase('note.db', '1.0', '', 1) 
function HomeScreen({ navigation }) {

  const [myItems, setItems] = useState('');
  var data= [];
    useEffect(()=>{
      db.transaction(function(trx){
        trx.executeSql("select * from tbl_note",[],function(tx, res){
          console.log(res.rows);
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
      })},[])

const renderItem=({item})=>(
  <View>
      <Text>{item.title}</Text>
  </View>
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