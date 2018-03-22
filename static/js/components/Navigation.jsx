// Navigation.jsx

import React from "react";
import { Navbar, Nav, NavItem } from 'react-bootstrap';
//import { PageHeader } from 'react-bootstrap';

class Navigation extends React.Component {
    render(){
    console.log(this.props);

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">Kyiv Showrooms</a>
          </Navbar.Brand>
        </Navbar.Header>
          <Nav>
            {!this.props.name && <NavItem eventKey={1} href="#map">Map</NavItem>}
            {!this.props.name && <NavItem eventKey={2} href="#list">Showroom List</NavItem>}
            {this.props.name && <NavItem eventKey={1} href="#home">{this.props.name}</NavItem>}
          </Nav>
      </Navbar>
    	)
  }
};

//Navigation.defaultProps = {
//  name : undefined
//};

export default Navigation;