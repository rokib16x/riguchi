import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, Building2, Award, Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Maria's Place",
    period: "Jan 2021 - Sep 2024",
    description:
      "Tech team leader focused on software development, integrating third-party APIs, AWS services, and microservices.",
    achievements: [
      "Implemented CI/CD pipelines and automated testing tools, improving deployment efficiency by 40%.",
      "Designed user-friendly interfaces using React.js, Angular, and Vue.js, increasing user engagement by 25%.",
      "Integrated machine learning models into applications, enhancing functionality and user experience.",
    ],
    color: "from-[#4077E3] to-[#1DC177]",
  },
  {
    title: "Web Application Developer",
    company: "Maria's Place",
    period: "Jul 2014 - Dec 2020",
    description:
      "Developed a membership-based website with 20K+ users, integrating eCommerce subscriptions and WMS APIs.",
    achievements: [
      "Built a ski resort management system using Ruby on Rails, reducing operational costs by 15%.",
      "Migrated DevOps to Private GitHub, improving code security and collaboration.",
      "Designed responsive and intuitive interfaces using React.js and Vue.js.",
    ],
    color: "from-[#4077E3] to-[#1DC177]",
  },
  {
    title: "Game Developer",
    company: "Maria's Place",
    period: "Jul 2013 - Jun 2014",
    description: "Developed physical and digital therapeutic activity products, including mobile games.",
    achievements: [
      "Designed and developed 2 mobile games: Apple Catch and Smoothie Shack.",
      "Created wooden puzzles and bean bag games for therapeutic use.",
      "Focused on user experience and accessibility in game design.",
    ],
    color: "from-[#4077E3] to-[#1DC177]",
  },
  {
    title: "Software Engineer | Product Manager",
    company: "WordPress Superheroes",
    period: "Jan 2017 - Jul 2023",
    description: "Developed custom web apps for small businesses and led Agile teams as a Scrum Product Owner.",
    achievements: [
      "Designed and implemented a cloud-based solution using AWS services, reducing hosting costs by 30%.",
      "Promoted team skill development through technical education and mentorship.",
      "Improved client satisfaction by delivering projects on time and within budget.",
    ],
    color: "from-[#4077E3] to-[#1DC177]",
  },
  {
    title: "Digital Producer",
    company: "ULFBUILT",
    period: "Jan 2012 - Jun 2013",
    description:
      "Managed ad purchasing, real estate photography, and developed a home builder website with a highly creative UX.",
    achievements: [
      "Tailored ad campaigns using YP, Dex, Bing, Yahoo, and Google, increasing lead generation by 20%.",
      "Developed a visually appealing and user-friendly website for a home builder, enhancing customer engagement.",
      "Conducted indoor and outdoor real estate photography, improving property listings.",
    ],
    color: "from-[#4077E3] to-[#1DC177]",
  },
  {
    title: "Creative Director",
    company: "Prosper Studios",
    period: "Jan 2009 - Apr 2012",
    description:
      "Led mobile app and website development, managed SEO/SEM/SMO initiatives, and oversaw sales and marketing.",
    achievements: [
      "Created and led WordPress custom programming teams, delivering high-quality projects on time.",
      "Managed SEO, SEM, and SMO initiatives for SMB clients, increasing online visibility by 35%.",
      "Developed mobile apps and websites, improving client engagement and sales.",
    ],
    color: "from-[#4077E3] to-[#1DC177]",
  },
  {
    title: "Creative Director",
    company: "VailPM",
    period: "Jan 2006 - Apr 2012",
    description:
      "Created brand and marketing campaigns, planned promotional events, and managed trade show creative design.",
    achievements: [
      "Sold 3 franchises: BoulderPM, CaboPM, and HamptonsVibe, expanding the brand's reach.",
      "Designed and executed promotional events, increasing brand awareness by 40%.",
      "Produced affiliate materials and copywriting, enhancing marketing effectiveness.",
    ],
    color: "from-[#4077E3] to-[#1DC177]",
  },
  {
    title: "Brand Developer",
    company: "Vail Sitters",
    period: "Aug 2008 - Dec 2009",
    description:
      "Managed the brand lifecycle, created targeted advertising campaigns, and negotiated the sale of the company.",
    achievements: [
      "Built $88K in babysitting sales within 8 months through targeted advertising campaigns.",
      "Negotiated the successful sale of the company, achieving a profitable exit strategy.",
      "Managed ad buying for radio, TV, news, print, and internet, optimizing marketing spend.",
    ],
    color: "from-[#4077E3] to-[#1DC177]",
  },
  {
    title: "Creative Director",
    company: "Vail Pro Media",
    period: "Sep 2006 - Dec 2008",
    description:
      "Led client and team project management, spearheaded a Joomla custom programming team, and trained a luxury-oriented design team.",
    achievements: [
      "Managed marketing and sales initiatives, increasing revenue by 25%.",
      "Trained a team of designers to deliver high-quality, luxury-oriented designs.",
      "Spearheaded a Joomla custom programming team, delivering innovative solutions.",
    ],
    color: "from-[#4077E3] to-[#1DC177]",
  },
  {
    title: "Ecommerce Manager",
    company: "ScooterJones",
    period: "Jul 2005 - Jun 2008",
    description:
      "Managed eCommerce operations and marketing, developed the brand, and achieved a successful company acquisition.",
    achievements: [
      "Sold $1MM online over 3 years through effective eCommerce strategies.",
      "Managed web programming, SEO, and online ad campaigns, increasing traffic by 30%.",
      "Achieved a successful exit strategy with the acquisition of the company.",
    ],
    color: "from-[#4077E3] to-[#1DC177]",
  },
  {
    title: "Web App Developer",
    company: "Village Homes",
    period: "Jun 2002 - Jul 2006",
    description:
      "Developed rich media objects and a complete online home shopping process with thoughtful UX/UI design.",
    achievements: [
      "Built a seamless online home shopping experience, increasing customer satisfaction by 20%.",
      "Designed and implemented rich media objects, enhancing user engagement.",
      "Worked with AutoCad files to create marketing materials, improving sales conversions.",
    ],
    color: "from-[#4077E3] to-[#1DC177]",
  },
  {
    title: "Back End Developer",
    company: "Barnstorm Creative",
    period: "Jul 2003 - Jun 2005",
    description:
      "Built and led a $600K+/yr web development team, contributing to backend components and digital media projects.",
    achievements: [
      "Developed and maintained 4 web application projects, improving system efficiency by 15%.",
      "Led a 5-person digital media team, delivering high-quality projects on time.",
      "Contributed to the development of 10 backend components using JavaScript and Python.",
    ],
    color: "from-[#4077E3] to-[#1DC177]",
  },
  {
    title: "Assistant Marketing Manager",
    company: "Sierra Construction",
    period: "Jan 2003 - Jun 2003",
    description:
      "Designed and produced identity and print materials for residential communities, including luxury brochures and 3D renderings.",
    achievements: [
      "Created photorealistic 3D renderings and floor plans, improving marketing effectiveness.",
      "Worked with AutoCad files to produce high-quality marketing materials.",
      "Collaborated with master community marketing teams to enhance brand visibility.",
    ],
    color: "from-[#4077E3] to-[#1DC177]",
  },
  {
    title: "Frontend Web Programmer",
    company: "American Standard Brands",
    period: "Nov 2000 - Jun 2002",
    description: "Built and managed a multilingual website with interactive web objects and eCommerce programming.",
    achievements: [
      "Developed a 100+ page website in 7 languages, increasing global reach.",
      "Produced animations for TV commercials, enhancing brand visibility.",
      "Designed GUI for touch screens, improving user interaction.",
    ],
    color: "from-[#4077E3] to-[#1DC177]",
  },
  {
    title: "Web Programmer, API Programmer & Email Marketing",
    company: "Boulder Studios",
    period: "Jan 1999 - Dec 2000",
    description: "Developed real estate websites, eCommerce solutions, and managed email marketing campaigns.",
    achievements: [
      "Integrated multiple MLS systems, improving data accuracy and accessibility.",
      "Developed a custom ASP site with full checkout functionality, increasing sales by 20%.",
      "Managed email marketing campaigns, improving customer engagement.",
    ],
    color: "from-[#4077E3] to-[#1DC177]",
  },
]

