// App.jsx

import React from "react";
import ReactDOM from 'react-dom';
import * as ReactBootstrap from 'react-bootstrap';
import  Navigation from './Navigation';
import MyMap from './MyMap';
import List from './List';


//let NavBar = ReactBootstrap.NavBar;

class App extends React.Component {
  render () {
    return (
    	<div>
      <Navigation/>
      <MyMap id="map" isMarkerShown googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        />
        <List/>
       </div> 
    	)
  }
};

export default App;

//key=AIzaSyDC1GypWJ6A4tUCTPENVNgFpLsSezpalvk

//https://maps.googleapis.com/maps/api/js?v=3
//        &key=AIzaSyDC1GypWJ6A4tUCTPENVNgFpLsSezpalvk&callback=initMap
