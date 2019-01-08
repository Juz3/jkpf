import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './style.css';
import './navStyle.css';

import Navigation from './navigation/navbar';
import AboutPage from './about/';
import PasswordGenerator from './pw-gen/passwordGenerator'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
        <div className="App">
          <Navigation />
          <div className="container">
            <Route exact path="/pw-gen" component={PasswordGenerator} />
            <Route exact path="/about" component={AboutPage} />
          </div>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
