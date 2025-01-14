import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaJs, FaNodeJs, FaPython, FaCode, FaProjectDiagram, FaShieldAlt, FaRobot } from 'react-icons/fa';

function Skills() {
  const [activeCategory, setActiveCategory] = useState('technical');

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
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center text-tertiary"
        >
          Skills
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skills).map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
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
      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
        />
      </div>
      <p className="text-white/60 mt-2">Proficiency: {level}%</p>
    </motion.div>
  );
}

export default Skills;

