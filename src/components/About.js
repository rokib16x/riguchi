import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Diamond, Shield, Code, Users, Globe } from 'lucide-react';

// Reusable animations
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const transition = { duration: 0.5 };

function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section id="about" className="py-20 px-6 font-poppins">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={transition}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#4077E3] to-[#1DC177] bg-clip-text text-transparent font-['Space_Grotesk']"
        >
          About Me
        </motion.h2>

        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ ...transition, delay: 0.2 }}
          className="space-y-8 text-base md:text-lg text-white/80 font-['Inter']"
        >
          <p className="leading-relaxed text-center text-lg md:text-xl text-white/80 font-['Inter']">
            I'm{" "}
            <span className="font-bold bg-gradient-to-r from-[#4077E3] to-[#1DC177] bg-clip-text text-transparent text-xl md:text-2xl font-['Poppins']">
              Ryan Iguchi
            </span>
            , a{" "}
            <span className="font-bold bg-gradient-to-r from-[#4077E3] to-[#1DC177] bg-clip-text text-transparent text-xl md:text-2xl font-['Montserrat']">
              Product Manager
            </span>{" "}
            and{" "}
            <span className="font-bold bg-gradient-to-r from-[#4077E3] to-[#1DC177] bg-clip-text text-transparent text-xl md:text-2xl font-['Roboto']">
              Software Engineer
            </span>{" "}
            with over a decade of experience bridging technical expertise and
            business strategy. My journey began in 2010, experimenting with
            no-code solutions before diving deep into software development. This
            evolution has led me through roles spanning web development, IT
            leadership, and product management, giving me a unique perspective
            on building technology solutions.
          </p>

          <div className="space-y-6">
            <h4 className="text-xl md:text-3xl font-semibold bg-gradient-to-r from-[#4077E3] to-[#1DC177] bg-clip-text text-transparent text-center font-['Space_Grotesk']">
              What I Specialize In
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Technical Development: Full-stack engineering with Svelte, React, and Node.js",
                "Infrastructure & Security: DevOps, cloud architecture, and information security (CISSP Candidate)",
                "Project Leadership: Product lifecycle management and strategic planning",
                "Agile Practices: Certified Scrum Master (PSM) and Product Owner (PSPO)",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-3"
                  variants={variants}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Diamond size={16} className="flex-shrink-0 text-[#FF6B6B]" />
                  <span
                    className="text-lg font-medium text-white/80 font-['Inter']"
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <p className="leading-relaxed text-center text-white/80 font-['Inter']">
              I specialize in transforming complex technical challenges into
              elegant, user-centric solutions. My approach combines robust
              engineering practices with strategic business thinking, ensuring
              products are not just well-built but also deliver measurable value
              to users and businesses alike.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl md:text-3xl font-semibold bg-gradient-to-r from-[#4077E3] to-[#1DC177] bg-clip-text text-transparent text-center font-['Space_Grotesk']">
              Beyond my professional work:
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Shield size={24} className="text-[#FF6B6B]" />,
                  text: "I'm deeply passionate about cybersecurity.",
                },
                {
                  icon: <Code size={24} className="text-[#FF6B6B]" />,
                  text: "I actively contribute to open-source projects.",
                },
                {
                  icon: <Users size={24} className="text-[#FF6B6B]" />,
                  text: "I enjoy mentoring the next generation of tech leaders.",
                },
                {
                  icon: <Globe size={24} className="text-[#FF6B6B]" />,
                  text: "I explore global tech trends and innovations.",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-3"
                  variants={variants}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  {item.icon}
                  <span
                    className="text-lg font-medium text-white/80 font-['Inter']"
                  >
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <p className="leading-relaxed text-center text-white/80 font-['Inter']">
            Currently, I'm focused on building innovative solutions in the
            construction technology space, where I'm excited to tackle new
            challenges that push the boundaries of what's possible.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

