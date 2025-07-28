import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const TechStackVisualization = () => {
  const [selectedStack, setSelectedStack] = useState('frontend');
  const [animationPhase, setAnimationPhase] = useState(0);

  const techStacks = {
    frontend: {
      name: 'Frontend Development',
      color: 'from-secondary to-accent',
      icon: 'Monitor',
      technologies: [
        { name: 'React', level: 95, icon: 'Code2', connections: ['nextjs', 'typescript', 'tailwind'] },
        { name: 'Next.js', level: 90, icon: 'Zap', connections: ['react', 'vercel', 'api'] },
        { name: 'TypeScript', level: 85, icon: 'FileType', connections: ['react', 'nodejs'] },
        { name: 'Tailwind CSS', level: 88, icon: 'Palette', connections: ['react', 'responsive'] },
        { name: 'JavaScript', level: 92, icon: 'FileCode', connections: ['react', 'nodejs'] },
        { name: 'HTML5/CSS3', level: 95, icon: 'Globe', connections: ['responsive', 'seo'] }
      ]
    },
    backend: {
      name: 'Backend Systems',
      color: 'from-primary to-secondary',
      icon: 'Server',
      technologies: [
        { name: 'Node.js', level: 87, icon: 'Server', connections: ['express', 'mongodb', 'api'] },
        { name: 'PHP', level: 90, icon: 'Database', connections: ['mysql', 'wordpress', 'laravel'] },
        { name: 'MySQL', level: 85, icon: 'HardDrive', connections: ['php', 'optimization'] },
        { name: 'MongoDB', level: 80, icon: 'Layers', connections: ['nodejs', 'api'] },
        { name: 'REST APIs', level: 88, icon: 'Link', connections: ['nodejs', 'frontend'] },
        { name: 'WordPress', level: 92, icon: 'Wordpress', connections: ['php', 'mysql', 'seo'] }
      ]
    },
    tools: {
      name: 'Development Tools',
      color: 'from-accent to-warning',
      icon: 'Wrench',
      technologies: [
        { name: 'Git/GitHub', level: 90, icon: 'GitBranch', connections: ['deployment', 'collaboration'] },
        { name: 'VS Code', level: 95, icon: 'Code', connections: ['extensions', 'debugging'] },
        { name: 'Docker', level: 75, icon: 'Package', connections: ['deployment', 'nodejs'] },
        { name: 'Webpack/Vite', level: 82, icon: 'Zap', connections: ['react', 'optimization'] },
        { name: 'Chrome DevTools', level: 88, icon: 'Bug', connections: ['debugging', 'performance'] },
        { name: 'Figma', level: 80, icon: 'Figma', connections: ['design', 'prototyping'] }
      ]
    },
    seo: {
      name: 'SEO & Analytics',
      color: 'from-success to-secondary',
      icon: 'TrendingUp',
      technologies: [
        { name: 'Google Analytics', level: 85, icon: 'BarChart3', connections: ['tracking', 'insights'] },
        { name: 'Search Console', level: 88, icon: 'Search', connections: ['indexing', 'performance'] },
        { name: 'PageSpeed Insights', level: 90, icon: 'Gauge', connections: ['optimization', 'core-vitals'] },
        { name: 'Schema Markup', level: 87, icon: 'Tag', connections: ['structured-data', 'seo'] },
        { name: 'Technical SEO', level: 93, icon: 'Settings', connections: ['optimization', 'crawling'] },
        { name: 'Local SEO', level: 89, icon: 'MapPin', connections: ['mumbai', 'business'] }
      ]
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const getPositionInCircle = (index, total, radius = 120) => {
    const angle = (index / total) * 2 * Math.PI + (animationPhase * 0.01);
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  };

  const currentStack = techStacks[selectedStack];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-headline text-text-primary mb-4">
          Technology Stack Integration
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Explore how different technologies work together in real-world projects, showing the interconnected nature of modern web development.
        </p>
      </div>

      {/* Stack Selection */}
      <div className="flex flex-wrap justify-center gap-4">
        {Object.entries(techStacks).map(([key, stack]) => (
          <motion.button
            key={key}
            onClick={() => setSelectedStack(key)}
            className={`flex items-center space-x-3 px-6 py-4 rounded-xl border transition-all duration-normal ${
              selectedStack === key
                ? 'bg-gradient-to-r from-primary/10 to-secondary/10 border-primary text-primary' :'bg-card border-border text-text-secondary hover:border-secondary hover:text-text-primary'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stack.color} flex items-center justify-center`}>
              <Icon name={stack.icon} size={20} className="text-white" />
            </div>
            <span className="font-semibold">{stack.name}</span>
          </motion.button>
        ))}
      </div>

      {/* Visualization */}
      <div className="bg-card border border-border rounded-2xl p-8">
        <div className="relative w-full h-96 flex items-center justify-center">
          {/* Central Hub */}
          <motion.div
            className={`absolute w-20 h-20 rounded-full bg-gradient-to-br ${currentStack.color} flex items-center justify-center shadow-floating z-10`}
            animate={{ rotate: animationPhase }}
            transition={{ duration: 0.1, ease: "linear" }}
          >
            <Icon name={currentStack.icon} size={32} className="text-white" />
          </motion.div>

          {/* Technology Nodes */}
          {currentStack.technologies.map((tech, index) => {
            const position = getPositionInCircle(index, currentStack.technologies.length);
            
            return (
              <motion.div
                key={tech.name}
                className="absolute group cursor-pointer"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`
                }}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Connection Line */}
                <svg className="absolute inset-0 pointer-events-none" style={{ width: '400px', height: '400px', left: '-200px', top: '-200px' }}>
                  <line
                    x1="200"
                    y1="200"
                    x2={200 + position.x}
                    y2={200 + position.y}
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-border group-hover:text-secondary transition-colors duration-normal"
                    strokeDasharray="5,5"
                  />
                </svg>

                {/* Technology Node */}
                <div className="w-16 h-16 bg-card border-2 border-border rounded-xl flex items-center justify-center shadow-subtle group-hover:border-secondary group-hover:shadow-floating transition-all duration-normal">
                  <Icon name={tech.icon} size={24} className="text-text-secondary group-hover:text-secondary" />
                </div>

                {/* Technology Info */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-normal">
                  <div className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-floating">
                    <div className="font-semibold">{tech.name}</div>
                    <div className="text-xs opacity-80">{tech.level}% proficiency</div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-secondary/40 rounded-full"
              style={{
                left: `${30 + Math.random() * 40}%`,
                top: `${30 + Math.random() * 40}%`
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.2, 0.8, 0.2]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Technology List */}
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentStack.technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="bg-surface/50 rounded-xl p-4 border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                  <Icon name={tech.icon} size={16} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-text-primary">{tech.name}</div>
                  <div className="text-sm text-text-secondary">{tech.level}% proficiency</div>
                </div>
              </div>
              
              <div className="w-full bg-border rounded-full h-2 mb-3">
                <motion.div
                  className="bg-gradient-to-r from-secondary to-accent h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${tech.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>

              <div className="flex flex-wrap gap-1">
                {tech.connections.slice(0, 3).map((connection) => (
                  <span key={connection} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {connection}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Integration Examples */}
      <div className="bg-surface/50 rounded-2xl p-8 border border-border">
        <h3 className="text-xl font-semibold text-text-primary mb-6">Real Project Integration</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-text-primary">E-commerce Platform Stack</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'MongoDB', 'Stripe API'].map((tech) => (
                <span key={tech} className="bg-card border border-border px-3 py-1 rounded-lg text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-sm text-text-secondary">
              Full-stack e-commerce solution with server-side rendering, payment integration, and advanced SEO optimization.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-text-primary">WordPress + React Hybrid</h4>
            <div className="flex flex-wrap gap-2">
              {['WordPress', 'PHP', 'MySQL', 'React', 'REST API', 'Google Analytics'].map((tech) => (
                <span key={tech} className="bg-card border border-border px-3 py-1 rounded-lg text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-sm text-text-secondary">
              Headless WordPress with React frontend for optimal performance and content management flexibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStackVisualization;