import React, { Component } from 'react';
import { View,
         Text,
         StyleSheet,
         TextInput,
         TouchableOpacity,
         Button,         
         } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Recipe extends Component{

    state = {
        value: '30',
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>{this.state.value}R$</Text>
                <View style={styles.containerCalc}>
                <Text style={styles.text}>asdfasd</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
 container:{       
    flex: 1,    
    flexDirection: 'column',
    backgroundColor: '#000000'
 },
 containerCalc:{
    flex: 1,
    width: '100%', height: '80%',
    backgroundColor: '#FFFFFF'
 },
 text: {
    flex: 1,
    fontSize: 64,
    color: '#1280e5',
    textAlign: 'right',    
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
 }
});
