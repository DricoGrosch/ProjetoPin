import React from "react";

import AppBar from "../AppBar";
import Login from "../Login/Login";
import Content from "../Content/Content";

function BaseLayout(props) {
  try {
    if (props.location.state.isAuthenticated) {
      return (
        <>
          <AppBar />
          <Content componentToRender={props.componentToRender} />
        </>
      );
    } else {
      return <Login />;
    }
  } catch {
    return <Login />;
  }
}

export default BaseLayout;
