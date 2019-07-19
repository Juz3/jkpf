import React from 'react';
import { Nav, Navbar, NavItem, NavLink } from 'reactstrap';

class Navi extends React.Component {
  
  render() {
    return (
      <div>
        <div className="topBanner">
            <h2>JKPF  -  Photos</h2>
        </div>

        <Navbar className="justify-content-center">
          <Nav>
            <NavItem>
              <NavLink className="navLink" href="/gallery">gallery</NavLink>
            </NavItem>  
            <NavItem>
            <NavLink className="navLink" href="/about">about</NavLink> 
            </NavItem>  
          </Nav> 
        </Navbar>
      </div>
    );
  }
}

export default Navi;
