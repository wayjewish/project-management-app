import { styled } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';
import { AppBar, Box, FormControl } from '@mui/material';

export const Header = styled(AppBar)({
  background: `${indigo['A200']}`,
  boxShadow: '0',
  '.MuiAppBar-positionSticky ': {
    top: '0',
    left: '0',
    zIndex: '2',
    height: '200px',
    position: 'sticky',
    backgroundColor: '#fafafa',
  },
});

export const Wrap = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px',
});

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

export const BurgerBox = styled(Box)({
  flexGrow: '1',
  justifyContent: 'flex-end',
});
