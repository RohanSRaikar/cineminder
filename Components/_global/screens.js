import {Navigation} from 'react-native-navigation';
import Login from '../Login';
import HomeScreen from '../HomeScreen';


export function registerScreen(){
    Navigation.registerComponent('MainScreen', () => Login);
    Navigation.registerComponent('HomeScreen', () => HomeScreen);
}
