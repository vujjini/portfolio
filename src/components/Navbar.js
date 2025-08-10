import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-4 min-w-0">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-lg sm:text-xl md:text-2xl font-bold gradient-text truncate flex-shrink min-w-0 mr-3"
            whileHover={{ scale: 1.05 }}
          >
            <span className="hidden xs:inline">Sriram Vujjini</span>
            <span className="xs:hidden">Sriram V.</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-dark-600 hover:text-primary-600 transition-colors duration-200 font-medium"
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1 sm:p-2 flex-shrink-0 ml-auto relative z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ minWidth: '32px' }}
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-around mx-auto">
              <span className={`block h-0.5 w-5 sm:w-6 bg-dark-600 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2 sm:translate-y-2.5' : ''}`}></span>
              <span className={`block h-0.5 w-5 sm:w-6 bg-dark-600 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-5 sm:w-6 bg-dark-600 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2 sm:-translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 absolute top-full left-0 right-0 shadow-lg"
          >
            <div className="py-4 px-4 space-y-4 max-w-full">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-dark-600 hover:text-primary-600 transition-colors duration-200 font-medium py-2 px-2 rounded-lg hover:bg-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
