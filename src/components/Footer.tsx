import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">{t.contacts}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-500" />
                <span className="text-white">+41 78 214 26 00</span>
              </div>
              <div className="flex items-center space-x-3">
               
               
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">{t.quickLinks}</h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              <a href="#products" className="text-white hover:text-red-500 transition-colors">
                {t.industrialBrooms}
              </a>
              <a href="#scopa-manuale" className="text-white hover:text-red-500 transition-colors">
                {t.manualBroom}
              </a>
              <a href="#maka-control" className="text-white hover:text-red-500 transition-colors">
                {t.makaControl}
              </a>
              <a href="#cassoni" className="text-white hover:text-red-500 transition-colors">
                {t.containers}
              </a>
              <a href="#tramoggia" className="text-white hover:text-red-500 transition-colors">
                {t.hopper}
              </a>
              <Link to="/blog" className="text-white hover:text-red-500 transition-colors">
                Blog
              </Link>
              <a href="#contact" className="text-white hover:text-red-500 transition-colors">
                {t.contact}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm">
              © 2024 Industrial Brooms. {t.allRightsReserved}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;