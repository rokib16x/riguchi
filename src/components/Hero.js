import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  }

  const name = "Ryan Iguchi"

  return (
    <div id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 text-center md:text-left">
          <motion.p
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            className="font-mono text-[#BDBDBD] text-xl mb-2"
          >
            Hey there! I'm-
          </motion.p>
          <motion.h1
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ delay: 0.2 }}
            className={`text-6xl md:text-7xl font-bold mb-4 tracking-tight bg-gradient-to-r from-[#00FF7F] to-[#00FFFF] bg-clip-text text-transparent font-['Space_Grotesk'] cursor-default`}
            whileHover={{ scale: 1.05 }}
          >
            {name}.
          </motion.h1>
          <motion.h2
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-white/80 font-medium mb-6 font-['Inter']"
          >
            Product Manager & Software Engineer
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
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
          transition={{ delay: 0.8 }}
          className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0"
        >
          <motion.div
            className="relative group"
            whileHover={{ 
              rotate: 2,
              transition: { 
                type: "spring",
                stiffness: 300,
                damping: 10
              }
            }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#4077E3] to-[#1DC177] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
            <img
              src="/profile-image.png"
              alt={`${name} - Product Manager & Software Engineer`}
              loading="lazy"
              onError={(e) => {
                e.target.src = "/fallback-image.png"
              }}
              className="relative w-80 h-80 md:w-[500px] md:h-[500px] rounded-full object-cover transition-transform duration-300 transform"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
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
  )
}

export default Hero