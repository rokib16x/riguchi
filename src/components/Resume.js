import { motion } from 'framer-motion';
import { FileText, Download, Eye } from 'lucide-react';

const resumes = [
  {
    title: 'Full Stack Developer',
    description: 'Technical focus on web development and system architecture',
    file: '/resume-developer.pdf'
  },
  {
    title: 'Product Manager',
    description: 'Emphasis on product strategy and team leadership',
    file: '/resume-product.pdf'
  },
  {
    title: 'Security Engineer',
    description: 'Focus on cybersecurity and compliance',
    file: '/resume-security.pdf'
  }
];

function Resume() {
  return (
    <section id="resume" className="py-20 px-6 relative overflow-hidden">
      {/* Circuit Board Pattern Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 28h-6v-4h6v4zm-6-12h-6v4h6v-4zm-6 6h-6v4h6v-4zm-6 12h-6v4h6v-4zm-6-6h-6v4h6v-4zm-6 12h-6v4h6v-4zm-6-6h-6v4h6v-4zm36-14h6v4h-6v-4zm-36 0h6v4h-6v-4zm36 26h6v4h-6v-4zm-36 0h6v4h-6v-4z' fill='%239C92AC' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}
      />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center text-white"
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
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20"
            >
              <h3 className="text-2xl font-bold mb-2 text-purple-400">{resume.title}</h3>
              <p className="text-gray-400 mb-6">{resume.description}</p>
              
              <div className="flex gap-4">
                <motion.a
                  href={resume.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  View
                </motion.a>
                
                <motion.a
                  href={resume.file}
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
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

