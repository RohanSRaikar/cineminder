//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Bannerstyles from '../../Styles/ViewCards/BannerCardStyle';

// create a component
class BannerCard extends Component {
    
    render(info,viewMovie) {
        const IMG_URL = 'http://image.tmdb.org/t/p//w780/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg';
        
        return (
            <Image source={{uri:`${IMG_URL}`}} style={styles.imageBackdrop}/>
        );
    }
}

//make this component available to the app

const styles = StyleSheet.create({
    imageBackdrop:{
        height: 248,
        width:500,
		backgroundColor: 'black'
    }
});


export default BannerCard;
