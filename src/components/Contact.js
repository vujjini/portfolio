import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:srir16846@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "srir16846@gmail.com",
      href: "mailto:srir16846@gmail.com",
      color: "from-red-500 to-pink-600"
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "(656) 215-1877",
      href: "tel:6562151877",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "linkedin.com/in/sriram-vujjini/",
      href: "https://linkedin.com/in/sriram-vujjini/",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/vujjini",
      href: "https://github.com/vujjini",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Tampa, FL",
      href: null,
      color: "from-purple-500 to-indigo-600"
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
    <section id="contact" className="py-20 bg-black section-padding">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. 
            Feel free to reach out through any of the channels below!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center gap-2 font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPaperPlane />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <div className="space-y-6">
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                      whileHover={{ x: 5 }}
                    >
                      <div className={`bg-gradient-to-r ${info.color} p-3 rounded-lg text-white mr-4`}>
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white">{info.label}</h4>
                        <p className="text-gray-300">{info.value}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : '_self'}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                            className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-dark-600">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Connect */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Quick Connect</h3>
                <p className="mb-6 opacity-90">
                  Looking for immediate collaboration or have a quick question? 
                  Connect with me directly on these platforms:
                </p>
                <div className="flex gap-4">
                  <motion.a
                    href="https://linkedin.com/in/sriram-vujjini/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaLinkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="https://github.com/vujjini"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaGithub size={20} />
                  </motion.a>
                  <motion.a
                    href="mailto:srir16846@gmail.com"
                    className="bg-white/20 p-3 rounded-lg hover:bg-white/30 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaEnvelope size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Availability */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <h4 className="font-semibold text-green-800">Currently Available</h4>
                </div>
                <p className="text-green-700 text-sm">
                  Open to internship opportunities, research collaborations, and freelance projects. 
                  Expected graduation: May 2026.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
