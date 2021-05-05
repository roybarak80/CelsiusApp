import React, { useEffect } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import {useDispatch, useSelector} from 'react-redux';
import {  setNewReleases, setPlaylists ,setCategories, setTokenToHeader} from '../store/actions';

export default function Discover() {

    const windowUrl = window.location.href;
    let currentToken = ''
    if(windowUrl.length){
        let urlArr = windowUrl.split('#');
        if(urlArr.length > 0){
            let urlParts = urlArr[1].split('&');
            currentToken =urlParts[0].replace('access_token=','')
        }

    }

    const newReleases = useSelector((state)=> state.discover.newReleases);

    const playlists = useSelector((state)=> state.discover.playlists);

    const categories = useSelector((state)=> state.discover.categories);

    const dispatch = useDispatch()
   
    const setNewReleasesAction = setNewReleases(dispatch);
    const setTokenToHeaderAction = setTokenToHeader(dispatch, currentToken);
    const setPlaylistsAction = setPlaylists(dispatch);
    const setCategoriesAction = setCategories(dispatch);
 
    useEffect(()=> {
        setTokenToHeaderAction();
        setNewReleasesAction();
        setPlaylistsAction();
        setCategoriesAction();
        
    },[])

    return (
        <div className="discover">
           <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
           <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
           <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
        </div>
    );
}
