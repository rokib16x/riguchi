import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaJs, FaNodeJs, FaPython, FaCode, FaProjectDiagram, FaShieldAlt, FaRobot } from 'react-icons/fa';
import Lottie from 'lottie-react';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('technical');
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const skills = {
    technical: [
      { name: 'React', icon: <FaReact />, level: 90 },
      { name: 'JavaScript', icon: <FaJs />, level: 85 },
      { name: 'Node.js', icon: <FaNodeJs />, level: 80 },
      { name: 'Python', icon: <FaPython />, level: 75 },
      { name: 'TypeScript', icon: <FaCode />, level: 85 },
      { name: 'Vue.js', icon: <FaCode />, level: 80 },
      { name: 'Next.js', icon: <FaCode />, level: 85 },
      { name: 'Svelte', icon: <FaCode />, level: 75 },
    ],
    product: [
      { name: 'Product Strategy', icon: <FaProjectDiagram />, level: 95 },
      { name: 'Agile/Scrum', icon: <FaProjectDiagram />, level: 90 },
      { name: 'User Research', icon: <FaProjectDiagram />, level: 85 },
      { name: 'Data Analysis', icon: <FaProjectDiagram />, level: 80 },
      { name: 'Project Management', icon: <FaProjectDiagram />, level: 90 },
    ],
    security: [
      { name: 'SDLC', icon: <FaShieldAlt />, level: 85 },
      { name: 'DevOps', icon: <FaShieldAlt />, level: 80 },
      { name: 'Cloud Security', icon: <FaShieldAlt />, level: 75 },
      { name: 'Risk Management', icon: <FaShieldAlt />, level: 85 },
      { name: 'OWASP Top 10', icon: <FaShieldAlt />, level: 85 },
    ],
    ai: [
      { name: 'AI Engineering', icon: <FaRobot />, level: 80 },
      { name: 'Prompt Engineering', icon: <FaRobot />, level: 85 },
      { name: 'RAG', icon: <FaRobot />, level: 75 },
      { name: 'LLM Integration', icon: <FaRobot />, level: 80 },
    ],
  };

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2"
          >
            <h2 className="text-5xl font-bold mb-6 text-center md:text-left bg-gradient-to-r from-[#4077E3] to-[#1DC177] bg-clip-text text-transparent font-['Space_Grotesk']">
              Skills & Expertise
            </h2>
            <p className="text-lg text-white/80 text-center md:text-left font-['Inter']">
              With extensive experience in both product management and software engineering,
              I bring a unique blend of technical expertise and strategic thinking.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 relative"
          >
            <Lottie
              path="/Animation1.json"
              loop={true}
              autoplay={true}
              className="w-full max-w-md mx-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skills).map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 font-['Inter'] ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-[#4077E3] to-[#1DC177] text-white'
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills[activeCategory].map((skill, index) => (
            <SkillCard key={skill.name} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ name, icon, level, index }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      className="group bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-pink-500/50 transition-all duration-300"
    >
      <div className="text-5xl text-pink-500 mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2 font-['Space_Grotesk']">{name}</h3>
      <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
        />
      </div>
      <p className="text-white/60 mt-2 font-['Inter']">Proficiency: {level}%</p>
    </motion.div>
  );
}

export default Skills;

