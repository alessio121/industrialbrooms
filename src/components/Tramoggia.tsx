import React from 'react';
import { Container, Wrench, Shield, Zap, Package, Recycle, Archive, Settings } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Tramoggia = () => {
  const { t } = useTranslation();

  return (
    <section id="tramoggia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tight">
            {t.hopperTitle}
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
            {t.hopperDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img 
              src="/tramoggia ok.png" 
              alt={t.hopperTitle}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">{t.hopperAdvantages}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-black">
                <Container className="h-8 w-8 text-red-600 mb-3" />
                <h4 className="font-semibold text-black mb-2">{t.optimizedStorage}</h4>
                <p className="text-sm text-black">{t.hopperInfo}</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-black">
                <Zap className="h-8 w-8 text-red-600 mb-3" />
                <h4 className="font-semibold text-black mb-2">{t.simpleMovement}</h4>
                <p className="text-sm text-black">Piedi telescopici per adattarsi a qualsiasi big bag</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-black">
                <Shield className="h-8 w-8 text-red-600 mb-3" />
                <h4 className="font-semibold text-black mb-2">{t.robustConstructionHeavyUse}</h4>
                <p className="text-sm text-black">Interamente in acciaio per massima resistenza</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-black">
                <Wrench className="h-8 w-8 text-red-600 mb-3" />
                <h4 className="font-semibold text-black mb-2">{t.easyMaintenance}</h4>
                <p className="text-sm text-black">Design semplice per operazioni di pulizia rapide</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-600 rounded-3xl p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">{t.mainApplications}</h3>
            <p className="text-white text-lg">{t.hopperInfo}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Settings className="h-12 w-12 text-white mx-auto mb-4" />
              <h4 className="font-semibold mb-2">{t.metalChips}</h4>
              <p className="text-sm text-white">{t.chipsCollection}</p>
            </div>
            
            <div className="text-center">
              <Recycle className="h-12 w-12 text-white mx-auto mb-4" />
              <h4 className="font-semibold mb-2">{t.specialWaste}</h4>
              <p className="text-sm text-white">{t.industrialWasteManagement}</p>
            </div>
            
            <div className="text-center">
              <Package className="h-12 w-12 text-white mx-auto mb-4" />
              <h4 className="font-semibold mb-2">{t.bulkMaterials}</h4>
              <p className="text-sm text-white">{t.bulkGranularStorage}</p>
            </div>
            
            <div className="text-center">
              <Archive className="h-12 w-12 text-white mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Rifiuti Speciali</h4>
              <p className="text-sm text-white">{t.industrialSpecialWaste}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-black">
          <div className="text-center mb-6">
            <Container className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-black mb-2">{t.technicalFeatures}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-4 rounded-lg border border-black">
                <h4 className="font-semibold text-black mb-2">{t.structure}</h4>
                <p className="text-sm text-black">{t.steelStructureWithFunnel}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-black">
                <h4 className="font-semibold text-black mb-2">{t.telescopicFeet}</h4>
                <p className="text-sm text-black">{t.adjustableForAnyBigBag}</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-black">
                <h4 className="font-semibold text-black mb-2">{t.capacity}</h4>
                <p className="text-sm text-black">{t.optimizedForBulkMaterials}</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="bg-red-600 text-white px-8 py-4 rounded-xl hover:bg-black transition-colors font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t.requestQuoteButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tramoggia;