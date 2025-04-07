import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, Home, User, Code, Briefcase, FileText, Mail, ExternalLink } from "lucide-react";

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsVisible(lastScrollY > currentScrollY || currentScrollY < 50);
    setLastScrollY(currentScrollY);
    setIsMobileMenuOpen(false);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = useMemo(
    () => [
      { name: "Home", icon: <Home size={18} />, href: "#home" },
      { name: "About", icon: <User size={18} />, href: "#about" },
      { name: "Skills", icon: <Code size={18} />, href: "#skills" },
      { name: "Experience", icon: <Briefcase size={18} />, href: "#experience" },
      { name: "Resume", icon: <FileText size={18} />, href: "#resume" },
      { name: "Contact", icon: <Mail size={18} />, href: "#contact" },
      {
        name: "NetDev",
        icon: <ExternalLink size={18} />,
        href: "https://netdevs.net/",
        isExternal: true,
      },
    ],
    []
  );

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
            className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FF1493] bg-clip-text text-transparent cursor-pointer font-mono"
          >
            {"{RI}"}
          </motion.div>

          <div className="hidden md:flex gap-6">
            {navItems.map(({ name, icon, href, isExternal }) => (
              <NavLink
                key={name}
                href={href}
                isExternal={isExternal}
                onClick={toggleMobileMenu}
              >
                <span className="mr-2">{icon}</span>
                {name}
              </NavLink>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMobileMenu}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white mb-1.5" />
            <div className="w-6 h-0.5 bg-white" />
          </motion.button>

          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-16 right-6 bg-background/90 backdrop-blur-md rounded-lg p-4 border border-white/10"
            >
              {navItems.map(({ name, icon, href, isExternal }) => (
                <NavLink
                  key={name}
                  href={href}
                  isExternal={isExternal}
                  onClick={toggleMobileMenu}
                >
                  <span className="mr-2">{icon}</span>
                  {name}
                </NavLink>
              ))}
            </motion.div>
          )}
        </motion.nav>
      )}

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: lastScrollY > 500 ? 1 : 0, y: lastScrollY > 500 ? 0 : 20 }}
        transition={{ type: "spring", stiffness: 300 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-primary/80 hover:bg-primary backdrop-blur-sm rounded-full z-50 shadow-lg"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </motion.button>
    </AnimatePresence>
  );
}

function NavLink({ href, children, isExternal, onClick }) {
  return (
    <motion.a
      href={href}
      onClick={(e) => {
        if (!isExternal) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        }
        onClick?.();
      }}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.1 }}
      className="relative font-medium text-white/80 hover:text-white transition-colors font-sans group flex items-center"
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FF1493] group-hover:w-full transition-all duration-300" />
    </motion.a>
  );
}

export default Navbar;