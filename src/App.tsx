import React from 'react';
import { BrowserRouter, Routes, Route, useParams, Navigate } from 'react-router-dom';
import { TranslationProvider, isValidLanguage, Language } from './hooks/useTranslation';
import SEOHead from './components/SEOHead';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import LanguageRedirect from './components/LanguageRedirect';

const DEFAULT_LANGUAGE: Language = 'it';

// Wrapper component that validates language and provides context
const LanguageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { lang } = useParams<{ lang: string }>();

  // Validate language parameter
  if (!lang || !isValidLanguage(lang)) {
    return <Navigate to={`/${DEFAULT_LANGUAGE}`} replace />;
  }

  return (
    <TranslationProvider language={lang}>
      <SEOHead />
      <div className="min-h-screen bg-white">
        <Header />
        {children}
        <Footer />
      </div>
    </TranslationProvider>
  );
};

// Legacy redirect for old /blog/:slug URLs
const LegacyBlogPostRedirect = () => {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={`/${DEFAULT_LANGUAGE}/blog/${slug}`} replace />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root redirect to detected/default language */}
        <Route path="/" element={<LanguageRedirect />} />

        {/* Legacy redirects for old URLs without language prefix */}
        <Route path="/blog" element={<Navigate to={`/${DEFAULT_LANGUAGE}/blog`} replace />} />
        <Route path="/blog/:slug" element={<LegacyBlogPostRedirect />} />

        {/* Language-prefixed routes */}
        <Route path="/:lang" element={<LanguageWrapper><Home /></LanguageWrapper>} />
        <Route path="/:lang/blog" element={<LanguageWrapper><Blog /></LanguageWrapper>} />
        <Route path="/:lang/blog/:slug" element={<LanguageWrapper><BlogPost /></LanguageWrapper>} />

        {/* Catch-all redirect for invalid paths */}
        <Route path="*" element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
