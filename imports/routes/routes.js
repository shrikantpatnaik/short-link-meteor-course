import React from 'react'
import {Route, Router, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history';

import Link from '../ui/Link'
import SignUp from "../ui/SignUp";
import NotFound from "../ui/NotFound";
import Login from "../ui/Login";

const browserHistory = createBrowserHistory();

const unauthenticatedPages = ['/', '/signup'];
const authenticatedPages = ['/links'];

export const onAuthChange = (isAuthenticated) => {
  const pathName = browserHistory.location.pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
  const isAuthenticatedPage = authenticatedPages.includes(pathName);

  if (isUnauthenticatedPage && isAuthenticated) {
    browserHistory.push('/links');
  }

  if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.push('/');
  }
};

export const routes = (
  <Router history={browserHistory}>
    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/links" component={Link}/>
      <Route component={NotFound}/>
    </Switch>
  </Router>
);