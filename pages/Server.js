/*Home Screen With buttons to navigate to different options*/
import React from 'react';
import { View,Linking } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';
//Connction to access the pre-populated user_db.db
var db = openDatabase({ name: 'user_db.db', createFromLocation : 1});
 
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    db.transaction(function(txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function(tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              []
            );
          }
        }
      );
    });
  }
 
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'column',
        }}>
        
        <Mybutton
          title="Data month"
          customClick={() => Linking.openURL('http://df889048.ngrok.io/img/vbn.PHP')}
        />
        
        <Mybutton
          title="Data day"
          customClick={() => Linking.openURL('http://df889048.ngrok.io/img/PX.PHP')}
        />

        <Mybutton
          title="Data day(txt)"
          customClick={() => this.props.navigation.navigate('dday')}
        />
        
      </View>
    );
  }
}


