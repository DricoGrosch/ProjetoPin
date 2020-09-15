import React from "react";
import config from "../../config";
import Map from "../Map";
import { toast } from "react-toastify";

import { useState } from "react";
import {
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  Collapse,
} from "@material-ui/core";
import globalStyles from "../styles";
import { useEffect } from "react";
import DeliveryController from "./DeliveryController";
import Client from "../../Models/Client";
import Deliverer from "../../Models/Deliverer";
import MaterialTable from "material-table";
import { forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Bottle from "../../Models/Bottle";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

function Delivery() {
  const tableColumns = [
    {
      title: "Bottle Type",
      field: "selectedBottle",
      editComponent: (props) => (
        <Select
          labelId="selectedBottle"
          id="selectedBottle"
          autoComplete={false}
          style={{ width: "100%" }}
          onChange={(e) => props.onChange(e.target.value)}
        >
          {gasBottles.map((bottle) => (
            <MenuItem key={bottle} value={bottle}>
              {bottle.type}
            </MenuItem>
          ))}
        </Select>
      ),
      render: (rowData) => <span>{rowData.bottleType}</span>,
    },
    {
      title: "Amount",
      field: "amount",
      editComponent: (props) => (
        <TextField
          id="covenant_discount_amount"
          label="Amount"
          InputLabelProps={{
            shrink: true,
          }}
          type="number"
          onChange={(e) => props.onChange(e.target.value)}
        />
      ),
    },
  ];

  const [clients, setClients] = useState([]);
  const [deliverers, setDeliverers] = useState([]);
  const [gasBottles, setGasBottles] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentOrder, setCurrentOrder] = useState({ bottles: [] });

  useEffect(() => {
    async function getData() {
      let data = await Client.fetchAll();
      setClients(data);
      data = await Deliverer.fetchAll();
      setDeliverers(data);
      data = await Bottle.fetchAll();
      setGasBottles(data);
    }
    getData();
  }, []);
  const formIsValid = () => {
    if (
      !currentOrder.lat ||
      !currentOrder.lng ||
      !currentOrder.deliverer ||
      !currentOrder.client ||
      currentOrder.bottles.length === 0
    ) {
      return false;
    }
    return true;
  };
  function validateForm(e) {
    if (formIsValid) {
      DeliveryController.createNewDeliveryOrder(currentOrder);
    } else {
      e.preventDefault();
    }
  }
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ width: "100%", margin: "1% 1% 3% 1%" }}>
          <Map
            currentOrder={currentOrder}
            setCurrentOrder={setCurrentOrder}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.apiKey}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `70vh` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <span
          type="button"
          onClick={() => {
            setIsCollapsed(!isCollapsed);
          }}
          style={{
            width: "100%",
            margin: "1%",
            padding: "1%",
            fontSize: "20px",
            textAlign: "center",
            cursor: "pointer",
            backgroundColor: "whitesmoke",
          }}
        >
          Add new orders{" "}
          {isCollapsed ? (
            <ArrowUpwardIcon style={{ verticalAlign: "bottom" }} />
          ) : (
            <ArrowDownwardIcon style={{ verticalAlign: "bottom" }} />
          )}
        </span>
        <Collapse
          in={isCollapsed}
          style={{
            width: "100%",
            margin: "0 1%",
            padding: "1%",
            border: "solid whitesmoke",
            backgroundColor: "#f2f2f2",
          }}
        >
          <div>
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
                  <MenuItem key={client.id} value={client.id}>
                    {client.name}
                  </MenuItem>
                ))}
              </Select>

              <InputLabel id="deliverer">Deliverer</InputLabel>
              <Select
                labelId="deliverer"
                id="deliverer"
                autoComplete={false}
                onChange={(e) => {
                  setCurrentOrder({
                    ...currentOrder,
                    deliverer: e.target.value,
                  });
                }}
                style={{ width: "100%" }}
              >
                <MenuItem selected={true} value={""}>
                  ---------------
                </MenuItem>
                {deliverers.map((deliverer) => (
                  <MenuItem key={deliverer.id} value={deliverer.id}>
                    {deliverer.name}
                  </MenuItem>
                ))}
              </Select>

              <MaterialTable
                style={{ margin: "1%" }}
                title="Gas Bottles"
                icons={tableIcons}
                columns={tableColumns}
                options={{
                  search: false,
                  paging: false,
                  sorting: false,
                  headerStyle: {
                    // textAlign:'center',
                    paddingLeft: "1%",
                  },
                }}
                data={currentOrder.bottles}
                editable={{
                  onRowAdd: (newData) =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        setCurrentOrder({
                          ...currentOrder,
                          bottles: [
                            ...currentOrder.bottles,
                            {
                              bottleId: newData.selectedBottle.id,
                              bottleType: newData.selectedBottle.type,
                              sellPrice: newData.selectedBottle.sellPrice,
                              amount: newData.amount,
                            },
                          ],
                        });

                        resolve();
                      }, 1000);
                    }),

                  onRowUpdate: (newData, oldData) => {},
                  onRowDelete: (oldData) =>
                    new Promise((resolve, reject) => {
                      setTimeout(() => {
                        const dataDelete = [...currentOrder.bottles];
                        const index = oldData.tableData.id;
                        dataDelete.splice(index, 1);
                        setCurrentOrder({
                          ...currentOrder,
                          bottles: dataDelete,
                        });

                        resolve();
                      }, 1000);
                    }),
                }}
              />

              <Button
                type="submit"
                // n quer funcionar nem a pau
                style={globalStyles.saveFormButton}
                onClick={(e) => {
                  validateForm(e);
                }}
              >
                Confirm new delivery order
              </Button>
              <Button
                type="button"
                style={globalStyles.cancelFormButton}
                onClick={() => {
                  setCurrentOrder({ bottles: [] });
                }}
              >
                Cancel
              </Button>
            </form>
          </div>
        </Collapse>
      </div>
    </>
  );
}

export default Delivery;
