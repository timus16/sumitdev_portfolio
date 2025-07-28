import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillConstellation = ({ onSkillSelect, selectedSkill }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [animationPhase, setAnimationPhase] = useState(0);

  const skillCategories = [
    {
      id: 'frontend',
      name: 'Frontend Development',
      color: 'from-secondary to-accent',
      position: { x: 20, y: 25 },
      skills: [
        { id: 'react', name: 'React', level: 95, years: 4, icon: 'Code2' },
        { id: 'nextjs', name: 'Next.js', level: 90, years: 3, icon: 'Zap' },
        { id: 'javascript', name: 'JavaScript', level: 92, years: 5, icon: 'FileCode' },
        { id: 'typescript', name: 'TypeScript', level: 85, years: 2, icon: 'FileType' },
        { id: 'tailwind', name: 'Tailwind CSS', level: 88, years: 3, icon: 'Palette' },
        { id: 'html5', name: 'HTML5', level: 95, years: 6, icon: 'Globe' }
      ]
    },
    {
      id: 'backend',
      name: 'Backend Systems',
      color: 'from-primary to-secondary',
      position: { x: 75, y: 20 },
      skills: [
        { id: 'nodejs', name: 'Node.js', level: 87, years: 3, icon: 'Server' },
        { id: 'php', name: 'PHP', level: 90, years: 4, icon: 'Database' },
        { id: 'mysql', name: 'MySQL', level: 85, years: 4, icon: 'HardDrive' },
        { id: 'mongodb', name: 'MongoDB', level: 80, years: 2, icon: 'Layers' },
        { id: 'api', name: 'REST APIs', level: 88, years: 3, icon: 'Link' }
      ]
    },
    {
      id: 'seo',
      name: 'SEO Optimization',
      color: 'from-accent to-warning',
      position: { x: 25, y: 70 },
      skills: [
        { id: 'technical-seo', name: 'Technical SEO', level: 93, years: 4, icon: 'Search' },
        { id: 'core-vitals', name: 'Core Web Vitals', level: 90, years: 3, icon: 'Gauge' },
        { id: 'schema', name: 'Schema Markup', level: 88, years: 3, icon: 'Tag' },
        { id: 'analytics', name: 'Google Analytics', level: 85, years: 4, icon: 'BarChart3' },
        { id: 'pagespeed', name: 'PageSpeed Optimization', level: 92, years: 4, icon: 'Zap' }
      ]
    },
    {
      id: 'wordpress',
      name: 'WordPress Mastery',
      color: 'from-success to-secondary',
      position: { x: 70, y: 75 },
      skills: [
        { id: 'theme-dev', name: 'Theme Development', level: 90, years: 4, icon: 'Brush' },
        { id: 'plugin-dev', name: 'Plugin Development', level: 85, years: 3, icon: 'Puzzle' },
        { id: 'wp-optimization', name: 'WP Optimization', level: 88, years: 4, icon: 'Settings' },
        { id: 'gutenberg', name: 'Gutenberg Blocks', level: 82, years: 2, icon: 'Grid3x3' }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getSkillPosition = (categoryIndex, skillIndex, category) => {
    const centerX = category.position.x;
    const centerY = category.position.y;
    const radius = 15;
    const angle = (skillIndex / category.skills.length) * 2 * Math.PI + (animationPhase * 0.1);
    
    return {
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius
    };
  };

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl overflow-hidden border border-border">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" className="text-primary/20">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Constellation Container */}
      <div className="relative w-full h-full">
        {skillCategories.map((category, categoryIndex) => (
          <div key={category.id} className="absolute">
            {/* Category Core */}
            <motion.div
              className={`absolute w-16 h-16 rounded-full bg-gradient-to-br ${category.color} shadow-floating flex items-center justify-center cursor-pointer`}
              style={{
                left: `${category.position.x}%`,
                top: `${category.position.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              whileHover={{ scale: 1.1 }}
              animate={{ 
                rotate: animationPhase * 90,
                boxShadow: hoveredSkill === category.id ? 
                  '0 0 30px rgba(0, 217, 255, 0.5)' : 
                  '0 4px 12px rgba(10, 22, 40, 0.1)'
              }}
              onHoverStart={() => setHoveredSkill(category.id)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <span className="text-white font-bold text-xs text-center leading-tight">
                {category.name.split(' ')[0]}
              </span>
            </motion.div>

            {/* Category Label */}
            <motion.div
              className="absolute whitespace-nowrap text-sm font-medium text-text-primary bg-card/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-border shadow-subtle"
              style={{
                left: `${category.position.x}%`,
                top: `${category.position.y - 15}%`,
                transform: 'translate(-50%, -50%)'
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: hoveredSkill === category.id ? 1 : 0, y: hoveredSkill === category.id ? 0 : 10 }}
            >
              {category.name}
            </motion.div>

            {/* Skill Nodes */}
            {category.skills.map((skill, skillIndex) => {
              const position = getSkillPosition(categoryIndex, skillIndex, category);
              const isSelected = selectedSkill?.id === skill.id;
              const isHovered = hoveredSkill === skill.id;

              return (
                <motion.div
                  key={skill.id}
                  className={`absolute w-8 h-8 rounded-full cursor-pointer flex items-center justify-center transition-all duration-normal ${
                    isSelected ? 'bg-accent shadow-glow' : 'bg-card border-2 border-border hover:border-secondary'
                  }`}
                  style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  whileHover={{ scale: 1.2 }}
                  animate={{ 
                    scale: isSelected ? 1.1 : 1,
                    boxShadow: isHovered ? '0 0 20px rgba(0, 217, 255, 0.3)' : 'none'
                  }}
                  onClick={() => onSkillSelect(skill)}
                  onHoverStart={() => setHoveredSkill(skill.id)}
                  onHoverEnd={() => setHoveredSkill(null)}
                >
                  <Icon 
                    name={skill.icon} 
                    size={16} 
                    className={isSelected ? 'text-accent-foreground' : 'text-text-secondary'} 
                  />
                </motion.div>
              );
            })}

            {/* Connection Lines */}
            <svg className="absolute inset-0 pointer-events-none" style={{ width: '100%', height: '100%' }}>
              {category.skills.map((skill, skillIndex) => {
                const position = getSkillPosition(categoryIndex, skillIndex, category);
                const centerX = category.position.x;
                const centerY = category.position.y;
                
                return (
                  <motion.line
                    key={`line-${skill.id}`}
                    x1={`${centerX}%`}
                    y1={`${centerY}%`}
                    x2={`${position.x}%`}
                    y2={`${position.y}%`}
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-border"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: 1, 
                      opacity: hoveredSkill === category.id || hoveredSkill === skill.id ? 0.6 : 0.2 
                    }}
                    transition={{ duration: 0.5 }}
                  />
                );
              })}
            </svg>
          </div>
        ))}

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-secondary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 justify-center">
        {skillCategories.map((category) => (
          <div key={category.id} className="flex items-center space-x-2 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-lg border border-border">
            <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${category.color}`}></div>
            <span className="text-xs font-medium text-text-secondary">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillConstellation;