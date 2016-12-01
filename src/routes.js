import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import ProfilePage from './components/profile/ProfilePage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <Route path="/:id" component={ProfilePage} />
  </Route>  
);

  