import React from 'react';
import {Text,TextInput,Button,StyleSheet,View,Image} from 'react-native';
import {Select, Option} from "react-native-chooser";
import style from './style';
import Selecte from './Select';
export default class Don extends React.Component {

  static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require("./composant/icons/don.png")} style={{ width: 20, height: 20 }} /> 
        }
    }
  
  constructor(props) {
    super(props);
    this.state = {value : "Selectionner un Operateur"}
  }
  onSelect(value, label) {
    this.setState({value : value});
  }

	render() {
    return (    
                
				<View style={{flex:1, padding: 15}}>
                <Text style={style.titleR}>Don en Ligne</Text>
				<TextInput
                    
                    style={style.input}
                    placeholder="votre  nom"
                />
                <TextInput
                    
                    style={style.input}
                    placeholder=" votre mail"
                />
                <Select
                    onSelect = {this.onSelect.bind(this)}
                    defaultText  = {this.state.value}
                    style = {{borderWidth : 1, borderColor : "green",paddingBottom: 10}}
                    textStyle = {{}}
                    backdropStyle  = {{backgroundColor : "#d3d5d6"}}
                    optionListStyle = {{backgroundColor : "#F5FCFF"}}>
                    <Option value = {{name : "Orange"}}>Orange</Option>
                    <Option value = "Tigo">Tigo</Option>
                    <Option value = "Expresso">Expresso</Option>
                    <Option value = "Zain">Zain</Option>
                    <Option value = "Money-Gram">Money-Gram</Option>
                    <Option value = "Ecobank">Ecobank</Option>
                    <Option value = "Money-Express">Money-Express</Option>
                 </Select> 
                 <Text>    </Text>         
               <Button onPress={() => this.submit()}   color="red" style={{padding: 10,}} title ="valider " />
				</View> 
		  );
  }
}
