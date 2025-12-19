import React from 'react';
import { Feather, Shield, Zap, Flame, Factory, Hammer, Building, Wrench } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const ScopaManuale = () => {
  const { t } = useTranslation();

  return (
    <section id="scopa-manuale" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tight">
            {t.manualBroomTitle}
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
            {t.manualBroomDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img 
              src="/scopa manuale.jpeg" 
              alt={t.manualBroomUltraLight}
             className="w-full h-96 object-contain bg-white rounded-2xl shadow-2xl border-2 border-black p-4"
            />
          </div>
          
          <div className="space-y-8">
            <div>
            <h3 className="text-3xl font-bold text-black mb-4">{t.manualBroomUltraLight}</h3>
            <p className="text-lg text-black mb-6">{t.manualBroomDetails}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100">
                <Feather className="h-8 w-8 text-orange-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">{t.ultraLight}</h4>
                <p className="text-sm text-gray-600">{t.ultraLightDesign}</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100">
                <Shield className="h-8 w-8 text-orange-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">{t.harmonicSteel}</h4>
                <p className="text-sm text-gray-600">{t.specificThermalTreatment}</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100">
                <Zap className="h-8 w-8 text-orange-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">{t.interchangeable}</h4>
                <p className="text-sm text-gray-600">{t.totallyInterchangeableComponents}</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100">
                <Flame className="h-8 w-8 text-orange-600 mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">{t.incandescentFragments}</h4>
                <p className="text-sm text-gray-600">{t.resistantToFragments}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">{t.manualBroomAdvantages}</h3>
            <p className="text-orange-100 text-lg">{t.manualBroomInfo}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-black">
              <Feather className="h-8 w-8 text-red-600 mb-3" />
              <h4 className="font-semibold text-black mb-2">{t.ultraLight}</h4>
              <p className="text-sm text-black">{t.ultraLightDesign}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-black">
              <Shield className="h-8 w-8 text-red-600 mb-3" />
              <h4 className="font-semibold text-black mb-2">{t.harmonicSteel}</h4>
              <p className="text-sm text-black">{t.specificThermalTreatment}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-black">
              <Zap className="h-8 w-8 text-red-600 mb-3" />
              <h4 className="font-semibold text-black mb-2">{t.interchangeable}</h4>
              <p className="text-sm text-black">{t.totallyInterchangeableComponents}</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg border border-black">
              <Flame className="h-8 w-8 text-red-600 mb-3" />
              <h4 className="font-semibold text-black mb-2">{t.incandescentFragments}</h4>
              <p className="text-sm text-black">{t.cleaningIncandescentFragments}</p>
            </div>
          </div>
        </div>

        <div className="bg-red-600 rounded-3xl p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">{t.industrialApplications}</h3>
            <p className="text-white text-lg">{t.manualBroomInfo}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Factory className="h-12 w-12 text-white mx-auto mb-4" />
              <h4 className="font-semibold text-white mb-2">{t.metalSiderurgicalSector}</h4>
              <p className="text-sm text-white">{t.metalSiderurgicalSector}</p>
            </div>
            
            <div className="text-center">
              <Flame className="h-12 w-12 text-white mx-auto mb-4" />
              <h4 className="font-semibold text-white mb-2">{t.incandescentFragments}</h4>
              <p className="text-sm text-white">{t.cleaningIncandescentFragments}</p>
            </div>
            
            <div className="text-center">
              <Building className="h-12 w-12 text-white mx-auto mb-4" />
              <h4 className="font-semibold text-white mb-2">{t.constructionSites}</h4>
              <p className="text-sm text-white">{t.generalConstructionSiteCleaning}</p>
            </div>
            
            <div className="text-center">
              <Wrench className="h-12 w-12 text-white mx-auto mb-4" />
              <h4 className="font-semibold text-white mb-2">{t.heavyIndustry}</h4>
              <p className="text-sm text-white">{t.demandingIndustrialEnvironments}</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-red-600 text-white px-8 py-4 rounded-xl hover:bg-black transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t.requestQuoteButton}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScopaManuale;