import React from "react";
import Map from "../Map";
import config from "../../config";

import ClientRegistration from "../ClientRegistration/ClientRegistration";
import Delivery from "../Delivery";

import GasBottleRegistration from "../GasBottleRegistration/GasBottleRegistration";


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

    case "GasBotlleRegistration":{
      return <GasBottleRegistration/>
    }
    
    default: {
      return "";
    }
  }
}

export default Content;
