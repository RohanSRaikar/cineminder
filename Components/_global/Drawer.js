//import liraries
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {PropTypes} from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity,ToastAndroid,Image} from 'react-native';
import styles from '../../Styles/DrawerStyle';
import LinearGradient from 'react-native-linear-gradient';
import logo from '../../assets/logo_lable.png';

// create a component
class Drawer extends Component {
    constructor(props){
        super(props);
        this._openSearch = this._openSearch.bind(this);
        this._goToMovies = this._goToMovies.bind(this);
        this._version = this._version.bind(this);
    }

    _openSearch(){

    }

    _goToMovies(){
        this._toggleDrawer();
        this.props.navigator.popToRoot({
			screen: 'HomeScreen'
		});

    }
    _version(){

    }

    _toggleDrawer() {
		this.props.navigator.toggleDrawer({
			to: 'closed',
			side: 'left',
			animated: true
		});
	}


    render() {
        const iconSearch = (<Icon name="md-search" size={26} color="#9F9F9F" style={[styles.drawerListIcon, { paddingLeft: 2 }]} />);
		const iconMovies = (<Icon name="md-film" size={26} color="#9F9F9F" style={[styles.drawerListIcon, { paddingLeft: 3 }]} />);
		const iconTV = (<Icon name="ios-desktop" size={26} color="#9F9F9F" style={styles.drawerListIcon} />);
        return (
            <View style={styles.linearGradient}>
				<View style={styles.container}>
                <Image source={logo} style={styles.logo}/>
					<View style={styles.drawerList}>
						<TouchableOpacity onPress={this._openSearch}>
							<View style={styles.drawerListItem}>
								{iconSearch}
								<Text style={styles.drawerListItemText}>
									Search
								</Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={this._goToMovies}>
							<View style={styles.drawerListItem}>
								{iconMovies}
								<Text style={styles.drawerListItemText}>
									Movies
								</Text>
							</View>
						</TouchableOpacity>
						<View style={styles.drawerListItem}>
							{iconTV}
							<Text style={styles.drawerListItemText} onPress={() => ToastAndroid.show('Coming Soon!', ToastAndroid.SHORT)}>
								TV Shows
							</Text>
						</View>
					</View>
					<Text style={styles._version}>
						{/* 'v1.0.0' */}
					</Text>
				</View>
			</View>
        );
    }
}



//make this component available to the app
export default Drawer;
