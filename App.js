import React from 'react';
import { StyleSheet, Text, View,StatusBar,Image,Dimensions,ScrollView,Button } from 'react-native';
import {TabNavigator,TabBarBottom,StackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import Don from './Don';
import EventScreen from './EventScreen';
import Calendrier from './Calendrier';
import Form from './Form';

export default TabNavigator(
  {
  Accueil:{screen:HomeScreen},
  evenements:{screen:EventScreen},
  calendrier:{screen:Calendrier},
  Don:{screen:Don},
  Form:{screen:Form},
  
  },
   

{
  navigationOptions: ({navigation} ) =>(
  {
    tabBarIcons:({ focused,tintColro }) => {
      const { routeName } = navigation.state;
      let iconName;
      if(routeName=='Accueil'){
          iconName='home'
      }else if(routeName=='evenement'){
        iconName='calendar'
      } else if(routeName=='calendrier'){
        iconName='calendar'
      }

      return <Ionicons name={iconName} size={25} color={tintColor} />},
  }),

  tabBarOptions:{
    showIcon: true,
    pressColor: 'white',
     indicatorStyle: {
        height :2,
        backgroundColor: "#FFF"
      },
      style: {
        backgroundColor: "red" ,
        borderTopWidth: 1,
        borderColor: "#3f101C",

      }
  },
  tabBarComponent:TabBarBottom,
  tabBarPosition:'bottom',
  animationEnabled:false,
  swipeEnabled:false,



});
const screenWidth =Dimensions.get('window').width;