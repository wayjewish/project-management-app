import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface IModalWindowConfirm {
  isOpen: boolean;
  textMassage: string;
  reuseDelete: () => void;
  deleteElement: () => void;
}

export default function ModalWindowConfirm({
  isOpen,
  textMassage,
  reuseDelete,
  deleteElement,
}: IModalWindowConfirm) {
  const [open, setOpen] = useState(isOpen);

  const handleClose = (userResponse: boolean) => {
    reuseDelete();
    setOpen(false);
    if (userResponse) {
      deleteElement();
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{textMassage}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)}>Нет</Button>
          <Button onClick={() => handleClose(true)} autoFocus>
            Да
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
