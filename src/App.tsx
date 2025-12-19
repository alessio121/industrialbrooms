import React from 'react';
import { TranslationProvider } from './hooks/useTranslation';
import SEOHead from './components/SEOHead';
import Header from './components/Header';
import Products from './components/Products';
import ScopaManuale from './components/ScopaManuale';
import MakaControl from './components/MakaControl';
import Cassoni from './components/Cassoni';
import Tramoggia from './components/Tramoggia';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <TranslationProvider>
      <SEOHead />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Products />
          <ScopaManuale />
          <MakaControl />
          <Cassoni />
          <Tramoggia />
          <Contact />
        </main>
        <Footer />
      </div>
    </TranslationProvider>
  );
};

export default App;