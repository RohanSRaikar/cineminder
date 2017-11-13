//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import {PropTypes} from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import Bannerstyles from '../../Styles/ViewCards/BannerCardStyle';

// create a component


class BannerCard extends Component {
    
    render({info}) {
        console.log('Info object',this.props.info);
        const IMG_URL = 'http://image.tmdb.org/t/p//';
        
        return (    
            <View style={styles.cardContainer}>
                
            </View>
           
        );
    }
}

//make this component available to the app

const styles = StyleSheet.create({
    imageBackdrop:{
        height: 248,
        width:500,
		backgroundColor: 'black'
    },
    cardContainer: {
		position: 'absolute',
		top: 32,
		right: 16,
		left: 16,
		flexDirection: 'row'
	},
});


export default BannerCard;