function Experience() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#00BFFF] to-[#00FA9A] bg-clip-text text-transparent font-['Space_Grotesk']">
          Work Experience
        </h2>
        <div ref={containerRef} className="relative space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              {...experience}
              index={index}
              progress={scrollYProgress}
              totalExperiences={experiences.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ title, company, period, description, achievements, index, progress }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden">
        {/* Header Section */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-grow">
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#4077E3] to-[#1DC177] bg-clip-text text-transparent font-['Space_Grotesk'] mb-2">
                {title}
              </h3>
              <div className="flex flex-wrap gap-4 text-sm text-white/60">
                <div className="flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  <span>{company}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{period}</span>
                </div>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-[#4077E3]" />
            </div>
          </div>
          <p className="mt-4 text-white/80 text-sm">{description}</p>
        </div>

        {/* Achievements Section */}
        <div className="p-6 bg-gradient-to-br from-[#FF6B6B]/10 to-[#4ECDC4]/10">
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-4 h-4 text-[#FF6B6B]" />
            <span className="font-semibold text-sm bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent">
              Key Achievements
            </span>
          </div>
          <ul className="space-y-2">
            {achievements.map((achievement, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="flex items-start gap-2 text-sm"
              >
                <span className="text-[#FF6B6B] flex-shrink-0 mt-1">•</span>
                <span className="text-white/80">{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* Connection Line */}
      {index < experiences.length - 1 && (
        <div className="absolute left-1/2 bottom-0 w-px h-6 bg-gradient-to-b from-[#4077E3] to-[#1DC177] transform translate-y-full" />
      )}
    </motion.div>
  )
}

export default Experience

