import React, { Component } from 'react';
import { View,
         Text,
         StyleSheet,
         TextInput,
         TouchableOpacity,
         Button,      
         Alert,   
         } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component{

    state = {
        email: '',
        passworld: '',
    }

    render(){
       const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
             <Text style={styles.Text}>Login</Text>             
            <View style={styles.retanguleShape}>
                
                <View style={styles.containerComponent}>
                    <Icon name="envelope" size={32} />
                    <TextInput   
                        style={styles.input}                    
                        placeholder="Email"
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                    />    
                </View>   
                
                <View style={styles.separator}></View>
                
                <View style={styles.containerComponent}>
                    <Icon name="lock" size={32} />
                    <TextInput              
                        secureTextEntry={true}
                        style={styles.input}
                        placeholder="Senha"
                        onChangeText={(passworld) => this.setState({passworld})}
                        value={this.state.passworld}
                    />                              
                </View>
            </View>
            <TouchableOpacity style={styles.containerButton} onPress={() => {if(checkInput(this.state.email,this.state.passworld))navigate('Register')}}>            
                <Text style={styles.textButton}>Entrar</Text>
            </TouchableOpacity>      
            </View>
        )
    }
}

const checkInput = (inputEmail, inputPassworld) => {
    if(inputEmail != "" && inputPassworld != ""){          
        return true;
    }else{
        //Alert.alert('Aviso','Email ou Senha invalído');
    }
     return true;
} 

const styles = StyleSheet.create({
 container:{       
    flexDirection: 'column',
    alignItems:'center',     
    width: '100%',
    height: '100%', 
    backgroundColor: '#1280e5',   

 },
 retanguleShape:{      
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    width: '80%',
    height: 200, 
 },
 Text:{     
    color: '#FFFFFF',
    fontSize: 54,       
    marginBottom: 40,    
    textAlign: 'center',
    marginTop: '30%',
 },
 input:{        
        marginLeft: 20,        
        width: '90%',        
        height: 40,
        color: '#000000'  
                          
},
separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginLeft: 20,
    marginRight: 20,
},
containerButton:{    
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1280e5',   
    height: 50,
    width: '60%',     
    marginTop: 20,
    borderColor: '#000000',
    borderWidth: 0.5,
    

},
textButton: {    
    fontSize: 18,
    textTransform: 'uppercase',
    color: '#FFFFFF',
},
containerComponent: {    
    flexDirection: 'row',
    marginTop: 40,
    marginLeft: 20,                                 
}
})