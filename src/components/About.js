import { motion } from "framer-motion";
import { Diamond, Shield, Users, Globe, Swords } from "lucide-react";
import { Link } from "react-scroll";
import { colors } from "../styles/colors";

// Reusable animations
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
const transition = { duration: 0.5 };

// Reusable ListItem component
const ListItem = ({ icon, text, delay }) => (
  <motion.li
    className="flex items-start space-x-3"
    variants={variants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.5, delay }}
  >
    <span className="mt-1 flex-shrink-0">{icon}</span>
    <span
      className="text-lg font-medium font-inter"
      style={{ color: colors.text.secondary }}
    >
      {text}
    </span>
  </motion.li>
);

function About() {
  return (
    <section id="about" className="py-20 px-6 font-poppins">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <motion.h2
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={transition}
          className="text-4xl md:text-5xl font-bold mb-12 text-center font-space-grotesk bg-gradient-to-r from-[#FFD700] to-[#FF1493] bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        {/* Main Content Section */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ ...transition, delay: 0.2 }}
          className="space-y-16 text-base md:text-lg font-inter"
          style={{ color: colors.text.secondary }}
        >
          {/* Introduction */}
          <p className="leading-relaxed text-center text-lg md:text-xl font-inter">
            I'm{" "}
            <span
              className="font-bold text-xl md:text-2xl relative group transition-all duration-300 font-poppins"
              style={{
                background: "linear-gradient(to right, #FFFFFF, #F5F5F5)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Ryan Iguchi
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FF1493] group-hover:w-full transition-all duration-300" />
            </span>
            , an{" "}
            <Link
              to="name_technical"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              onClick={() => {
                localStorage.setItem("activeSkillCategory", "technical");
              }}
              className="font-bold text-xl md:text-2xl relative group transition-all duration-300 font-poppins cursor-pointer"
              style={{
                background: "linear-gradient(to right, #FFFFFF, #F5F5F5)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Application Security Engineer
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FF1493] group-hover:w-full transition-all duration-300" />
            </Link>{" "}
            with deep experience in securing applications and implementing robust security measures. I've led security initiatives across web and mobile development, vulnerability assessments, and secure SDLC implementation—often bridging the gap between security requirements and technical delivery. My cross-functional background enables me to architect secure, scalable solutions while guiding teams through implementing security controls with clarity and intention.
          </p>
          <div className="h-2"></div> {/* Adds a 4rem (64px) vertical break */}
          {/* What I Specialize In */}
          <div className="space-y-8">
            <h4 className="text-xl md:text-3xl font-semibold text-center font-space-grotesk bg-gradient-to-r from-[#FFD700] to-[#FF1493] bg-clip-text text-transparent">
              What I Specialize In
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Application Security: SAST/DAST implementation, secure code review, and vulnerability management",
                "Security Architecture: Designing secure systems, implementing security controls, and threat modeling",
                "Infrastructure & Security: Network security, cloud security, and information security (CISM Candidate)",
                "Technical Development: Secure coding practices, DevSecOps integration, and security automation",
              ].map((item, index) => (
                <ListItem
                  key={index}
                  icon={
                    <Diamond
                      size={16}
                      className="flex-shrink-0 text-[#FF6B6B]"
                    />
                  }
                  text={item}
                  delay={0.3 + index * 0.1}
                />
              ))}
            </ul>
          </div>
          {/* More Spacing Here */}
          <div className="h-2"></div> {/* Adds a 4rem (64px) vertical break */}
          {/* Beyond Professional Work */}
          <div className="space-y-8">
            <h4 className="text-xl md:text-3xl font-semibold text-center font-space-grotesk bg-gradient-to-r from-[#FFD700] to-[#FF1493] bg-clip-text text-transparent">
              Beyond my professional work:
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Shield size={24} className="text-[#FF6B6B]" />,
                  text: "I'm deeply passionate about network security, IAM, and Application Security.",
                },
                {
                  icon: <Swords size={24} className="text-[#FF6B6B]" />,
                  text: "I actively participate in CTFs and RvB events.",
                },
                {
                  icon: <Users size={24} className="text-[#FF6B6B]" />,
                  text: "I enjoy mentoring my peer group and fellow students into the next generation of tech leaders.",
                },
                {
                  icon: <Globe size={24} className="text-[#FF6B6B]" />,
                  text: "I study global security tech trends and AI innovations.",
                },
              ].map((item, index) => (
                <ListItem
                  key={index}
                  icon={item.icon}
                  text={item.text}
                  delay={0.3 + index * 0.1}
                />
              ))}
            </ul>
          </div>
          {/* Current Focus */}
          <div className="text-center leading-relaxed font-inter space-y-4">
            <p>
              Currently, my focus is on developing secure full-stack web
              application solutions within the construction technology sector.
              Our deployment architecture is containerized using Docker,
              allowing for consistent and isolated environments across
              development and production.
            </p>
            <p>
              To protect sensitive information, we're implementing secure secret
              management practices—keeping credentials and API keys out of the
              codebase and storing them in internally-positioned,
              access-controlled environments. This limits exposure and aligns
              with the principles of least privilege and defense in depth.
            </p>
            <p>
              Additionally, the containerized approach enables warm standby
              environments, allowing us to maintain redundancy and significantly
              reduce failover recovery time to under five minutes. This setup
              supports both operational resilience and business continuity,
              while remaining compliant with key audit concerns like system
              availability, secure configuration, and incident response
              readiness.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
