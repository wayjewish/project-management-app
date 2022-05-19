import { styled } from '@mui/material/styles';
import { FormControl, FormControlProps } from '@mui/material';

interface StyledFormControlProps extends FormControlProps {
  media?: 'desctop' | 'mobile';
}

export const FormControlSelect = styled(FormControl, {
  shouldForwardProp: (prop) => prop !== 'media',
})<StyledFormControlProps>(({ media }) => ({
  minWidth: '120px',

  ...(media === 'desctop' && {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white!important',
    },
    '& .MuiInputLabel-root': {
      color: 'white!important',
    },
    '& .MuiSelect-icon': {
      color: 'white!important',
    },
    '.MuiSelect-select': {
      color: 'white!important',
    },
  }),

  ...(media === 'mobile' && {
    width: '100%',
  }),
}));
