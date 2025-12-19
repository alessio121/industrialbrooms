import React, { useState } from 'react';
import { Menu, X, Search, Phone, Mail, ChevronDown } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Header = () => {
  const { t, currentLanguage, changeLanguage } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languages = [
    { code: 'it', name: 'Italian', flag: '🇮🇹' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
  ];

  const handleLanguageChange = (langCode: string) => {
    changeLanguage(langCode as any);
    setIsLanguageOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="bg-red-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
            
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-white hover:text-gray-200 font-bold text-lg transition-colors cursor-pointer">{t.home}</a>
            <a href="#products" onClick={(e) => handleNavClick(e, 'products')} className="text-white hover:text-gray-200 font-bold text-lg transition-colors cursor-pointer">{t.industrialBrooms}</a>
            <a href="#scopa-manuale" onClick={(e) => handleNavClick(e, 'scopa-manuale')} className="text-white hover:text-gray-200 font-bold text-lg transition-colors cursor-pointer">{t.manualBroom}</a>
            <a href="#maka-control" onClick={(e) => handleNavClick(e, 'maka-control')} className="text-white hover:text-gray-200 font-bold text-lg transition-colors cursor-pointer">{t.makaControl}</a>
            <a href="#cassoni" onClick={(e) => handleNavClick(e, 'cassoni')} className="text-white hover:text-gray-200 font-bold text-lg transition-colors cursor-pointer">{t.containers}</a>
            <a href="#tramoggia" onClick={(e) => handleNavClick(e, 'tramoggia')} className="text-white hover:text-gray-200 font-bold text-lg transition-colors cursor-pointer">{t.hopper}</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-white hover:text-gray-200 font-bold text-lg transition-colors cursor-pointer">{t.contact}</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-white hover:text-gray-200 cursor-pointer transition-colors" />
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors"
              >
                <span className="text-xl">{languages.find(lang => lang.code === currentLanguage)?.flag}</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[150px] z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className={`w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center space-x-3 ${
                        currentLanguage === language.code ? 'bg-red-50 text-red-600' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span className="text-sm font-medium">{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-red-500">
              <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="block px-3 py-2 text-white hover:text-gray-200 font-bold text-lg cursor-pointer">{t.home}</a>
              <a href="#products" onClick={(e) => handleNavClick(e, 'products')} className="block px-3 py-2 text-white hover:text-gray-200 font-bold text-lg cursor-pointer">{t.industrialBrooms}</a>
              <a href="#scopa-manuale" onClick={(e) => handleNavClick(e, 'scopa-manuale')} className="block px-3 py-2 text-white hover:text-gray-200 font-bold text-lg cursor-pointer">{t.manualBroom}</a>
              <a href="#maka-control" onClick={(e) => handleNavClick(e, 'maka-control')} className="block px-3 py-2 text-white hover:text-gray-200 font-bold text-lg cursor-pointer">{t.makaControl}</a>
              <a href="#cassoni" onClick={(e) => handleNavClick(e, 'cassoni')} className="block px-3 py-2 text-white hover:text-gray-200 font-bold text-lg cursor-pointer">{t.containers}</a>
              <a href="#tramoggia" onClick={(e) => handleNavClick(e, 'tramoggia')} className="block px-3 py-2 text-white hover:text-gray-200 font-bold text-lg cursor-pointer">{t.hopper}</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="block px-3 py-2 text-white hover:text-gray-200 font-bold text-lg cursor-pointer">{t.contact}</a>
              
              {/* Mobile Language Selector */}
              <div className="px-3 py-2">
                <div className="text-white font-bold text-lg mb-2">{t.language}</div>
                <div className="grid grid-cols-2 gap-2">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className={`px-3 py-2 rounded-lg flex items-center space-x-2 text-sm ${
                        currentLanguage === language.code 
                          ? 'bg-red-600 text-white' 
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <span>{language.flag}</span>
                      <span>{language.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;