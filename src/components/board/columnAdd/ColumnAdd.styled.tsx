import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import { grey } from '@mui/material/colors';

export const ColumnBox = styled(Box)(() => ({}));

export const ColumnContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
  maxHeight: '100%',
  padding: theme.spacing(1),

  borderRadius: theme.spacing(1),
  background: grey[300],
}));

export const ButtonAddColumn = styled(Button)(({ theme }) => ({
  width: '250px',
}));
