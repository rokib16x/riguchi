import { motion } from "framer-motion"
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center relative">
      {/* Background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-5xl font-bold text-left bg-gradient-to-r from-[#FF00FF] to-[#FFA500] bg-clip-text text-transparent font-['Space_Grotesk']"
            >
              Let's Connect
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8 text-gray-200 text-xl font-['Inter'] text-left"
            >
              I'm always open to new opportunities and collaborations.
              <br />
              Feel free to reach out and let's create something amazing together!
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-6 justify-start"
            >
              <ContactButton href="https://www.linkedin.com/in/ryaniguchi/" icon={<FaLinkedin />} text="LinkedIn" />
              <ContactButton href="https://github.com/yourusername" icon={<FaGithub />} text="GitHub" />
              <ContactButton href="mailto:riguchijob@gmail.com" icon={<FaEnvelope />} text="Email" />
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#FF00FF] to-[#FFA500] blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
            <motion.div
              className="relative rounded-full overflow-hidden aspect-square"
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src="/Favorite-2.png"
                alt="Ryan Iguchi - Contact"
                className="w-full h-full object-cover object-top transform transition-transform duration-300 group-hover:scale-105"
                style={{ objectPosition: "top" }}
                loading="lazy"
                onError={(e) => {
                  e.target.src = "/fallback-image.png"
                }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactButton({ href, icon, text }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 bg-gradient-to-r from-[#00BFFF] to-[#00FA9A] hover:from-[#00BFFF] hover:to-[#0000FF] text-white px-6 py-3 rounded-lg transition-colors font-['Inter']"
    >
      {icon}
      {text}
    </motion.a>
  )
}

export default Contact

