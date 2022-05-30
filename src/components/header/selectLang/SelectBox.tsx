import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { useEffect } from 'react';
import { FormControlSelect } from './SelectBox.styled';

import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { ILang, setLang } from '../../../store/features/authSlice';

interface IProps {
  media: 'desctop' | 'mobile';
}

function SelectBox(props: IProps) {
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const { lang } = useAppSelector((state) => state.auth);

  const { media } = props;

  const handleChange = (e: SelectChangeEvent) => {
    const newLang = e.target.value as ILang;
    dispatch(setLang(newLang));
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <FormControlSelect media={media}>
      <InputLabel>{t('header.language')}</InputLabel>
      <Select
        value={lang}
        label="Language"
        MenuProps={{
          disableScrollLock: true,
        }}
        onChange={handleChange}
      >
        <MenuItem value="en">EN</MenuItem>
        <MenuItem value="ru">RU</MenuItem>
      </Select>
    </FormControlSelect>
  );
}

export default SelectBox;
