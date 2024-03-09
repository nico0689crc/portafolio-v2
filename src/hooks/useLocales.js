import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from '../i18n';

export default function useLocales() {
  const { i18n, t } = useTranslation();
  const currentLang = localStorage.getItem('i18nextLng') ?? "en";
  const langToChange = languages[Object.keys(languages).find(key => key === currentLang)];

  const onChangeLang = useCallback(() => {
    i18n.changeLanguage(localStorage.getItem('i18nextLng') === "en" ? "es" : "en");
  }, [i18n]);

  return { languages, t, langToChange, onChangeLang };
}
