
import React from 'react';
import { StyleSheet, Text, View,StatusBar,Image } from 'react-native';
import {TabNavigator,TabBarBottom,StackNavigator} from 'react-navigation';


export default class HomeScreen extends React.Component {
   static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require("./icons/home.png")} style={{ width: 20, height: 20 }} /> 
        }
    }
  render() {
    const {navigate} =this.props.navigation;
    return (
      <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
        <Text>Home!</Text>
       </View> 
      );
  }
}

