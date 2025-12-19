import React from 'react';
import { Package, Truck, Shield, Settings, Layers, Recycle, Archive, Move } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Cassoni = () => {
  const { t } = useTranslation();

  return (
    <section id="cassoni" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tight">
            {t.containersTitle}
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
            {t.containersDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <img 
              src="/cassoni.jpeg" 
              alt={t.containersTitle}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">{t.technicalSpecs}</h3>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-black mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium text-black">{t.depth}:</span>
                    <span className="text-black">1200-2000 mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-black">{t.thickness}:</span>
                    <span className="text-black">3-5 mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-black">{t.standardRAL}:</span>
                    <span className="text-black">{t.red}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-black">Capacità:</span>
                    <span className="text-black">2-8 m³</span>
                  </div>
                </div>
              </div>
              
              <p className="text-black italic">{t.colorDimensionChoice}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl shadow-lg border border-black">
                <Truck className="h-6 w-6 text-red-600 mb-2" />
                <h4 className="font-semibold text-black text-sm mb-1">{t.efficientTransport}</h4>
                <p className="text-xs text-black">{t.transportDescription}</p>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-lg border border-black">
                <Shield className="h-6 w-6 text-red-600 mb-2" />
                <h4 className="font-semibold text-black text-sm mb-1">{t.robustConstruction}</h4>
                <p className="text-xs text-black">{t.constructionDescription}</p>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-lg border border-black">
                <Package className="h-6 w-6 text-red-600 mb-2" />
                <h4 className="font-semibold text-black text-sm mb-1">{t.highCapacity}</h4>
                <p className="text-xs text-black">{t.capacityDescription}</p>
              </div>
              
              <div className="bg-white p-4 rounded-xl shadow-lg border border-black">
                <Settings className="h-6 w-6 text-red-600 mb-2" />
                <h4 className="font-semibold text-black text-sm mb-1">{t.customizable}</h4>
                <p className="text-xs text-black">{t.customizableDescription}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-red-600 rounded-3xl p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">{t.containersAdvantages}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Layers className="h-12 w-12 text-white mx-auto mb-4" />
              <h4 className="font-semibold mb-2">{t.stackableSystem}</h4>
              <p className="text-sm text-white">{t.safeStackableSystem}</p>
            </div>
            
            <div className="text-center">
              <Recycle className="h-12 w-12 text-white mx-auto mb-4" />
              <h4 className="font-semibold mb-2">{t.idealForScrap}</h4>
              <p className="text-sm text-white">{t.scrapCollection}</p>
            </div>
            
            <div className="text-center">
              <Settings className="h-12 w-12 text-white mx-auto mb-4" />
              <h4 className="font-semibold mb-2">{t.customizableColorSize}</h4>
              <p className="text-sm text-white">{t.wasteManagement}</p>
            </div>
            
            <div className="text-center">
              <Truck className="h-12 w-12 text-white mx-auto mb-4" />
              <h4 className="font-semibold mb-2">{t.optimizedTransport}</h4>
              <p className="text-sm text-white">{t.materialHandling}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-black">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black mb-6">{t.mainApplications}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Archive className="h-10 w-10 text-red-600 mx-auto mb-3" />
                <h4 className="font-semibold text-black mb-1">{t.metallicScrap}</h4>
                <p className="text-sm text-black">{t.scrapCollection}</p>
              </div>
              
              <div className="text-center">
                <Package className="h-10 w-10 text-red-600 mx-auto mb-3" />
                <h4 className="font-semibold text-black mb-1">{t.industrialWaste}</h4>
                <p className="text-sm text-black">{t.wasteManagement}</p>
              </div>
              
              <div className="text-center">
                <Truck className="h-10 w-10 text-red-600 mx-auto mb-3" />
                <h4 className="font-semibold text-black mb-1">{t.transport}</h4>
                <p className="text-sm text-black">{t.materialHandling}</p>
              </div>
              
              <div className="text-center">
                <Move className="h-10 w-10 text-red-600 mx-auto mb-3" />
                <h4 className="font-semibold text-black mb-1">{t.storage}</h4>
                <p className="text-sm text-black">{t.safeStackableSystem}</p>
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

export default Cassoni;