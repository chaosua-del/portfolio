import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './dictionaries/en.json';
import ru from './dictionaries/ru.json';

export enum Language {
  EN = 'en',
  RU = 'ru',
}

export const supportedLngs = [Language.EN, Language.RU];
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: en,
  },
  ru: {
    translation: ru,
  },
};

void i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    supportedLngs,
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie', 'localStorage'],
      cookieMinutes: 10080,
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
