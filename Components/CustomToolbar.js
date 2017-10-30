//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Toolbar from 'react-native-toolbar';

// create a component
class CustomToolbar extends Component {
    render() {
        return (
            <View>
                <Toolbar ref={(toolbar)=>this.toolbar=toolbar}/>
            </View>
        );
    }
}


//make this component available to the app
export default CustomToolbar;
