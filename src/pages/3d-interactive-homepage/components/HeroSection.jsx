import React, { useState, useEffect, useRef } from 'react';
// Simple typewriter effect for hero headline
const useTypewriter = (words, speed = 80, pause = 1200) => {
  const [displayed, setDisplayed] = useState(words[0]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    let timeout;
    let word = words[index];
    let i = 0;
    const type = () => {
      setDisplayed(word.slice(0, i));
      if (i <= word.length) {
        timeout = setTimeout(() => {
          i++;
          type();
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setIndex((prev) => (prev + 1) % words.length);
        }, pause);
      }
    };
    type();
    return () => clearTimeout(timeout);
  }, [index, words, speed, pause]);
  return displayed;
};
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const floatingElements = [
    { id: 1, code: 'React.js', x: 10, y: 20, delay: 0 },
  { id: 2, code: 'SEO++', x: 85, y: 15, delay: 0.2 },
  { id: 3, code: 'WordPress', x: 15, y: 80, delay: 0.4 },
  { id: 4, code: 'Next.js', x: 80, y: 75, delay: 0.6 },
  { id: 5, code: 'Bubble.io', x: 50, y: 10, delay: 0.8 },
  { id: 6, code: 'FlutterFlow', x: 90, y: 45, delay: 1.0 }
  ];

  const metrics = [
    { label: 'Websites Optimized', value: '150+', icon: 'Globe' },
    { label: 'Avg Traffic Increase', value: '300%', icon: 'TrendingUp' },
    { label: 'Client Satisfaction', value: '98%', icon: 'Star' },
    { label: 'Experience', value: '5 Years', icon: 'Clock' }
  ];

  // Typewriter for interactive headline
  const typewriterText = useTypewriter([
    'SEO-Driven Development',
    'React Native & Flutter Apps',
    'Shopify & WordPress Solutions',
    'Performance. UX. Results.'
  ]);

  // Mouse-following highlight
  const highlightStyle = {
    left: `${mousePosition.x * 100}%`,
    top: `${mousePosition.y * 100}%`,
    opacity: 0.15,
    transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-background overflow-hidden flex items-center"
    >
      {/* Mouse-following highlight */}
  <div className="absolute z-10 w-80 h-80 bg-gradient-to-br from-accent/40 to-primary/10 rounded-full blur-3xl transition-all duration-300" style={highlightStyle}></div>
      {/* Animated Sparkles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent rounded-full shadow-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.6
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10"></div>
        <div 
          className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        ></div>
      </div>

      {/* Floating Code Elements - luxury style */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute hidden lg:block"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: isVisible ? 0.85 : 0, 
            scale: isVisible ? 1.08 : 0,
            rotate: [0, 360]
          }}
          transition={{ 
            delay: element.delay,
            duration: 0.8,
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
        >
          <div className="bg-gradient-to-br from-[#FFD700]/80 via-card to-accent border-2 border-[#FFD700] rounded-xl px-4 py-2 shadow-[0_0_32px_8px_rgba(255,215,0,0.15)]">
            <code className="text-sm font-mono text-[#FFD700] font-bold drop-shadow">
              {element.code}
            </code>
          </div>
        </motion.div>
      ))}

      {/* Particle System */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-secondary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Luxury Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#FFD700]/80 to-accent/40 border border-[#FFD700] rounded-full px-6 py-3 mb-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Icon name="Sparkles" size={20} className="text-[#FFD700] animate-pulse" />
              <span className="text-base font-bold text-[#FFD700] drop-shadow">Luxury Web Experiences</span>
            </motion.div>

            {/* Interactive Main Heading with shimmer */}
            <motion.h1
              className="text-4xl lg:text-6xl xl:text-7xl font-bold font-headline mb-6 min-h-[4.5rem] relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="block bg-gradient-to-r from-[#FFD700] via-accent to-primary bg-clip-text text-transparent animate-shimmer">{typewriterText}<span className="animate-pulse">|</span></span>
              <style>{`
                @keyframes shimmer {
                  0% { background-position: -500px 0; }
                  100% { background-position: 500px 0; }
                }
                .animate-shimmer {
                  background-size: 200% 100%;
                  animation: shimmer 2.5s linear infinite;
                }
              `}</style>
            </motion.h1>

            {/* Animated Description */}
            <motion.p
              className="text-lg lg:text-xl text-text-secondary mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="inline-block animate-fade-in-up">
                <b>Crafting luxury digital experiences</b> for visionary brands.<br/>
                <span className="text-[#FFD700] font-semibold">No-Code Platforms: Bubble.io, FlutterFlow</span>, <span className="text-accent font-semibold">React Native</span>, <span className="text-primary font-semibold">Flutter</span>, <span className="text-secondary font-semibold">Shopify</span>, <span className="text-primary font-semibold">WordPress</span> &amp; more.<br/>
                <span className="text-success font-semibold">Performance. UX. Results. Exclusivity.</span>
              </span>
            </motion.p>

            {/* Animated CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                variant="default"
                size="lg"
                iconName="ArrowRight"
                iconPosition="right"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-cta shadow-floating hover:shadow-dramatic transition-all duration-normal animate-bounce"
                onClick={() => {
                  const form = document.querySelector('#footer-contact-form');
                  if (form) form.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Start Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="BarChart3"
                iconPosition="left"
                className="font-cta border-secondary text-secondary hover:bg-secondary/10 animate-pulse"
                onClick={() => {
                  window.location.href = 'mailto:sumitg7@zohomail.in?subject=Free SEO Audit Request';
                }}
              >
                Free SEO Audit
              </Button>
            </motion.div>

            {/* Metrics */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  className="text-center lg:text-left"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <Icon 
                      name={metric.icon} 
                      size={20} 
                      className="text-secondary mr-2" 
                    />
                    <span className="text-2xl lg:text-3xl font-bold text-primary">
                      {metric.value}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary font-medium">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* 3D Card Container */}
            <div className="relative">
              {/* Main Profile Card */}
              <motion.div
                className="relative bg-gradient-to-br from-[#FFD700]/30 via-card to-surface border-4 border-[#FFD700] rounded-2xl p-8 shadow-dramatic overflow-hidden"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 10 - 5}deg) rotateX(${mousePosition.y * 10 - 5}deg)`
                }}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/10 to-accent/10"></div>

                {/* Personal Brand Name with shimmer */}
                <div className="relative z-20 flex flex-col items-center justify-center mb-6">
                  <span className="text-3xl lg:text-4xl font-bold font-headline text-[#FFD700] drop-shadow animate-shimmer">Sumit Gupta</span>
                </div>

            {/* Experience Highlight */}
            <div className="relative z-10 flex flex-col items-center justify-center mb-4">
              <div className="flex items-center bg-accent/20 px-4 py-2 rounded-full shadow-floating mb-2">
                <Icon name="Clock" size={20} className="text-accent mr-2" />
                <span className="text-lg font-bold text-accent">5 Years Experience</span>
              </div>
            </div>
            {/* Tech Stack Icons */}
            <div className="relative z-10 flex justify-center space-x-4">
              {['Globe', 'Code2', 'Database', 'Zap'].map((icon, index) => (
                <motion.div
                  key={icon}
                  className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center shadow-subtle"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Icon name={icon} size={18} className="text-primary" />
                </motion.div>
              ))}
            </div>
              </motion.div>

              {/* Floating Elements Around Card */}
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Icon name="Sparkles" size={24} className="text-secondary" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -right-4 w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Icon name="Trophy" size={20} className="text-accent" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;