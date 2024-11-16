import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AlarmConfigurator from './components/AlarmConfigurator';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Konfigurera ditt personlarm
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Välj modell, larmcentral och funktioner som passar just dina behov.
              </p>
            </div>
            <AlarmConfigurator />
          </div>
        </section>
        <AboutSection />
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
              <p>Nybohovsbacken 23</p>
              <p>117 63 Stockholm</p>
              <p>010-602 30 30</p>
              <p>info@axel.se</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Produkter</h3>
              <ul className="space-y-2">
                <li>Personlarm</li>
                <li>ServiceDesk</li>
                <li>Övriga produkter</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Om oss</h3>
              <ul className="space-y-2">
                <li>Om företaget</li>
                <li>Seminarium</li>
                <li>Kontakt</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Följ oss</h3>
              <p>© Axel Group AB 2024</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;