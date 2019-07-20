import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './navStyle.css';

import Nav from './navigation/Nav';
import AboutPage from './about/About';
import Gallery from './gallery/Gallery';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />
          <div>
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/gallery" component={Gallery} />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
