import { motion } from "framer-motion";
import { Download, Eye } from "lucide-react";

const resumes = [
  {
    title: "Software Engineer",
    description: "Technical focus on web development and system architecture",
    file: "/RYAN IGUCHI_Software_Engineer.pdf",
  },
  {
    title: "Product Manager",
    description: "Emphasis on product strategy and team leadership",
    file: "/RYAN IGUCHI_Product_Manager.pdf",
  },
  {
    title: "IT Manager",
    description:
      "Specializing in cybersecurity and enterprise IT infrastructure",
    file: "/RYAN IGUCHI_IT Support.pdf",
  },
];

function Resume() {
  return (
    <section id="resume" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[#FFD700] to-[#FF1493] bg-clip-text text-transparent font-['Space_Grotesk']"
        >
          My Resumes
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resumes.map((resume, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-[#FFD700] to-[#FF9400] bg-clip-text text-transparent font-['Space_Grotesk']">
                {resume.title}
              </h3>
              <p className="text-gray-200 mb-6 font-['Inter']">
                {resume.description}
              </p>
              <div className="flex gap-4">
                {/* View Button */}
                <motion.a
                  href={resume.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gradient-to-r from-[#F5F5F5] to-[#E0E0E0] hover:from-[#E0E0E0] hover:to-[#BDBDBD] text-black px-4 py-2 rounded-lg transition-all duration-300 font-['Inter']"
                >
                  <Eye className="w-4 h-4" />
                  View
                </motion.a>

                {/* Download Button */}
                <motion.a
                  href={resume.file}
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors font-['Inter']"
                >
                  <Download className="w-4 h-4" />
                  Download
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
