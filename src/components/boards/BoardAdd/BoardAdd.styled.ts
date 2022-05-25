import { styled } from '@mui/material/styles';
import { Card, CardContent } from '@mui/material';
import { grey } from '@mui/material/colors';
import { CancelOutlined } from '@mui/icons-material';

export const CardAdd = styled(Card)(({ theme }) => ({
  height: '200px',
  cursor: 'pointer',

  [theme.breakpoints.down('md')]: {
    height: 'auto',
  },
}));

export const CardAddContent = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
}));

export const IconBoardAdd = styled(CancelOutlined)(() => ({
  width: '50px',
  height: '50px',
  transform: 'rotate(45deg)',
  color: grey[600],
}));
