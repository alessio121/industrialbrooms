type Language = 'it' | 'en' | 'fr' | 'es' | 'de';

// Mapping of blog post slugs across all languages
// Each key is a "post ID" and the value contains the slug for each language
const slugMappings: Record<string, Record<Language, string>> = {
  'scrap-yard-cleaning': {
    it: 'pulizia-piazzali-rottami-scope-industriali',
    en: 'scrap-yard-cleaning-industrial-brooms',
    fr: 'nettoyage-parc-ferraille-balais-industriels',
    es: 'limpieza-patio-chatarra-escobas-industriales',
    de: 'schrottplatz-reinigung-industriebesen'
  },
  'metal-chips-workshop': {
    it: 'come-pulire-trucioli-metallici-officina',
    en: 'how-to-clean-metal-chips-workshop',
    fr: 'comment-nettoyer-copeaux-metalliques-atelier',
    es: 'como-limpiar-virutas-metalicas-taller',
    de: 'metallspaene-reinigen-werkstatt-anleitung'
  },
  'broom-selection-guide': {
    it: 'guida-scelta-scopa-industriale',
    en: 'industrial-broom-selection-guide',
    fr: 'guide-choix-balai-industriel',
    es: 'guia-eleccion-escoba-industrial',
    de: 'industriebesen-auswahl-ratgeber'
  },
  'forklift-brooms-usage': {
    it: 'scope-attacco-forche-quando-usarle',
    en: 'forklift-attachment-brooms-when-to-use',
    fr: 'balais-attache-fourches-quand-utiliser',
    es: 'escobas-enganche-horquillas-cuando-usar',
    de: 'gabelstapler-anbaubesen-wann-verwenden'
  }
};

// Get the translated slug for a different language
export const getTranslatedSlug = (currentSlug: string, targetLang: Language): string | null => {
  for (const postId in slugMappings) {
    const slugs = slugMappings[postId];
    // Check if current slug belongs to this post
    for (const lang in slugs) {
      if (slugs[lang as Language] === currentSlug) {
        return slugs[targetLang];
      }
    }
  }
  return null;
};

// Get the post ID from any slug
export const getPostIdFromSlug = (slug: string): string | null => {
  for (const postId in slugMappings) {
    const slugs = slugMappings[postId];
    for (const lang in slugs) {
      if (slugs[lang as Language] === slug) {
        return postId;
      }
    }
  }
  return null;
};

// Get slug for a specific language from post ID
export const getSlugForLanguage = (postId: string, lang: Language): string | null => {
  return slugMappings[postId]?.[lang] || null;
};
