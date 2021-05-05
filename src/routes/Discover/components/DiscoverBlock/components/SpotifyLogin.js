
import React , { useEffect }from 'react';
import config from '../../../../../config';

export default function SpotifyLogin() {
  const {api} = config;

  function openSpotifyLogin(){
  
      window.open(`https://accounts.spotify.com/authorize?client_id=${api.clientId}&response_type=token&redirect_uri=${api.redirectUrl}&scope=user-top-read&show_dialog=true`)
  
  }


 useEffect(()=> {
        
  openSpotifyLogin();

},[])
  return (
    <div>
    </div>
  );
}
