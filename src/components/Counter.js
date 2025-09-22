import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Counter = ({ end, duration = 2, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.3 });

  useEffect(() => {
    if (inView && !hasStarted) {
      setHasStarted(true);
      
      let startTime = null;
      const startCount = 0;
      
      const animateCounter = (timestamp) => {
        if (!startTime) startTime = timestamp;
        
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const currentCount = Math.floor(progress * (end - startCount) + startCount);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animateCounter);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(animateCounter);
    }
  }, [inView, end, duration, hasStarted]);

  const formatNumber = (number) => {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + 'M';
    } else if (number >= 1000) {
      return (number / 1000).toFixed(number >= 10000 ? 0 : 1) + 'K';
    }
    return number.toString();
  };

  return (
    <motion.span
      ref={ref}
      className="font-bold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}{formatNumber(count)}{suffix}
    </motion.span>
  );
};

export default Counter;
