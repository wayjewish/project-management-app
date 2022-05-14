import { styled } from '@mui/material/styles';
import { FormControl, InputLabel } from '@mui/material';
import { indigo } from '@mui/material/colors';

export const Label = styled(InputLabel)(({ theme }) => ({
  [theme.breakpoints.down('xs')]: {
    color: `${indigo['A200']}`,
  },
  [theme.breakpoints.up('md')]: {
    color: 'white',
  },
}));

export const FormSelect = styled(FormControl)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    '&:hover .MuiFormControl-root': {
      borderColor: 'white',
    },
    '.MuiInputLabel-root.Mui-focused': {
      borderColor: 'white',
      color: 'white',
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
  },
}));
