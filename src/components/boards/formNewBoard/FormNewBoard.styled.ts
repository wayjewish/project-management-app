import { styled } from '@mui/material/styles';
import { Box, TextField, Button } from '@mui/material';

export const BoxFormNewBoard = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '24px',
}));

export const BoxTitle = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: '24px',
}));

export const FormInput = styled(TextField)(() => ({
  paddingBottom: '20px',
  width: '400px',
}));

export const ButtonInput = styled(Button)(() => ({
  height: '42px',
  width: '100px',
}));
