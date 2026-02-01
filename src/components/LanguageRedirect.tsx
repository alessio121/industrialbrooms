import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type Language = 'it' | 'en' | 'fr' | 'es' | 'de';

const SUPPORTED_LANGUAGES: Language[] = ['it', 'en', 'fr', 'es', 'de'];
const DEFAULT_LANGUAGE: Language = 'it';

const detectLanguage = (): Language => {
  // 1. Check localStorage for saved preference
  const saved = localStorage.getItem('language');
  if (saved && SUPPORTED_LANGUAGES.includes(saved as Language)) {
    return saved as Language;
  }

  // 2. Detect from browser language
  const browserLang = navigator.language.split('-')[0];
  if (SUPPORTED_LANGUAGES.includes(browserLang as Language)) {
    return browserLang as Language;
  }

  // 3. Fallback to default (Italian)
  return DEFAULT_LANGUAGE;
};

const LanguageRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const detectedLang = detectLanguage();
    navigate(`/${detectedLang}`, { replace: true });
  }, [navigate]);

  return null;
};

export default LanguageRedirect;
