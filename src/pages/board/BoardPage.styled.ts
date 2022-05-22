import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

export const TopBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
}));

export const CircularProgressBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
}));
