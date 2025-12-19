# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Industrial Brooms is a product showcase website for industrial cleaning equipment (brooms, containers, hoppers, weight control systems). It's a single-page React application with multi-language support (Italian, English, French, Spanish, German).

## Development Commands

```bash
npm run dev      # Start Vite dev server
npm run build    # Production build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Tech Stack

- **React 18** with TypeScript
- **Vite** for bundling
- **Tailwind CSS** for styling
- **Lucide React** for icons

## Architecture

### Internationalization (i18n)

All UI text is translated via the `useTranslation` hook (`src/hooks/useTranslation.ts`). The hook provides:
- `t` - translation object with all strings for current language
- `currentLanguage` - current language code ('it' | 'en' | 'fr' | 'es' | 'de')
- `changeLanguage(lang)` - function to switch languages

Translations are stored in `src/utils/translations.ts`. Default language is Italian. Language preference is persisted to localStorage.

When adding new text:
1. Add the translation key to all language objects in `translations.ts`
2. Use `t.keyName` in components

### Component Structure

Each section is a self-contained component in `src/components/`:
- `Header.tsx` - Navigation with language selector and smooth scrolling
- `Products.tsx` - Product catalog with modal details (largest component)
- `ScopaManuale.tsx` - Manual broom section
- `MakaControl.tsx` - Weight control system section
- `Cassoni.tsx` - Containers section
- `Tramoggia.tsx` - Hopper section
- `Contact.tsx` - Contact form
- `Footer.tsx` - Footer links
- `SEOHead.tsx` - SEO meta tags (uses `seoTranslations.ts`)

### Navigation

Uses smooth scroll via `element.scrollIntoView()`. Section IDs: `home`, `products`, `scopa-manuale`, `maka-control`, `cassoni`, `tramoggia`, `contact`.

### Product Images

Static images are in `/public/` directory and referenced directly (e.g., `/attacco forche 2.png`).
