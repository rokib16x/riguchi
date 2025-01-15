import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingAnimation = () => {
  const [sequence, setSequence] = React.useState(1);
  const name = [
    { letter: "R", isInitial: true },
    { letter: "y", isInitial: false },
    { letter: "a", isInitial: false },
    { letter: "n", isInitial: false },
    { letter: " ", isInitial: false, isSpace: true },
    { letter: "I", isInitial: true },
    { letter: "g", isInitial: false },
    { letter: "u", isInitial: false },
    { letter: "c", isInitial: false },
    { letter: "h", isInitial: false },
    { letter: "i", isInitial: false },
  ];

  React.useEffect(() => {
    const timers = [
      setTimeout(() => setSequence(2), 3000),
      setTimeout(() => setSequence(3), 5000),
    ];
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_#8B2FBE_0%,_#1E2F97_100%)]">
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(139, 47, 190, 0.5) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(30, 47, 151, 0.5) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center">
        <AnimatePresence mode="wait">
          {sequence === 1 && (
            <motion.div
              className="flex flex-col items-center"
              exit={{ scale: 1.2, opacity: 0 }}
            >
              <div className="flex items-baseline">
                {name.map((char, index) => (
                  <motion.span
                    key={index}
                    className={`font-sans ${
                      char.isSpace
                        ? "mx-4"
                        : "text-7xl font-bold bg-gradient-to-r from-[#4077E3] to-[#1DC177] text-transparent bg-clip-text"
                    }`}
                    style={{
                      display: "inline-block",
                      textShadow: "none",
                      letterSpacing: "-0.03em",
                    }}
                    initial={{
                      opacity: 0,
                      y: char.isInitial ? -50 : 50,
                      scale: char.isInitial ? 1.2 : 1,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      type: "spring",
                      damping: 12,
                    }}
                  >
                    {char.letter}
                  </motion.span>
                ))}
              </div>

              {/* Title */}
              <motion.div
                className="text-xl text-white/80 mt-6 tracking-wide font-serif"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                Product Manager & Software Engineer
              </motion.div>
            </motion.div>
          )}

          {sequence >= 2 && (
            <motion.div
              className="flex flex-col items-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <div className="flex items-baseline">
                {name.map((char, index) => (
                  <motion.span
                    key={index}
                    className={`font-sans ${
                      char.isSpace
                        ? "mx-4"
                        : "text-7xl font-bold bg-gradient-to-r from-[#4077E3] to-[#1DC177] text-transparent bg-clip-text"
                    }`}
                    style={{
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {char.letter}
                  </motion.span>
                ))}
              </div>

              <motion.div
                className="text-xl text-white/80 mt-6 tracking-wide font-serif"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Product Manager & Software Engineer
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dotted Loading Animation */}
        <div className="absolute bottom-10 flex gap-2">
          {[1, 2, 3, 4, 5].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-gradient-to-r from-[#4077E3] to-[#1DC177] rounded-full"
              animate={{
                y: ["0%", "-100%", "0%"],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;