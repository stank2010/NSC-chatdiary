import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPage from "./page/MainPage";
import EditDiary from "./page/EditDiary"
import Index from "./page/index"
import Profile from './page/Profile'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/"  >
            <Index />
          </Route>
          <Route path="/mainPage">
            <MainPage />
          </Route>
          <Route path="/editDiary">
            <EditDiary />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
