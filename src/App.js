import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import './App.css';
import Timeline from './timeline/Timeline';
import Login from './login/LoginPage';
import Reset from './login/ResetPage';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Route exact path="/login" component={Login} />
          <Route exact path="/reset" component={Reset} />
          <Route exact path="/timeline/" component={Timeline} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
