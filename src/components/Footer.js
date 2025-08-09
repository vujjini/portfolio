import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 section-padding border-t border-gray-700">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.h3 
              className="text-2xl font-bold gradient-text mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Sriram Vujjini
            </motion.h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Computer Science student passionate about AI/ML and full-stack development. 
              Building innovative solutions that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Leadership', href: '#leadership' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3">
              <motion.a
                href="mailto:srir16846@gmail.com"
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-200"
                whileHover={{ x: 5 }}
              >
                <FaEnvelope className="mr-3" />
                srir16846@gmail.com
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/sriram-vujjini/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-200"
                whileHover={{ x: 5 }}
              >
                <FaLinkedin className="mr-3" />
                LinkedIn Profile
              </motion.a>
              <motion.a
                href="https://github.com/vujjini"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-200"
                whileHover={{ x: 5 }}
              >
                <FaGithub className="mr-3" />
                GitHub Profile
              </motion.a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 pt-8 mt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-300 mb-4 md:mb-0">
              <span>Made with</span>
              <motion.span
                className="mx-2 text-red-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FaHeart />
              </motion.span>
              <span>by Sriram Vujjini</span>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Sriram Vujjini. All rights reserved.
            </p>
          </div>
        </div>

        {/* Back to Top */}
        <motion.div className="text-center mt-8">
          <motion.a
            href="#home"
            className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-200"
            whileHover={{ y: -2 }}
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Top
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
