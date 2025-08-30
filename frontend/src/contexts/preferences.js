import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import translations from '../i18n/translations';

const PreferencesContext = createContext();

export function PreferencesProvider({ children }) {
  const savedLanguage = localStorage.getItem('language') || 'pt_br';
  const [language, setLanguage] = useState(savedLanguage);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const handleChangeLanguage = (lang) => setLanguage(lang);

  const t = useMemo(
    () =>
      (key, params = {}) => {
        let translation = translations[language][key];

        if (params.count !== undefined) {
          const pluralMap = {
            0: '_zero',
            1: '_one',
          };

          const pluralKey = `${key}${pluralMap[params.count] || '_other'}`;

          translation = translations[language][pluralKey] || translation;
        }

        if (params) {
          Object.keys(params).forEach((p) => {
            translation = translation.replace(
              new RegExp(`{{${p}}}`, 'g'),
              params[p]
            );
          });
        }

        return translation || key;
      },
    [language]
  );

  const providerValue = {
    language,
    handleChangeLanguage,
    t,
  };

  return (
    <PreferencesContext.Provider value={providerValue}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  return useContext(PreferencesContext);
}
