import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import AccountCircle from "@material-ui/icons/AccountCircle";
import CustomDrawer from "../Drawer";

function CustomAppBar() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <CustomDrawer />
          <div
            style={{
              width: "100%",

              alignItems: "center",
              display: "inline-flex",
              justifyContent: "flex-end",
            }}
          >
            <AccountCircle />
            <Button color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default CustomAppBar;
