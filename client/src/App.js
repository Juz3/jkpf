import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './navStyle.css';

import Nav from './navigation/Nav';
import AboutPage from './about/';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />
          <div>
            <Route exact path="/about" component={AboutPage} />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
