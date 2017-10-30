//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,KeyboardAvoidingView,Image,TouchableOpacity } from 'react-native';
import InputBox from './InputBox';
import userImg from '../assets/username.png';
import passImg from '../assets/password.png';
import eyeImg from '../assets/eye_black.png';

// create a component
class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state={
            showPass : true,
            press : false,
            
        }
        this.showPass=this.showPass.bind(this);
    }

showPass(){
    this.state.press === false ? this.setState({ showPass: false, press: true }) :this.setState({ showPass: true, press: false });
}
    render() {
        return (
            <KeyboardAvoidingView behaviour='padding' style={styles.container}>
                  <InputBox source={userImg}
                    placeholder="Username"
                    autoCapitalize ={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}/>
                  <InputBox source={passImg}
                    placeholder="Password"
                    secureTextEntry={this.state.showPass}
                    returnKeyType={'done'}
					autoCapitalize={'none'}
					autoCorrect={false}
                    />
                <TouchableOpacity style={styles.btnImg} activeOpacity={0.7} onPress={this.showPass}>
                    <Image source={eyeImg} style={styles.eyeImg} />
                </TouchableOpacity>    
            </KeyboardAvoidingView>
           
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    btnImg:{
        position:'absolute',
        top:70,
        right:28
    },
    eyeImg:{
        width: 25,
        height: 25,
        tintColor: 'rgba(0,0,0,0.2)',
    }
});

//make this component available to the app
export default LoginForm;
