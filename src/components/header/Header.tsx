import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Header, FormSelect, Wrap } from './Header.styled';
import { Box, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

function HeaderComponent() {
  const [lang, setLang] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
  };

  return (
    <Header>
      <Wrap>
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
          <FormSelect size="small">
            <InputLabel id="demo-simple-select-label" sx={{ color: 'white' }}>
              Language
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={lang}
              label="Language"
              onChange={handleChange}
              sx={{ color: 'white' }}
            >
              <MenuItem value={10}>RU</MenuItem>
              <MenuItem value={20}>EN</MenuItem>
            </Select>
          </FormSelect>
        </Box>
      </Wrap>
    </Header>
  );
}

export default HeaderComponent;
