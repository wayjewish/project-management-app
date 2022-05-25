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
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  text?: string;
  yes?: () => void;
  no?: () => void;
}

export default function ModalWindowConfirm({
  openModal,
  setOpenModal,
  title,
  text,
  yes,
  no,
}: IProps) {
  const handleClose = (userResponse: boolean) => {
    if (userResponse) {
      if (yes) {
        yes();
      }
    } else {
      if (no) {
        no();
      }
    }

    setOpenModal(false);
  };

  return (
    <div>
      <Dialog fullWidth maxWidth="sm" open={openModal} onClose={() => handleClose(false)}>
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        {text && (
          <DialogContent>
            <DialogContentText>{text}</DialogContentText>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={() => handleClose(false)}>Нет</Button>
          <Button onClick={() => handleClose(true)}>Да</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
