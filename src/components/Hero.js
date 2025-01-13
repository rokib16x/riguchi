import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl w-full flex items-center justify-between">
        {/* Left Side: Text Content */}
        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-purple-400 text-xl mb-2"
          >
            Hey there! I'm-
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl font-bold mb-4"
          >
            Ryan Iguchi.
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl text-gray-400 mb-6"
          >
            Product Manager & Software Engineer
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4"
          >
            <SocialLink href="https://github.com" icon="github" />
            <SocialLink href="https://linkedin.com" icon="linkedin" />
            <SocialLink href="mailto:ryan@netdevs.net" icon="envelope" />
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="flex-1 flex justify-end"
        >
          <img
            src="/profile-image.png"
            alt="Ryan Iguchi"
            className="w-96 h-96 rounded-full object-cover shadow-lg"
          />
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
      className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors"
    >
      <i className={`fa-brands fa-${icon}`}></i>
    </motion.a>
  );
}

export default Hero;

