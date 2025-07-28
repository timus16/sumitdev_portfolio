import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillConstellation = ({ activeSkills, allSkills }) => {
  const constellationRef = useRef(null);
  const isInView = useInView(constellationRef, { threshold: 0.2 });
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = {
    frontend: {
      name: 'Frontend',
      icon: 'Monitor',
      color: 'from-blue-500 to-cyan-400',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap']
    },
    backend: {
      name: 'Backend',
      icon: 'Server',
      color: 'from-green-500 to-emerald-400',
      skills: ['PHP', 'WordPress', 'MySQL', 'Node.js', 'REST APIs']
    },
    seo: {
      name: 'SEO & Analytics',
      icon: 'TrendingUp',
      color: 'from-purple-500 to-pink-400',
      skills: ['Google Analytics', 'Search Console', 'Technical SEO', 'Page Speed', 'Schema Markup']
    },
    tools: {
      name: 'Tools & Platforms',
      icon: 'Settings',
      color: 'from-orange-500 to-red-400',
      skills: ['Git', 'Figma', 'Photoshop', 'cPanel', 'Google Tag Manager']
    }
  };

  const constellationVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const skillNodeVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotateY: -180
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    active: {
      scale: 1.2,
      rotateY: 360,
      boxShadow: "0 0 20px rgba(0, 217, 255, 0.6)",
      transition: { duration: 0.3 }
    }
  };

  const getSkillLevel = (skill) => {
    const levels = {
      'React': 90, 'JavaScript': 95, 'WordPress': 98, 'PHP': 85,
      'HTML5': 95, 'CSS3': 90, 'Technical SEO': 92, 'Google Analytics': 88,
      'MySQL': 80, 'Tailwind CSS': 85, 'Bootstrap': 90, 'Git': 85,
      'Figma': 75, 'Photoshop': 80, 'Page Speed': 90, 'Schema Markup': 85
    };
    return levels[skill] || 70;
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 hidden xl:block">
      <motion.div
        ref={constellationRef}
        className="relative w-64 h-96"
        variants={constellationVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl backdrop-blur-sm border border-secondary/20"></div>
        
        {/* Title */}
        <div className="absolute top-4 left-4 right-4">
          <h3 className="text-lg font-bold font-headline text-primary mb-1">
            Skills Constellation
          </h3>
          <p className="text-xs text-text-secondary">
            Illuminated by experience
          </p>
        </div>

        {/* Skill Categories */}
        <div className="absolute inset-0 pt-16 pb-4 px-4">
          {Object.entries(skillCategories).map(([key, category], categoryIndex) => (
            <div key={key} className="mb-6">
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-6 h-6 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center`}>
                  <Icon name={category.icon} size={12} className="text-white" />
                </div>
                <span className="text-sm font-medium text-primary">
                  {category.name}
                </span>
              </div>

              {/* Skills in Category */}
              <div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill, skillIndex) => {
                  const isActive = activeSkills.includes(skill);
                  const skillLevel = getSkillLevel(skill);
                  
                  return (
                    <motion.div
                      key={skill}
                      variants={skillNodeVariants}
                      animate={isActive ? "active" : "visible"}
                      className={`relative p-2 rounded-lg border transition-all duration-normal cursor-pointer ${
                        isActive 
                          ? 'bg-secondary/20 border-secondary shadow-floating' 
                          : 'bg-surface/50 border-border hover:border-secondary/40'
                      }`}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      whileHover={{ scale: 1.05 }}
                    >
                      {/* Skill Name */}
                      <div className="text-xs font-medium text-primary mb-1 truncate">
                        {skill}
                      </div>
                      
                      {/* Skill Level Bar */}
                      <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ 
                            width: isActive ? `${skillLevel}%` : '0%'
                          }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 
                          }}
                        />
                      </div>

                      {/* Skill Level Tooltip */}
                      {hoveredSkill === skill && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs px-2 py-1 rounded whitespace-nowrap z-30"
                        >
                          {skillLevel}% Proficiency
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-primary"></div>
                        </motion.div>
                      )}

                      {/* Active Glow Effect */}
                      {isActive && (
                        <div className="absolute inset-0 bg-secondary/10 rounded-lg animate-pulse"></div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-secondary rounded-full"
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${15 + (i * 8)}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {activeSkills.slice(0, 3).map((_, i) => (
            <motion.line
              key={i}
              x1={`${30 + i * 20}%`}
              y1={`${40 + i * 15}%`}
              x2={`${50 + i * 15}%`}
              y2={`${60 + i * 10}%`}
              stroke="url(#skillGradient)"
              strokeWidth="1"
              opacity="0.4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: i * 0.3 }}
            />
          ))}
          <defs>
            <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-secondary)" />
              <stop offset="100%" stopColor="var(--color-accent)" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
};

export default SkillConstellation;