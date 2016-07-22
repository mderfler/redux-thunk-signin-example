import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Welcome from './components/welcome';
import Signin from './components/auth/signin';
import Protected from './components/protected';

export default (
  <Route path="/" component={App}>
  	<IndexRoute component={Welcome} />
  	<Route path="signin" component={Signin} />
  	<Route path="protected" component={Protected} />
  	<Route path="welcome" component={Welcome} />
  </Route>
);