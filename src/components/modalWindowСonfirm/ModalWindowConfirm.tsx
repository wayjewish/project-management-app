import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

interface IProps {
  textMassage: string;
  reuseDelete: () => void;
  deleteElement: () => void;
}

export default function ModalWindowConfirm({ textMassage, reuseDelete, deleteElement }: IProps) {
  const [open, setOpen] = useState(true);
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
        onClose={() => handleClose(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{textMassage}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{}</DialogContentText>
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
