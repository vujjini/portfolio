import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload, FaCheckCircle, FaPlay, FaExternalLinkAlt } from 'react-icons/fa';
import { heroConfig } from '../config/hero';
import PretextHeaderWrap from './PretextHeaderWrap';

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Helper to parse Loom URL and return embed version
  const getLoomEmbedUrl = (url) => {
    if (!url) return null;
    const match = url.match(/loom\.com\/(?:share|embed)\/([a-zA-Z0-9]+)/);
    return match ? `https://www.loom.com/embed/${match[1]}` : null;
  };

  const embedUrl = getLoomEmbedUrl(heroConfig.demo.loomUrl);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0, x: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 80, delay: 0.4 }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-transparent section-padding relative overflow-hidden pt-36 pb-20 lg:pt-40 lg:pb-24">

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Side Content */}
          <motion.div
            className="lg:col-span-7 text-left flex flex-col items-center lg:items-start text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Name & Headline Combined and Wrapped around the Avatar */}
            <motion.div
              variants={itemVariants}
              className="w-full mb-6 text-left"
            >
              <PretextHeaderWrap
                nameText="Hi, I'm Sriram"
                headlineText={heroConfig.headline}
                avatarUrl={heroConfig.avatarUrl}
                gap={16}
                nameClass="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
                headlineClass="text-xl md:text-2xl lg:text-3xl font-bold text-indigo-300 leading-tight max-w-2xl"
              />
            </motion.div>

            {/* Introduction (straight paragraph) */}
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base lg:text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl text-left"
            >
              {heroConfig.intro}
            </motion.p>

            {/* Value Propositions */}
            <motion.div
              variants={itemVariants}
              className="w-full max-w-2xl mb-8"
            >
              <h3 className="text-xs uppercase tracking-widest text-primary-400 font-bold mb-4 flex items-center gap-2 justify-center lg:justify-start">
                <span className="h-px w-6 bg-primary-500/50"></span>
                Summary of what I have done
                <span className="h-px w-6 bg-primary-500/50 lg:hidden"></span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {heroConfig.valueProps.map((prop, idx) => {
                  const isClickable = idx < 3;
                  return (
                    <motion.div
                      key={idx}
                      onClick={() => {
                        if (idx === 0) {
                          window.dispatchEvent(new CustomEvent('select-experience-tab', { detail: { index: 0 } }));
                          document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                        } else if (idx === 1) {
                          window.dispatchEvent(new CustomEvent('select-experience-tab', { detail: { index: 1 } }));
                          document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                        } else if (idx === 2) {
                          window.dispatchEvent(new CustomEvent('select-project-tab', { detail: { index: 0 } }));
                          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className={`flex items-start gap-2.5 text-gray-300 text-xs md:text-sm bg-gray-900/40 border border-gray-800/80 rounded-xl p-3 backdrop-blur-sm shadow-sm transition-all duration-200 ${
                        isClickable ? 'cursor-pointer hover:border-primary-500/50 hover:bg-gray-800/50' : ''
                      }`}
                      whileHover={isClickable ? {
                        scale: 1.03,
                        borderColor: "rgba(59, 130, 246, 0.5)",
                        backgroundColor: "rgba(17, 24, 39, 0.6)",
                        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)"
                      } : {
                        scale: 1.02,
                        borderColor: "rgba(59, 130, 246, 0.4)",
                        backgroundColor: "rgba(17, 24, 39, 0.6)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaCheckCircle className="text-primary-500 mt-0.5 flex-shrink-0" size={14} />
                      <span>{prop}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4 w-full"
            >
              {heroConfig.links.resume && (
                <motion.a
                  href={heroConfig.links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-primary-500/20 hover:from-primary-500 hover:to-primary-400 transition-all duration-200"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFileDownload size={16} />
                  <span>Resume</span>
                </motion.a>
              )}
              {heroConfig.links.github && (
                <motion.a
                  href={heroConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-gray-800 bg-gray-900/60 hover:bg-gray-800/80 text-gray-300 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub size={16} />
                  <span>GitHub</span>
                </motion.a>
              )}
              {heroConfig.links.linkedin && (
                <motion.a
                  href={heroConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-gray-800 bg-gray-900/60 hover:bg-gray-800/80 text-gray-300 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 backdrop-blur-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin size={16} />
                  <span>LinkedIn</span>
                </motion.a>
              )}
            </motion.div>
          </motion.div>

          {/* Right Side Showcase Card */}
          <motion.div
            className="lg:col-span-5 w-full flex justify-center"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative group w-full max-w-md">
              {/* Outer soft glowing backdrop */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

              {/* Card Container */}
              <div className="relative bg-gray-900/80 border border-white/10 rounded-2xl p-5 shadow-2xl backdrop-blur-md overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-2xl pointer-events-none"></div>

                {/* Highlight Label at the Top of the Card */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-primary-400 uppercase bg-primary-500/10 px-2.5 py-1.5 rounded-full border border-primary-500/20 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse"></span>
                    Recent project I built
                  </span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
                    Demo (Includes architectural walkthrough)
                  </span>
                </div>

                {/* Project Media Container */}
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black/60 border border-white/5 mb-5 group/media shadow-inner">
                  {isPlaying && embedUrl ? (
                    <iframe
                      src={`${embedUrl}?autoplay=1`}
                      title="Loom Walkthrough Video"
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  ) : (
                    <>
                      {/* Demo Thumbnail */}
                      <img
                        src={heroConfig.demo.thumbnailUrl || "/project_demo_thumbnail.png"}
                        alt={heroConfig.demo.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/media:scale-105"
                      />
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 group-hover/media:bg-black/50">
                        <motion.button
                          onClick={() => {
                            if (embedUrl) {
                              setIsPlaying(true);
                            } else if (heroConfig.demo.loomUrl) {
                              window.open(heroConfig.demo.loomUrl, '_blank', 'noopener,noreferrer');
                            }
                          }}
                          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-primary-600/90 text-white shadow-xl shadow-primary-500/30 backdrop-blur-sm cursor-pointer"
                          whileHover={{ scale: 1.15, backgroundColor: '#2563eb' }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {/* Inner glowing pulse ring */}
                          <span className="absolute -inset-2 bg-primary-500/40 rounded-full animate-ping pointer-events-none opacity-75"></span>
                          <FaPlay className="ml-1 text-lg" />
                        </motion.button>
                      </div>
                    </>
                  )}
                </div>

                {/* Project Metadata */}
                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {heroConfig.demo.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-normal whitespace-pre-line">
                    {heroConfig.demo.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-5">
                  <motion.a
                    href={heroConfig.demo.loomUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shadow-lg shadow-primary-500/10 cursor-pointer"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Watch Full Demo</span>
                    <FaExternalLinkAlt size={10} />
                  </motion.a>

                  <motion.a
                    href="#projects"
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-800/60 hover:bg-gray-700/80 text-gray-200 hover:text-white py-3 px-4 rounded-xl border border-gray-700/50 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-lg cursor-pointer"
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={(e) => {
                      e.preventDefault();
                      const sec = document.getElementById('projects');
                      if (sec) sec.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span>View More Projects</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          className="text-primary-500/60 hover:text-primary-400 cursor-pointer p-2 bg-gray-900/40 border border-gray-800 rounded-full backdrop-blur-sm shadow-md"
          whileHover={{ scale: 1.1, borderColor: "rgba(59, 130, 246, 0.4)" }}
          onClick={() => {
            const nextSec = document.getElementById('about');
            if (nextSec) nextSec.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
