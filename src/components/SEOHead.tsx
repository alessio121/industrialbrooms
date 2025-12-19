import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { seoTranslations } from '../utils/seoTranslations';

const BASE_URL = 'https://industrialbrooms.com';

const SEOHead: React.FC = () => {
  const { currentLanguage } = useTranslation();
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

    // Update canonical URL for current language
    const canonicalUrl = currentLanguage === 'it'
      ? BASE_URL
      : `${BASE_URL}/?lang=${currentLanguage}`;

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl);
    }

    // Update hreflang tags dynamically
    const languages = ['it', 'en', 'fr', 'es', 'de'];
    languages.forEach(lang => {
      const hreflang = document.querySelector(`link[hreflang="${lang}"]`);
      if (hreflang) {
        const url = lang === 'it' ? `${BASE_URL}/?lang=it` : `${BASE_URL}/?lang=${lang}`;
        hreflang.setAttribute('href', url);
      }
    });

  }, [currentLanguage, seo]);

  return null;
};

export default SEOHead;