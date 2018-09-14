// MainContent.jsx

import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import axios from 'axios';
import { GoogleApiWrapper } from "react-google-maps"

import  Navigation from './Navigation';
import MyMapComponent from './MyMap';
import List from './List';

const API = "/get_showroom_list"

class MainContent extends React.Component {
  state = {
  	shops : [],
  	animateMarker : null,
  }

  moveMarker = (markerName) => {
  	console.log('inside moveMarker', markerName);
  	this.setState( () => {
        	return { 
        		animateMarker: markerName
        	};
        });
  }


  componentDidMount() {
  	console.log('fffff');
    axios.get(API)

      .then(response => {
      	const shops = response.data;
        this.setState({ shops });
      })
      
      .catch(err => console.log(err));
  }


  render () {

  	console.log(this.state.shops);
    return (
    	<div>
      	  <Navigation 
      	    shops={ this.state.shops }
      	  />
  		{ this.state.shops && 
           <MyMapComponent id="map"
            shops={ this.state.shops }
            markerAnimation={ this.state.animateMarker }

          />}

       	  { this.state.shops && 
       	  	<List
       	        shops={ this.state.shops }
       	        moveMarker={ this.state.moveMarker }
       	    />}

       </div> 
    	)
  }
};


export default MainContent;