import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const SplashScreen = ({ onAnimationComplete }) => {
  const [showText, setShowText] = useState('');
  const [fillIndex, setFillIndex] = useState(0);
  const name = 'SAQIB REHMAN';

  useEffect(() => {
    let textTimer;
    let colorFillTimer;

    if (showText.length < name.length) {
      textTimer = setTimeout(() => {
        setShowText((prev) => name.slice(0, prev.length + 1));
      }, 300);
    } else {
      colorFillTimer = setInterval(() => {
        setFillIndex((prev) => (prev < name.length ? prev + 1 : prev));
      }, 200);
    }

    const completeTimer = setTimeout(onAnimationComplete, 5000);

    return () => {
      clearTimeout(textTimer);
      clearInterval(colorFillTimer);
      clearTimeout(completeTimer);
    };
  }, [showText, name, onAnimationComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 4, duration: 1 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="text-white font-bold tracking-wider text-xl sm:text-2xl md:text-3xl lg:text-4xl px-4 sm:px-6 md:px-8"
      >
        {name.split('').map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
            className={`px-1 ${
              index < fillIndex ? 'text-white' : 'text-gray-400'
            }`}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;