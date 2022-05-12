import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Header } from './Header.styled';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';

function HeaderComponent() {
  const [lang, setLang] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
  };
  return (
    <Header>
      <Box
        display={'flex'}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        p={2}
      >
        <Box>
          <Typography component="h1" variant="h5" color={'white'}>
            RssTracker
          </Typography>
        </Box>
        <Box display={'flex'} gap={3}>
          <Button
            size="medium"
            color="inherit"
            variant="outlined"
            sx={{ borderColor: 'white', color: 'white' }}
          >
            Login
          </Button>
          <FormControl
            size="small"
            sx={{ minWidth: 100 }}
          >
            <InputLabel id="demo-simple-select-label" sx={{color: 'white'}}>
              Language
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={lang}
              label="Language"
              onChange={handleChange}
              color={'primary'}
            >
              <MenuItem value={10}>RU</MenuItem>
              <MenuItem value={20}>EN</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Header>
  );
}

export default HeaderComponent;
