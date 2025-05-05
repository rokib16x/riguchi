import { useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";
import {
  Calendar,
  Building2,
  Award,
  Wifi,
  CheckCircle2,
} from "lucide-react";

const experiences = [
  {
    title: "Application Security Engineer",
    company: "HomeBuilder.app",
    period: "Feb 2023 - Feb 2024",
    description:
      "Led security initiatives for web applications serving builders, architects, and contractors while implementing secure SDLC practices.",
    achievements: [
      "Implemented comprehensive security controls and vulnerability management processes, reducing security incidents by 60%.",
      "Conducted threat modeling and security architecture reviews for all new features, ensuring security-by-design principles.",
      "Established secure coding guidelines and performed regular code reviews, identifying and remediating critical vulnerabilities.",
    ],
    color: "from-[#4077E3] to-[#1DC177]",
  },
  {
    title: "Head of IT & Security",
    company: "Maria's Place",
    period: "Jan 2021 - Sep 2024",
    description:
      "Led IT security strategy and implementation, focusing on secure software development, cloud infrastructure security, and compliance.",
    achievements: [
      "Implemented DevSecOps practices and security automation in CI/CD pipelines, reducing security vulnerabilities by 40%.",
      "Designed and deployed secure AWS architecture with proper IAM controls, encryption, and network segmentation.",
      "Conducted regular security assessments and penetration testing, establishing a vulnerability management program.",
    ],
    color: "from-[#4077E3] to-[#1DC177]",
  },
  {
    title: "Project Manager and Security Lead",
    company: "WP Superheroes",
    period: "May 2017 - Jun 2023",
    description:
      "Led cross-functional team in developing secure web applications with focus on security hardening and API security.",
    achievements: [
      "Implemented comprehensive WordPress security hardening measures, reducing successful attacks by 95%.",
      "Established secure API integration standards and authentication protocols for third-party services.",
      "Conducted security training for development teams, improving secure coding practices across the organization.",
    ],
    color: "from-[#4077E3] to-[#1DC177]",
  },
  {
    title: "Web Application Developer & Security Specialist",
    company: "Maria's Place",
    period: "Jul 2014 - Dec 2020",
    description:
      "Developed secure membership-based website with 20K+ users, focusing on data protection and secure payment processing.",
    achievements: [
      "Implemented secure authentication and authorization mechanisms, protecting sensitive user data and preventing breaches.",
      "Migrated DevOps to Private GitHub with enhanced security controls and secure CI/CD practices.",
      "Conducted regular security code reviews and SAST/DAST testing to identify and remediate vulnerabilities.",
    ],
    color: "from-[#4077E3] to-[#1DC177]",
  },
  {
    title: "Game Developer",
    company: "Maria's Place",
    period: "Jul 2013 - Jun 2014",
    description:
      "Developed physical and digital therapeutic activity products, including mobile games.",
    achievements: [
      "Designed and developed 2 mobile games: Apple Catch and Smoothie Shack.",
      "Created wooden puzzles and bean bag games for therapeutic use.",
      "Focused on user experience and accessibility in game design.",
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
    description:
      "Built and managed a multilingual website with interactive web objects and eCommerce programming.",
    achievements: [
      "Developed a 100+ page website in 7 languages, increasing global reach.",
      "Produced animations for TV commercials, enhancing brand visibility.",
      "Designed GUI for touch screens, improving user interaction.",
    ],
    color: "from-[#4077E3] to-[#1DC177]",
  },
  {
    title: "Web Programmer",
    company: "Boulder Studios",
    period: "Jan 1999 - Dec 2000",
    description:
      "Developed real estate websites, eCommerce solutions, and managed email marketing campaigns.",
    achievements: [
      "Integrated multiple MLS systems, improving data accuracy and accessibility.",
      "Developed a custom ASP site with full checkout functionality, increasing sales by 20%.",
      "Managed email marketing campaigns, improving customer engagement.",
    ],
    color: "from-[#4077E3] to-[#1DC177]",
  },
];

function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });


  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#FFD700] to-[#FF1493] bg-clip-text text-transparent font-['Space_Grotesk']">
          Work Experience
        </h2>
        <div className="relative space-y-6" ref={containerRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 mb-8"
          >
            <div className="flex items-center gap-2 text-gray-200 text-base">
              <Wifi className="w-6 h-6 text-[#FFA500]" />
              <span className="font-semibold text-lg">Preferred:</span>
              <span>Remote or hybrid opportunities.</span>
            </div>
          </motion.div>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              {...experience}
              index={index}
              totalExperiences={experiences.length}
            />
          ))}

        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ title, company, period, description, achievements }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.1,
    rootMargin: "0px 0px -10% 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden">
        {/* Header Section */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#FFD700] to-[#FF1493] bg-clip-text text-transparent font-['Space_Grotesk']">
                {title}
              </h3>
              <div className="flex flex-wrap gap-4 text-base text-gray-300">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  <span className="font-semibold text-[#FFA500]">
                    {company}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{period}</span>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-gray-200 text-base">{description}</p>
        </div>

        {/* Achievements Section */}
        <div className="p-6 bg-gradient-to-br from-green-500/10 to-yellow-500/10">
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-5 h-5 text-[#FFD700]" />
            <span className="font-semibold text-base text-[#FFA500]">
              Key Achievements
            </span>
          </div>
          <ul className="space-y-2">
            {achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-3 text-base">
                <CheckCircle2 className="w-5 h-5 text-[#FFA500]" />
                <span className="text-gray-200">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
