import React from "react";
import Map from "../Map";
import config from "../../config";
import ClientRegistration from "../ClientRegistration/ClientRegistration";
import Delivery from "../Delivery";

function Content(props) {
  switch (props.componentToRender) {
    case "Map": {
      return (
        <Delivery/>
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
