import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

import { useTranslation } from 'react-i18next';

interface IProps {
  isOpen: boolean;
  close: () => void;
  title: string;
  text?: string;
  yes?: () => void;
  no?: () => void;
}

export default function ModalWindowConfirm({ isOpen, close, title, text, yes, no }: IProps) {
  const { t } = useTranslation();

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
          <Button onClick={handleAnswerNo}>{t('no')}</Button>
          <Button onClick={handleAnswerYes}>{t('yes')}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
