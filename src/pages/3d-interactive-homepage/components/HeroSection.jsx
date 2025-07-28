import React, { useState, useEffect, useRef } from 'react';
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
    { id: 5, code: 'Analytics', x: 50, y: 10, delay: 0.8 },
    { id: 6, code: 'Performance', x: 90, y: 45, delay: 1.0 }
  ];

  const metrics = [
    { label: 'Websites Optimized', value: '150+', icon: 'Globe' },
    { label: 'Avg Traffic Increase', value: '300%', icon: 'TrendingUp' },
    { label: 'Client Satisfaction', value: '98%', icon: 'Star' },
    { label: 'Years Experience', value: '5+', icon: 'Clock' }
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-background via-surface to-muted overflow-hidden flex items-center"
    >
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

      {/* Floating Code Elements */}
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
            opacity: isVisible ? 0.7 : 0, 
            scale: isVisible ? 1 : 0,
            rotate: [0, 360]
          }}
          transition={{ 
            delay: element.delay,
            duration: 0.8,
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
        >
          <div className="bg-card/80 backdrop-blur-sm border border-secondary/30 rounded-lg px-3 py-2 shadow-floating">
            <code className="text-sm font-mono text-secondary font-medium">
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
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-accent">Available for Projects</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl lg:text-6xl xl:text-7xl font-bold font-headline mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-primary">SEO-Driven</span>
              <br />
              <span className="text-gradient-primary">Development</span>
              <br />
              <span className="text-text-secondary text-2xl lg:text-3xl xl:text-4xl font-normal">
                That Delivers Measurable Results
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg lg:text-xl text-text-secondary mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Mumbai-based web developer specializing in WordPress optimization, 
              technical SEO, and performance enhancement. Transforming websites 
              into search engine magnets and user experience champions.
            </motion.p>

            {/* CTA Buttons */}
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
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-cta shadow-floating hover:shadow-dramatic transition-all duration-normal"
              >
                Start Your Project
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="BarChart3"
                iconPosition="left"
                className="font-cta border-secondary text-secondary hover:bg-secondary/10"
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
                className="relative bg-card border border-border rounded-2xl p-8 shadow-dramatic overflow-hidden"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 10 - 5}deg) rotateX(${mousePosition.y * 10 - 5}deg)`
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5"></div>
                
                {/* Profile Image */}
                <div className="relative z-10 text-center mb-6">
                  <div className="relative inline-block">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-secondary/30 shadow-floating">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                        alt="Sumit Gupta - Web Developer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-floating">
                      <Icon name="Code" size={16} className="text-accent-foreground" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mt-4 mb-2">
                    Sumit Gupta
                  </h3>
                  <p className="text-text-secondary font-medium">
                    Full-Stack Developer & SEO Specialist
                  </p>
                  <div className="flex items-center justify-center mt-2">
                    <Icon name="MapPin" size={14} className="text-secondary mr-1" />
                    <span className="text-sm text-text-secondary">Mumbai, India</span>
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

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="flex flex-col items-center text-text-secondary"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <Icon name="ChevronDown" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;