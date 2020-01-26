import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPage from "./page/MainPage";
import EditDiary from "./page/EditDiary"
import Index from "./page/index"
import Profile from './page/Profile'

// import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/"  component={Index}/>
          <Route path="/mainPage" component={MainPage} />
          <Route path="/editDiary" component={EditDiary}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
