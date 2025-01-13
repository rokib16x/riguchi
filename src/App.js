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
    <div className="min-h-screen relative">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#8B2FBE] to-[#1E2F97] z-0" />
      
      {/* Circuit board pattern overlay */}
      <div 
        className="fixed inset-0 opacity-5 z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 28h-6v-4h6v4zm-6-12h-6v4h6v-4zm-6 6h-6v4h6v-4zm-6 12h-6v4h6v-4zm-6-6h-6v4h6v-4zm-6 12h-6v4h6v-4zm-6-6h-6v4h6v-4zm36-14h6v4h-6v-4zm-36 0h6v4h-6v-4zm36 26h6v4h-6v-4zm-36 0h6v4h-6v-4z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Helmet>
          <title>Ryan Iguchi - Product Manager & Software Engineer</title>
          <meta name="description" content="Portfolio of Ryan Iguchi, a Product Manager and Software Engineer with over a decade of experience in bridging technical expertise and business strategy." />
          <meta name="theme-color" content="#8B2FBE" />
        </Helmet>
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

