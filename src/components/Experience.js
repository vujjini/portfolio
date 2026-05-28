import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBriefcase, FaChartLine } from 'react-icons/fa';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleSelectTab = (e) => {
      const idx = e.detail.index;
      if (typeof idx === 'number') {
        setActiveTab(idx);
        setIsExpanded(false);
      }
    };
    window.addEventListener('select-experience-tab', handleSelectTab);
    return () => window.removeEventListener('select-experience-tab', handleSelectTab);
  }, []);

  const experiences = [
    {
      title: "Software Engineer Intern (Backend)",
      company: "Givelify",
      location: "Remote",
      period: "May 2025 – Aug 2025 (returning May 2026 - Aug 2026)",
      type: "Internship",
      achievements: [
        "Enhanced platform search accuracy by 15% by developing an AWS Lambda microservice for data enrichment and configuring Elasticsearch for precise query filtering",
        "Cut external API costs by 75% by engineering an efficient python pipeline with fallback logic and Redis caching.",
        "Streamlined microservice deployment using Docker, GitHub Actions, and CI/CD pipelines under Agile workflows.",
        "Secured consistent data persistence by implementing the MySQL migrations with PHP/Laravel."
      ],
      technologies: ["Python", "MySQL", "Redis", "Docker", "PHP/Laravel", "AWS Lambda", "SQLAlchemy", "Pytest", "CI/CD"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Research Assistant Intern",
      company: "Advanced Machine and Human Reasoning Lab",
      location: "Tampa, FL",
      period: "Aug 2024 – Present",
      type: "Research",
      id: "research-assistant",
      achievements: [
        "Co-authored an NLP research paper on LLM reasoning, contributing to advancements in AI reasoning systems.",
        "Automated 100+ experimental runs by developing object-oriented Python scripts that standardized LLM evaluations.",
        "Developed scoring modules to generate interpretable metrics for assessing and comparing LLM reasoning outputs."
      ],
      technologies: ["Python", "NLP", "LLMs", "PyTorch", "TensorFlow", "BERT", "GPT"],
      color: "from-purple-500 to-indigo-600",
      paper: {
        title: "The Effect of Belief Boxes and Open-mindedness on LLM Persuasion",
        conference: "Accepted at the ICAART 2026, Marbella, Spain",
        link: "https://www.arxiv.org/abs/2512.06573",
        description: "An NLP paper studying belief changes and open-mindedness profiles in Multi-Agent Large Language Model persuasion systems."
      }
    },
    {
      title: "Student Manager",
      company: "University of South Florida",
      location: "Tampa, FL",
      period: "Jan 2024 – Present",
      type: "Leadership",
      achievements: [
        "Built a web application that reduced administrative work by 40% and streamlined real time operational support with a RAG chatbot",
        "Supervised a team of 10+ co-workers, managing 100+ events monthly to ensure seamless execution."
      ],
      technologies: ["React", "Python", "AI Chatbot", "Team Management"],
      color: "from-green-500 to-emerald-600"
    }
  ];

  const handleTabChange = (index) => {
    setActiveTab(index);
    setIsExpanded(false);
  };

  const activeExp = experiences[activeTab];

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="experience" className="py-20 bg-transparent section-padding">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Building impactful solutions through internships, research, and leadership roles.
          </p>
        </motion.div>

        {/* Tabbed Experience Content */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Vertical/Horizontal Tabs */}
          <div className="md:col-span-4 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 space-x-4 md:space-x-0 md:space-y-3 scrollbar-thin">
            {experiences.map((exp, idx) => (
              <button
                key={idx}
                onClick={() => handleTabChange(idx)}
                className={`w-full text-left px-5 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-between border whitespace-nowrap md:whitespace-normal cursor-pointer ${activeTab === idx
                  ? 'bg-gray-800 border-primary-500 text-white shadow-lg shadow-primary-500/10'
                  : 'bg-transparent border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800/40 hover:border-gray-700'
                  }`}
              >
                <span>{exp.company}</span>
                <span className={`hidden md:inline text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${activeTab === idx
                  ? 'bg-primary-500/20 text-primary-300'
                  : 'bg-gray-800 text-gray-500'
                  }`}>
                  {exp.type}
                </span>
              </button>
            ))}
          </div>

          {/* Right Column: Experience Details Card */}
          <div className="md:col-span-8 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-700 relative overflow-hidden"
              >
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${activeExp.color}`}></div>

                {/* Title & Organization Header */}
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                      {activeExp.title}
                    </h3>
                    <p className="text-lg font-bold text-primary-400 mt-1">
                      {activeExp.company}
                    </p>
                  </div>
                  <div className="text-left md:text-right">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${activeExp.color} mb-2 shadow-md`}>
                      <FaBriefcase size={12} />
                      <span>{activeExp.type}</span>
                    </span>
                    <p className="text-sm text-gray-400 font-medium">
                      {activeExp.period} • {activeExp.location}
                    </p>
                  </div>
                </div>

                {/* Collapsible Key Achievements */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-4 flex items-center text-base sm:text-lg">
                    <FaChartLine className="mr-2 text-primary-500" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-4 pl-1">
                    {(isExpanded ? activeExp.achievements : activeExp.achievements.slice(0, 2)).map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-start text-gray-300 leading-relaxed text-sm sm:text-base"
                      >
                        <span className="text-primary-500 mr-3 mt-1.5 flex-shrink-0 text-[10px]">•</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Show More / Show Less Toggle Button */}
                  {activeExp.achievements.length > 2 && (
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="mt-4 text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>{isExpanded ? 'Show Less Details' : `Show ${activeExp.achievements.length - 2} More Details`}</span>
                      <span>{isExpanded ? '↑' : '↓'}</span>
                    </button>
                  )}
                </div>

                {/* Research Paper Section (if applicable) */}
                {activeExp.paper && (
                  <div className="mb-6 p-4 rounded-xl bg-gray-900/60 border border-gray-700/60 hover:border-amber-500/30 transition-all duration-300 group">
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                      {/* Paper Thumbnail */}
                      <div className="w-full sm:w-32 aspect-video sm:aspect-auto sm:h-20 rounded-lg overflow-hidden bg-gray-800 flex-shrink-0 border border-gray-700">
                        <img
                          src="/paper_preview.png"
                          alt="Paper Preview"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      {/* Paper Info */}
                      <div className="flex-1 min-w-0">
                        <span className="inline-block text-[9px] font-bold tracking-widest text-amber-400 uppercase bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20 mb-1.5">
                          {activeExp.paper.conference}
                        </span>
                        <h5 className="text-sm font-bold text-white leading-snug truncate group-hover:text-amber-300 transition-colors">
                          {activeExp.paper.title}
                        </h5>
                        <a
                          href={activeExp.paper.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1.5 inline-flex items-center text-xs font-semibold text-amber-400 hover:underline gap-1"
                        >
                          <span>Read arXiv Publication</span>
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* Technologies Badges */}
                <div className="border-t border-gray-700/60 pt-5">
                  <h4 className="font-semibold text-white mb-3 text-xs uppercase tracking-wider text-gray-400">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeExp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-primary-950/20 text-primary-300 px-3 py-1 rounded-full text-xs font-medium border border-primary-800/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
