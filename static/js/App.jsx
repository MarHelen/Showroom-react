// App.jsx

import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import  Navigation from './components/Navigation';
import MyMap from './components/MyMap';
import List from './components/List';


class App extends React.Component {
  render () {
    return (
    	<div>
      <Navigation />
  
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
