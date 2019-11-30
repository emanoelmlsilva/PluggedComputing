import React, { Component } from 'react';
import { View,
         Text,
         StyleSheet, 
         Button                                 
         } from 'react-native';

import Display from './Display';
import MenuInformacao from './MenuInformacao';
import MyButton from './MyButton'
import Icon from 'react-native-vector-icons/FontAwesome';

const initalState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0,
}


export default class Account extends Component{

    state = {...initalState,        
        descricao: '',        
        date: '',                
                
    } 

    addDigit = n => {             
       
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

        if(n == '.' && !clearDisplay  && this.state.displayValue.includes('.')){
            return
        }

        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false})
        if(n !== '.'){
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[this.state.current]  = newValue            
            this.setState({ values })
        }
    }

    clearMemory = () => {
        this.setState({...initalState})
    }

    setOperation = operation => {
        if(this.state.current === 0){
            this.setState({ operation, current: 1,clearDisplay: true })
        }else{
            const equals = operation === '='
            const values = [...this.state.values]
            try{                
                values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`)                
            }catch(e){                
                values[0] = this.state.values[0]
            }            
            values[1] = 0
            this.setState({
                displayValue: `${values[0]}`,
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: true,
                values,
            })
        }
    }

    render(){
        return(
            <View style={styles.container}>                            
                <Display value={this.state.displayValue}></Display>               
                <MenuInformacao></MenuInformacao>
                <View style={styles.containerCalc}>     
                    <View style={styles.buttons}> 
                        <MyButton label='AC' triple onClick={this.clearMemory}/>             
                        <MyButton label='/' operation onClick={this.setOperation}/> 
                        <MyButton label='7' onClick={this.addDigit}/>                                                                           
                        <MyButton label='8' onClick={this.addDigit}/>
                        <MyButton label='9' onClick={this.addDigit}/>                                                                                                  
                        <MyButton label='*' operation onClick={this.setOperation}/>
                        <MyButton label='4' onClick={this.addDigit}/>
                        <MyButton label='5' onClick={this.addDigit}/>
                        <MyButton label='6' onClick={this.addDigit}/>
                        <MyButton label='-' operation onClick={this.setOperation}/>
                        <MyButton label='1' onClick={this.addDigit}/>
                        <MyButton label='2' onClick={this.addDigit}/>
                        <MyButton label='3' onClick={this.addDigit}/>
                        <MyButton label='+' operation onClick={this.setOperation}/>
                        <MyButton label='0' double onClick={this.addDigit}/>
                        <MyButton label='.' onClick={this.addDigit}/>
                        <MyButton label='=' operation onClick={this.setOperation}/>                        
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
 container:{    
    flex: 1,
    backgroundColor: '#000000'
 },
 buttons: {           
    flexDirection: 'row',
    flexWrap: 'wrap'         
},
text: {
    color: '#FFFFFF',
    backgroundColor: '#512da8',
    width: 299,
    height: 300,
    textAlign: 'center'
}
});
