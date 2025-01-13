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
    },
    {
      title: "Mobile Game Developer",
      company: "Maria's Place",
      period: "07/2013 - 06/2014",
      description: "Led product development for 2 mobile games: Apple Catch and Smoothie Shack.",
      achievements: [
        "Built physical and digital therapeutic activity products for seniors.",
        "Designed and developed 200+ game assets, including characters, power-ups, and scoreboards.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center text-green-400"
        >
          Work Experience
        </motion.h2>

        {/* Timeline */}
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ title, company, period, description, achievements, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-8 border-l-2 border-green-400"
    >
      {/* Timeline Dot */}
      <div className="absolute left-[-10px] top-0 w-5 h-5 bg-green-400 rounded-full" />

      {/* Content */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-green-400">{title}</h3>
        <p className="text-gray-400">{company}</p>
        <p className="text-gray-400 text-sm mb-4">{period}</p>
        <p className="text-gray-300 mb-4">{description}</p>

        {/* Achievements */}
        <ul className="space-y-2">
          {achievements.map((achievement, i) => (
            <li key={i} className="flex items-start space-x-2">
              <span className="text-green-400">✔</span>
              <span className="text-gray-300">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default Experience;