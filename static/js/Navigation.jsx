// Navigation.jsx

import React from "react";
//import ReactDOM from 'react-dom';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
//import { PageHeader } from 'react-bootstrap';

const Navigation = (props) => {

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Kyiv Showrooms</a>
          </Navbar.Brand>
        </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#map">Map</NavItem>
            <NavItem eventKey={2} href="#list">Showroom List</NavItem>
          </Nav>
      </Navbar>
    	)
};

export default Navigation;