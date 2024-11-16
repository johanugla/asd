import React, { useState } from 'react';
import { Menu, X, Shield, Phone } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Axel Group
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#personlarm" className="text-gray-700 hover:text-blue-600 transition-colors">
              Personlarm
            </a>
            <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">
              Övriga produkter
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              Om företaget
            </a>
            <a href="#seminar" className="text-gray-700 hover:text-blue-600 transition-colors">
              Seminarium
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Kontakt
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:010-602-30-30" className="flex items-center text-blue-600">
              <Phone className="h-5 w-5 mr-2" />
              010-602 30 30
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg p-2 hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#personlarm"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                Personlarm
              </a>
              <a
                href="#products"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                Övriga produkter
              </a>
              <a
                href="#about"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                Om företaget
              </a>
              <a
                href="#seminar"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                Seminarium
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                Kontakt
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;