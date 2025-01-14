import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Hero() {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-pink-400 text-xl mb-2"
          >
            Hey there! I'm-
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold mb-4 tracking-tight bg-gradient-to-r from-white via-pink-500 to-purple-500 bg-clip-text text-transparent cursor-default"
            whileHover={{ scale: 1.05 }}
          >
            Ryan Iguchi.
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-white/80 font-medium mb-6"
          >
            Product Manager & Software Engineer
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center md:justify-start gap-4"
          >
            <SocialLink href="https://github.com" icon={<FaGithub />} />
            <SocialLink href="https://linkedin.com" icon={<FaLinkedin />} />
            <SocialLink href="mailto:ryan@netdevs.net" icon={<FaEnvelope />} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div 
            className="relative group"
            whileHover={{ rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
            <img
              src="/profile-image.png"
              alt="Ryan Iguchi"
              className="relative w-64 h-64 md:w-96 md:h-96 rounded-full object-cover transition-transform duration-300 transform group-hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors text-text-primary text-2xl backdrop-blur-sm"
    >
      {icon}
    </motion.a>
  );
}

export default Hero;

