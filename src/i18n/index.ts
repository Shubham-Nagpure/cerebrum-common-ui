import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './translations/en.json';
import arTranslation from './translations/ar.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ar: { translation: arTranslation }
  },
  fallbackLng: 'en', // default fallback language as english
  debug: import.meta.env.DEV, // to show debugging messsages onto the console depending on environment

  // interpolation used to define how dynamic values to be inserted into translated strings
  // should be handled
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
