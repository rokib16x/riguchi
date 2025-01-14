import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen relative font-sans">
      <Helmet>
        <title>Ryan Iguchi - Product Manager & Software Engineer</title>
        <meta name="description" content="Portfolio of Ryan Iguchi, a Product Manager and Software Engineer with over a decade of experience in bridging technical expertise and business strategy." />
        <meta name="theme-color" content="#8B2FBE" />
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
    </div>
  );
}

export default App;

