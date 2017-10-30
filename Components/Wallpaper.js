//import liraries
import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {PropTypes} from 'prop-types';
import bgSrc from '../assets/wallpaper.png';


// create a component
class Wallpaper extends Component {
    render() {
        return (
            <Image style={styles.picture} source={bgSrc}>
               {this.props.children}
            </Image>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    picture: {
        flex: 1,
		width: null,
		height: null,
		resizeMode: 'cover',
    },
});

//make this component available to the app
export default Wallpaper;
