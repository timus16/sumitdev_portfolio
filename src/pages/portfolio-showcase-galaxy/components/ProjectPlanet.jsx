import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';



const ProjectPlanet = ({ project, isActive, onSelect, position, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const planetRef = useRef(null);

  const planetVariants = {
    inactive: {
      scale: 0.8,
      opacity: 0.6,
      rotateY: 0,
      z: 0,
    },
    active: {
      scale: 1.2,
      opacity: 1,
      rotateY: 360,
      z: 50,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    },
    hover: {
      scale: 0.9,
      opacity: 0.8,
      rotateY: 15,
      transition: {
        duration: 0.3
      }
    }
  };

  const orbitVariants = {
    orbit: {
      rotate: 360,
      transition: {
        duration: 20 + (index * 5),
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div
      ref={planetRef}
      className="absolute"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)'
      }}
      variants={orbitVariants}
      animate="orbit"
    >
      <motion.div
        className={`relative cursor-pointer ${isActive ? 'z-20' : 'z-10'}`}
        variants={planetVariants}
        animate={isActive ? 'active' : isHovered ? 'hover' : 'inactive'}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => onSelect(project)}
        style={{
          width: isActive ? '120px' : '80px',
          height: isActive ? '120px' : '80px'
        }}
      >
        {/* Planet Core */}
        <div className={`w-full h-full rounded-full relative overflow-hidden shadow-dramatic ${
          isActive ? 'ring-4 ring-secondary ring-opacity-50' : ''
        }`}>
          {/* Planet Surface */}
          <div 
            className="w-full h-full rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-90"
            style={{
              background: `linear-gradient(135deg, ${project.primaryColor}, ${project.secondaryColor})`
            }}
          />
          
          {/* Planet Texture Overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/10 to-transparent" />
          
          {/* Project Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon 
              name={project.icon} 
              size={isActive ? 32 : 24} 
              className="text-white drop-shadow-lg"
            />
          </div>
          
          {/* Glow Effect */}
          <div 
            className={`absolute inset-0 rounded-full transition-opacity duration-300 ${
              isActive || isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              boxShadow: `0 0 30px ${project.primaryColor}40, 0 0 60px ${project.secondaryColor}20`
            }}
          />
        </div>

        {/* Planet Ring */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}>
          <div 
            className="absolute top-1/2 left-1/2 w-32 h-1 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
            style={{
              background: `linear-gradient(90deg, transparent, ${project.secondaryColor}, transparent)`,
              transform: 'translate(-50%, -50%) rotateZ(15deg)'
            }}
          />
        </div>

        {/* Project Label */}
        <AnimatePresence>
          {(isHovered || isActive) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              <div className="bg-card/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-border shadow-floating">
                <p className="text-xs font-medium text-text-primary">{project.title}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Orbital Particles */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-secondary rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    rotate: 360,
                    x: Math.cos((i * 60) * Math.PI / 180) * 70,
                    y: Math.sin((i * 60) * Math.PI / 180) * 70,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.1
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ProjectPlanet;