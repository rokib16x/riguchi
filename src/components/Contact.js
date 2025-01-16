import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-[#4077E3] to-[#1DC177] bg-clip-text text-transparent font-['Space_Grotesk']"
      >
        Let's Connect
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8 text-white/80 text-xl font-['Inter']"
      >
        I'm always open to new opportunities and collaborations.
        <br />
        Feel free to reach out and let's create something amazing together!
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex justify-center gap-6"
      >
        <ContactButton href="https://www.linkedin.com/in/ryaniguchi/" icon={<FaLinkedin />} text="LinkedIn" />
        <ContactButton href="https://github.com/yourusername" icon={<FaGithub />} text="GitHub" />
        <ContactButton href="mailto:riguchijob@gmail.com" icon={<FaEnvelope />} text="Email" />
      </motion.div>
    </section>
  );
}

function ContactButton({ href, icon, text }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 bg-gradient-to-r from-[#4077E3] to-[#1DC177] hover:from-[#3066D2] hover:to-[#1CAF66] text-white px-6 py-3 rounded-lg transition-colors font-['Inter']"
    >
      {icon}
      {text}
    </motion.a>
  );
}

export default Contact;

