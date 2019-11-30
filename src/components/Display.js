import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    display: {
        flex: 1,    
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'flex-end',
        textAlign: 'center',    
        backgroundColor: '#e0e0e0'  
    },
    displayValue: {    
        fontSize: 64,
        color: '#1280e5',
        textAlign: 'right',          
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
})

export default props => 
 <View style={styles.display}>                              
    <Text style={styles.displayValue} 
        numberOfLines={1} >{props.value}</Text>                      
    <Text style={styles.textReal}>R$</Text>   
</View>