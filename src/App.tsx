import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TranslationProvider } from './hooks/useTranslation';
import SEOHead from './components/SEOHead';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

const App = () => {
  return (
    <BrowserRouter>
      <TranslationProvider>
        <SEOHead />
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
          <Footer />
        </div>
      </TranslationProvider>
    </BrowserRouter>
  );
};

export default App;