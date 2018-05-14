import React from 'react';
import {Text,TextInput,Button,StyleSheet,View,Image} from 'react-native';
import style from './style';

export default class Calendrier extends React.Component {

  static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require("./composant/icons/event.png")} style={{ width: 20, height: 20 }} /> 
        }
    }
  render() {
    return(
      <View style={style.list}>
        <Text style={style.box}>AAbakar fils </Text>
      </View>
      );
  }
}