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
  	let shop = this.props.location.state.shop;
  	console.log(shop);

    return (
    	<div>
      <Navigation name={shop.name}/>
  
       </div> 
    	)
  }
};

export default Showroom;