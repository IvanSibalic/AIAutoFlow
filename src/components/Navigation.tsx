import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">AI AutoFlow</h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('case-studies')} className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium">
                Case Studies
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors px-3 py-2 text-sm font-medium">
                Contact
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
              Services
            </button>
            <button onClick={() => scrollToSection('case-studies')} className="text-gray-700 hover:text-blue-600 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
              Case Studies
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium w-full text-left">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
