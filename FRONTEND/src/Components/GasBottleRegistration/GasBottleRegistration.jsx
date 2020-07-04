import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import GasBottleRegistrationController from "./GasBottleRegistrationController";
import styles from "./styles";
import CreateIcon from "@material-ui/icons/Create";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";










function GasBotlleRegistration() {
  const [formBottle, setFormBottle] = useState({});
  const [bottles, setBottles] = useState([]);

  
  return (
  
      <div>
        <form action="">
          <div
            style={{
              width: "40%",
              border: "solid #ece9e9",
              padding: "1%",
              margin: "1%",
              backgroundColor: "whitesmoke",
            }}
          >
            <TextField
              id="bottle-name"
              label="Bottle Name"
              style={{
                width: "100%",
              }}
              onChange={(event) => {
                setFormBottle({
                  ...formBottle,
                  type: event.target.value,
                });
              }}
            ></TextField>

            <TextField
              id="bottle-CostPrice"
              label="Cost Price"
              style={{
                width: "100%",
              }}
              onChange={(event) => {
                setFormBottle({
                  ...formBottle,
                  costPrice: event.target.value,
                });
              }}
            ></TextField>

            <TextField
              id="sale-price"
              label="Sale Price"
              style={{
                width: "100%",
              }}
              onChange={(event) => {
                setFormBottle({
                  ...formBottle,
                  sellPrice: event.target.value,
                });
              }}
            ></TextField>

            <Button
              color="inherit"
              style={{
                padding:"10px 12px",
                backgroundColor: "#005ca5",
                width: "100%",
                color: "whitesmoke",
                marginTop: "3%",        
              }}
              onClick={async () =>
                await GasBottleRegistrationController.handleSaveBottle(
                  formBottle,
                  setBottles
                )
              }
            >
              CADASTRAR
            </Button>

            <Button
            type="submit"
            onClick={() => ''}
              color="inherit"
              style={{
                padding:"10px 12px",
                backgroundColor: "#d13639",
                width: "100%",
                color: "whitesmoke",
                marginTop: "3%",                
              }}
            >
              FECHAR
            </Button>
          </div>
        </form>


{/*           
          <div style={styles.container}>
            <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
              {bottles.map((bottle) => {
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
                      {bottle.type} </div>
                    
                      <div style={{
                        textAlign: "end",
                        width:"100%"
                      }}>
                        
                        <IconButton style={{color:"whitesmoke"}}>
                          <CreateIcon
                            onClick={async () => {
                              
                              await GasBottleRegistrationController.setBottleToEdit(
                                bottle,
                                setFormBottle
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
                        <li>{bottle.custPrice}</li>
                        <li>{bottle.sellPrice}</li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
        </div> */}
      </div>
  );
}

export default GasBotlleRegistration;
