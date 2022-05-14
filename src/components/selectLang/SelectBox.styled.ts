import { styled } from '@mui/material/styles';
import { InputLabel } from '@mui/material';
import { indigo } from '@mui/material/colors';

export const Label = styled(InputLabel)(({ theme }) => ({
  [theme.breakpoints.down('xs')]: {
    color: `${indigo['A200']}`,
  },
  [theme.breakpoints.up('md')]: {
    color: 'white',
  },
}));
