import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import pl from './locales/pl.json';
import de from './locales/de.json';
import en from './locales/en.json';

const resources = {
  pl: { translation: pl },
  de: { translation: de },
  en: { translation: en },
};

// Initialize i18n synchronously before React renders
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'pl',
    lng: localStorage.getItem('i18nextLng') || 'pl',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;