import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow,} from "react-google-maps"

const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");

import ListItemContent from './ListItemContent';

import uuid from 'uuid';

import React from "react";
import * as ReactBootstrap from 'react-bootstrap';
import axios from 'axios';

const marker_icon = require('../../img/shop.png');
//import styles from './styles_MyMap'

const { compose, withProps, withHandlers, withStateHandlers } = require("recompose");

const MyMap = compose(
  withStateHandlers(() => ({
    activeMarker: null,
  }), 
  {
    onMarkerClick: ({ activeMarker }) => (shopName) => ({
      activeMarker: shopName,
    }),
  
    onToggleOpen: ({ activeMarker }) => () => ({
      activeMarker: null,
    }),

  },
  
  ),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter= {props.center(props.shops)}
    //style={styles}
    onClick={props.onToggleOpen }
  >
    
      {props.shops.map(shop => {
        if (shop.locationLat) 
          return  <Marker
                    key={shop.name}
                    icon={marker_icon}
                    animation={(props.cnangeMarkerAnimation === shop.name) ?
                                         this.props.google.maps.Animation.DROP :
                                         null}
                    position={{ lat: shop.locationLat, lng: shop.locationLng }}
                    onClick={ (e) => {props.onMarkerClick(shop.name) } }> 
            {(props.activeMarker === shop.name) && 
              <InfoWindow 
                className='markerInfo'
                onCloseClick={props.onToggleOpen }
                key={shop.name}
                position={{ lat: shop.locationLat, lng: shop.locationLng }}>
                <ListItemContent className="ListItemContent"
                  show={true}
                  shop={shop}
                  size='small'
                  title={true}

                />
                           
              </InfoWindow>}
        </Marker> 
        }
      )}

  </GoogleMap>
);


class MyMapComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
    //isOpen: false,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  }

  calcMapCenter(items) {
    let lat = 0;
    let lng = 0;
    let amount = 0;
    items.map((shop) =>{
      if (shop.locationLng){
        lat += shop.locationLat;
        lng += shop.locationLng;
        amount++;
      }
    })
    lat = lat / amount;
    lng = lng / amount;
    var myLatlng = new google.maps.LatLng(lat,lng);
    return myLatlng
  }

  
  render() {
    return (
      <MyMap
        shops={this.props.shops}
        center={this.calcMapCenter}
        changeMarkerAnimation={this.props.animateMarker}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCllQLgmbRKIeD9XMYflsBqEzPLwKzcVnQ&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
       
      />
    )
  }
}

export default MyMapComponent;