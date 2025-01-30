import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaPython,
  FaProjectDiagram,
  FaShieldAlt,
  FaRobot,
  FaCss3,
  FaBootstrap,
  FaPhp,
  FaBrain,
} from "react-icons/fa"
import {
  SiTypescript,
  SiSvelte,
  SiTailwindcss,
  SiNextdotjs,
  SiVuedotjs,
  SiGraphql,
  SiJira,
  SiTrello,
  SiSlack,
} from "react-icons/si"
import { GiNetworkBars, GiSpy } from "react-icons/gi"
import Lottie from "lottie-react"

function Skills() {
  const [activeCategory, setActiveCategory] = useState("technical")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = {
    technical: [
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Python", icon: <FaPython /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Svelte", icon: <SiSvelte /> },
      { name: "CSS3", icon: <FaCss3 /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Vue.js", icon: <SiVuedotjs /> },
      { name: "PHP", icon: <FaPhp /> },
    ],
    product: [
      { name: "Technical Project Management", icon: <FaProjectDiagram /> },
      { name: "Product Strategy", icon: <FaProjectDiagram /> },
      { name: "Agile Methodology", icon: <SiJira /> },
      { name: "Scrum Master", icon: <SiTrello /> },
      { name: "Backlog Management", icon: <SiJira /> },
      { name: "User Research", icon: <FaProjectDiagram /> },
      { name: "Data Analysis", icon: <FaProjectDiagram /> },
      { name: "Stakeholder Communication", icon: <SiSlack /> },
      { name: "Brand Development", icon: <FaProjectDiagram /> },
    ],
    security: [
      { name: "SDLC", icon: <FaShieldAlt /> },
      { name: "DevOps", icon: <FaShieldAlt /> },
      { name: "Cloud Security", icon: <FaShieldAlt /> },
      { name: "Risk Management", icon: <FaShieldAlt /> },
      { name: "OWASP Top 10", icon: <FaShieldAlt /> },
      { name: "Network Security", icon: <GiNetworkBars /> },
      { name: "Reverse Engineering", icon: <GiSpy /> },
    ],
    ai: [
      { name: "AI Engineering", icon: <FaRobot /> },
      { name: "Prompt Engineering", icon: <FaRobot /> },
      { name: "RAG", icon: <FaRobot /> },
      { name: "LLM Integration", icon: <FaRobot /> },
      { name: "Graph Database", icon: <SiGraphql /> },
      { name: "Reinforcement Learning", icon: <FaBrain /> },
    ],
  }

  const getBarColor = (category) => {
    switch (category) {
      case "technical":
        return { gradient: "from-[#00FF7F] to-[#00FFFF]", iconColor: "text-[#00FF7F]" }
      case "product":
        return { gradient: "from-[#00BFFF] to-[#00FA9A]", iconColor: "text-[#00BFFF]" }
      case "security":
        return { gradient: "from-[#FF00FF] to-[#FFA500]", iconColor: "text-[#FF00FF]" }
      case "ai":
        return { gradient: "from-[#FFD700] to-[#FF1493]", iconColor: "text-[#FFD700]" }
      default:
        return { gradient: "from-[#FF00FF] to-[#FF4500]", iconColor: "text-[#FF00FF]" }
    }
  }

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
            <h2 className="text-5xl font-bold mb-6 text-center md:text-left bg-gradient-to-r from-[#FF00FF] to-[#FFA500] bg-clip-text text-transparent font-['Space_Grotesk']">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-200 text-center md:text-left font-['Inter']">
              With extensive experience in both product management and software engineering, I bring a unique blend of
              technical expertise and strategic thinking.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 relative"
          >
            <Lottie path="/Animation1.json" loop={true} autoplay={true} className="w-full max-w-md mx-auto" />
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
              aria-pressed={activeCategory === category}
              className={`px-6 py-3 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 font-['Inter'] ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[#00FF7F] to-[#00FFFF] text-gray-800"
                  : "bg-white/10 text-gray-200 hover:bg-white/20"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills[activeCategory].map((skill, index) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              index={index}
              barColor={getBarColor(activeCategory)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ name, icon, index, barColor }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="group bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-pink-500/50 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between h-full"
    >
      <div className="flex flex-col items-center text-center">
        <div className={`text-5xl ${barColor.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-200 mb-2 font-['Space_Grotesk']">{name}</h3>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
          className={`h-full bg-gradient-to-r ${barColor.gradient}`}
        />
      </div>
    </motion.div>
  )
}

export default Skills

