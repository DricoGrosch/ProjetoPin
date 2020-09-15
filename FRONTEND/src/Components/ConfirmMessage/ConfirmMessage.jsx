import {
  Modal,
  Fade,
  DialogContentText,
  DialogTitle,
  DialogContent,
  Button,
  DialogActions,
  Dialog,
} from "@material-ui/core";
import { useAlert } from "react-alert";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import React from "react";
function ConfirmMessage({ open, setOpen, successCallback, title, message }) {

  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={async () => {
              await successCallback();
              setOpen(false);
            }}
            color="primary"
          >
            YES
          </Button>
          <Button onClick={() => setOpen(false)} color="primary" autoFocus>
            NO
          </Button>
        </DialogActions>
      </Dialog>

      <Provider
        template={AlertTemplate}
        timeout={5000}
        position={positions.BOTTOM_CENTER}
      />
    </>
  );
}

export default ConfirmMessage;
