import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronUp,
  Home,
  User,
  Code,
  Briefcase,
  FileText,
  Mail,
} from "lucide-react";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(lastScrollY > currentScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed w-full px-6 py-4 flex justify-between items-center bg-background/80 backdrop-blur-md z-50 border-b border-white/10"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="text-2xl font-bold bg-gradient-to-r from-[#4077E3] to-[#1DC177] bg-clip-text text-transparent cursor-pointer font-mono"
          >
            {"{RI}"}
          </motion.div>

          <div className="hidden md:flex gap-6">
            {[
              { name: "Home", icon: <Home size={18} /> },
              { name: "About", icon: <User size={18} /> },
              { name: "Skills", icon: <Code size={18} /> },
              { name: "Experience", icon: <Briefcase size={18} /> },
              { name: "Resume", icon: <FileText size={18} /> },
              { name: "Contact", icon: <Mail size={18} /> },
            ].map(({ name, icon }) => (
              <NavLink key={name} href={`#${name.toLowerCase()}`}>
                <span className="mr-2">{icon}</span>
                {name}
              </NavLink>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg"
          >
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white" />
          </motion.button>
        </motion.nav>
      )}
      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: lastScrollY > 500 ? 1 : 0 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-primary/80 hover:bg-primary backdrop-blur-sm rounded-full z-50 shadow-lg"
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </AnimatePresence>
  );
}

function NavLink({ href, children }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1 }}
      className="relative font-medium text-white/80 hover:text-white transition-colors font-sans group flex items-center"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-300" />
    </motion.a>
  );
}

export default Navbar;
