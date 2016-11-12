import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./containers/App";
import Auth from "./components/Auth";
import Home from "./components/Home";
import {Router, Route, IndexRoute, browserHistory} from "react-router";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='oauth2callback' component={Auth}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
