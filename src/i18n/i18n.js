/**
  @author - Malhar Jadhav
  @description - Internationalization (i18n) configuration setup
*/

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './Translations/en.json';
import arTranslation from './Translations/ar.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ar: { translation: arTranslation }
    // Add more languages as needed
  },
  fallbackLng: 'en', // default fallback language as english
  debug: true, // to show debugging messsages onto the console
  // interpolation used to define how dynamic values to be inserted into translated strings
  // should be handled
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
