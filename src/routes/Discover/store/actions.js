import {ActionTypes} from "./actions-types";
import axios from 'axios';
import config from '../../../config';
export const getReleases = (status, data) => ({
    type: `${ActionTypes.FETCH_NEW_RELEASES}_status`,
    payload:data
});


let headers = {};

export const setTokenToHeader =  (dispatch,data) => async () => {
    
    dispatch({ type: ActionTypes.SET_TOKEN })
         headers.Authorization = `Bearer ${data}`
     
}

export const setNewReleases =  (dispatch) => async () => {
    try {
        dispatch({ type: ActionTypes.SET_NEW_RELEASES_PENDING })
        const response = await axios.get(config.api.baseUrl + "/browse/new-releases",{
            headers
        });
        dispatch({ type: ActionTypes.SET_NEW_RELEASES_SUCCESS, payload: response.data.albums.items })
    }
    catch (err) { 
        dispatch({ type: ActionTypes.SET_NEW_RELEASES_FAILURE })
    }
}


export const setPlaylists=  (dispatch) => async () => {
    try {
        dispatch({ type: ActionTypes.SET_PLAYLISTS_PENDING })
        const response = await axios.get(config.api.baseUrl + "/browse/featured-playlists",{
            headers
        });
        dispatch({ type: ActionTypes.SET_PLAYLISTS_SUCCESS, payload: response.data.playlists.items })
    }
    catch (err) { 
        dispatch({ type: ActionTypes.SET_PLAYLISTS_FAILURE })
    }
}

export const setCategories =  (dispatch) => async () => {
    try {
        dispatch({ type: ActionTypes.SET_CATEGORIES_PENDING })
        const response = await axios.get(config.api.baseUrl + "/browse/categories",{
            headers
        });
        dispatch({ type: ActionTypes.SET_CATEGORIES_SUCCESS, payload: response.data.categories.items })
    }
    catch (err) { 
        dispatch({ type: ActionTypes.SET_CATEGORIES_FAILURE })
    }
}


