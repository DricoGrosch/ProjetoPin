import React from "react";
import Map from "../Map";

function Content(props) {
  switch (props.componentToRender) {
    case "Map": {
      return(
        <Map
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCd--oUDZ1E5BmOMhT2dbLIMlAQmQ_WydY&v=3.exp&libraries=geometry,drawing,places   "
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
      )
     
    }
    default: {
      return "";
    }
  }
}

export default Content;
