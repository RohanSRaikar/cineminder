//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';
// create a component
class SignupSection extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Create Account</Text>
				<Text style={styles.text}>Forgot Password?</Text>
            </View>
        );
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1,
        width: DEVICE_WIDTH,
        flexDirection:'row',
        top:25,
        justifyContent: 'space-around',
    },
    text: {
		color: 'white',
		backgroundColor: 'transparent',
	},
});

//make this component available to the app
export default SignupSection;
