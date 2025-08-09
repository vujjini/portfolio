import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import MotionBackground from './MotionBackground';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-dark-900 to-black section-padding relative overflow-hidden">
      <MotionBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Picture */}
          <motion.div
            className="flex justify-center lg:justify-end order-2 lg:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="relative"
              variants={itemVariants}
            >
              <motion.div
                className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-gray-700/50 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/profile.jpg"
                  alt="Sriram Vujjini"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating Elements Around Profile */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full shadow-lg"
                animate={{
                  y: [-5, 5, -5],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-500 rounded-full shadow-lg"
                animate={{
                  x: [-3, 3, -3],
                  y: [-2, 2, -2]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute top-1/2 -left-8 w-4 h-4 bg-cyan-400 transform rotate-45 shadow-lg"
                animate={{
                  rotate: [45, 225, 405],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="text-center lg:text-left order-1 lg:order-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                Hi, I'm <span className="gradient-text">Sriram</span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6">
                Software Engineer & AI/ML Developer
              </h2>
              <p className="text-base md:text-lg text-gray-400 max-w-2xl lg:max-w-none leading-relaxed">
                Computer Science student at USF with a passion for building innovative solutions 
                using AI/ML, full-stack development, and cloud technologies. Currently working 
                on cutting-edge research in Natural Language Processing.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <motion.a
                  href="mailto:srir16846@gmail.com"
                  className="flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope />
                  Get In Touch
                </motion.a>
                <motion.a
                  href="#experience"
                  className="flex items-center gap-2 border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-600 hover:text-white transition-colors duration-200 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Experience
                </motion.a>
                <motion.a
                  href="#projects"
                  className="flex items-center gap-2 border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-lg hover:bg-primary-600 hover:text-white transition-colors duration-200 shadow-lg"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
              </div>

              <div className="flex justify-center lg:justify-start gap-6">
                <motion.a
                  href="https://github.com/vujjini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
                  whileHover={{ scale: 1.2, y: -2 }}
                >
                  <FaGithub size={24} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/sriram-vujjini/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
                  whileHover={{ scale: 1.2, y: -2 }}
                >
                  <FaLinkedin size={24} />
                </motion.a>
                {/* <motion.a
                  href="mailto:srir16846@gmail.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
                  whileHover={{ scale: 1.2, y: -2 }}
                >
                  <FaEnvelope size={24} />
                </motion.a> */}
                {/* <motion.a
                  href="tel:6562151877"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200 p-2 rounded-full hover:bg-gray-800"
                  whileHover={{ scale: 1.2, y: -2 }}
                >
                  <FaPhone size={24} />
                </motion.a> */}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="text-primary-400 cursor-pointer"
            whileHover={{ scale: 1.2 }}
            onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
