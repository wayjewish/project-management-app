import i18n from 'i18next';
import backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';
import { ILang } from './store/features/authSlice';

i18n
  .use(backend)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      ru: {
        translation: translationRU,
      },
    },
    lng: localStorage.getItem('lang') ? (localStorage.getItem('lang') as ILang) : 'en',
    fallbackLng: localStorage.getItem('lang') ? (localStorage.getItem('lang') as ILang) : 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
