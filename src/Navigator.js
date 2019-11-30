import React from 'react';
import { Button, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login  from './screens/Login';
import Register  from './screens/Register';
import {ToastAndroid} from 'react-native';

const autoRoutes = createStackNavigator({
    Login: { screen: Login, navigationOptions:{title: 'Login',header: null}},
    Register: {screen: Register, navigationOptions:{title: 'Register', headerTitle: "Cadastrar",  headerTintColor: '#FFFFFF',
    headerStyle: {
      backgroundColor: '#1280e5',
    },
     headerRight: () => (
      <Icon.Button
        onPress={() => {ToastAndroid.show('Cadastro de (Receita ou Despesa) realizado com sucesso', ToastAndroid.LONG)}}
        name='check'
        color="#FFFFFF"
      />
    ),}
    }
  },
  {
      initialRouteName: 'Login',
  });

export default createAppContainer(autoRoutes);
