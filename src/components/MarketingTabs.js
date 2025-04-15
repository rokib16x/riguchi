import { useState } from 'react';
import { motion } from 'framer-motion';
const MarketingTabs = ({ skills, getBarColor }) => {
  const [activeTab, setActiveTab] = useState('visual_production');

  const tabs = [
    { id: 'visual_production', label: '🎥 Visual & Audio Production' },
    { id: 'design_ux', label: '🎨 Design & User Experience' },
    { id: 'digital_marketing', label: '📈 Digital Marketing' },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg text-base md:text-lg font-semibold transition-all duration-300 font-['Inter'] focus:outline-none ${
              activeTab === tab.id
                ? 'bg-gradient-to-r from-[#FFD700] to-[#FF9400] text-gray-800'
                : 'bg-white/10 text-gray-200 hover:bg-white/20'
            }`}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills[activeTab].map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="group bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 hover:border-pink-500/50 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between h-full"
          >
            <div className="flex flex-col items-center text-center">
              <div className={`text-3xl ${getBarColor('marketing').iconColor} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-200 mb-2 font-['Space_Grotesk']">
                {skill.name}
              </h3>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                className={`h-full bg-gradient-to-r ${getBarColor('marketing').gradient}`}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MarketingTabs;