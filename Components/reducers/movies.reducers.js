import * as types from '../constants/action_types';
import initialState from './initialState';

export default function(state = initialState.movies, action){
    switch(action.types){
        case types.RETRIEVE_NOWPLAYING_MOVIES_SUCCESS:
                return{
                    ...state,
                    nowPlayingMovies:action.nowPlayingMovies
            };
        default :
        return state
    }
}