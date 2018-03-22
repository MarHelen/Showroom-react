// Showroom.jsx

import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import  Navigation from './Navigation';



class Showroom extends React.Component {
  /*this.state = {
  	name = 
  }
  const url = this.props.routeParams.page;
  const PageComponent = data.find(page => page.link === url).property;
*/
  render () {
    return (
    	<div>
      <Navigation name={this.props.name}/>
  
       </div> 
    	)
  }
};

export default Showroom;