// Showroom.jsx

import React from "react";
import * as ReactBootstrap from 'react-bootstrap';

import  Navigation from './Navigation';
import ListItemContent from './ListItemContent';
import ShowroomPosts from './ShowroomPosts';
import MyMapComponent from './MyMap';
import ShowroomSocial from './ShowroomSocial';


class Showroom extends React.Component {

  render () {
  	let shop = this.props.location.state.shop;

    return (
    	<div>
            <Navigation 
            	name={shop.displayName}
            />

            <div className="showrooomDetails">
            	<ListItemContent
                	className="listItemContent"
                	show={true}
                	shop={shop}
                	size='large'
            	/>
            </div>

            <ShowroomPosts 
            	name={shop.name}
            />

            <ShowroomSocial
            	linkFB={shop.linkFB}
            	linkInst={shop.linkInst}
            />

            {shop.address && 
              <MyMapComponent id="map"
                 shops={ [shop] }
                        
              />}

        </div> 
    	)
  }
};

export default Showroom;

