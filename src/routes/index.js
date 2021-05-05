import React from 'react';
import Discover from './Discover';
import SpotifyLogin from './Discover/components/DiscoverBlock/components/SpotifyLogin'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
export default function Routes() {
  // Here you'd return an array of routes
  return (<Router><Switch>
    <Route path="/redirect">
    <Discover />
    </Route>
    <Route path="/">
    <SpotifyLogin />
    </Route>
  </Switch></Router>);
}
