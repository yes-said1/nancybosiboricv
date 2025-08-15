import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', key: 'home' },
    { name: 'About', key: 'about' },
    { name: 'Portfolio', key: 'portfolio' },
    { name: 'Services', key: 'services' },
    { name: 'Contact', key: 'contact' }
  ];

  const handleNavClick = (key) => {
    onNavigate(key);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#0B1E3F] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                  currentPage === item.key
                    ? 'text-[#FFD700] bg-[#0B1E3F]/20'
                    : 'text-gray-200 hover:text-[#FFD700] hover:bg-[#123C69]'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CV Download Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/request"
              className="bg-[#FFD700] text-[#0B1E3F] px-5 py-3 rounded-md text-base font-medium hover:bg-[#E6C200] transition-colors duration-200"
            >
              Download CV
            </Link> 
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#FFD700] focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />} 
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                    currentPage === item.key
                      ? 'text-[#0B1E3F] bg-[#FFD700]/20'
                      : 'text-gray-700 hover:text-[#0B1E3F] hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <a 
                href="https://drive.google.com/uc?export=download&id=1iEuXDtlfnzIROms3zvlYMzm8oSNRVlKS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#FFD700] text-[#0B1E3F] px-5 py-3 rounded-md text-base font-medium hover:bg-[#E6C200] transition-colors duration-200 mt-4 inline-block text-center"
              >
                Download CV
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
