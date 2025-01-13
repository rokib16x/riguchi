import { motion } from 'framer-motion'

function Contact() {
  return (
    <div className="py-20 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold mb-6"
      >
        Keep In Touch.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        I'm currently specializing in <span className="text-green-400">Front-end Development</span>.
        <br />
        Feel free to get in touch and talk more about your projects.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="flex justify-center gap-4"
      >
        <ContactButton href="https://linkedin.com" text="LinkedIn" />
        <ContactButton href="mailto:ryan@netdevs.net" text="Email" />
        <ContactButton href="/resume.pdf" text="Resume" />
      </motion.div>
    </div>
  )
}

function ContactButton({ href, text }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
    >
      {text}
    </motion.a>
  )
}

export default Contact

