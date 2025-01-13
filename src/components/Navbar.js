import { motion } from 'framer-motion'

function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full px-6 py-4 flex justify-between items-center bg-black/80 backdrop-blur-sm z-50"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="text-2xl font-bold"
      >
        {'{R}'}
      </motion.div>
      <div className="flex gap-6">
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#blog">Blog</NavLink>
      </div>
    </motion.nav>
  )
}

function NavLink({ href, children }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1, color: '#4ade80' }}
      className="hover:text-green-400 transition-colors"
    >
      {children}
    </motion.a>
  )
}

export default Navbar

