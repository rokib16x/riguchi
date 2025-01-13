import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Certifications() {
  const certifications = [
    {
      title: "Professional Scrum Master (PSM)",
      issuer: "Scrum.org",
      date: "Mar 2024",
    },
    {
      title: "Professional Scrum Product Owner (PSPO)",
      issuer: "Scrum.org",
      date: "Apr 2024",
    },
    {
      title: "Certified in Cybersecurity (CC)",
      issuer: "ISC2",
      date: "Sept 2023",
    },
    {
      title: "Cybersecurity Professional",
      issuer: "Cal State Long Beach",
      date: "Aug 2023",
    },
    {
      title: "Security+ Certified",
      issuer: "CompTIA",
      date: "May 2024",
    },
    {
      title: "Cybersecurity, Identity & Compliance",
      issuer: "Microsoft",
      date: "Dec 2023",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-12 text-center text-green-400"
      >
        Certifications
      </motion.h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((certification, index) => (
          <CertificationCard key={index} {...certification} index={index} />
        ))}
      </div>
    </section>
  );
}

function CertificationCard({ title, issuer, date, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors"
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{issuer}</p>
      <p className="text-gray-400">{date}</p>
    </motion.div>
  );
}

export default Certifications;