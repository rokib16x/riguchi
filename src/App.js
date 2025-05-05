import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import LoadingAnimation from './components/LoadingAnimation';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading ? (
        <LoadingAnimation key="loading" />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen relative font-sans"
        >
          <Helmet>
            <title>Ryan Iguchi - Application Security Engineer</title>
            <meta name="description" content="Portfolio of Ryan Iguchi, an Application Security Engineer with expertise in securing applications and implementing robust security measures." />
            <meta name="theme-color" content="#4077E3" />
            <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          </Helmet>
          
          {/* Content overlay with slight darkening for better text readability */}
          <div className="relative z-10 min-h-screen bg-black/20">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Certifications />
            <Resume />
            <Contact />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
