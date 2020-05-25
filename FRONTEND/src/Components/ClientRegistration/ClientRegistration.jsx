import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  ButtonGroup,
  FormControlLabel,
  Radio,
  RadioGroup,
  Select,
  IconButton,
} from "@material-ui/core";
import styles from "./styles";
import globalStyles from "../styles";
import ClientRegistrationController from "./ClientRegistrationController";
import Map from "../Map";
import config from "../../config";
import CreateIcon from "@material-ui/icons/Create";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
function ClientRegistration() {
  const [formClient, setFormClient] = useState({ physical: true });
  const [clients, setClients] = useState([]);

  useEffect(() => {
    ClientRegistrationController.loadClients(setClients);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={styles.formContainer}>
        <form>
          <input type="hidden" name="pk" value={formClient.id}></input>
          <RadioGroup
            row
            aria-label="position"
            name="position"
            defaultValue="top"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <FormControlLabel
              onClick={() => {
                setFormClient({
                  ...formClient,
                  physical: true,
                  juridical: false,
                });
              }}
              value="physical"
              control={<Radio color="primary" />}
              label="PHYSICAL"
              labelPlacement="start"
              checked={formClient.physical}
            />
            <FormControlLabel
              onClick={() => {
                setFormClient({
                  ...formClient,
                  physical: false,
                  juridical: true,
                });
              }}
              value="juridical"
              control={<Radio color="primary" />}
              label="JURIDICAL"
              labelPlacement="start"
              checked={formClient.juridical}
            />
          </RadioGroup>
          <TextField
            id="address"
            label="Address"
            required
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(event) => {
              setFormClient({
                ...formClient,
                address: event.target.value,
              });
            }}
            style={{ width: "100%" }}
            value={formClient.address}
          />
          <TextField
            id="name"
            label="Name"
            required
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(event) => {
              setFormClient({
                ...formClient,
                name: event.target.value,
              });
            }}
            style={{ width: "100%" }}
            value={formClient.name}
          />
          <TextField
            id="cpf"
            label="CPF"
            InputLabelProps={{
              shrink: true,
            }}
            style={
              formClient.juridical
                ? { width: "100%", display: "none" }
                : { width: "100%" }
            }
            required={formClient.physical ? true : false}
            onChange={(event) => {
              setFormClient({
                ...formClient,
                cpf: event.target.value,
              });
            }}
            value={formClient.cpf}
          />
          <TextField
            id="cnpj"
            label="CNPJ"
            InputLabelProps={{
              shrink: true,
            }}
            style={
              formClient.physical
                ? { width: "100%", display: "none" }
                : { width: "100%" }
            }
            required={formClient.physical ? false : true}
            onChange={(event) => {
              setFormClient({
                ...formClient,
                cnpj: event.target.value,
              });
            }}
            value={formClient.cnpj}
          />

          <TextField
            id="covenant_discount_amount"
            label="Covenant discount amount"
            style={
              formClient.physical
                ? { width: "100%", display: "none" }
                : { width: "100%" }
            }
            InputLabelProps={{
              shrink: true,
            }}
            type="number"
            onChange={(event) => {
              setFormClient({
                ...formClient,
                covenant_discount_amount: event.target.value,
              });
            }}
            value={
              formClient.covenant ? formClient.covenant.discount_amount : 0
            }
          />

          <Button
            type="submit"
            style={globalStyles.saveFormButton}
            onClick={async () =>
              await ClientRegistrationController.handleSaveClient(
                formClient,
                setClients
              )
            }
          >
            Save
          </Button>
          <Button
            type="button"
            style={globalStyles.cancelFormButton}
            onClick={() => {
              setFormClient({ physical: true });
            }}
          >
            Cancel
          </Button>
        </form>
      </div>

      <div style={styles.container}>
        <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
          {clients.map((client) => {
            return (
              <div
                style={{ 
                  width: "45%",
                  border: "solid #ece9e9",
                  margin: "2%",
                  backgroundColor: "whitesmoke",
                  borderRadius: "20px 20px",
              }}
              >
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around",
                    backgroundColor: "#3f51b5",
                    borderRadius: "10px 10px 0px 0px",
                    
                  }}
                > 
                  <div style={{
                    marginLeft: "5%",
                    display: "flex",
                    alignItems: "center",
                    color:"whitesmoke"
                    
                  }}
                  > 
                  {client.name} </div>
                 
                  <div style={{
                    textAlign: "end",
                    width:"100%"
                  }}>
                    
                    <IconButton style={{color:"whitesmoke"}}>
                      <CreateIcon
                        onClick={async () => {
                          
                          await ClientRegistrationController.setClientToEdit(
                            client,
                            setFormClient
                          );
                        }}
                      />
                    </IconButton>
                    <IconButton style={{color:"whitesmoke"}}>
                      <DeleteForeverIcon />
                    </IconButton>
                  </div>
                </div>
                <div>
                  <ul>
                    <li>{client.address}</li>
                    <li>{client.cnpj ? client.cnpj : client.cpf}</li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default ClientRegistration;
