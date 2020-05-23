import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

function Map() {
  return (
    <>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: -27.0591, lng: -49.5313 }}
      />
    </>
  );
}
export default withScriptjs(withGoogleMap(Map));
