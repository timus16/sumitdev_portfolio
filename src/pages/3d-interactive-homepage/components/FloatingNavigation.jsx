import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const FloatingNavigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/3d-interactive-homepage', icon: 'Home', color: 'from-blue-500 to-blue-600' },
    { name: 'Experience', path: '/experience-journey-timeline', icon: 'Clock', color: 'from-green-500 to-green-600' },
    { name: 'Skills', path: '/skills-expertise-hub', icon: 'Code', color: 'from-purple-500 to-purple-600' },
    { name: 'Portfolio', path: '/portfolio-showcase-galaxy', icon: 'Briefcase', color: 'from-orange-500 to-orange-600' },
    { name: 'Results', path: '/seo-results-dashboard', icon: 'TrendingUp', color: 'from-red-500 to-red-600' },
    { name: 'Services', path: '/services-collaboration-hub', icon: 'Users', color: 'from-cyan-500 to-cyan-600' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      {/* Main Navigation Orb */}
      <motion.div
        className="relative"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {/* Progress Ring */}
        <svg className="absolute inset-0 w-16 h-16 -rotate-90">
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="rgba(0, 217, 255, 0.2)"
            strokeWidth="2"
          />
          <motion.circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="var(--color-secondary)"
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              pathLength: scrollProgress / 100
            }}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: scrollProgress / 100 }}
            transition={{ duration: 0.1 }}
          />
        </svg>

        {/* Main Orb Button */}
        <motion.button
          className="relative w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full shadow-floating flex items-center justify-center backdrop-blur-sm border border-secondary/30"
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={isExpanded ? { rotate: 45 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Icon 
            name={isExpanded ? "X" : "Menu"} 
            size={24} 
            className="text-white" 
          />
          
          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-accent rounded-full"
                style={{
                  left: '50%',
                  top: '50%'
                }}
                animate={{
                  x: [0, Math.cos(i * 60 * Math.PI / 180) * 30],
                  y: [0, Math.sin(i * 60 * Math.PI / 180) * 30],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
        </motion.button>

        {/* Navigation Menu */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="absolute right-20 top-1/2 transform -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-card/95 backdrop-blur-brand border border-border rounded-2xl p-4 shadow-dramatic min-w-max">
                <div className="space-y-2">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                          isActivePath(item.path)
                            ? 'bg-primary text-primary-foreground shadow-subtle'
                            : 'text-text-primary hover:bg-surface'
                        }`}
                        onClick={() => setIsExpanded(false)}
                      >
                        <div className={`w-8 h-8 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center shadow-subtle group-hover:scale-110 transition-transform duration-300`}>
                          <Icon 
                            name={item.icon} 
                            size={16} 
                            className="text-white" 
                          />
                        </div>
                        <span className="font-medium font-body">
                          {item.name}
                        </span>
                        
                        {isActivePath(item.path) && (
                          <motion.div
                            className="w-2 h-2 bg-accent rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="border-t border-border mt-4 pt-4 space-y-2">
                  <motion.button
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-text-primary hover:bg-surface transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-accent to-warning rounded-lg flex items-center justify-center shadow-subtle group-hover:scale-110 transition-transform duration-300">
                      <Icon name="Download" size={16} className="text-white" />
                    </div>
                    <span className="font-medium font-body text-sm">
                      Download Resume
                    </span>
                  </motion.button>

                  <motion.button
                    className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-text-primary hover:bg-surface transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center shadow-subtle group-hover:scale-110 transition-transform duration-300">
                      <Icon name="MessageCircle" size={16} className="text-white" />
                    </div>
                    <span className="font-medium font-body text-sm">
                      Quick Contact
                    </span>
                  </motion.button>
                </div>

                {/* Arrow Pointer */}
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 -translate-x-1">
                  <div className="w-3 h-3 bg-card border-r border-b border-border rotate-45"></div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll to Top Button */}
        <motion.button
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center text-text-secondary hover:text-primary hover:bg-card transition-all duration-300 shadow-floating"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: scrollProgress > 20 ? 1 : 0,
            y: scrollProgress > 20 ? 0 : 20
          }}
          transition={{ duration: 0.3 }}
        >
          <Icon name="ArrowUp" size={18} />
        </motion.button>

        {/* Availability Indicator */}
        <motion.div
          className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full border-2 border-background shadow-subtle"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-full h-full bg-accent rounded-full animate-pulse"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FloatingNavigation;