import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Gallery from "./components/gallery/Gallery";
import About from "./components/about/About";
import NotFound from "./components/layout/NotFound";

function App() {
  return (
    <div className="container">
      <div className="headerBar">
        <p>Jussi Koivumäki Photography</p>
      </div>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Gallery} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
