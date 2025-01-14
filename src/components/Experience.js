import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Experience() {
  const experiences = [
    {
      title: "Product Manager",
      company: "HomeBuilder.app",
      period: "02/2023 - 02/2024",
      description: "Led end-to-end product development of modern web applications for builders, architects, and specialty contractors.",
      achievements: [
        "Achieved perfect Google PageSpeed scores for performance, accessibility, best practices, and SEO.",
        "Migrated DevOps to AWS, implementing automated deployment pipelines.",
        "Architected scalable frontend solutions using Module Federation.",
      ],
      color: "from-pink-500 to-purple-500"
    },
    {
      title: "Head of IT",
      company: "Maria's Place",
      period: "01/2021 - 12/2023",
      description: "Spearheaded secure software development lifecycle (SDLC) initiatives and multi-channel technology stack integration.",
      achievements: [
        "Developed an MVP iOS app with secure audio chat rooms, focusing on ADA accessibility.",
        "Integrated eCommerce, CRM, and WMS systems through RESTful APIs.",
        "Led DevOps modernization, including Private GitHub migration and SSO implementation.",
      ],
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Project Manager & UX Director",
      company: "WP Superheroes",
      period: "05/2017 - 06/2023",
      description: "Managed multiple projects using Agile/Scrum methodology, leading development teams and improving UX.",
      achievements: [
        "Directed UX improvements, resulting in enhanced user engagement and client satisfaction.",
        "Constructed and secured hacked WordPress sites.",
        "Built complex projects using Agile/Scrum project management.",
      ],
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Web Software Developer",
      company: "Maria's Place",
      period: "07/2014 - 12/2020",
      description: "Built and scaled a membership platform serving 10,000+ users with features like porous paywalls and eCommerce subscriptions.",
      achievements: [
        "Implemented PII data management systems ensuring compliance with security standards.",
        "Developed responsive frontend solutions with a focus on user experience and performance optimization.",
        "Trained teams in custom web development practices.",
      ],
      color: "from-blue-500 to-teal-500"
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
        >
          Work Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ title, company, period, description, achievements, color, index }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`relative pl-8 border-l-2 border-gradient-to-b ${color}`}
    >
      <div className={`absolute left-[-10px] top-0 w-5 h-5 rounded-full bg-gradient-to-r ${color}`} />

      <motion.div 
        className="bg-white/5 p-6 rounded-lg shadow-lg backdrop-blur-sm"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <h3 className={`text-2xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{title}</h3>
        <p className="text-white/80">{company}</p>
        <p className="text-white/60 text-sm mb-4">{period}</p>
        <p className="text-white/80 mb-4">{description}</p>

        <ul className="space-y-2">
          {achievements.map((achievement, i) => (
            <li key={i} className="flex items-start space-x-2">
              <span className={`text-gradient-to-r ${color}`}>✔</span>
              <span className="text-white/70">{achievement}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default Experience;

