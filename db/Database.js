import React, { useEffect, useState } from 'react'
import SQLite from 'react-native-sqlite-2'

class Database {
    createTable(){
        const db = SQLite.openDatabase('note.db', '1.0', '', 1) 
        db.transaction(function(trx){
            trx.executeSql("create table tbl_note(id Integer Primary Key AUTOINCREMENT, title varchar(50), description text, timeNote Text, dateNote Text )",[])
          })
        }

        insertNote(title, description, timeNote, dateNote){
            const db = SQLite.openDatabase('note.db', '1.0', '', 1) 
            db.transaction(function(trx){
                console.log(title+description+timeNote+dateNote)
                trx.executeSql("INSERT INTO tbl_note(title, description, timeNote , dateNote) VALUES (:title, :description,:timeNote, :dateNote)",
                    [title, description, timeNote , dateNote]);
              })
            }

   
}
export default Database;


