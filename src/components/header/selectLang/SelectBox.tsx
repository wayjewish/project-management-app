import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React from 'react';
import { FormControlSelect } from './SelectBox.styled';

type ILang = 'RU' | 'EN';

interface IProps {
  media: 'desctop' | 'mobile';
}

function SelectBox(props: IProps) {
  const { media } = props;
  const [lang, setLang] = React.useState<ILang>('RU');

  const handleChange = (e: SelectChangeEvent) => {
    setLang(e.target.value as ILang);
  };

  return (
    <FormControlSelect media={media}>
      <InputLabel>Language</InputLabel>
      <Select
        value={lang}
        label="Language"
        MenuProps={{
          disableScrollLock: true,
        }}
        onChange={handleChange}
      >
        <MenuItem value={'RU'}>RU</MenuItem>
        <MenuItem value={'EN'}>EN</MenuItem>
      </Select>
    </FormControlSelect>
  );
}

export default SelectBox;
