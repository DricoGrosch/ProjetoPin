import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import styles from "./styles";
import Logo from "../../img/logo.png";
import LoginController from "./LoginController";
import { useHistory } from "react-router-dom";

function Login() {

  const [currentUser, setCurrentUser] = useState({});
  const routerHistory = useHistory();

  function validateForm(e) {
    if (currentUser.username && currentUser.password) {
      e.preventDefault()
      LoginController.handleAuth(currentUser, () => {
        routerHistory.push("/home");
      });
    }
  }

  return (
    <>
      <div style={styles.outsideContainer}>
        <div style={styles.container}>
          <img src={Logo} alt="Logo" style={{ height: "40%", margin: "1%" }} />
          <form>
            <div style={{ padding: "0 5% 5% 5%" }}>
              <TextField
                id="username"
                label="Username"
                required
                onChange={(event) => {
                  setCurrentUser({
                    ...currentUser,
                    username: event.target.value,
                  });
                }}
                style={{ width: "100%" }}
              />
              <TextField
                required
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
                type="submit"
                onClick={(e) => validateForm(e)}
                style={{
                  backgroundColor: "#005ca5",
                  width: "90%",
                  color: "whitesmoke",
                }}
                style={styles.buttonLogin}
              >
                Sign in
              </Button>
              <Button
                type="submit"
                onClick={() => validateForm()}
                style={styles.buttonCreate}
              >
                Create account
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
