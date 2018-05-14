import React from 'react';
import { StyleSheet, Text, View,StatusBar,Image } from 'react-native';
import {TabNavigator,TabBarBottom,StackNavigator} from 'react-navigation';


export default class Calendrier extends React.Component {

  static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require("./icons/event.png")} style={{ width: 20, height: 20 }} /> 
        }
    }
  render() {
    return(
      <View>
        <Text>Calendrier</Text>
      </View>
      );
  }
}

