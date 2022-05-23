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
  isOpen: boolean;
  close: () => void;
  title: string;
  text?: string;
  yes?: () => void;
  no?: () => void;
}

export default function ModalWindowConfirm({ isOpen, close, title, text, yes, no }: IProps) {
  const handleAnswerYes = () => {
    if (yes) {
      yes();
    }
    handleClose();
  };

  const handleAnswerNo = () => {
    if (no) {
      no();
    }
    handleClose();
  };

  const handleClose = () => {
    close();
  };

  return (
    <div>
      <Dialog fullWidth maxWidth="sm" open={isOpen} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        {text && (
          <DialogContent>
            <DialogContentText>{text}</DialogContentText>
          </DialogContent>
        )}
        <DialogActions>
          <Button onClick={handleAnswerNo}>Нет</Button>
          <Button onClick={handleAnswerYes}>Да</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
