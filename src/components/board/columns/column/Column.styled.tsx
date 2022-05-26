import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { grey } from '@mui/material/colors';

export const ColumnBox = styled(Box)(() => ({}));

export const ColumnContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  maxHeight: '100%',

  borderRadius: theme.spacing(1),
  background: grey[300],
}));

export const TopBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  paddingBottom: '0',
}));

export const TitleBox = styled(Box)(() => ({
  cursor: 'pointer',
}));

export const TopBtnsBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
}));

export const TasksOverflowBox = styled(Box)(({ theme }) => ({
  flex: '1 1 auto',
  width: '250px',
  padding: `${theme.spacing(2)} ${theme.spacing(1)}`,

  overflowY: 'auto',
}));

export const TasksBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: theme.spacing(2),
}));

export const BotBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  paddingTop: '0',
}));
