// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
// import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

// Ensure that this import is commented out for now.
import "phoenix";
import React from "react";
import ReactDom from "react-dom";
import Marathon from "marathon/marathon.jsx";
import Chronos from "chronos/chronos.jsx";
import AppDetails from "marathon/app-details.jsx";
import { Router, Route, hashHistory } from 'react-router';

const apps = {apps: []};

ReactDom.render((
  <Router history={hashHistory}>
    <Route path="/" component={Marathon}/>
    <Route path="/marathon/apps" component={Marathon}/>
    <Route path="/marathon/apps/:id" component={AppDetails}/>
    <Route path="/chronos/jobs" component={Chronos}/>
  </Router>
), document.getElementById('main'));
