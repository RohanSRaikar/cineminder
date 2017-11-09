import {Navigation} from 'react-native-navigation';
import Login from '../Login';
import HomeScreen from '../HomeScreen';
import Drawer from './Drawer';


export function registerScreens(){
    Navigation.registerComponent('MainScreen', () => Login);
    Navigation.registerComponent('HomeScreen', () => HomeScreen);
    Navigation.registerComponent('Drawer', () => Drawer);
}
