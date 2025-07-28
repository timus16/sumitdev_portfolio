import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TimelineBackground = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax transforms
  const cityY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const cloudsY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const particlesY = useTransform(scrollYProgress, [0, 1], [0, -300]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-muted"></div>

      {/* Mumbai Cityscape Silhouette */}
      <motion.div
        style={{ y: cityY }}
        className="absolute bottom-0 left-0 right-0 h-64 opacity-10"
      >
        <svg
          viewBox="0 0 1200 300"
          className="w-full h-full"
          preserveAspectRatio="xMidYEnd slice"
        >
          <defs>
            <linearGradient id="cityGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* City Buildings */}
          <rect x="0" y="200" width="80" height="100" fill="url(#cityGradient)" />
          <rect x="90" y="150" width="60" height="150" fill="url(#cityGradient)" />
          <rect x="160" y="180" width="70" height="120" fill="url(#cityGradient)" />
          <rect x="240" y="120" width="90" height="180" fill="url(#cityGradient)" />
          <rect x="340" y="160" width="50" height="140" fill="url(#cityGradient)" />
          <rect x="400" y="100" width="80" height="200" fill="url(#cityGradient)" />
          <rect x="490" y="140" width="60" height="160" fill="url(#cityGradient)" />
          <rect x="560" y="110" width="70" height="190" fill="url(#cityGradient)" />
          <rect x="640" y="170" width="55" height="130" fill="url(#cityGradient)" />
          <rect x="705" y="130" width="75" height="170" fill="url(#cityGradient)" />
          <rect x="790" y="160" width="65" height="140" fill="url(#cityGradient)" />
          <rect x="865" y="120" width="80" height="180" fill="url(#cityGradient)" />
          <rect x="955" y="180" width="50" height="120" fill="url(#cityGradient)" />
          <rect x="1015" y="140" width="70" height="160" fill="url(#cityGradient)" />
          <rect x="1095" y="190" width="60" height="110" fill="url(#cityGradient)" />
          
          {/* Building Details */}
          {[...Array(15)].map((_, i) => (
            <g key={i}>
              <rect 
                x={i * 80 + 10} 
                y={120 + (i % 3) * 30} 
                width="3" 
                height="8" 
                fill="var(--color-accent)" 
                opacity="0.6"
              />
              <rect 
                x={i * 80 + 20} 
                y={130 + (i % 4) * 20} 
                width="3" 
                height="6" 
                fill="var(--color-secondary)" 
                opacity="0.4"
              />
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Floating Clouds */}
      <motion.div
        style={{ y: cloudsY }}
        className="absolute top-20 left-0 right-0 h-40 opacity-20"
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-16 bg-gradient-to-r from-secondary/30 to-accent/20 rounded-full blur-sm"
            style={{
              left: `${i * 20}%`,
              top: `${i % 2 === 0 ? '20%' : '60%'}`,
            }}
            animate={{
              x: [0, 50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Animated Particles */}
      <motion.div
        style={{ y: particlesY }}
        className="absolute inset-0"
      >
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-secondary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Interactive Light Rays */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full bg-gradient-to-b from-transparent via-secondary/20 to-transparent"
            style={{
              left: `${20 + i * 30}%`,
              transform: `translateX(${mousePosition.x * 0.1}px)`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0">
        {['<div>', '</html>', 'CSS', 'JS', 'PHP', 'SEO'].map((code, i) => (
          <motion.div
            key={code}
            className="absolute text-primary/20 font-mono text-sm font-medium"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 5, -5, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {code}
          </motion.div>
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-background to-transparent"></div>
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-background to-transparent"></div>
    </div>
  );
};

export default TimelineBackground;