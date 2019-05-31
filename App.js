/*Example of SQLite Database in React Native*/
import React from 'react';
//For React Navigation Version 2+
//import {createStackNavigator} from 'react-navigation';
//For React Navigation Version 3+
import {createStackNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';
import Home from './pages/Home';
import QR from './pages/QR';
import Server from './pages/Server';
import dday from './pages/dday';
import Datasensoe from './pages/Datasensoe';
const App = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'HomeScreen',
      headerStyle: { backgroundColor: '#000000' },
      headerTintColor: '#ffffff',
    },
  },
  View: {
    screen: ViewUser,
    navigationOptions: {
      title: 'View User',
      headerStyle: { backgroundColor: '#000000' },
      headerTintColor: '#ffffff',
    },
  },
  ViewAll: {
    screen: ViewAllUser,
    navigationOptions: {
      title: 'View All User',
      headerStyle: { backgroundColor: '#000000' },
      headerTintColor: '#ffffff',
    },
  },
  Update: {
    screen: UpdateUser,
    navigationOptions: {
      title: 'Update User',
      headerStyle: { backgroundColor: '#000000' },
      headerTintColor: '#ffffff',
    },
  },
  Register: {
    screen: RegisterUser,
    navigationOptions: {
      title: 'Register User',
      headerStyle: { backgroundColor: '#000000' },
      headerTintColor: '#ffffff',
    },
  },
  Delete: {
    screen: DeleteUser,
    navigationOptions: {
      title: 'Delete User',
      headerStyle: { backgroundColor: '#000000' },
      headerTintColor: '#ffffff',
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Database',
      headerStyle: { backgroundColor: '#000000' },
      headerTintColor: '#ffffff',
    },
  },
  QR: {
    screen: QR,
    navigationOptions: {
      title: 'QRCODE',
      headerStyle: { backgroundColor: '#000000' },
      headerTintColor: '#ffffff',
    },
  },
  Server: {
    screen: Server,
    navigationOptions: {
      title: 'Server',
      headerStyle: { backgroundColor: '#000000' },
      headerTintColor: '#ffffff',
    },
  },
  dday: {
    screen: dday,
    navigationOptions: {
      title: 'Data day',
      headerStyle: { backgroundColor: '#000000' },
      headerTintColor: '#ffffff',
    },
  },
  Datasensoe: {
    screen: Datasensoe,
    navigationOptions: {
      title: 'Datasensor',
      headerStyle: { backgroundColor: '#000000' },
      headerTintColor: '#ffffff',
    },
  },
  
});
//For React Navigation Version 2+
//export default App;
//For React Navigation Version 3+
export default createAppContainer(App);