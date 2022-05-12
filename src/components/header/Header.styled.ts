import { styled } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';
import { Box, FormControl } from '@mui/material';

export const Header = styled('header')({
  width: '100%',
  height: '100%',
  background: `${indigo['A200']}`,
});
export const Wrap = styled(Box)({
    display: 'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding: '20px'
})

export const FormSelect = styled(FormControl)({
    minWidth: '120px',
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
    border: '1px solid white',
  },
  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: 'white',
  },
});
