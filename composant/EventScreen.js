import React from 'react';
import { StyleSheet, Text, View,StatusBar,Image } from 'react-native';
import {TabNavigator,TabBarBottom,StackNavigator} from 'react-navigation';



export default class EventScreen extends React.Component {

  static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require("./icons/calendar.png")} style={{ width: 20, height: 20 }} /> 
        }
    }
  render() {
    return (
      <View style={{flex:1,backgroundColor:'#6ddad3',justifyContent:'center',alignItems:'center'}}>
        <Text>Events Screen!</Text>
       </View> 
      );
  }
}