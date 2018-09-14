import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import uuid from 'uuid';

const MyMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 50.4501, lng: 30.5234 }} //Kyiv city center
  >
    {props.isMarkerShown && props.shops.map((shop) => 
      { console.log(shop.locationLat);
        return <Marker key={shop.name} 
                       position={{ lat: {shop.locationLat}, 
                                   lng: {shop.locationLng} }} 
        />
      }
    )}
      
  </GoogleMap>
  ))




export default MyMap;