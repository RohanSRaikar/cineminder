//import liraries
import React, { Component } from 'react';
import {View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Wallpaper from './Wallpaper';
import {Toolbar,Container} from 'native-base';
import Logo from './Logo';
import {PropTypes} from 'prop-types';
import {Navigation} from 'react-native-navigation';
import {SocialIcon} from 'react-native-elements';
import WelcomeMsg from './WelcomeMsg';



const navigatorStyle={
    statusBarColor: 'black',
	statusBarTextColorScheme: 'light',
	navigationBarColor: 'black',
	navBarBackgroundColor: '#9E9E9E',
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
}

// create a component
class Login extends Component {
    constructor(props){
        super(props)
        this.goToHome=this.goToHome.bind(this);
    }

    goToHome(){
       Navigation.startSingleScreenApp({
            screen:{
            screen:'HomeScreen',
            title:'Cine Hunt',
            leftButtons:[
                {
                  id:'sideMenu'
                }
              ]
            },
              drawer:{
                left:{
                  screen:'Drawer'
            }

       }
      }
    )
       
    }
    render() {
        return ( 
            <Container>
                <Wallpaper>
                    <Logo/>
                    <WelcomeMsg/>
                    <View style={styles.FBMsgBorder}><Text style={styles.FBMsg}>Login with facebook to browse through your favorite movies</Text></View>
                    <SocialIcon title='SignIn With Facebook'
                        button type='facebook'/>
                    <TouchableOpacity style={styles.skipLogin} onPress={this.goToHome}>
                        <Text style={styles.textStyle}>Skip Login</Text>
                    </TouchableOpacity>
                </Wallpaper>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    google:{
        backgroundColor:'#EF5350',
    },
    skipLogin:{
        justifyContent:'center',
        alignItems:'center',
        padding:10,
    },
    textStyle:{
        color:'white',
        margin:10,
    },
    FBMsg:{
        color:'#BDBDBD',
        textAlign:'center',
        fontSize: 12,
        margin:5,
    },
    FBMsgBorder:{
        borderColor:'#BDBDBD',
        borderRadius:4,
        borderWidth:1,
        marginRight:20,
        marginLeft:20
    }
});

//make this component available to the app
export default Login;
