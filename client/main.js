import {Meteor} from 'meteor/meteor'
import React from 'react'
import ReactDOM from 'react-dom'
import {Tracker} from "meteor/tracker";
import {Session} from "meteor/session";

import '../imports/startup/simple-schema-configuration'
import {routes, onAuthChange} from "../imports/routes/routes";


Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId();
  onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  Session.set('showHidden', false);
  ReactDOM.render(routes, document.getElementById('app'));
});