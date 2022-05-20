import { styled } from '@mui/material/styles';
import { Box, TextField, Button } from '@mui/material';

export const BoxFormNewBoard = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 24,
}));

export const BoxTitle = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: 24,
}));

export const FormInput = styled(TextField)(() => ({
  paddingBottom: 20,
  width: 400,
}));

export const ButtonInput = styled(Button)(() => ({
  height: 42,
  width: 100,
}));
