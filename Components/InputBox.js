//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image, TextInput } from 'react-native';
import {PropTypes} from 'prop-types';
import Dimension from 'Dimensions';
// create a component
class InputBox extends Component {
    render() {
        return (
            <View style={styles.inputWrapper}>
                <Image source={this.props.source} style={styles.inlineImg}/>
                <TextInput style={styles.input}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    underlineColorAndroid="transparent"
                    autoCorrect = {this.props.autoCorrect}
                    autoCapitalize={this.props.autoCapitalize}
					returnKeyType={this.props.returnKeyType}
                    placeholderTextColor="white"/>
            </View>
        );
    }
}


InputBox.propTypes = {
	source: PropTypes.number.isRequired,
	placeholder: PropTypes.string.isRequired,
	secureTextEntry: PropTypes.bool,
	autoCorrect: PropTypes.bool,
	autoCapitalize: PropTypes.string,
	returnKeyType: PropTypes.string,
};


const DEVICE_HEIGHT = Dimension.get('window').height;
const DEVICE_WIDTH = Dimension.get('window').width;

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    inputWrapper:{
        flex:1,
    },
    inlineImg:{
        position:'absolute',
        zIndex:99,
        width:22,
        height:22,
        left:35,
        top:9,
    },
    input:{
        backgroundColor:'rgba(255,255,255,0.4)',
        width: DEVICE_WIDTH - 40,
        height:40,
        marginHorizontal:20,
        paddingLeft:45,
        borderRadius:20,
        color:'#fff'
    }
});

//make this component available to the app
export default InputBox;
