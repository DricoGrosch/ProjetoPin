import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

import MapSearchBox from "../MapSearchBox";
import { useState } from "react";
function Map(props) {
  const [markerPosition, setMarkerPosition] = useState({});

  return (
    <>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: -27.0591, lng: -49.5313 }}
        onClick={(e) => {
          const lat = e.latLng.lat();
          const lng = e.latLng.lng();
          setMarkerPosition({ lat, lng });
          props.setCurrentOrder({ ...props.currentOrder, lat, lng });
        }}
      >
        <MapSearchBox />
        <Marker
          name={"Dolores park"}
          draggable={true}
          // onDragEnd={ this.onMarkerDragEnd }
          position={markerPosition}
        />
        <Marker />
        <InfoWindow position={{ lat: -27.0591, lng: -49.5313 }}>
          <div>
            <span style={{ padding: 0, margin: 0 }}>
              aqui vai a info dos pedidos
            </span>
          </div>
        </InfoWindow>
      </GoogleMap>
    </>
  );
}
export default withScriptjs(withGoogleMap(Map));
