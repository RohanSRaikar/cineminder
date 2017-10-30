//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';
import logo from '../assets/logo.png';

// create a component
class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
            <Image source={logo} style={styles.image}/>
                <Text style={styles.textStyle}>Cineminder</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'center',
        marginTop:-10,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    image: {
		width: 80,
		height: 80,
	},
    textStyle:{
        color: 'white',
        fontFamily:"Confetti_Stream",
		fontWeight: 'bold',
		backgroundColor: 'transparent',
		marginTop: 20,
    }
});

//make this component available to the app
export default Logo;
