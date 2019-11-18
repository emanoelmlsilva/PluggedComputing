/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Login from './src/screens/Login';
import Navigator from './src/Navigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navigator);
