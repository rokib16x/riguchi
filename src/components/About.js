import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-center text-purple-400"
        >
          About Me
        </motion.h2>

        {/* Content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Introduction */}
          <p className="text-xl text-gray-300 leading-relaxed">
            I'm <span className="text-purple-400 font-semibold">Ryan Iguchi</span>, a <span className="text-purple-400 font-semibold">Product Manager</span> and <span className="text-purple-400 font-semibold">Software Engineer</span> with over a decade of experience bridging technical expertise and business strategy. I've been passionate about technology since an early age, and I've turned that passion into a successful career.
          </p>

          {/* Journey */}
          <p className="text-xl text-gray-300 leading-relaxed">
            My journey in tech started with building projects using no-code tools back in 2010. From there, I dove into programming, exploring various languages and technologies. This exploration led me to work in diverse roles, from web development to leading IT departments.
          </p>

          {/* Specializations */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-purple-400">What I Specialize In</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <li className="flex items-start space-x-4">
                <span className="text-purple-400 text-2xl">✔</span>
                <span className="text-xl text-gray-300">Full product lifecycle management</span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-purple-400 text-2xl">✔</span>
                <span className="text-xl text-gray-300">Agile methodologies (Certified Scrum Master and Product Owner)</span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-purple-400 text-2xl">✔</span>
                <span className="text-xl text-gray-300">Web development (React, Vue.js, Node.js)</span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-purple-400 text-2xl">✔</span>
                <span className="text-xl text-gray-300">DevOps and cloud architecture</span>
              </li>
              <li className="flex items-start space-x-4">
                <span className="text-purple-400 text-2xl">✔</span>
                <span className="text-xl text-gray-300">Cybersecurity (CISSP Candidate)</span>
              </li>
            </ul>
          </div>

          {/* Closing Paragraph */}
          <p className="text-xl text-gray-300 leading-relaxed">
            I'm deeply interested in building innovative solutions that solve real-world problems. My focus is on creating user-centric products while ensuring they're secure, scalable, and aligned with business objectives.
          </p>
          <p className="text-xl text-gray-300 leading-relaxed">
            When I'm not coding or managing products, I enjoy staying updated with the latest tech trends, contributing to open-source projects, and mentoring aspiring developers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

