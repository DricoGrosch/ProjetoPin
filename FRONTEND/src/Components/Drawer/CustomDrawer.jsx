import DrawerController from "./DrawerController";
import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

function CustomDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <IconButton
        onClick={()=>{DrawerController.toggleDrawer(isOpen, setIsOpen)}}
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={isOpen}
        onClose={()=>{DrawerController.toggleDrawer(isOpen, setIsOpen)}}
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={"Teste"} />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </>
  );
}
export default CustomDrawer;
