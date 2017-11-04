//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';
import logo from '../assets/logo.png';
import logoLabel from '../assets/logo_lable.png';
import Dimensions from 'Dimensions';
// create a component
class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={logoLabel} style={styles.imageLabel} />
            </View>
        );
    }
}


const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_WIDTH = Dimensions.get('window').width;
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        marginTop:-5,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    image: {
		width: 80,
		height: 80,
	},
    textStyle:{
        color: 'white',
        fontFamily:'rubicon-icon-font',
		fontWeight: 'bold',
		backgroundColor: 'transparent',
		marginTop: 20,
    },
    imageLabel:{
        height:50,
        marginTop:20,
        width:WINDOW_WIDTH - 200,
    }
});

//make this component available to the app
export default Logo;
