import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaChartLine } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern (Backend)",
      company: "Givelify",
      location: "Remote",
      period: "May 2024 – Aug 2024",
      type: "Internship",
      achievements: [
        "Enhanced platform search accuracy by 15% by developing an AWS Lambda microservice for data enrichment and configuring Elasticsearch for precise query filtering",
        "Cut external API costs by 75% by engineering an efficient python pipeline with fallback logic and Redis caching.",
        "Streamlined microservice deployment using Docker, GitHub Actions, and CI/CD pipelines under Agile workflows.",
        "Secured consistent data persistence by implementing the MySQL migrations with PHP/Laravel."
      ],
      technologies: ["Python", "MySQL", "Redis", "Docker", "Laravel", "SQLAlchemy", "Pytest", "CI/CD"],
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
        link: "https://www.arxiv.org/abs/2512.06573", // Add your arXiv link here
        description: "[Brief 1-2 sentence description of your research paper]"
      }
    },
    {
      title: "Student Manager",
      company: "University of South Florida",
      location: "Tampa, FL",
      period: "Jan 2024 – Present",
      type: "Leadership",
      achievements: [
        "Built a web application that automated task delegation by 40% and enhanced staff support with an AI chatbot",
        "Supervised a team of 10+ co-workers, managing 100+ events monthly to ensure seamless execution."
      ],
      technologies: ["React", "Python", "AI Chatbot", "Team Management"],
      color: "from-green-500 to-emerald-600"
    }
  ];

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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-900 section-padding">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Building impactful solutions through internships, research, and leadership roles 
            that drive innovation and deliver measurable results.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-200 to-primary-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                id={exp.id || `exp-${index}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg z-10"></div>
                
                {/* Research paper preview tab */}
                {exp.paper && (
                  <motion.div 
                    className="absolute right-[calc(100%+2rem)] md:right-[calc(100%-25rem)] top-1/2 -translate-y-1/2 z-10 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    transition={{ delay: 0.3 }}
                    css={{
                      '@media (min-width: 768px)': {
                        width: '36rem',
                        transform: 'translateY(-10%) translateX(18%)'
                      }
                    }}
                  >
                    <a 
                      href={exp.paper.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block overflow-hidden rounded-lg shadow-xl border border-gray-700 hover:border-amber-400/50 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      {/* Preview Image */}
                      <div className="relative overflow-hidden bg-gray-800">
                        <div className="h-72 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                          <div className="h-72">
                            <img 
                              src="/paper_preview.png" 
                              alt="Research paper preview"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        
                        {/* Conference & Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                          <h4 className="text-sm font-semibold text-amber-300 mb-1 line-clamp-1">{exp.paper.conference}</h4>
                          <p className="text-xs text-gray-200 line-clamp-1">{exp.paper.title}</p>
                        </div>
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="inline-flex items-center px-3 py-1.5 bg-amber-500 text-white text-xs font-medium rounded-full">
                            View Paper
                            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </a>
                    
                    {/* Arrow pointer */}
                    <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-l-8 border-t-transparent border-b-transparent border-l-amber-400/50"></div>
                  </motion.div>
                )}

                {/* Content card */}
                <div className={`ml-16 sm:ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <motion.div
                    className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg ml-4 sm:ml-8 card-hover border border-gray-700"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Header */}
                    <div className="mb-3 sm:mb-4">
                      <div className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-white bg-gradient-to-r ${exp.color} mb-2 sm:mb-3`}>
                        <FaBriefcase className="mr-1 sm:mr-2 text-xs sm:text-sm" />
                        {exp.type}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">{exp.title}</h3>
                      <p className="text-primary-400 font-semibold text-sm sm:text-base">{exp.company}</p>
                      <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">{exp.period} • {exp.location}</p>
                    </div>

                    {/* Achievements */}
                    <div className="mb-3 sm:mb-4">
                      <h4 className="font-semibold text-white mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                        <FaChartLine className="mr-1 sm:mr-2 text-primary-500 text-sm" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-3 sm:space-y-2 list-disc list-inside pl-2 sm:pl-0">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-300 leading-relaxed marker:text-primary-400 text-sm sm:text-base pr-2">{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Technologies Used</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-primary-900/50 text-primary-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-primary-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        {/* <motion.div variants={itemVariants} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "30%", label: "Research Acceleration" },
              { number: "40%", label: "Task Automation" },
              { number: "15%", label: "Accuracy Improvement" },
              { number: "100+", label: "Events Managed" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-dark-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default Experience;
