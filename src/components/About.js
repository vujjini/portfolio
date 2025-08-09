import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaTrophy } from 'react-icons/fa';

const About = () => {
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
    <section id="about" className="py-20 bg-gray-900 section-padding">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I'm a passionate Computer Science student at the University of South Florida, 
            specializing in AI/ML development and full-stack engineering with a strong focus on innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants}>
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Currently pursuing my Bachelor's in Computer Science with a stellar 3.9 GPA, 
                I've been recognized with the USF Green and Gold Presidential Scholarship and 
                made the Dean's List for academic excellence.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My expertise spans across modern web technologies, AI/ML frameworks, and cloud platforms. 
                I'm passionate about building scalable solutions that solve real-world problems, 
                from backend services that improve efficiency to AI-powered applications that enhance user experiences.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="space-y-6">
              {/* Education Card */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-6 rounded-xl card-hover border border-gray-600">
                <div className="flex items-center mb-4">
                  <FaGraduationCap className="text-primary-600 text-2xl mr-3" />
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-gray-200">University of South Florida</p>
                  <p className="text-gray-300">Bachelor of Science in Computer Science</p>
                  <p className="text-gray-300">GPA: 3.9/4.0 • Expected May 2026</p>
                  <p className="text-sm text-gray-400">Tampa, FL</p>
                </div>
              </div>

              {/* Awards Card */}
              <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-6 rounded-xl card-hover border border-orange-700/50">
                <div className="flex items-center mb-4">
                  <FaAward className="text-orange-400 text-2xl mr-3" />
                  <h3 className="text-xl font-semibold text-white">Awards</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300">🏆 USF Green & Gold Presidential Scholarship ($12,000/year)</p>
                  <p className="text-gray-300">📚 College of Engineering Dean's List</p>
                </div>
              </div>

              {/* Current Focus */}
              <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 rounded-xl card-hover border border-emerald-700/50">
                <div className="flex items-center mb-4">
                  <FaTrophy className="text-emerald-400 text-2xl mr-3" />
                  <h3 className="text-xl font-semibold text-white">Summary</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-300">💼 Former Software Engineering Intern at Givelify</p>
                  <p className="text-gray-300">🔬 NLP Research Assistant intern at USF</p>
                  <p className="text-gray-300">🚀 AI/ML Project Development Enthusiast</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
