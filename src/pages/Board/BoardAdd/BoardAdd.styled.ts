import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';
import { CancelOutlined } from '@mui/icons-material';


export const CardItemAdd = styled(Card)(() => ({
  height: 200,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  cursor:'pointer'
}));

export const CancelOutlinedBoardAdd = styled(CancelOutlined)(() => ({
  width: '50px',
  height: '50px',
  transform: 'rotate(45deg)',
  color: 'rgba(0, 0, 0, 0.54)',
}));

