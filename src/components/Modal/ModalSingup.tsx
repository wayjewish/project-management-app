import React from 'react';
import { Button, Link, TextField, Typography, Box, Dialog } from '@mui/material';


const ModalSingup = () => {
    const [openSingupp, setOpenSingupp] = React.useState(false);
  return (
    <form noValidate autoComplete="off">
      <Dialog open={openSingupp}>
        <Box p={2} maxWidth={'420px'}>
          <Typography variant="h5">Sing up</Typography>
          <TextField
            fullWidth
            id="name"
            type="text"
            label="Name"
            placeholder="Name"
            margin="normal"
          />
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
            <Link>Log in</Link>
          </Box>
        </Box>
      </Dialog>
    </form>
  );
};
export default ModalSingup;
