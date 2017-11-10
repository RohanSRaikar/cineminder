//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import BannerCard from './ViewCards/BannerCard';
import * as moviesAction from './actions/movies.action';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

// create a component
class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoading:true,
            isRefreshing:false,
        }
    }
    //Load Movies during Screen load
    
    componentWillMount() {
        this._retriveMovies();
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.nowPlayingMovies && nextProps.popularMovies){
            this.setState({isLoading:false});
        }   
    }

    //function to retrive movies 
    _retriveMovies(isRefreshed){
        if(isRefreshed && this.setState({isRefreshing:false}))
            {
                this.props.actions.retrieveNowpalyingMovies();
                this.props.actions.retrievePopularMovies();
            }
    }

    render() {
        const { nowPlayingMovies, popularMovies } = this.props;
        console.log("Nowplaying Value", nowPlayingMovies);
        console.log("props",this.props);
        return (
           <Swiper
                autoplay
                autoplayTimeout={4}
                showsPagination={false}
                height={248}>
            </Swiper>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

function mapStateToProps(state,ownProps){
    return{
        nowPlayingMovies : state.movies.nowPlayingMovies
    };
}

function mapDispatchToProps(dispatch){
    return{
        actions:bindActionCreators(moviesAction,dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);


