import React, { Component } from 'react'
import { View, Text, StyleSheet, Picker } from 'react-native'
import DatePicker from 'react-native-datepicker';

const styles = StyleSheet.create({
    containerInformacao: {        
        flexDirection: 'row',      
        justifyContent: 'space-around',
        backgroundColor: '#e0e0e0',
        textAlign: 'center',
        alignItems: 'stretch',
        alignContent: 'center'   
    },
    picker:{    
        width: 200,   
        color: '#1280e5',
        fontSize: 16,
    },
    containerView: {     
        height: '35%',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'flex-end',
        textAlign: 'center',    
        backgroundColor: '#e0e0e0'  
    },
    textReal: {
        fontSize: 16,
        alignItems: 'flex-start',
        color: '#1280e5',
        marginHorizontal: 8,
        marginVertical: '12%',
    },
    textInformacao: {
        color: '#1280e5',
        textAlign: 'center', 
        fontSize: 18,
        fontWeight: "bold"
    },
    dataComponent: {
        width: 200, 
    }
})

export default class MenuInformacao extends Component{


    state = {
        valueDescricao: '',
        valueDate: '',
    }


    render(){
        return(
           <View style={styles.containerInformacao}>
            <View style={styles.descricao}>
                <Text style={styles.textInformacao}>Descrição</Text>
                <Picker
                    selectedValue={this.state.valueDescricao}
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>                         
                        this.setState({valueDescricao: itemValue})}>
                    <Picker.Item label="Cliente ou Serviço" value="cliente_servico" />
                    <Picker.Item label="Emprestimo" value="emprestimo" />                    
                    <Picker.Item label="Outros" value="outros" />
                </Picker>
            </View>      
            <View style={styles.dados}>
                <Text style={styles.textInformacao}>Data</Text>
                <DatePicker                            
                    date={this.state.valueDate}
                    mode="date"       
                    style={styles.dataComponent}                     
                    format="DD/MM/YYYY"                            
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"                                                          
                    onDateChange={(date) => {this.setState({valueDate: date})}}
                />                        
            </View>                    
        </View> 
        )
    }

}

// const MenuInformacao = (props) => {

//     const state = {
//         // console.log("props.valueDescricao "+props.valueDescricao)
//         valueDescrib: '',
//         // console.log("valueDescrib "+valueDescrib)
//     }

//     return(
//         <View style={styles.containerInformacao}>
//             <View style={styles.descricao}>
//                 <Text style={styles.textInformacao}>Descrição</Text>
//                 <Picker
//                     selectedValue={props.valueDescricao}
//                     style={styles.picker}
//                     onValueChange={(itemValue, itemIndex) => {
//                         console.log("valueDescrib "+props.valueDescricao)
//                         console.log("item "+itemValue)            
//                         this.setState({itemValue})
//                         }       } 
//                     >
//                     <Picker.Item label="Cliente ou Serviço" value="cliente_servico" />
//                     <Picker.Item label="Emprestimo" value="emprestimo" />                    
//                     <Picker.Item label="Outros" value="outros" />
//                 </Picker>
//             </View>      
//             <View style={styles.dados}>
//                 <Text style={styles.textInformacao}>Data</Text>
//                 <DatePicker                            
//                     date={props.valueDate}
//                     mode="date"                            
//                     format="DD-MM-YYYY"                            
//                     confirmBtnText="Confirm"
//                     cancelBtnText="Cancel"                            
//                     onDateChange={(date) => {this.setState({date})}}
//                 />                        
//             </View>                    
//         </View>
//     )

// }

// export default MenuInformacao