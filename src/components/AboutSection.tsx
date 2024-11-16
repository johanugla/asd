import React from 'react';
import { Shield, Award, Users, Phone } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ledande inom personsäkerhetslösningar
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Axel Group är Sveriges ledande leverantör inom personsäkerhetslösningar. Vår verksamhet är inriktad på personsäkerhet & arbetsmiljö och vårt arbete utgår ifrån arbetsmiljölagstiftningens föreskrifter om Ensamarbete och Våld & hot i arbetsmiljön.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
            <Shield className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expertis</h3>
            <p className="text-gray-600">
              Med år av erfarenhet inom personsäkerhet kan vi erbjuda de bästa lösningarna för er verksamhet.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
            <Award className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Kvalitet</h3>
            <p className="text-gray-600">
              Alla våra produkter genomgår rigorösa säkerhetstester för att garantera 100% tillförlitlighet.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className="text-gray-600">
              Vår dedikerade support finns alltid tillgänglig för att hjälpa er med era behov.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Kontakta oss idag</h3>
              <p className="mb-6">
                Vill du veta mer om hur vi kan hjälpa din verksamhet? Kontakta oss för en kostnadsfri konsultation.
              </p>
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-2" />
                <span className="text-xl">010-602 30 30</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Namn"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="E-post"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <textarea
                  placeholder="Meddelande"
                  rows={4}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
                <button className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors">
                  Skicka meddelande
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;