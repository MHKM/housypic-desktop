import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import HomeScreen from './components/homeScreen/HomeScreen.jsx';
import ActionScreen from './components/ActionScreen.jsx';
import DevicesScreen from './components/DevicesScreen.jsx';
import ProfileScreen from './components/ProfileScreen.jsx';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

ReactDOM.render(

  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomeScreen}/>
      <Route path="/actions" component={ActionScreen}/>
      <Route path="/devices" component={DevicesScreen}/>
      <Route path="/profile" component={ProfileScreen}/>
    </Route>
  </Router>

  ,document.getElementById('app'));
