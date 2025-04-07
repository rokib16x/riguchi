import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Certifications() {
  const certifications = [
    {
      title: "Professional Scrum Master (PSM)",
      issuer: "Scrum.org",
      date: "Mar 2024",
      color: "from-[#FFD700] to-[#FF9400]"
    },
    {
      title: "Professional Scrum Product Owner (PSPO)",
      issuer: "Scrum.org",
      date: "Apr 2024",
      color: "from-[#FFD700] to-[#FF9400]"
    },

    {
      title: "Cybersecurity Professional",
      issuer: "Cal State Long Beach",
      date: "Aug 2023",
      color: "from-[#FFD700] to-[#FF9400]"
    },
    {
      title: "Security+ Certified",
      issuer: "CompTIA",
      date: "May 2024",
      color: "from-[#FFD700] to-[#FF9400]"
    },
    {
      title: "Cybersecurity, Identity & Compliance",
      issuer: "Microsoft",
      date: "Dec 2023",
      color: "from-[#FFD700] to-[#FF9400]"
    },
    {
      title: "Certified in Cybersecurity (CC)",
      issuer: "ISC2",
      date: "Sept 2023",
      color: "from-[#FFD700] to-[#FF9400]"
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#FFD700] to-[#FF1493] bg-clip-text text-transparent font-['Space_Grotesk']"
        >
          Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <CertificationCard key={index} {...certification} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificationCard({ title, issuer, date, color, index }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-white/5 backdrop-blur-sm p-6 rounded-lg hover:bg-white/10 transition-colors duration-300 border border-transparent hover:border-${color.split(' ')[1]} group`}
    >
      <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${color} bg-clip-text text-transparent font-['Space_Grotesk']`}>{title}</h3>
      <p className="text-white/80 font-['Inter']">{issuer}</p>
      <p className="text-white/60 font-['Inter']">{date}</p>
      <div className={`w-0 group-hover:w-full h-1 bg-gradient-to-r ${color} transition-all duration-300 mt-4`} />
    </motion.div>
  );
}

export default Certifications;
