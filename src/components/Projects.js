import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRocket, FaBrain, FaChartBar } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Building Management Software",
      description: "Full-stack application that automated staff task delegation by 40% with an AI-powered RAG chatbot for real-time query resolution.",
      longDescription: "Built a comprehensive building management system that streamlines event setup and support workflows. The application features a RAG-based chatbot using LangChain and Gemini AI that reduced staff interruptions by 30%.",
      technologies: ["Python", "Flask", "FastAPI", "PostgreSQL", "React JS", "RAG", "LangChain", "Gemini AI", "Quadrant", "Docker", "AWS EC2"],
      achievements: [
        "Automated task delegation by 40%",
        "Reduced staff interruptions by 30%",
        "Cut deployment time by 35%",
        "Real-time event and user data persistence"
      ],
      category: "AI & Full Stack",
      color: "from-purple-500 to-pink-600",
      icon: <FaBrain />
    },
    {
      title: "Stock Portfolio Analyzer",
      description: "AI-powered full-stack application for stock portfolio analysis with secure JWT authentication and optimized RAG pipeline.",
      longDescription: "Developed a comprehensive stock analysis platform using React.js and FastAPI with advanced AI capabilities. Features an optimized RAG pipeline using Gemini AI and FAISS vector store for efficient data retrieval.",
      technologies: ["React.js", "FastAPI", "Python", "JWT", "Gemini AI", "FAISS", "DynamoDB", "Redis", "AWS", "Docker"],
      achievements: [
        "30% faster response times through caching",
        "Secure JWT-based authentication",
        "Optimized database schema design",
        "Strategic query patterns implementation"
      ],
      category: "AI & Full Stack",
      color: "from-green-500 to-emerald-600",
      icon: <FaChartBar />
    },
    {
      title: "Moviefy - Movie Recommendation App",
      description: "User-friendly movie recommendation application with optimized API performance and responsive Material UI design.",
      longDescription: "Built a modern movie recommendation platform that provides personalized suggestions using the TMDB API. Features a clean, responsive interface built with React JS and Material UI.",
      technologies: ["React JS", "Python", "Flask", "TMDB API", "Material UI", "REST APIs"],
      achievements: [
        "20% faster API response time",
        "25% improvement in UI responsiveness",
        "Smooth user interactions",
        "Optimized TMDB API calls"
      ],
      category: "Full Stack",
      color: "from-blue-500 to-cyan-600",
      icon: <FaRocket />
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="projects" className="py-20 bg-black section-padding">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Innovative solutions combining AI/ML, full-stack development, and cloud technologies 
            to solve real-world problems and deliver measurable impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover h-full border border-gray-700"
            >
              <div className="lg:flex">
                {/* Project Info */}
                <div className="lg:w-2/3 p-8">
                  <div className="flex items-center mb-4">
                    <div className={`bg-gradient-to-r ${project.color} p-3 rounded-lg text-white mr-4`}>
                      {project.icon}
                    </div>
                    <div>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${project.color} mb-2`}>
                        {project.category}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {project.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center text-sm text-gray-300">
                          <span className="text-primary-500 mr-2">✓</span>
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Stats */}
                  <div className="mt-8">
                    <h4 className="font-semibold text-white mb-2">Impact:</h4>
                    <ul className="space-y-3 list-disc list-inside">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 text-sm font-medium marker:text-primary-400">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Technologies */}
                <div className="lg:w-1/3 bg-gray-900 p-8">
                  <h4 className="font-semibold text-white mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-900/50 text-primary-300 rounded-full text-sm font-medium border border-primary-700/50"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <p className="text-lg text-dark-600 mb-6">
            Interested in seeing more of my work or collaborating on a project?
          </p>
          <motion.a
            href="https://github.com/vujjini"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-dark-800 text-white px-8 py-3 rounded-lg hover:bg-dark-700 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
