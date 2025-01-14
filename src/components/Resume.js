import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye } from 'lucide-react';

const resumes = [
  {
    title: 'Software Engineer',
    description: 'Technical focus on web development and system architecture',
    file: '/RYAN IGUCHI_Software_Engineer.pdf'
  },
  {
    title: 'Product Manager',
    description: 'Emphasis on product strategy and team leadership',
    file: '/RYAN IGUCHI_Product_Manager.pdf'
  },
  {
    title: 'IT Support',
    description: 'Focus on IT and compliance',
    file: '/RYAN IGUCHI_IT Support.pdf'
  }
];

function Resume() {
  return (
    <section id="resume" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center text-tertiary"
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
              className="bg-tertiary/10 backdrop-blur-sm p-6 rounded-lg border border-primary/20"
            >
              <h3 className="text-2xl font-bold mb-2 text-primary">{resume.title}</h3>
              <p className="text-secondary mb-6">{resume.description}</p>
              
              <div className="flex gap-4">
                <motion.a
                  href={resume.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-primary hover:bg-primary/80 text-background px-4 py-2 rounded-lg transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  View
                </motion.a>
                
                <motion.a
                  href={resume.file}
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-tertiary/20 hover:bg-tertiary/30 text-tertiary px-4 py-2 rounded-lg transition-colors"
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

