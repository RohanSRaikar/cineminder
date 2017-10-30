//import liraries
import React, { Component } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import Wallpaper from './Wallpaper';
import {Toolbar,Container} from 'native-base';
import LoginForm from './LoginForm';
import Logo from './Logo';
import SignUpSection from './SignupSection';
import {SocialIcon} from 'react-native-elements';





// create a component
class Login extends Component {
    render() {
        return ( 
            <Container>
                <Wallpaper>
                    <Logo/>
                    <LoginForm/>
                    <SocialIcon title='SignIn With Facebook'
                        button type='facebook'/>
                    <SocialIcon title='SignIn With Google'
                        button style={styles.google}/>
                    <SignUpSection/>
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
    }
});

//make this component available to the app
export default Login;
