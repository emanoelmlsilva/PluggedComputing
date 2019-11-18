import React, { Component } from 'react';
import { View,
         Text,
         StyleSheet,
         TextInput,
         TouchableOpacity,
         Button,         
         } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import  Expense  from '../components/Expense';
import  Recipe  from '../components/Recipe';

const MenuRoutes = {  
    Recipe: {
        name: 'Recipe',
        screen: Recipe,
        navigationOptions:{
            title: 'Receita',           
        }
    },
    Expense: {
        name: 'Expense',
        screen: Expense,
        navigationOptions:{
            title: 'Despesas',
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Recipe',
    tabBarOptions: {
      inactiveTintColor: '#FFFFFF',
      indicatorStyle: {
      backgroundColor: '#FFFFFF'
    }
    }
}

const menuNavigator = createMaterialTopTabNavigator(MenuRoutes,MenuConfig);

export default createAppContainer(menuNavigator);