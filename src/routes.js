import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import DisplayProfilePage from './components/profile/DisplayProfilePage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <Route path="profile/:id" component={DisplayProfilePage} />
  </Route>  
);

  