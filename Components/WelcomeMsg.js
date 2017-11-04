//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class WelcomeMsg extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.TextStyle}>Discover top Rated and treanding Movies and the Best in Indian Entertainment.</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 4,
        justifyContent: 'center',      
    },
    TextStyle:{
        fontSize: 18,
        padding:10,
        color:'#BDBDBD',
        fontFamily:'roboto',
        textAlign: 'center', 
    }
});

//make this component available to the app
export default WelcomeMsg;
