import React from 'react';
import Dialog from '@mui/material/Dialog';
import { Button, Link, TextField, Typography, Box } from '@mui/material';

const ModalLogin = () => {
  const [openLogin, setOpenLogin] = React.useState(false);
  return (
    <form noValidate autoComplete="off">
      <Dialog open={openLogin}>
        <Box p={2} maxWidth={'420px'}>
          <Typography variant="h5">Log In</Typography>
          <TextField
            fullWidth
            id="login"
            type="text"
            label="Login"
            placeholder="Login"
            margin="normal"
          />
          <TextField
            fullWidth
            id="password"
            type="password"
            label="Password"
            placeholder="Password"
            margin="normal"
          />
          <Box display={'flex'} flexDirection={'column'}>
            <Button variant="contained" size="large" color="primary">
              Login
            </Button>
            <Link> Create account</Link>
          </Box>
        </Box>
      </Dialog>
    </form>
  );
};

export default ModalLogin;
