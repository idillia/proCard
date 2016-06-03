import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import ProfilePage from './components/profile/ProfilePage';
import DisplayProfilePage from './components/profile/DisplayProfilePage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <Route path="profiles" component={ProfilePage} />
    <Route path="profile/:id" component={DisplayProfilePage} />
  </Route>  
);
