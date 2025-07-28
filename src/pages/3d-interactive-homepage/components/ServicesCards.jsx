import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesCards = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: 'WordPress Development',
      description: 'Custom WordPress solutions optimized for performance and SEO',
      icon: 'Globe',
      color: 'from-blue-500 to-cyan-500',
      outcomes: [
        '50% faster loading times',
        'Mobile-first responsive design',
        'SEO-optimized architecture',
        'Custom plugin development'
      ],
      projects: '45+ Projects',
      rating: '4.9/5'
    },
    {
      id: 2,
      title: 'Technical SEO',
      description: 'Comprehensive SEO audits and optimization strategies',
      icon: 'TrendingUp',
      color: 'from-green-500 to-emerald-500',
      outcomes: [
        'Average 300% traffic increase',
        'Core Web Vitals optimization',
        'Schema markup implementation',
        'Technical audit reports'
      ],
      projects: '80+ Audits',
      rating: '4.8/5'
    },
    {
      id: 3,
      title: 'Performance Optimization',
      description: 'Speed optimization and user experience enhancement',
      icon: 'Zap',
      color: 'from-orange-500 to-red-500',
      outcomes: [
        'Page speed under 2 seconds',
        'Improved conversion rates',
        'Reduced bounce rates',
        'Enhanced user experience'
      ],
      projects: '60+ Optimizations',
      rating: '4.9/5'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-surface relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
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
            className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Icon name="Briefcase" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Core Services</span>
          </motion.div>

          <h2 className="text-3xl lg:text-5xl font-bold font-headline text-primary mb-4">
            Specialized Solutions for
            <span className="text-gradient-primary block">Digital Growth</span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Three core service areas where technical expertise meets measurable business results
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onHoverStart={() => setHoveredCard(service.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {/* Card Container */}
              <motion.div
                className="relative bg-card border border-border rounded-2xl p-8 h-full shadow-floating overflow-hidden cursor-pointer"
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5
                }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Floating Icon */}
                <motion.div
                  className="relative z-10 mb-6"
                  animate={hoveredCard === service.id ? { 
                    rotateY: 360,
                    scale: 1.1
                  } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-floating mb-4`}>
                    <Icon name={service.icon} size={28} className="text-white" />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-text-secondary font-medium">
                        {service.projects}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={14} className="text-accent fill-current" />
                      <span className="text-sm font-medium text-accent">
                        {service.rating}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold font-headline text-primary mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Outcomes List */}
                  <motion.div
                    className="space-y-3 mb-6"
                    initial={{ opacity: 0, height: 0 }}
                    animate={hoveredCard === service.id ? { 
                      opacity: 1, 
                      height: "auto" 
                    } : { 
                      opacity: 0.7, 
                      height: "auto" 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.outcomes.map((outcome, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={hoveredCard === service.id ? { 
                          opacity: 1, 
                          x: 0 
                        } : { 
                          opacity: 0.8, 
                          x: 0 
                        }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-text-secondary">
                          {outcome}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="ArrowRight"
                      iconPosition="right"
                      className="w-full border-secondary text-secondary hover:bg-secondary/10 font-cta"
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </div>

                {/* Hover Effect Particles */}
                {hoveredCard === service.id && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-secondary rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          y: [0, -50]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>

              {/* 3D Shadow Effect */}
              <div 
                className="absolute inset-0 bg-primary/5 rounded-2xl transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-text-secondary mb-6">
            Ready to transform your digital presence?
          </p>
          <Button
            variant="default"
            size="lg"
            iconName="MessageCircle"
            iconPosition="left"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-cta shadow-floating hover:shadow-dramatic"
          >
            Discuss Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCards;