import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Gallery from "./components/gallery/Gallery";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import NotFound from "./components/layout/NotFound";

function App() {
  return (
    <div className="container">
      <Router>
        <Fragment>
          <div className="headerBar">
            <p>Jussi Koivumäki Photography</p>
            <Navbar />
          </div>

          <Switch>
            <Route exact path="/" component={Gallery} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
      <div className="footerBar">
        <p>© Jussi Koivumäki 2019</p>
      </div>
    </div>
  );
}

export default App;
