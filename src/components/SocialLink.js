import { motion } from "framer-motion";
import { colors } from "../styles/colors";

function SocialLink({ href, icon, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Link to ${label}`}
      whileHover={{
        scale: 1.1,
        backgroundColor: 'rgba(255, 255, 255, 0.2)'
      }}
      whileTap={{ scale: 0.95 }}
      className="p-3 rounded-full transition-colors text-2xl backdrop-blur-sm"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: colors.text.primary
      }}
    >
      {icon}
    </motion.a>
  );
}

export default SocialLink;