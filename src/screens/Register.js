import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import  Account  from '../components/Account';

const MenuRoutes = {  
    Recipe: {
        name: 'Recipe',
        screen: Account,
        navigationOptions:{
            title: 'Receita',                       
        }
    },
    Expense: {
        name: 'Expense',
        screen: Account,
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