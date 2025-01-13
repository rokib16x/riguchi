import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaPython,
  FaCode,
  FaProjectDiagram,
  FaShieldAlt,
  FaRobot,
} from 'react-icons/fa';

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
      { name: 'PHP', icon: <FaCode />, level: 70 },
      { name: 'Ruby', icon: <FaCode />, level: 65 },
      { name: 'Go', icon: <FaCode />, level: 60 },
      { name: 'Java', icon: <FaCode />, level: 70 },
      { name: 'Kotlin', icon: <FaCode />, level: 65 },
    ],
    product: [
      { name: 'Product Strategy', icon: <FaProjectDiagram />, level: 95 },
      { name: 'Agile/Scrum', icon: <FaProjectDiagram />, level: 90 },
      { name: 'User Research', icon: <FaProjectDiagram />, level: 85 },
      { name: 'Data Analysis', icon: <FaProjectDiagram />, level: 80 },
      { name: 'Project Management', icon: <FaProjectDiagram />, level: 90 },
      { name: 'Stakeholder Communication', icon: <FaProjectDiagram />, level: 85 },
      { name: 'UX Design', icon: <FaProjectDiagram />, level: 80 },
    ],
    security: [
      { name: 'SDLC', icon: <FaShieldAlt />, level: 85 },
      { name: 'DevOps', icon: <FaShieldAlt />, level: 80 },
      { name: 'Cloud Security', icon: <FaShieldAlt />, level: 75 },
      { name: 'Risk Management', icon: <FaShieldAlt />, level: 85 },
      { name: 'Static Application Security Testing (SAST)', icon: <FaShieldAlt />, level: 80 },
      { name: 'Software Composition Analysis (SCA)', icon: <FaShieldAlt />, level: 75 },
      { name: 'OWASP Top 10', icon: <FaShieldAlt />, level: 85 },
    ],
    ai: [
      { name: 'AI Engineering', icon: <FaRobot />, level: 80 },
      { name: 'Prompt Engineering', icon: <FaRobot />, level: 85 },
      { name: 'Retrieval-Augmented Generation (RAG)', icon: <FaRobot />, level: 75 },
      { name: 'Reinforcement Learning', icon: <FaRobot />, level: 70 },
      { name: 'LLM Integration', icon: <FaRobot />, level: 80 },
    ],
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center text-green-400"
        >
          Skills
        </motion.h2>

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {Object.keys(skills).map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg text-lg font-semibold transition-colors ${
                activeCategory === category
                  ? 'bg-green-400 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills[activeCategory].map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ name, icon, level }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center text-center"
    >
      {/* Icon */}
      <div className="text-5xl text-green-400 mb-4">{icon}</div>

      {/* Skill Name */}
      <h3 className="text-xl font-semibold text-gray-300 mb-2">{name}</h3>

      {/* Level */}
      <div className="text-gray-400 text-sm">Proficiency: {level}%</div>
    </motion.div>
  );
}

export default Skills;