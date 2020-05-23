import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import Autocomplete from "react-google-autocomplete";
// import Geocode from "react-geocode";
// import config from "../../config";
// Geocode.setApiKey(config.apiKey);
function Map() {
  return (
    <>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: -27.0591, lng: -49.5313 }}
      >
        <Marker
          name={"Dolores park"}
          draggable={true}
          // onDragEnd={ this.onMarkerDragEnd }
          position={{ lat: -27.0591, lng: -49.5313 }}
        />
        <Marker />
        <InfoWindow
          position={{ lat: -27.0591, lng: -49.5313 }}
        >
          <div>
            <span style={{ padding: 0, margin: 0 }}>aqui vai a info dos pedidos</span>
          </div>
        </InfoWindow>
      </GoogleMap>
    </>
  );
}
export default withScriptjs(withGoogleMap(Map));
