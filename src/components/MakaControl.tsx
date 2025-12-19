import React from 'react';
import { Radar, Shield, AlertTriangle, Eye, Settings, Zap } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const MakaControl = () => {
  const { t } = useTranslation();

  return (
    <section id="maka-control" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-black mb-6 tracking-tight">
            {t.makaControlTitle}
          </h2>
          <p className="text-xl text-black max-w-4xl mx-auto leading-relaxed">
            {t.makaControlDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-black mb-4">{t.weightControlSystem}</h3>
              <p className="text-lg text-black mb-6">{t.weightControlDescription}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-black">
                <Radar className="h-8 w-8 text-red-600 mb-3" />
                <h4 className="font-semibold text-black mb-2">{t.advancedInfraredSensors}</h4>
                <p className="text-sm text-black">{t.highPrecisionInfraredSensors}</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-black">
                <Shield className="h-8 w-8 text-red-600 mb-3" />
                <h4 className="font-semibold text-black mb-2">{t.completePerimeterBarrier}</h4>
                <p className="text-sm text-black">{t.completePerimeterSafetyBarrier}</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-black">
                <AlertTriangle className="h-8 w-8 text-red-600 mb-3" />
                <h4 className="font-semibold text-black mb-2">{t.visualAcousticAlarms}</h4>
                <p className="text-sm text-black">{t.immediateManoeuverSignaling}</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg border border-black">
                <Eye className="h-8 w-8 text-red-600 mb-3" />
                <h4 className="font-semibold text-black mb-2">{t.continuousMonitoring}</h4>
                <p className="text-sm text-black">{t.continuousWeighingControl}</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="/maka control.jpg" 
              alt="Maka Control System"
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
            <img 
              src="/maka control 1.jpg" 
              alt="Maka Control Installation"
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
            <img 
              src="/maka control 2.jpg" 
              alt="Maka Control Sensors"
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
            <img 
              src="/maka control 3.jpg" 
              alt="Maka Control Interface"
              className="w-full h-48 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className="bg-red-600 rounded-3xl p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">{t.howItWorks}</h3>
            <p className="text-white text-lg">{t.makaControlInfo}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Radar className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">{t.detection}</h4>
              <p className="text-white">{t.detectionDescription}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">{t.signaling}</h4>
              <p className="text-white">{t.signalingDescription}</p>
            </div>
            
            <div className="text-center">
              <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3">{t.protection}</h4>
              <p className="text-white">{t.protectionDescription}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-black">
          <div className="text-center mb-6">
            <Settings className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-black mb-2">{t.makaControlAdvantages}</h3>
            <p className="text-black">{t.simpleInstallation}</p>
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

export default MakaControl;