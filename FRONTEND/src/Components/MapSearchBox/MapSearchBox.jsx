import React, { useState } from "react";
import config from "../../config";
import Autocomplete from "react-google-autocomplete";
import MapSearchBoxController from "./MapSearchBoxController";

function MapSearchBox() {
  const [address, setAddress] = useState(null);

  return (
    <Autocomplete
      style={{
        width: "99%",
        height: "40px",
        paddingLeft: "16px",
        marginTop: "2px",
        marginBottom: "100px",
      }}
      onPlaceSelected={(place) => {
        MapSearchBoxController.onPlaceSelected(place);
      }}s
      types={["(regions)"]}
    />
  );
}
export default MapSearchBox;
