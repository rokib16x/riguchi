import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-5xl font-bold mb-6 text-tertiary"
      >
        Let's Connect
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8 text-secondary text-xl"
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
        <ContactButton href="https://linkedin.com/in/yourusername" icon={<FaLinkedin />} text="LinkedIn" />
        <ContactButton href="https://github.com/yourusername" icon={<FaGithub />} text="GitHub" />
        <ContactButton href="mailto:ryan@netdevs.net" icon={<FaEnvelope />} text="Email" />
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
      className="flex items-center gap-2 bg-tertiary/10 hover:bg-tertiary/20 text-tertiary px-6 py-3 rounded-lg transition-colors"
    >
      {icon}
      {text}
    </motion.a>
  );
}

export default Contact;

