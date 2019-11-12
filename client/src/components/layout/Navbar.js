import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const publicLinks = (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/1">1</Link>
      </li>
      <li /* id="middleLink" */>
        <Link to="/2">2</Link>
      </li>
      <li /* id="middleLink" */>
        <Link to="/about">about</Link>
      </li>
    </ul>
  );

  return (
    <Fragment>
      <nav className="navbar">{publicLinks}</nav>
    </Fragment>
  );
};

export default Navbar;
