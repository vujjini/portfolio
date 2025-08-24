import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaTrophy, FaChalkboardTeacher, FaHandshake } from 'react-icons/fa';

const Leadership = () => {
  const leadershipRoles = [
    {
      title: "Software Engineering Lead",
      organization: "Association of Computing Machinery (ACM)",
      location: "Tampa, FL",
      period: "Oct 2022 – May 2024",
      icon: <FaUsers />,
      color: "from-blue-500 to-indigo-600",
      achievements: [
        "Led a team of 4 to build web apps showcased at expos, boosting club engagement by 15%",
        "Coordinated a team of 2 to launch an election website for 200+ members, achieving 95% user satisfaction",
        "Led and organized 5+ workshops for technical events that increased the club's engagement by 15%"
      ],
      skills: ["Team Leadership", "Web Development", "Event Organization", "Technical Workshops"],
      impact: {
        teamSize: "4-6 Members",
        engagement: "15% Increase",
        satisfaction: "95% Rating",
        events: "5+ Workshops"
      }
    }
  ];

  const leadershipQualities = [
    {
      title: "Team Leadership",
      description: "Successfully led cross-functional teams of 4-15+ members across multiple projects and organizations",
      icon: <FaUsers />,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Technical Mentorship",
      description: "Organized and conducted 5+ technical workshops, sharing knowledge and best practices with peers",
      icon: <FaChalkboardTeacher />,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Project Management",
      description: "Managed 100+ events monthly and coordinated complex technical projects with measurable outcomes",
      icon: <FaTrophy />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Stakeholder Engagement",
      description: "Achieved 95% user satisfaction and 15% engagement increase through effective communication",
      icon: <FaHandshake />,
      color: "from-cyan-500 to-blue-500"
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
    <section id="leadership" className="py-20 bg-gray-900 section-padding">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Leadership & <span className="gradient-text">Impact</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Driving innovation and fostering growth through technical leadership, 
            team management, and community engagement across diverse organizations.
          </p>
        </motion.div>

        {/* Main Leadership Role */}
        <motion.div variants={itemVariants} className="mb-16">
          {leadershipRoles.map((role, index) => (
            <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8 shadow-lg">
              <div className="lg:flex items-start gap-8">
                <div className="lg:w-2/3">
                  <div className="flex items-center mb-6">
                    <div className={`bg-gradient-to-r ${role.color} p-4 rounded-lg text-dark-600 mr-4`}>
                      {role.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-dark-600 mb-2">{role.title}</h3>
                      <p className="text-primary-400 font-semibold mb-1">{role.organization}</p>
                      <p className="text-sm text-gray-400 mb-4">{role.period}</p>
                      <div className="flex gap-4 text-sm text-dark-500 mt-1">
                        <span>{role.period}</span>
                        <span>•</span>
                        <span>{role.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-2">Key Achievements:</h4>
                    <ul className="space-y-3">
                      {role.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-dark-600">
                          <span className="text-primary-500 mr-3 mt-1">•</span>
                          <li key={achIndex} className="text-dark-600 text-sm">{achievement}</li>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-3">Leadership Skills Applied</h4>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-white text-dark-600 text-sm rounded-full font-medium shadow-sm border border-gray-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* <div className="lg:w-1/3 mt-8 lg:mt-0">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h4 className="font-semibold text-white mb-4">Impact Metrics</h4>
                    <div className="space-y-4">
                      {Object.entries(role.impact).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-sm text-dark-600 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <span className="bg-primary-900/50 text-primary-300 px-3 py-1 rounded-full text-sm font-medium border border-primary-700/50">
                            {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Leadership Qualities Grid */}
        {/* <motion.div variants={itemVariants}>
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Leadership <span className="gradient-text">Qualities</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipQualities.map((quality, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-xl shadow-lg card-hover h-full border border-gray-700 text-center"
                whileHover={{ y: -5 }}
              >
                <div className={`bg-gradient-to-r ${quality.color} p-4 rounded-lg text-white inline-flex mb-4`}>
                  {quality.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{quality.title}</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">{quality.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Leadership Philosophy */}
        {/* <motion.div variants={itemVariants} className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-dark-800 mb-4">Leadership Philosophy</h3>
            <p className="text-dark-600 leading-relaxed max-w-4xl mx-auto">
              "I believe in empowering teams through collaborative leadership, fostering an environment where 
              innovation thrives and every member can contribute their unique strengths. My approach combines 
              technical expertise with emotional intelligence to drive projects that create meaningful impact 
              and deliver measurable results."
            </p>
          </div>
        </motion.div> */}

        {/* Stats Summary */}
        {/* <motion.div variants={itemVariants} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "15+", label: "Team Members Led" },
              { number: "100+", label: "Events Managed" },
              { number: "95%", label: "User Satisfaction" },
              { number: "5+", label: "Workshops Organized" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg"
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

export default Leadership;
