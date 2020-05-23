import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  ButtonGroup,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import styles from "./styles";
import globalStyles from "../styles";
import ClientRegistrationController from "./ClientRegistrationController";

function ClientRegistration() {
  const [formClient, setformClient] = useState({ physical: true });
  const [clients, setClients] = useState([]);

  useEffect(() => {
    ClientRegistrationController.loadClients(setClients);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={styles.formContainer}>
        <form>
          <RadioGroup
            row
            aria-label="position"
            name="position"
            defaultValue="top"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <FormControlLabel
              onClick={() => {
                setformClient({
                  ...formClient,
                  physical: true,
                  juridical: false,
                });
              }}
              value="physical"
              control={<Radio color="primary" />}
              label="PHYSICAL"
              labelPlacement="start"
            />
            <FormControlLabel
              onClick={() => {
                setformClient({
                  ...formClient,
                  physical: false,
                  juridical: true,
                });
              }}
              value="juridical"
              control={<Radio color="primary" />}
              label="JURIDICAL"
              labelPlacement="start"
            />
          </RadioGroup>
          <TextField
            id="address"
            label="Address"
            required
            onChange={(event) => {
              setformClient({
                ...formClient,
                name: event.target.value,
              });
            }}
            style={{ width: "100%" }}
          />
          <TextField
            id="name"
            label="Name"
            required
            style={{ width: "100%" }}
          />
          <TextField
            id="cpf"
            label="CPF"
            style={
              formClient.juridical
                ? { width: "100%", display: "none" }
                : { width: "100%" }
            }
            onChange={(event) => {
              setformClient({
                ...formClient,
                cpf: event.target.value,
              });
            }}
          />
          <TextField
            id="cnpj"
            label="CNPJ"
            style={
              formClient.physical
                ? { width: "100%", display: "none" }
                : { width: "100%" }
            }
            onChange={(event) => {
              setformClient({
                ...formClient,
                cnpj: event.target.value,
              });
            }}
          />
          <Button
            type="submit"
            style={globalStyles.saveFormButton}
            onClick={async () =>
              await ClientRegistrationController.handleSaveClient(formClient)
            }
          >
            Save
          </Button>
          <Button type="submit" style={globalStyles.cancelFormButton}>
            Cancel
          </Button>
        </form>
      </div>
      <div style={{ width: "40%" }}></div>
    </div>
  );
}
export default ClientRegistration;
