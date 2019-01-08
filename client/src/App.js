import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Navigation from './mainNavigation/navbar';
import passwordGenerator from './pw-gen/passwordGenerator'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <div className="App">
          <Navigation />
          <div className="container">
            <Route exact path="/pw-gen" component={passwordGenerator} />
          </div>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
