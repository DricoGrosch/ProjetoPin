import React, { useEffect } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

import MapSearchBox from "../MapSearchBox";
import { useState } from "react";
import MapController from "./MapController";
function Map(props) {
  const [markerPosition, setMarkerPosition] = useState({});
  const [deliveryOrders, setDeliveryOrders] = useState([]);

  useEffect(() => {
    async function loadData() {
      await MapController.loadDeliveryOrders(setDeliveryOrders);
    }
    loadData();
  }, []);
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
          position={markerPosition}
        />
        <Marker />
        {deliveryOrders.map((order) => {
          return (
            <InfoWindow
              position={{ lat: parseFloat(order.latitude), lng: parseFloat(order.longitude) }}
            >
              <div>
                <span style={{ padding: 0, margin: 0 }}>
                  {`Order number ${order.id}`}
                </span>
              </div>
            </InfoWindow>
          );
        })}
      </GoogleMap>
    </>
  );
}
export default withScriptjs(withGoogleMap(Map));
