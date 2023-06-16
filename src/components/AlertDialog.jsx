import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Link from "next/link";
import { Close } from "@/assets/icons/Close"
import { Hamburger } from "@/assets/icons/Hamburger";

import { Navigation } from "@/components/Navigation"

export default function AlertDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  return (

      <div>
        <Button onClick={handleClickOpen}>
          <Hamburger />
        </Button>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent className="navigation">
            <Navigation/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>
              <Close />
            </Button>
          </DialogActions>
        </Dialog>
      </div>

  );
}
