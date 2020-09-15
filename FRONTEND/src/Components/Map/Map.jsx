import React, { useEffect } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import Button from "@material-ui/core";
import MapSearchBox from "../MapSearchBox";
import { useState } from "react";
import MapController from "./MapController";
import ConfirmMessage from "../ConfirmMessage/ConfirmMessage";



function Map(props) {
  const [markerPosition, setMarkerPosition] = useState({});
  const [deliveryOrders, setDeliveryOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState({});
  const [showConfirmMessage, setShowConfirmMessage] = useState(false);

  function successCallback() {
    MapController.endOrder(selectedOrder.id, deliveryOrders, setDeliveryOrders);
  }


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
              position={{
                lat: parseFloat(order.latitude),
                lng: parseFloat(order.longitude),
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ width: "100%" }}>
                  <li>
                    Order number <b>{order.id}</b>
                  </li>
                  <li>
                    Client: <b>{order.client}</b>
                  </li>
                  <li>
                    Deliverer: <b>{order.deliverer}</b>
                  </li>
                  <hr />
                  {order.bottles.map((bottle) => {
                    return (
                      <li>
                        <b>
                          {bottle.type}: {bottle.amount} UNIDADES
                        </b>
                      </li>
                    );
                  })}
                </div>
                <div style={{ width: "100%" }}>
                  <button
                    onClick={() => {
                      setSelectedOrder(order);
                      setShowConfirmMessage(true);
                    }}
                    style={{
                      width: "100%",
                      backgroundColor: "#005ca5",
                      color: "white",
                      border: "none",
                      borderRadius: "10px",
                      marginTop: "2%",
                    }}
                  >
                    FINISH
                  </button>
                  <button
                    style={{
                      width: "100%",
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "10px",
                      marginTop: "2%",
                    }}
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            </InfoWindow>
          );
        })}
      </GoogleMap>

      <ConfirmMessage
        open={showConfirmMessage}
        setOpen={setShowConfirmMessage}
        successCallback={successCallback}
        title="Do you really want to finish this delivery order"
      />
    </>
  );
}
export default withScriptjs(withGoogleMap(Map));
