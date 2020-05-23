import React from "react";
import Map from "../Map";
import config from "../../config";
import ClientRegistration from "../ClientRegistration/ClientRegistration";

function Content(props) {
  switch (props.componentToRender) {
    case "Map": {
      return (
        <Map
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.apiKey}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      );
    }
    case "ClientRegistration": {
      return <ClientRegistration/>;
    }
    default: {
      return "";
    }
  }
}

export default Content;
