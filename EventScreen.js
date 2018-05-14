import React from 'react';
import {Text,TextInput,Button,StyleSheet,View,Image,Dimensions,ScrollView} from 'react-native';
import style from './style';
import {getImageFromApi} from './API/Api';

export default class EventScreen extends React.Component {
	
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	films:[],
	  };
	}

  static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require("./composant/icons/calendar.png")} style={{ width: 20, height: 20 }} /> 
        }
    }
  render() {

    return (
      <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
        <Text>Events Screen!</Text>
       </View> 
      );
  }
}