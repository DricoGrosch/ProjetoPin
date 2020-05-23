import DrawerController from "./DrawerController";
import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import MapIcon from "@material-ui/icons/Map";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
import DonutSmallIcon from "@material-ui/icons/DonutSmall";
import ExpandLess from "@material-ui/icons/ExpandLess";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import ExpandMore from "@material-ui/icons/ExpandMore";
import EditIcon from "@material-ui/icons/Edit";
import TramIcon from "@material-ui/icons/Tram";
import styles from "./styles";
import PersonIcon from "@material-ui/icons/Person";
import { useHistory } from "react-router-dom";
import { Collapse } from "@material-ui/core";

function CustomDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [registrationCollapsed, setregistrationCollapsed] = useState(false);
  const routerHistory = useHistory();

  return (
    <>
      <IconButton
        onClick={() => {
          DrawerController.toggleDrawer(isOpen, setIsOpen);
        }}
        edge="start"
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={isOpen}
        onClose={() => {
          DrawerController.toggleDrawer(isOpen, setIsOpen);
        }}
      >
        <List>
          <ListItem
            button
            onClick={() => {
              routerHistory.push({
                pathname: "/home",
                state: { isAuthenticated: true },
              });
            }}
          >
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary={"HOME"} />
          </ListItem>
          <ListItem
            button
            onClick={() => {
              routerHistory.push({
                pathname: "/map",
                state: { isAuthenticated: true },
              });
            }}
          >
            <ListItemIcon>
              <MapIcon />
            </ListItemIcon>
            <ListItemText primary={"MAP"} />
          </ListItem>

          <ListItem button style={styles.ListItem}>
            <ListItemIcon style={styles.ListItemIcon}>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary={"ORDERS"} />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <DonutSmallIcon />
            </ListItemIcon>
            <ListItemText primary={"OTHERS"} />
          </ListItem>

          <ListItem
            button
            onClick={() => {
              setregistrationCollapsed(!registrationCollapsed);
            }}
          >
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            <ListItemText primary="REGISTRATION" />
            {registrationCollapsed ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={registrationCollapsed}
            timeout="auto"
            unmountOnExit={true}
          >
            <List component="div" disablePadding>
              <ListItem button>
                <ListItemIcon>
                  <DirectionsBikeIcon />
                </ListItemIcon>
                <ListItemText primary={"EMPLOYEES"} />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={"USERS"} />
              </ListItem>
              <ListItem
                button
                onClick={() => {
                  routerHistory.push({
                    pathname: "/registration/clients",
                    state: { isAuthenticated: true },
                  });
                }}
              >
                <ListItemIcon>
                  <RecordVoiceOverIcon />
                </ListItemIcon>
                <ListItemText primary={"CLIENTS"} />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <TramIcon />
                </ListItemIcon>
                <ListItemText primary={"GAS BOTTLES"} />
              </ListItem>
            </List>
          </Collapse>
        </List>
        <Divider />
      </Drawer>
    </>
  );
}
export default CustomDrawer;
