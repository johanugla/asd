import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-32 pb-20">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Personlarm och</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                trygg arbetsmiljö
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Personsäkerhetslösningar inriktade på arbetsmiljö med fokus på ensamarbete och våld & hot i arbetsmiljön.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="#products"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                  Se våra personlarm
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-all duration-200"
                >
                  Kontakta oss
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative blob shapes */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 transform">
        <div className="h-64 w-64 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 transform">
        <div className="h-64 w-64 bg-gradient-to-br from-purple-400/30 to-blue-400/30 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>
    </div>
  );
};

export default Hero;