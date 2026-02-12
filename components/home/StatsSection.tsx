'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaGlobe, FaPaw, FaTrophy, FaHeart } from 'react-icons/fa';

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { icon: FaPaw, value: 10000, suffix: '+', label: 'Pets Relocated', color: 'text-primary-600' },
    { icon: FaGlobe, value: 150, suffix: '+', label: 'Countries Served', color: 'text-accent-500' },
    { icon: FaTrophy, value: 20, suffix: '+', label: 'Years Experience', color: 'text-green-600' },
    { icon: FaHeart, value: 100, suffix: '%', label: 'Client Satisfaction', color: 'text-red-500' },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center text-white"
            >
              <div className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm p-6 rounded-full mb-4">
                <stat.icon className="text-5xl" />
              </div>
              <Counter target={stat.value} isInView={isInView} />
              <span className="text-4xl md:text-5xl font-bold">{stat.suffix}</span>
              <p className="text-lg md:text-xl text-white/90 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Counter Component for Animated Numbers
const Counter = ({ target, isInView }: { target: number; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, isInView]);

  return <span className="text-4xl md:text-5xl font-bold">{count.toLocaleString()}</span>;
};

export default StatsSection;