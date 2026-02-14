import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import srTranslation from '../locales/sr/translation.json';
import enTranslation from '../locales/en/translation.json';

const STORAGE_KEY = 'carcode-language';

const resources = {
  sr: {
    translation: srTranslation,
  },
  en: {
    translation: enTranslation,
  },
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: 'sr',
  supportedLngs: ['sr', 'en'],
  load: 'languageOnly',
  interpolation: {
    escapeValue: false, // React already escapes
  },
  detection: {
    order: ['localStorage', 'navigator'],
    lookupLocalStorage: STORAGE_KEY,
    caches: ['localStorage'],
    checkWhitelist: true,
  },
  react: {
    useSuspense: false,
  },
});

// Persist language changes to localStorage
i18n.on('languageChanged', (lng) => {
  try {
    localStorage.setItem(STORAGE_KEY, lng);
  } catch (e) {
    console.warn('Could not persist language to localStorage', e);
  }
});

export default i18n;
export { STORAGE_KEY };
