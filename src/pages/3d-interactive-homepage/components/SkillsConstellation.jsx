import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillsConstellation = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const skills = [
    {
      id: 1,
      name: 'React.js',
      category: 'Frontend',
      proficiency: 95,
      icon: 'Code2',
      color: 'from-blue-400 to-blue-600',
      position: { x: 20, y: 30 },
      connections: [2, 4, 7]
    },
    {
      id: 2,
      name: 'Next.js',
      category: 'Framework',
      proficiency: 90,
      icon: 'Layers',
      color: 'from-gray-600 to-gray-800',
      position: { x: 45, y: 20 },
      connections: [1, 3, 8]
    },
    {
      id: 3,
      name: 'WordPress',
      category: 'CMS',
      proficiency: 98,
      icon: 'Globe',
      color: 'from-blue-500 to-blue-700',
      position: { x: 70, y: 35 },
      connections: [2, 5, 6]
    },
    {
      id: 4,
      name: 'JavaScript',
      category: 'Language',
      proficiency: 92,
      icon: 'Code',
      color: 'from-yellow-400 to-yellow-600',
      position: { x: 15, y: 65 },
      connections: [1, 5, 9]
    },
    {
      id: 5,
      name: 'PHP',
      category: 'Backend',
      proficiency: 88,
      icon: 'Server',
      color: 'from-purple-500 to-purple-700',
      position: { x: 50, y: 70 },
      connections: [3, 4, 6]
    },
    {
      id: 6,
      name: 'MySQL',
      category: 'Database',
      proficiency: 85,
      icon: 'Database',
      color: 'from-orange-400 to-orange-600',
      position: { x: 80, y: 65 },
      connections: [3, 5, 10]
    },
    {
      id: 7,
      name: 'Google Analytics',
      category: 'Analytics',
      proficiency: 93,
      icon: 'BarChart3',
      color: 'from-green-400 to-green-600',
      position: { x: 25, y: 50 },
      connections: [1, 8, 9]
    },
    {
      id: 8,
      name: 'SEO Tools',
      category: 'Marketing',
      proficiency: 96,
      icon: 'TrendingUp',
      color: 'from-red-400 to-red-600',
      position: { x: 60, y: 45 },
      connections: [2, 7, 10]
    },
    {
      id: 9,
      name: 'Git/GitHub',
      category: 'Version Control',
      proficiency: 90,
      icon: 'GitBranch',
      color: 'from-gray-500 to-gray-700',
      position: { x: 35, y: 80 },
      connections: [4, 7, 10]
    },
    {
      id: 10,
      name: 'Performance',
      category: 'Optimization',
      proficiency: 94,
      icon: 'Zap',
      color: 'from-cyan-400 to-cyan-600',
      position: { x: 75, y: 80 },
      connections: [6, 8, 9]
    }
  ];

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

  const getConnectionPath = (skill1, skill2) => {
    const x1 = skill1.position.x;
    const y1 = skill1.position.y;
    const x2 = skill2.position.x;
    const y2 = skill2.position.y;
    
    return `M ${x1} ${y1} Q ${(x1 + x2) / 2} ${(y1 + y2) / 2 - 10} ${x2} ${y2}`;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-surface to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Icon name="Sparkles" size={16} className="text-secondary" />
            <span className="text-sm font-medium text-secondary">Technical Expertise</span>
          </motion.div>

          <h2 className="text-3xl lg:text-5xl font-bold font-headline text-primary mb-4">
            Skills
            <span className="text-gradient-primary block">Constellation</span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Interactive visualization of technical skills and their interconnected relationships
          </p>
        </motion.div>

        {/* Skills Constellation */}
        <div className="relative">
          {/* Constellation Container */}
          <motion.div
            className="relative w-full h-96 lg:h-[500px] mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Connection Lines SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-secondary)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              
              {skills.map((skill) =>
                skill.connections.map((connectionId) => {
                  const connectedSkill = skills.find(s => s.id === connectionId);
                  if (!connectedSkill) return null;
                  
                  return (
                    <motion.path
                      key={`${skill.id}-${connectionId}`}
                      d={getConnectionPath(skill, connectedSkill)}
                      stroke="url(#connectionGradient)"
                      strokeWidth={activeSkill === skill.id || activeSkill === connectionId ? "2" : "1"}
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  );
                })
              )}
            </svg>

            {/* Skill Nodes */}
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{
                  left: `${skill.position.x}%`,
                  top: `${skill.position.y}%`,
                  transform: `translate(-50%, -50%) translate(${(mousePosition.x - 50) * 0.5}px, ${(mousePosition.y - 50) * 0.3}px)`
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setActiveSkill(skill.id)}
                onHoverEnd={() => setActiveSkill(null)}
                whileHover={{ scale: 1.2, zIndex: 10 }}
              >
                {/* Skill Node */}
                <motion.div
                  className={`relative w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${skill.color} rounded-full flex items-center justify-center shadow-floating`}
                  animate={activeSkill === skill.id ? {
                    boxShadow: "0 0 30px rgba(0, 217, 255, 0.5)",
                    scale: 1.1
                  } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <Icon name={skill.icon} size={24} className="text-white" />
                  
                  {/* Proficiency Ring */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      fill="none"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="2"
                    />
                    <motion.circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      fill="none"
                      stroke="rgba(255,255,255,0.8)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: skill.proficiency / 100 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      style={{
                        pathLength: skill.proficiency / 100
                      }}
                    />
                  </svg>
                </motion.div>

                {/* Skill Info Tooltip */}
                <motion.div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-card border border-border rounded-lg p-3 shadow-floating min-w-max"
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={activeSkill === skill.id ? {
                    opacity: 1,
                    y: 0,
                    scale: 1
                  } : {
                    opacity: 0,
                    y: 10,
                    scale: 0.8
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ pointerEvents: activeSkill === skill.id ? 'auto' : 'none' }}
                >
                  <div className="text-center">
                    <h4 className="font-bold text-primary text-sm mb-1">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-text-secondary mb-2">
                      {skill.category}
                    </p>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-12 bg-surface rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          className="h-full bg-secondary rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 0.5 }}
                        />
                      </div>
                      <span className="text-xs font-medium text-secondary">
                        {skill.proficiency}%
                      </span>
                    </div>
                  </div>
                  
                  {/* Tooltip Arrow */}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-card border-l border-t border-border rotate-45"></div>
                </motion.div>

                {/* Floating Particles */}
                {activeSkill === skill.id && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          left: '50%',
                          top: '50%'
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          x: [0, (Math.random() - 0.5) * 100],
                          y: [0, (Math.random() - 0.5) * 100]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Legend */}
          <motion.div
            className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {['Frontend', 'Backend', 'CMS', 'Analytics', 'Tools'].map((category, index) => (
              <div key={category} className="text-center">
                <div className="w-3 h-3 bg-secondary rounded-full mx-auto mb-2"></div>
                <span className="text-sm text-text-secondary font-medium">
                  {category}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsConstellation;