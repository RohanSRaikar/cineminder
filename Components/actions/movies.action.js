import axios from 'axios';
import * as types from '../constants/action_types';


//Get Now playing movies from the api
export function retrieveNowPlayingMovies(page){
    return function(dispatch){
        console.log("Dispatch :", dispatch);
        console.log("Page",page);
        return axios.get(`http://api.themoviedb.org/4/movie/now_playing?api_key=163c193e3f58f163c783eb87f2b002b5&page=`)
        .then(res => {
            console.log("Rohan : ",res);
            dispatch(retrieveNowPlayingMoviesSuccess(res));
        })
        .catch(error => {
            console.log("Now Playing : ",error);
        });
    };
}

export function retrieveNowPlayingMoviesSuccess(res){
    return{
        type: types.RETRIEVE_NOWPLAYING_MOVIES_SUCCESS,
        nowPlayingMovies : res.data
    }
}