import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGraduationCap, FaCode } from 'react-icons/fa';

const Highlights = () => {
  const [activeTab, setActiveTab] = useState(0);

  const highlights = [
    {
      id: 'research',
      icon: <FaGraduationCap className="text-lg" />,
      title: "AI Research Publication",
      description: "Co-authored an AI research paper that got accepted into [Conference Name]",
      link: "#research-assistant"
    },
    {
      id: 'project',
      icon: <FaCode className="text-lg" />,
      title: "Project Placeholder",
      description: "Built [Project Name] that [brief description of impact] (coming soon)",
      link: "#projects"
    }
  ];

  return (
    <section id="highlights" className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Key <span className="gradient-text">Highlights</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Quick links to my most significant achievements and projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => (
            <motion.a
              key={highlight.id}
              href={highlight.link}
              className={`p-6 rounded-xl transition-all duration-300 ${
                activeTab === index 
                  ? 'bg-gradient-to-br from-primary-600/20 to-primary-800/20 border border-primary-500/30' 
                  : 'bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-primary-500/30'
              }`}
              onMouseEnter={() => setActiveTab(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start">
                <div className={`p-3 rounded-lg ${
                  activeTab === index 
                    ? 'bg-primary-500/10 text-primary-400' 
                    : 'bg-gray-700 text-gray-400'
                }`}>
                  {highlight.icon}
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">{highlight.title}</h3>
                  <p className="text-gray-300 text-sm">{highlight.description}</p>
                  <div className="mt-3 flex items-center text-primary-400 text-sm font-medium">
                    View details
                    <FaArrowRight className="ml-2 text-xs transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
