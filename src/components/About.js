import { motion } from "framer-motion"
import { Diamond, Shield, Code, Users, Globe } from "lucide-react" 
import { Link } from "react-scroll"

const variants = {
 hidden: { opacity: 0, y: 20 },
 visible: { opacity: 1, y: 0 },
}
const transition = { duration: 0.5 }

const ListItem = ({ icon, text, delay }) => (
 <motion.li
   className="flex items-start space-x-2"
   variants={variants}
   initial="hidden"
   whileInView="visible"
   viewport={{ once: true, amount: 0.1 }}
   transition={{ duration: 0.5, delay }}
 >
   <span className="mt-0.5 flex-shrink-0">{icon}</span>
   <span className="text-base md:text-lg font-normal text-gray-200 font-inter">{text}</span>
 </motion.li>
)

function About() {
 return (
   <section id="about" className="py-16 px-4 md:px-6 font-poppins">
     <div className="max-w-6xl mx-auto">
       <motion.h2
         variants={variants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
         transition={transition}
         className="text-4xl md:text-5xl font-bold mb-10 text-center font-space-grotesk bg-gradient-to-r from-[#FF00FF] to-[#FFA500] bg-clip-text text-transparent"
       >
         About Me
       </motion.h2>

       <motion.div
         variants={variants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.1 }}
         transition={{ ...transition, delay: 0.2 }}
         className="space-y-12 text-base md:text-lg text-gray-200 font-inter"
       >
         <p className="leading-snug text-center text-base md:text-lg font-inter px-4 md:px-8">
           I'm{" "}
           <span
             className="font-bold text-xl md:text-2xl relative group transition-all duration-300 font-poppins"
             style={{
               background: "linear-gradient(to right, #FFA500, #FFD700)",
               WebkitBackgroundClip: "text",
               backgroundClip: "text",
               color: "transparent",
             }}
           >
             Ryan Iguchi
             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF6B6B] to-[#FFD700] group-hover:w-full transition-all duration-300" />
           </span>
           , a{" "}
           <Link
             to="skills"
             smooth={true}
             duration={500}
             offset={-100}
             onClick={() => {
               localStorage.setItem("activeSkillCategory", "management")
             }}
             className="font-bold text-xl md:text-2xl relative group transition-all duration-300 font-poppins cursor-pointer"
             style={{
               background: "linear-gradient(to right, #4077E3, #1DC177)",
               WebkitBackgroundClip: "text",
               backgroundClip: "text",
               color: "transparent",
             }}
           >
             Technical Product Manager
             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF6B6B] to-[#FFD700] group-hover:w-full transition-all duration-300" />
           </Link>{" "}
           and{" "}
           <Link
             to="skills"
             smooth={true}
             duration={500}
             offset={-100}
             onClick={() => {
               localStorage.setItem("activeSkillCategory", "technical")
             }}
             className="font-bold text-xl md:text-2xl relative group transition-all duration-300 font-poppins cursor-pointer"
             style={{
               background: "linear-gradient(to right, #4077E3, #1DC177)",
               WebkitBackgroundClip: "text",
               backgroundClip: "text",
               color: "transparent",
             }}
           >
             Software Engineer
             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF6B6B] to-[#FFD700] group-hover:w-full transition-all duration-300" />
           </Link>{" "}
           with over a decade of experience bridging technical expertise and business strategy. My journey began in
           2010, experimenting with no-code solutions before diving deep into software development. This evolution has
           led me through roles spanning web development, IT leadership, and product management, giving me a unique
           perspective on building technology solutions.
         </p>

         <div className="space-y-8">
           <h4 className="text-xl md:text-2xl font-semibold text-center font-space-grotesk bg-gradient-to-r from-[#FF00FF] to-[#FFA500] bg-clip-text text-transparent mb-4">
             What I Specialize In
           </h4>
           <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {[
               "Technical Development: Full-stack engineering with Svelte, React, and Node.js",
               "Infrastructure & Security: DevOps, cloud architecture, and information security (CISSP Candidate)",
               "Project Leadership: Product lifecycle management and strategic planning",
               "Agile Practices: Certified Scrum Master (PSM) and Product Owner (PSPO)",
             ].map((item, index) => (
               <ListItem
                 key={index}
                 icon={<Diamond size={16} className="flex-shrink-0 text-[#FF6B6B]" />}
                 text={item}
                 delay={0.3 + index * 0.1}
               />
             ))}
           </ul>
         </div>

         <div className="space-y-8">
           <h4 className="text-xl md:text-2xl font-semibold text-center font-space-grotesk bg-gradient-to-r from-[#FF00FF] to-[#FFA500] bg-clip-text text-transparent mb-4">
             Beyond my professional work:
           </h4>
           <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
               <ListItem key={index} icon={item.icon} text={item.text} delay={0.3 + index * 0.1} />
             ))}
           </ul>
         </div>

         <p className="leading-snug text-center font-inter text-base md:text-lg px-4 md:px-8">
           Currently, I'm focused on building innovative solutions in the construction technology space, where I'm
           excited to tackle new challenges that push the boundaries of what's possible.
         </p>
       </motion.div>
     </div>
   </section>
 )
}

export default About