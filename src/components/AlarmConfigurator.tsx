import React, { useState } from 'react';
import { ChevronDown, Shield, Settings, Radio, Users, AlertTriangle } from 'lucide-react';
import ContactForm from './ContactForm';
import toast, { Toaster } from 'react-hot-toast';

interface AlarmOption {
  id: string;
  name: string;
  description: string;
  price?: string;
}

const alarmModels = [
  {
    id: 'twig-neo',
    name: 'TWIG Neo',
    description: 'Sveriges minsta och mest kompetenta personlarm med 4G VOLTE',
    image: 'https://images.unsplash.com/photo-1589920527012-a46d926ac9e9?auto=format&fit=crop&w=500&q=80',
    basePrice: '3995'
  },
  {
    id: 'twig-one',
    name: 'TWIG One',
    description: 'Robust personlarm med 4G VOLTE/GPS och avancerade funktioner',
    image: 'https://images.unsplash.com/photo-1611174743420-3d7df880ce32?auto=format&fit=crop&w=500&q=80',
    basePrice: '4495'
  },
  {
    id: 'twig-one-ex',
    name: 'TWIG One Ex',
    description: 'ATEX-certifierad för explosiva miljöer med 4G VOLTE',
    image: 'https://images.unsplash.com/photo-1557180295-76eee20ae8aa?auto=format&fit=crop&w=500&q=80',
    basePrice: '5995'
  }
];

const receivingCenters = [
  { id: 'sos', name: 'SOS Alarm', description: 'Statlig larmcentral' },
  { id: 'securitas', name: 'Securitas', description: 'Rikstäckande väktartjänst' },
  { id: 'avarn', name: 'AVARN', description: 'Internationell säkerhetstjänst' },
  { id: 'internal', name: 'Intern larmhantering', description: 'Egen larmhantering inom organisationen' }
];

const alarmTypes = [
  { id: 'overfallslarm', name: 'Överfallslarm', description: 'För akuta hotsituationer' },
  { id: 'hotlarm', name: 'Hotlarm', description: 'Vid upplevd hotfull situation' },
  { id: 'nodlarm', name: 'Nödlarm', description: 'För kritiska nödsituationer' }
];

const modules = [
  { id: 'mandown', name: 'Man-down detektion', description: 'Automatiskt larm vid fall eller orörlighet' },
  { id: 'indoor', name: 'Inomhuspositionering', description: 'Beacon/WiFi positionering inomhus' },
  { id: 'amber', name: 'Amber Alert', description: 'Tyst larm med positionsuppdatering' },
  { id: 'twoway', name: 'Tvåvägskommunikation', description: 'Röstsamtal med larmcentral' }
];

const usageProfiles = [
  { id: 'healthcare', name: 'Sjukvård', description: 'Anpassad för vårdmiljö' },
  { id: 'security', name: 'Väktare', description: 'Optimerad för säkerhetspersonal' },
  { id: 'social', name: 'Socialtjänst', description: 'Fokus på personlig säkerhet' },
  { id: 'industry', name: 'Industri', description: 'Robust för industrimiljö' }
];

