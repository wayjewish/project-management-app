import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const BoardWrap = styled(Box)(() => ({
  position: 'relative',
  flexGrow: '1',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
}));

export const ColumnsOverflowBox = styled(Box)(({ theme }) => ({
  flexGrow: '1',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
}));

export const ColumnsBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '0',
  left: '0',

  flexGrow: '1',
  display: 'flex',
  flexDirection: 'row',
  gap: theme.spacing(1),
  width: '100%',
  height: '100%',
  overflowX: 'auto',
}));
