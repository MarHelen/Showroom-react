// Navigation.jsx

import React from "react";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const logo = require('!!url-loader!../../img/shop.jpeg');

const Navigation = (props) => {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
              <Link to='/'>
                  <div id='block_container'>
                  <img className='logo' src={logo}/>
                  Kyiv Showrooms
                  </div>
              </Link>
          </Navbar.Brand>
        </Navbar.Header>
          <Nav>
            {!props.name && <NavItem eventKey={1} href="#map">Map</NavItem>}
            {!props.name && <NavItem eventKey={2} href="#list">Showroom List</NavItem>}
            {props.name && <NavItem eventKey={1} >{props.name}</NavItem>}
          </Nav>
      </Navbar>
    	)
};


export default Navigation;