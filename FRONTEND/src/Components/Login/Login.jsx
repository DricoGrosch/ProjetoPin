import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import styles from "./styles";
import Logo from '../../img/logo.png'

function Login() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <>
      <div style={styles.outsideContainer}>
        <div
          style={styles.container}
        >
          <img 
          src={Logo}
          alt='Logo'
          style={{height:'40%', margin:'1%'}}/>
          <form>
            <div style={{ padding: "0 5% 5% 5%" }}>
              <TextField
                id="username"
                label="Username"
                required="true"
                onChange={(event) => {
                  setCurrentUser({
                    ...currentUser,
                    username: event.target.value,
                  });
                }}
                style={{ width: "100%" }}
              />
              <TextField
                required="true"
                type="password"
                id="password"
                label="Password"
                onChange={(event) => {
                  setCurrentUser({
                    ...currentUser,
                    password: event.target.value,
                  });
                }}
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ width: "100%" }}>
              <Button
                style={{
                  backgroundColor: "#005ca5",
                  width:'90%',
                  color:'whitesmoke'
                }}
              >
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
