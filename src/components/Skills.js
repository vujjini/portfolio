import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, 
  FaDatabase, FaCode, FaBrain, FaCloud 
} from 'react-icons/fa';
import { 
  SiJavascript, SiCplusplus, SiAngular, SiFlask, 
  SiDjango, SiSpringboot, SiFastapi, SiTailwindcss, SiMui,
  SiPostgresql, SiMysql, SiMongodb, SiRedis, SiTensorflow,
  SiPytorch, SiScikitlearn, SiPandas, SiNumpy
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode className="text-2xl" />,
      color: "from-blue-500 to-purple-600",
      skills: [
        { name: "Python", icon: FaPython },
        { name: "JavaScript", icon: SiJavascript },
        { name: "C++", icon: SiCplusplus },
        { name: "Java", icon: FaCode },
        { name: "C", icon: FaCode }
      ]
    },
    {
      title: "Frontend Frameworks",
      icon: <FaReact className="text-2xl" />,
      color: "from-cyan-500 to-blue-500",
      skills: [
        { name: "React JS", icon: FaReact },
        { name: "Angular", icon: SiAngular },
        { name: "React Native", icon: FaReact },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Material-UI", icon: SiMui }
      ]
    },
    {
      title: "Backend & APIs",
      icon: <FaNodeJs className="text-2xl" />,
      color: "from-green-500 to-emerald-600",
      skills: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Flask", icon: SiFlask },
        { name: "Django", icon: SiDjango },
        { name: "FastAPI", icon: SiFastapi },
        { name: "Spring Boot", icon: SiSpringboot }
      ]
    },
    {
      title: "AI/ML Technologies",
      icon: <FaBrain className="text-2xl" />,
      color: "from-purple-500 to-pink-600",
      skills: [
        { name: "TensorFlow", icon: SiTensorflow },
        { name: "PyTorch", icon: SiPytorch },
        { name: "Scikit-learn", icon: SiScikitlearn },
        { name: "Hugging Face", icon: FaBrain },
        { name: "LangChain", icon: FaBrain }
      ]
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-2xl" />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Redis", icon: SiRedis },
        { name: "SQLAlchemy", icon: FaDatabase }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud className="text-2xl" />,
      color: "from-indigo-500 to-purple-600",
      skills: [
        { name: "AWS", icon: FaAws },
        { name: "Docker", icon: FaDocker },
        { name: "Git", icon: FaGitAlt },
        { name: "CI/CD", icon: FaCloud },
        { name: "Linux/Unix", icon: FaCode }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    <section id="skills" className="py-20 bg-black section-padding">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit spanning full-stack development, AI/ML technologies, 
            and cloud platforms to build scalable, intelligent solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-gray-800 p-6 rounded-xl shadow-lg card-hover border border-gray-700"
            >
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${category.color} p-3 rounded-lg text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skill.name} 
                    className="flex items-center p-2 sm:p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <skill.icon className="text-primary-400 mr-2 sm:mr-3" size={16} />
                    <span className="font-medium text-gray-200 text-xs sm:text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-dark-800 mb-6">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Machine Learning", "Deep Learning", "Natural Language Processing", 
              "RAG Systems", "LLMs", "Prompt Engineering", "REST APIs", 
              "Microservices", "Agile Methodologies", "SDLC", "Object-Oriented Programming",
              "Data Structures & Algorithms", "System Design", "Cloud Architecture"
            ].map((skill) => (
              <motion.span
                key={skill}
                className="bg-white px-4 py-2 rounded-full text-dark-700 shadow-md border border-gray-200"
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
