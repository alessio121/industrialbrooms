import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { seoTranslations } from '../utils/seoTranslations';

const BASE_URL = 'https://industrialbrooms.com';
const LANGUAGES = ['it', 'en', 'fr', 'es', 'de'] as const;

const SEOHead: React.FC = () => {
  const { currentLanguage } = useTranslation();
  const location = useLocation();
  const seo = seoTranslations[currentLanguage];

  React.useEffect(() => {
    // Update document title
    document.title = seo.title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seo.description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', seo.keywords);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', seo.title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', seo.description);
    }

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute('content', seo.locale);
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', seo.title);
    }

    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', seo.description);
    }

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', currentLanguage);

    // Get the path without language prefix for hreflang
    const pathParts = location.pathname.split('/').filter(Boolean);
    // Remove language prefix if present
    if (pathParts.length > 0 && LANGUAGES.includes(pathParts[0] as typeof LANGUAGES[number])) {
      pathParts.shift();
    }
    const pathWithoutLang = pathParts.length > 0 ? `/${pathParts.join('/')}` : '';

    // Update canonical URL for current language
    const canonicalUrl = `${BASE_URL}/${currentLanguage}${pathWithoutLang}`;

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    }

    // Update hreflang tags dynamically
    LANGUAGES.forEach((lang: typeof LANGUAGES[number]) => {
      const hreflang = document.querySelector(`link[hreflang="${lang}"]`);
      if (hreflang) {
        const url = `${BASE_URL}/${lang}${pathWithoutLang}`;
        hreflang.setAttribute('href', url);
      }
    });

    // Update x-default to point to Italian version
    const xDefault = document.querySelector('link[hreflang="x-default"]');
    if (xDefault) {
      xDefault.setAttribute('href', `${BASE_URL}/it${pathWithoutLang}`);
    }

  }, [currentLanguage, seo, location.pathname]);

  return null;
};

export default SEOHead;
