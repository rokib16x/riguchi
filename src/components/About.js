import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Diamond } from "lucide-react";
function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 px-6 font-poppins">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>

        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8 text-lg text-gray-700"
        >
          <p className="leading-relaxed">
            I'm{" "}
            <span className="font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Ryan Iguchi
            </span>
            , a{" "}
            <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Product Manager
            </span>{" "}
            and{" "}
            <span className="font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Software Engineer
            </span>{" "}
            with over a decade of experience bridging technical expertise and
            business strategy.
          </p>

          <p className="leading-relaxed">
            My journey in tech started with building projects using no-code
            tools back in 2010. From there, I dove into programming, exploring
            various languages and technologies. This exploration led me to work
            in diverse roles, from web development to leading IT departments.
          </p>

          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              What I Specialize In
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Full product lifecycle management",
                "Agile methodologies",
                "Certified Scrum Master and Product Owner",
                "Web development (React, TypeScript.js, Node.js)",
                "DevOps and cloud architecture",
                "Cybersecurity (CISSP Candidate)",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center space-x-3"
                  variants={variants}
                  initial="hidden"
                  animate={controls}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Diamond size={16} className="flex-shrink-0 text-pink-500" />
                  <span
                    className="text-lg font-medium"
                    style={{ color: "#D7D0E5" }}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <p className="leading-relaxed">
            I'm deeply interested in building{" "}
            <span className="font-semibold text-pink-400">
              innovative solutions
            </span>{" "}
            that solve real-world problems. My focus is on creating{" "}
            <span className="font-semibold text-purple-400">
              user-centric products
            </span>{" "}
            while ensuring they're secure, scalable, and aligned with business
            objectives.
          </p>

          <p className="leading-relaxed">
            When I'm not coding or managing products, I enjoy staying updated
            with the latest tech trends, contributing to open-source projects,
            and mentoring aspiring developers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
