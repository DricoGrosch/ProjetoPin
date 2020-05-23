import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import AccountCircle from "@material-ui/icons/AccountCircle";
import CustomDrawer from "../Drawer";
import AppBarController from "./AppBarController";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory } from "react-router-dom";

function CustomAppBar() {
  const [authUser, setAuthUser] = useState({});
  const routerHistory = useHistory();
  const navigateCallback = () => {
    routerHistory.push("login");
  };
  useEffect(() => {
    AppBarController.loadAuthUserData(setAuthUser);
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <CustomDrawer />
          <div
            style={{
              width: "100%",
              marginLeft: "3%",
            }}
          >
            <h2>BlueMoon System</h2>
          </div>

          <div
            style={{
              width: "100%",
              alignItems: "center",
              display: "inline-flex",
              justifyContent: "flex-end",
            }}
          >
            <AccountCircle />
            <Button color="inherit">{authUser.username}</Button>
            <Button
              onClick={async () => {
                await AppBarController.handleLogout(navigateCallback);
              }}
              style={{ color: "white",fontFamily:'Roboto' }}
            >
              <ExitToAppIcon />
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default CustomAppBar;
