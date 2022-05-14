import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { Label } from './SelectBox.styled';

function SelectBox() {
  const [lang, setLang] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
  };
  return (
    <FormControl size="small">
      <Label>Language</Label>
      <Select value={lang} label="Language" onChange={handleChange}>
        <MenuItem value={'RU'}>RU</MenuItem>
        <MenuItem value={'EN'}>EN</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SelectBox;
