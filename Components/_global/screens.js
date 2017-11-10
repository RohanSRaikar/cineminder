import {Navigation} from 'react-native-navigation';
import Login from '../Login';
import HomeScreen from '../HomeScreen';
import Drawer from './Drawer';


export function registerScreens(store,Provider){
    Navigation.registerComponent('MainScreen', () => Login,store,Provider);
    Navigation.registerComponent('HomeScreen', () => HomeScreen,store,Provider);
    Navigation.registerComponent('Drawer', () => Drawer,store,Provider);
}
