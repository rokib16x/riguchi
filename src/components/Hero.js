import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const gradients = [
    'from-[#FF007F] to-[#FF6B6B]', // Hot Pink to Coral
    'from-[#FFD700] to-[#FF69B4]', // Gold to Hot Pink
    'from-[#00FF7F] to-[#00FFFF]', // Spring Green to Cyan
    'from-[#FF1493] to-[#FF8C00]', // Deep Pink to Dark Orange
    'from-[#00BFFF] to-[#00FA9A]', // Deep Sky Blue to Medium Spring Green
    'from-[#FF00FF] to-[#FFA500]', // Magenta to Orange
    'from-[#8A2BE2] to-[#FF69B4]', // Blue Violet to Hot Pink
    'from-[#32CD32] to-[#00FFFF]', // Lime Green to Cyan
    'from-[#FF6347] to-[#FFD700]', // Tomato to Gold
    'from-[#7B68EE] to-[#FF00FF]', // Medium Slate Blue to Magenta
    'from-[#FFD700] to-[#FF1493]', // Gold to Deep Pink
    'from-[#00FF00] to-[#00BFFF]', // Lime to Deep Sky Blue
    'from-[#FF69B4] to-[#FF4500]', // Hot Pink to Orange Red
    'from-[#00CED1] to-[#FF007F]', // Turquoise to Hot Pink
    'from-[#FF8C00] to-[#8A2BE2]', // Dark Orange to Blue Violet
    'from-[#FF00FF] to-[#00FF7F]', // Magenta to Spring Green
    'from-[#FFD700] to-[#00CED1]', // Gold to Turquoise
    'from-[#FF1493] to-[#00BFFF]', // Deep Pink to Deep Sky Blue
    'from-[#FF4500] to-[#7B68EE]', // Orange Red to Medium Slate Blue
    'from-[#00FF00] to-[#FF007F]', // Lime to Hot Pink
    'from-[#FF69B4] to-[#00FF7F]', // Hot Pink to Spring Green
    'from-[#8A2BE2] to-[#FFD700]', // Blue Violet to Gold
    'from-[#FF6347] to-[#00CED1]', // Tomato to Turquoise
    'from-[#FF00FF] to-[#FF4500]', // Magenta to Orange Red
    'from-[#00BFFF] to-[#FF1493]', // Deep Sky Blue to Deep Pink
    'from-[#FF007F] to-[#00FF7F]', // Hot Pink to Spring Green
    'from-[#FF8C00] to-[#00CED1]', // Dark Orange to Turquoise
    'from-[#FF00FF] to-[#00BFFF]', // Magenta to Deep Sky Blue
    'from-[#FF1493] to-[#00FF00]', // Deep Pink to Lime
    'from-[#FF4500] to-[#00FFFF]', // Orange Red to Cyan
  ];

  return (
    <div id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 text-center md:text-left">
          <motion.p
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            className="font-mono text-[#4077E3] text-xl mb-2"
          >
            Hey there! I'm-
          </motion.p>

          {/* Render the name with different gradients */}
          {gradients.map((gradient, index) => (
            <motion.h1
              key={index}
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ delay: 0.2 + index * 0.1 }}
              className={`text-6xl md:text-7xl font-bold mb-4 tracking-tight bg-gradient-to-r ${gradient} bg-clip-text text-transparent font-['Space_Grotesk'] cursor-default`}
              whileHover={{ scale: 1.05 }}
            >
              Ryan Iguchi.
            </motion.h1>
          ))}

          <motion.h2
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ delay: 0.4 + gradients.length * 0.1 }}
            className="text-2xl md:text-3xl text-white/80 font-medium mb-6 font-['Inter']"
          >
            Product Manager & Software Engineer
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + gradients.length * 0.1 }}
            className="flex justify-center md:justify-start gap-4"
          >
            <SocialLink href="https://github.com" icon={<FaGithub />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/ryaniguchi/" icon={<FaLinkedin />} label="LinkedIn" />
            <SocialLink href="mailto:riguchijob@gmail.com" icon={<FaEnvelope />} label="Email" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 + gradients.length * 0.1 }}
          className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0"
          whileHover={{ scale: 1.05 }}
        >
          <motion.div 
            className="relative group"
            whileHover={{ rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#4077E3] to-[#1DC177] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
            <img
              src="/profile-image.png"
              alt="Ryan Iguchi - Product Manager & Software Engineer"
              loading="lazy"
              onError={(e) => {
                e.target.src = '/fallback-image.png';
              }}
              className="relative w-64 h-64 md:w-96 md:h-96 rounded-full object-cover transition-transform duration-300 transform group-hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Link to ${label}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors text-white text-2xl backdrop-blur-sm"
    >
      {icon}
    </motion.a>
  );
}

export default Hero;