const AlarmConfigurator = () => {
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedCenter, setSelectedCenter] = useState('');
  const [selectedAlarmType, setSelectedAlarmType] = useState('');
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [selectedProfile, setSelectedProfile] = useState('');
  const [activeSection, setActiveSection] = useState('model');
  const [showContactForm, setShowContactForm] = useState(false);

  const handleModuleToggle = (moduleId: string) => {
    setSelectedModules(prev =>
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const handleContinue = () => {
    if (!selectedModel || !selectedCenter || !selectedAlarmType || !selectedProfile) {
      toast.error('Vänligen fyll i alla obligatoriska val innan du fortsätter.');
      return;
    }
    setShowContactForm(true);
  };

  const sections = [
    { id: 'model', title: 'Välj modell', icon: Shield },
    { id: 'center', title: 'Larmcentral', icon: Radio },
    { id: 'alarmType', title: 'Larmtyp', icon: AlertTriangle },
    { id: 'modules', title: 'Moduler & funktioner', icon: Settings },
    { id: 'profile', title: 'Användningsprofil', icon: Users }
  ];

  const configuration = {
    model: alarmModels.find(m => m.id === selectedModel)?.name || '',
    center: receivingCenters.find(c => c.id === selectedCenter)?.name || '',
    alarmType: alarmTypes.find(t => t.id === selectedAlarmType)?.name || '',
    modules: selectedModules.map(m => modules.find(mod => mod.id === m)?.name || ''),
    profile: usageProfiles.find(p => p.id === selectedProfile)?.name || ''
  };

  return (
    <>
      <Toaster position="top-center" />
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Konfigurera ditt personlarm</h2>
        
        {sections.map(section => (
          <div key={section.id} className="mb-4">
            <button
              onClick={() => setActiveSection(activeSection === section.id ? '' : section.id)}
              className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center">
                <section.icon className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-medium">{section.title}</span>
              </div>
              <ChevronDown
                className={`h-5 w-5 transform transition-transform ${
                  activeSection === section.id ? 'rotate-180' : ''
                }`}
              />
            </button>

            {activeSection === section.id && (
              <div className="mt-4 grid gap-4 p-4 bg-gray-50 rounded-lg">
                {section.id === 'model' && (
                  <div className="grid md:grid-cols-3 gap-4">
                    {alarmModels.map(model => (
                      <div
                        key={model.id}
                        className={`relative p-4 rounded-lg border-2 transition-all cursor-pointer ${
                          selectedModel === model.id
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                        onClick={() => setSelectedModel(model.id)}
                      >
                        <img
                          src={model.image}
                          alt={model.name}
                          className="w-full h-32 object-cover rounded-lg mb-3"
                        />
                        <h3 className="font-semibold">{model.name}</h3>
                        <p className="text-sm text-gray-600">{model.description}</p>
                        <p className="mt-2 font-semibold text-blue-600">Från {model.basePrice} kr</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.id === 'center' && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {receivingCenters.map(center => (
                      <div
                        key={center.id}
                        className={`p-4 rounded-lg border-2 cursor-pointer ${
                          selectedCenter === center.id
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                        onClick={() => setSelectedCenter(center.id)}
                      >
                        <h3 className="font-semibold">{center.name}</h3>
                        <p className="text-sm text-gray-600">{center.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.id === 'alarmType' && (
                  <div className="grid md:grid-cols-3 gap-4">
                    {alarmTypes.map(type => (
                      <div
                        key={type.id}
                        className={`p-4 rounded-lg border-2 cursor-pointer ${
                          selectedAlarmType === type.id
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                        onClick={() => setSelectedAlarmType(type.id)}
                      >
                        <h3 className="font-semibold">{type.name}</h3>
                        <p className="text-sm text-gray-600">{type.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.id === 'modules' && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {modules.map(module => (
                      <label
                        key={module.id}
                        className={`p-4 rounded-lg border-2 cursor-pointer ${
                          selectedModules.includes(module.id)
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="flex items-start">
                          <input
                            type="checkbox"
                            checked={selectedModules.includes(module.id)}
                            onChange={() => handleModuleToggle(module.id)}
                            className="mt-1 mr-3"
                          />
                          <div>
                            <h3 className="font-semibold">{module.name}</h3>
                            <p className="text-sm text-gray-600">{module.description}</p>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                )}

                {section.id === 'profile' && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {usageProfiles.map(profile => (
                      <div
                        key={profile.id}
                        className={`p-4 rounded-lg border-2 cursor-pointer ${
                          selectedProfile === profile.id
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-blue-300'
                        }`}
                        onClick={() => setSelectedProfile(profile.id)}
                      >
                        <h3 className="font-semibold">{profile.name}</h3>
                        <p className="text-sm text-gray-600">{profile.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        {(selectedModel && selectedCenter && selectedAlarmType && selectedProfile) && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold mb-2">Din konfiguration</h3>
            <ul className="space-y-2 text-sm">
              <li>Modell: {alarmModels.find(m => m.id === selectedModel)?.name}</li>
              <li>Larmcentral: {receivingCenters.find(c => c.id === selectedCenter)?.name}</li>
              <li>Larmtyp: {alarmTypes.find(t => t.id === selectedAlarmType)?.name}</li>
              <li>Moduler: {selectedModules.map(m => modules.find(mod => mod.id === m)?.name).join(', ') || 'Inga valda'}</li>
              <li>Profil: {usageProfiles.find(p => p.id === selectedProfile)?.name}</li>
            </ul>
            <button
              onClick={handleContinue}
              className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Fortsätt till kontaktformulär
            </button>
          </div>
        )}
      </div>

      {showContactForm && (
        <ContactForm
          configuration={configuration}
          onClose={() => setShowContactForm(false)}
        />
      )}
    </>
  );
};

export default AlarmConfigurator;