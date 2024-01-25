import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

export const languages = {
  en: { nativeName: "English", icon: 'flagpack:gb-nir' },
  es: { nativeName: "Español", icon: 'flagpack:es' },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en",
    preload: ['en', 'es'],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true
    }
  });

export default i18n;
