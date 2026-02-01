import React, { createContext, useContext, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { translations } from '../utils/translations';
import { getTranslatedSlug } from '../utils/blogSlugMapping';

export type Language = 'it' | 'en' | 'fr' | 'es' | 'de';

const SUPPORTED_LANGUAGES: Language[] = ['it', 'en', 'fr', 'es', 'de'];

export const isValidLanguage = (lang: string): lang is Language => {
  return SUPPORTED_LANGUAGES.includes(lang as Language);
};

interface TranslationContextType {
  currentLanguage: Language;
  changeLanguage: (lang: Language) => void;
  localizedPath: (path: string) => string;
  t: typeof translations.it;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

interface TranslationProviderProps {
  children: ReactNode;
  language: Language;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children, language }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Save language preference to localStorage when it changes
  React.useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const changeLanguage = (newLang: Language) => {
    // Get current path without the language prefix
    const currentPath = location.pathname;
    const pathParts = currentPath.split('/').filter(Boolean);

    // Remove the current language prefix
    if (pathParts.length > 0 && isValidLanguage(pathParts[0])) {
      pathParts.shift();
    }

    // Handle blog post slug translation
    if (pathParts[0] === 'blog' && pathParts[1]) {
      const currentSlug = pathParts[1];
      const translatedSlug = getTranslatedSlug(currentSlug, newLang);
      if (translatedSlug) {
        navigate(`/${newLang}/blog/${translatedSlug}${location.hash}`);
      } else {
        // Slug not found in mapping, go to blog listing
        navigate(`/${newLang}/blog${location.hash}`);
      }
      return;
    }

    // Build new path with new language prefix
    const newPath = pathParts.length > 0
      ? `/${newLang}/${pathParts.join('/')}`
      : `/${newLang}`;

    navigate(`${newPath}${location.hash}`);
  };

  const localizedPath = (path: string): string => {
    // If path starts with /, add the language prefix
    if (path.startsWith('/')) {
      return `/${language}${path}`;
    }
    return `/${language}/${path}`;
  };

  const t = translations[language];

  const value = {
    currentLanguage: language,
    changeLanguage,
    localizedPath,
    t
  };

  return React.createElement(TranslationContext.Provider, { value }, children);
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
