import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { Label, FormSelect } from './SelectBox.styled';

function SelectBox() {
  const [lang, setLang] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string);
  };
  return (
    <FormSelect style={{minWidth: 120}} color='info'>
      <Label>Language</Label>
      <Select value={lang} label="Language" onChange={handleChange} >
        <MenuItem value={'RU'}>RU</MenuItem>
        <MenuItem value={'EN'}>EN</MenuItem>
      </Select>
    </FormSelect>
  );
}

export default SelectBox;
