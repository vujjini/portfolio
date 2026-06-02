import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaPlay, FaChartBar, FaRobot, FaHeartbeat } from 'react-icons/fa';

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleSelectTab = (e) => {
      const idx = e.detail.index;
      if (typeof idx === 'number') {
        setActiveTab(idx);
        setIsExpanded(false);
        setIsPlaying(false);
      }
    };
    window.addEventListener('select-project-tab', handleSelectTab);
    return () => window.removeEventListener('select-project-tab', handleSelectTab);
  }, []);

  const projects = [
    {
      title: "Operational Assistant AI",
      description: "RAG-based system that automates operational decision-making using logs and SOPs. Demo includes system design, architecture, and a quick walkthrough.",
      longDescription: "Designed and built a Retrieval-Augmented Generation (RAG) assistant to automate campus operations. The solution parses semi-structured server logs and university Standard Operating Procedures (SOPs), storing document embeddings in a vector database for semantic search. Integrates custom prompt orchestration to recommend operational actions in real-time, reducing response latency.",
      technologies: ["Python", "FastAPI", "TypeScript", "OpenAI/Gemini API", "LangChain", "Vector Store", "Loom", "RAG"],
      achievements: [
        "Automated operational recommendations with high matching accuracy",
        "Parsed logs and standard operating procedures (SOPs) into indexed vector store",
        "Reduced administrative decision time with interactive QA console",
        "Integrated custom prompt templates to prevent hallucination"
      ],
      category: "AI + Full Stack",
      color: "from-purple-500 to-indigo-600",
      icon: <FaRobot />,
      githubUrl: "https://github.com/vujjini/BM-AI",
      loomUrl: "https://www.loom.com/share/d39d8599ed4a45a58ec147bd946a4476"
    },
    {
      title: "Stock Portfolio Analyzer",
      description: "AI-powered full-stack application for stock portfolio analysis with secure JWT authentication and optimized RAG pipeline.",
      longDescription: "Developed a comprehensive stock analysis platform using React.js and FastAPI with advanced AI capabilities. Features an optimized RAG pipeline using Gemini AI and FAISS vector store for efficient data retrieval. Implemented caching layers using Redis for 30% faster response times and strategic DynamoDB query patterns.",
      technologies: ["React.js", "FastAPI", "Python", "JWT", "Gemini AI", "FAISS", "DynamoDB", "Redis", "AWS", "Docker"],
      achievements: [
        "30% faster response times through Redis caching",
        "Secure JWT-based authentication",
        "Optimized database schema design for fast lookups",
        "Strategic query patterns implementation"
      ],
      category: "AI + Full Stack",
      color: "from-green-500 to-emerald-600",
      icon: <FaChartBar />,
      githubUrl: "https://github.com/vujjini/Finance-bro",
      loomUrl: null
    },
    {
      title: "ECG Signal Classification with PEFT",
      description: "Fine-tuned ECG-FM foundation model on 65k ECG samples in PyTorch using LoRA and Adapters to achieve competitive precision.",
      longDescription: "Fine-tuned a foundation ECG model (ECG-FM) on a 65,000-sample electrocardiogram dataset using PyTorch and parameter-efficient fine-tuning (PEFT) libraries. Implemented state-of-the-art adaptation techniques including Low-Rank Adaptation (LoRA) and Adapters. Optimized training parameter storage, dramatically reducing computational resource overhead while preserving classification performance.",
      technologies: ["Python", "PyTorch", "PEFT", "LoRA", "Adapters", "Machine Learning", "ECG Signal Processing"],
      achievements: [
        "Fine-tuned ECG-FM on a 65k-sample ECG dataset using PEFT methods (Adapters and LoRA) in PyTorch",
        "Achieved competitive precision scores for arrhythmia detection",
        "Reduced trainable parameters by 98% through PEFT methods while maintaining up to 81% accuracy"
      ],
      category: "ML (LoRA) fine-tuning",
      color: "from-blue-500 to-cyan-600",
      icon: <FaHeartbeat />,
      githubUrl: "https://github.com/vujjini/LoRa_Adapters_fine_tuning_on_ECG",
      loomUrl: null
    }
  ];

  const handleTabChange = (index) => {
    setActiveTab(index);
    setIsExpanded(false);
    setIsPlaying(false);
  };

  const activeProject = projects[activeTab];

  // Helper to parse Loom URL and return embed version
  const getLoomEmbedUrl = (url) => {
    if (!url) return null;
    const match = url.match(/loom\.com\/(?:share|embed)\/([a-zA-Z0-9]+)/);
    return match ? `https://www.loom.com/embed/${match[1]}` : null;
  };

  const embedUrl = getLoomEmbedUrl(activeProject.loomUrl);

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
    <section id="projects" className="py-20 bg-transparent section-padding">
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
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Innovative solutions combining AI/ML, full-stack development, and cloud technologies.
          </p>
        </motion.div>

        {/* Tabbed Projects Content */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Project Tabs */}
          <div className="md:col-span-4 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 space-x-4 md:space-x-0 md:space-y-3 scrollbar-thin">
            {projects.map((project, idx) => (
              <button
                key={idx}
                onClick={() => handleTabChange(idx)}
                className={`w-full text-left px-5 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-between border whitespace-nowrap md:whitespace-normal cursor-pointer ${activeTab === idx
                  ? 'bg-gray-800 border-primary-500 text-white shadow-lg shadow-primary-500/10'
                  : 'bg-transparent border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800/40 hover:border-gray-700'
                  }`}
              >
                <span>{project.title}</span>
                <span className={`hidden md:inline text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${activeTab === idx
                  ? 'bg-primary-500/20 text-primary-300'
                  : 'bg-gray-800 text-gray-500'
                  }`}>
                  {project.category.split(' & ')[0]}
                </span>
              </button>
            ))}
          </div>

          {/* Right Column: Active Project Detail Card */}
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
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${activeProject.color}`}></div>

                {/* Header Info */}
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className={`bg-gradient-to-r ${activeProject.color} p-3 rounded-lg text-white`}>
                      {activeProject.icon}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                        {activeProject.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${activeProject.color} shadow-sm`}>
                          {activeProject.category}
                        </span>
                        {activeProject.githubUrl && (
                          <a
                            href={activeProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors duration-200"
                          >
                            <FaGithub size={14} className="text-gray-300" />
                            <span>Repository</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description & Collapsible Details */}
                <div className="mb-6">
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4">
                    {activeProject.description}
                  </p>

                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-4 border-t border-gray-700/50 pt-4 mt-4"
                    >
                      <div>
                        <h4 className="font-semibold text-white mb-2 text-sm uppercase tracking-wider text-gray-400">
                          Overview
                        </h4>
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                          {activeProject.longDescription}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-white mb-2 text-sm uppercase tracking-wider text-gray-400">
                          Key Features
                        </h4>
                        <ul className="space-y-2 pl-1">
                          {activeProject.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-gray-300 leading-relaxed text-sm sm:text-base">
                              <span className="text-primary-500 mr-3 mt-1.5 flex-shrink-0 text-[10px]">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-4 text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>{isExpanded ? 'Show Less Project Info' : 'Show Full Project Details'}</span>
                    <span>{isExpanded ? '↑' : '↓'}</span>
                  </button>
                </div>

                {/* Loom Walkthrough (if applicable) */}
                {activeProject.loomUrl && embedUrl && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 text-xs uppercase tracking-wider text-gray-400">
                      Walkthrough Demo
                    </h4>
                    <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-white/5 shadow-inner">
                      {isPlaying ? (
                        <iframe
                          src={`${embedUrl}?autoplay=1`}
                          title={`${activeProject.title} Demo`}
                          frameBorder="0"
                          allow="autoplay; fullscreen"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full"
                        ></iframe>
                      ) : (
                        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                          <button
                            onClick={() => setIsPlaying(true)}
                            className="relative flex items-center justify-center w-14 h-14 rounded-full bg-primary-600/90 text-white shadow-xl shadow-primary-500/30 backdrop-blur-sm cursor-pointer"
                          >
                            <span className="absolute -inset-2 bg-primary-500/40 rounded-full animate-ping pointer-events-none opacity-75"></span>
                            <FaPlay className="ml-1 text-lg" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Technologies Badges */}
                <div className="border-t border-gray-700/60 pt-5">
                  <h4 className="font-semibold text-white mb-3 text-xs uppercase tracking-wider text-gray-400">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((tech, techIndex) => (
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

        {/* Global Call to Action */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <p className="text-lg text-gray-400 mb-6 font-medium">
            Interested in seeing more of my work or collaborating?
          </p>
          <motion.a
            href="https://github.com/vujjini"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-3 rounded-xl hover:bg-gray-700 transition-colors duration-200 border border-gray-700 font-semibold shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub size={18} />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
