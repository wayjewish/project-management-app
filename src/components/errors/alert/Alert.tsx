import React, { useEffect } from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { IErrorApp, removeError } from '../../../store/features/appSlice';
import { useAppDispatch } from '../../../store/hooks';

interface IProps {
  isOpen: boolean;
  error: IErrorApp;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function AlertComponent(props: IProps) {
  const dispatch = useAppDispatch();

  const { isOpen, error } = props;

  const [open, setOpen] = React.useState(false);
  const [timer, setTimer] = React.useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen && !open) {
      setOpen(true);

      if (!timer) {
        setTimer(
          setTimeout(() => {
            close();
          }, 6000)
        );
      }
    }
  }, [isOpen, open]);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    close();
  };

  const close = () => {
    setOpen(false);
    setTimer(null);
    dispatch(removeError(error));
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {error.message}
      </Alert>
    </Snackbar>
  );
}

export default AlertComponent;
