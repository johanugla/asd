import React from 'react';
import { Shield, MapPin, Users, Settings } from 'lucide-react';

const ProductCard = ({ title, description, icon: Icon }: { title: string; description: string; icon: any }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ProductSection = () => {
  return (
    <section id="personlarm" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Personlarm för din yrkesgrupp
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Vi hjälper er att skräddarsy en optimal lösning utifrån era specifika behov. Självklart erbjuder vi support, utbytespool, konfigurering och en massa smarta tjänster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            title="Alltid inne"
            description="Lämnar ni inte lokalen? Då finns det många bra sätt att positionera inomhus, larma kollegor internt eller eskalera larmkedjan."
            icon={Shield}
          />
          <ProductCard
            title="Alltid ute"
            description="Med alltid ute menas att ni är ute till största delen av arbetsdagen. Larmet behåller alltid er senaste position."
            icon={MapPin}
          />
          <ProductCard
            title="Ofta ute"
            description="Är ni ungefär lika mycket ute som inne? Personlarmen är då inställda att använda GPSen på ett lämpligt sätt för användandet."
            icon={Users}
          />
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Våra populäraste modeller</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <img 
                src="https://images.unsplash.com/photo-1611174743420-3d7df880ce32?auto=format&fit=crop&w=500&q=80" 
                alt="Twig One" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">Twig One</h4>
              <p className="text-gray-600 mb-4">Twig ONE är en 4G VOLTE/GPS enhet med avancerade säkerhetsfunktioner.</p>
              <button className="btn btn-primary w-full">Läs mer</button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <img 
                src="https://images.unsplash.com/photo-1589920527012-a46d926ac9e9?auto=format&fit=crop&w=500&q=80" 
                alt="Twig Neo" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">Twig Neo</h4>
              <p className="text-gray-600 mb-4">Sveriges minsta och mest kompetenta personlarm, med 4G VOLTE.</p>
              <button className="btn btn-primary w-full">Läs mer</button>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <img 
                src="https://images.unsplash.com/photo-1557180295-76eee20ae8aa?auto=format&fit=crop&w=500&q=80" 
                alt="SRT330" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">SRT330</h4>
              <p className="text-gray-600 mb-4">SRT330 indikerar snabbt och tydligt när ett larm mottas.</p>
              <button className="btn btn-primary w-full">Läs mer</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;