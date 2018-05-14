import React from 'react';
import {Text,TextInput,Button,StyleSheet,View,Image,Dimensions,ScrollView} from 'react-native';
import style from './style';
export default class HomeScreen extends React.Component {
   static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require("./composant/icons/home.png")} style={{ width: 20, height: 20 }} /> 
        }
    }
  render() {
    let screenWidth =Dimensions.get('window').width;
    return (
      <ScrollView KeyboardDismissMode="on-drag">
          <Image source={require("./composant/icons/children_reaching_400x200.jpeg")} 
          style={{width: screenWidth ,height: screenWidth*2448/3264, marginTop: 20}} />
           <Text style={style.titleR}>Qui sommes nous ?</Text>
           <Text style={style.texte} >TA -Aoune pour le bien être social et le developpement,
              a pour mission la lutte contre les inégalités sociales, la Recherche du bien être des populations 
              le développement, l'encouragement et la promotion de l'excellence. 
           </Text>
           <Image source={require("./composant/icons/mot_de_la_fondatrice.jpeg")} 
          style={{width: screenWidth ,height: screenWidth*2448/3264, marginTop: 10,padding: 15}} />
          <Text style={style.titleR}>Le Mot  de la fondatrice </Text>
          <Text style={style.texte} >Eprise de tout temps d'une philanthropie
           sans commune messure, j'ai toujours au à partager avec mes prochain cet idéal d'une société où règne l'amour de l'autre, la solidarité et
           la justific. Avec l'oportunité que m'offre ma qualité de  première dame, j'ai oeuvré spontanement dans l'assitence aux personnes 
           vulnérable, la protection des filles , la promotion de l'excellence 
           </Text>
           <Button onPress={() => this.submit()}   color="gold" style={{padding: 10}} title ="lire la suite" />
           <Image source={require("./composant/icons/deux_enfant.jpeg")} 
          style={{width: screenWidth ,height: screenWidth/2, marginTop: 20}} />
          <Text style={{fontSize: 30, color: '#000000', marginTop: 20, textAlign:  'center'  }} >Voulez vous Contribuer ? </Text>
            <View style={{flexDirection: 'row' ,justifyContent: 'flex-start', padding: 30}} >
               <Button onPress={() => this.submit()}   color="gold" style={{padding: 10,}} title ="Faire un Don en ligne " />
              <Button onPress={() => this.submit()}   color="gold" style={{padding: 10,width: '50%'}} title ="   Bénévolat " />
            </View>
             
      </ScrollView> 
      );
  }
}

