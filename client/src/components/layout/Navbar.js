import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const publicLinks = (
    <ul>
      <li>
        <Link to="/photos">Photos</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
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
