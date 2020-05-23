import React from "react";
import config from "../../config";
import Map from "../Map";
import MapSearchBox from "../MapSearchBox";
import { toast } from "react-toastify";

import { useState } from "react";
import {
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
} from "@material-ui/core";
import globalStyles from "../styles";
import { useEffect } from "react";
import ClientRegistrationController from "../ClientRegistration/ClientRegistrationController";
import DeliveryController from "./DeliveryController";
import Client from "../../Models/Client";
import Deliverer from "../../Models/Deliverer";

function Delivery() {
  const [clients, setClients] = useState([]);
  const [deliverers, setDeliverers] = useState([]);
  const [currentOrder, setCurrentOrder] = useState({});

  useEffect(() => {
    async function getData() {
      let data = await Client.fetchAll();
      setClients(data);
      data = await Deliverer.fetchAll();
      setDeliverers(data);
    }
    getData();
  }, []);

  function validateForm(e) {
    if (!currentOrder.lat || !currentOrder.lng) {
      debugger;
      e.preventDefault();
      toast.error("Success Notification !", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ width: "100%", margin: "1% 1% 5% 1%" }}>
          <Map
            currentOrder={currentOrder}
            setCurrentOrder={setCurrentOrder}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.apiKey}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `70vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <div
          style={{
            width: "100%",
            margin: "1%",
            padding: "1%",
            border: "solid whitesmoke",
            backgroundColor: "#f2f2f2",
          }}
        >
          <form>
            <InputLabel id="client">Client</InputLabel>
            <Select
              labelId="client"
              id="client"
              autoComplete={false}
              onChange={(e) => {
                setCurrentOrder({ ...currentOrder, client: e.target.value });
              }}
              style={{ width: "100%" }}
            >
              <MenuItem selected={true} value={""}>
                ---------------
              </MenuItem>
              {clients.map((client) => (
                <MenuItem value={client.id}>{client.name}</MenuItem>
              ))}
            </Select>

            <InputLabel id="deliverer">Deliverer</InputLabel>
            <Select
              labelId="deliverer"
              id="deliverer"
              autoComplete={false}
              onChange={(e) => {
                setCurrentOrder({ ...currentOrder, deliverer: e.target.value });
              }}
              style={{ width: "100%" }}
            >
              <MenuItem selected={true} value={""}>
                ---------------
              </MenuItem>
              {deliverers.map((deliverer) => (
                <MenuItem value={deliverer.id}>{deliverer.name}</MenuItem>
              ))}
            </Select>

            <TextField
              id="cpf"
              label="CPF"
              style={
                currentOrder.juridical
                  ? { width: "100%", display: "none" }
                  : { width: "100%" }
              }
              required={currentOrder.physical ? true : false}
              onChange={(event) => {
                setCurrentOrder({
                  ...currentOrder,
                  cpf: event.target.value,
                });
              }}
            />
            <TextField
              id="cnpj"
              label="CNPJ"
              style={
                currentOrder.physical
                  ? { width: "100%", display: "none" }
                  : { width: "100%" }
              }
              required={currentOrder.physical ? false : true}
              onChange={(event) => {
                setCurrentOrder({
                  ...currentOrder,
                  cnpj: event.target.value,
                });
              }}
            />

            <Button
              type="submit"
              style={globalStyles.saveFormButton}
              onClick={(e) => {
                validateForm(e);
              }}
            >
              Confirm new delivery order
            </Button>
            <Button type="button" style={globalStyles.cancelFormButton}>
              Cancel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Delivery;
