import React from "react";

import AppBar from "../AppBar";
import Login from "../Login/Login";

function BaseLayout({location}) {
  
  return <>{location.state.isAuthenticated ? <AppBar /> : <Login />}</>;
}
export default BaseLayout;
