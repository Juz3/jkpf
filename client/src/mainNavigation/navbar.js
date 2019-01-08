 /**
 *  <navbar.js>
 *
 *  Copyright information
 *
 *      Copyright (C) 2019 Jussi Koivumäki <firstname.lastname@outlook.com>
 * 
 * @author Jussi Koivumäki
 *
 */

import React from 'react';
import {  
  Link } from 'react-router-dom';

import {
  Nav,
  NavItem } from 'reactstrap';


export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="topBanner">
        <h2>JKPF  -  Photos</h2>
        </div>
        <div className="topNavLinks">
          <Nav>
            <NavItem style={this.state.loginStyle}>
              <Link className="nav-link" to="/pw-gen">
                  Password-gen server test
              </Link>
            </NavItem>
          </Nav>
        </div>
      </div>
    );
  }
}