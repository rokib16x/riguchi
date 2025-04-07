import { useState, useEffect, useRef } from "react"
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
  FaWordpress,
  FaDatabase,
  FaCode,
  FaPaintBrush,
  FaVideo,
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
  const [activeCategory, setActiveCategory] = useState("management")
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const skillsRef = useRef(null)

  useEffect(() => {
    const storedCategory = localStorage.getItem("activeSkillCategory")
    if (storedCategory) {
      setActiveCategory(storedCategory)

      if (skillsRef.current) {
        skillsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
  }, [])

  const skills = {
    management: [
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
      { name: "ADDS", icon: <FaShieldAlt /> },
      { name: "Azure", icon: <FaShieldAlt /> },
      { name: "IAM", icon: <FaShieldAlt /> },
      { name: "Database Queries (SQL, SPL, KQL)", icon: <FaDatabase /> },
      { name: "API Development & Postman", icon: <FaCode /> },
      { name: "Competitive Programming", icon: <FaCode /> },
      { name: "WordPress", icon: <FaWordpress /> },
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
    creative: [
      { name: "Design", icon: <FaPaintBrush /> },
      { name: "Video Editing", icon: <FaVideo /> },
    ],
  }

  const awards = [
    {
      title: "KQL Puzzle Challenge",
      place: "2nd",
      description: "Demonstrated exceptional skills in Kusto Query Language, competing against 20 participants.",
    },
    {
      title: "AWS DeepRacer Contest",
      place: "2nd",
      description: "Developed an advanced reinforcement learning model for autonomous racing.",
    },
  ]

  const getBarColor = (category) => {
    switch (category) {
      case "technical":
        return {
          gradient: "from-[#FFD700] to-[#FF9400]",
          iconColor: "text-[#FFA500]",
        }
      case "management":
        return {
          gradient: "from-[#FFD700] to-[#FF9400]",
          iconColor: "text-[#FFA500]",
        }
      case "security":
        return {
          gradient: "from-[#FFD700] to-[#FF9400]",
          iconColor: "text-[#FFA500]",
        }
      case "ai":
        return {
          gradient: "from-[#FFD700] to-[#FF9400]",
          iconColor: "text-[#FFA500]",
        }
      case "creative":
        return {
          gradient: "from-[#FFD700] to-[#FF9400]",
          iconColor: "text-[#FFA500]",
        }
      default:
        return {
          gradient: "from-[#FFD700] to-[#FF9400]",
          iconColor: "text-[#FFA500]",
        }
    }
  }

  return (
    <section ref={skillsRef} className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2"
          >
            <h2 className="text-5xl font-bold mb-6 text-center md:text-left bg-gradient-to-r from-[#FFD700] to-[#FF1493] bg-clip-text text-transparent font-['Space_Grotesk']">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-200 text-center md:text-left font-['Inter']">
              With extensive generalist skills across the digital technical spectrum, I have deeper skills in project
              management, technical mastery, and marketing/production technologies. I bring a unique blend of broad
              technical expertise, competitive programming skills, and small team leadership.
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

        <div id="skills" className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skills).map((category) => (
            <motion.button
              key={category}
              id={`name_${category}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`px-6 py-3 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 font-['Inter'] focus:outline-none focus:ring-2 focus:ring-grey-500 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[#FFD700] to-[#FF9400] text-gray-800"
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

        {/* Awards Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-[#FFD700] to-[#FF1493] bg-clip-text text-transparent font-['Space_Grotesk']">
            Awards & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-pink-500/50 hover:bg-white/10 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl text-yellow-400 mr-4">🏆</div>
                  <h3 className="text-2xl font-semibold text-gray-200 font-['Space_Grotesk']">{award.title}</h3>
                </div>
                <p className="text-xl font-bold text-pink-500 mb-2">{award.place} Place</p>
                {award.description && <p className="text-gray-300 italic">{award.description}</p>}
              </motion.div>
            ))}
          </div>
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
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
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

