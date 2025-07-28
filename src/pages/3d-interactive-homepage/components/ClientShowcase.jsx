import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ClientShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const clients = [
    {
      id: 1,
      name: 'Mumbai Traders Hub',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop',
      industry: 'E-commerce',
      result: '250% traffic increase',
      testimonial: 'Sumit transformed our online presence completely. Our sales have tripled since the SEO optimization.',
      person: 'Rajesh Sharma',
      position: 'Founder'
    },
    {
      id: 2,
      name: 'Digital Marketing Pro',
      logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=100&fit=crop',
      industry: 'Marketing Agency',
      result: '40% faster load times',
      testimonial: 'Professional, reliable, and delivers exceptional results. Our clients love the improved website performance.',
      person: 'Priya Patel',
      position: 'Creative Director'
    },
    {
      id: 3,
      name: 'TechStart Solutions',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop',
      industry: 'Technology',
      result: '90+ page speed score',
      testimonial: 'Outstanding technical expertise. Sumit solved complex performance issues that other developers couldn\'t.',
      person: 'Amit Kumar',
      position: 'CTO'
    },
    {
      id: 4,
      name: 'Local Business Network',
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=100&fit=crop',
      industry: 'Business Services',
      result: '180% lead generation',
      testimonial: 'The SEO strategy delivered incredible results. We\'re now ranking #1 for our target keywords.',
      person: 'Sneha Gupta',
      position: 'Marketing Manager'
    },
    {
      id: 5,
      name: 'Mumbai Restaurant Chain',
      logo: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=200&h=100&fit=crop',
      industry: 'Food & Beverage',
      result: '300% online orders',
      testimonial: 'Our online ordering system is now seamless. Customer satisfaction has improved dramatically.',
      person: 'Vikram Singh',
      position: 'Operations Head'
    },
    {
      id: 6,
      name: 'Healthcare Plus',
      logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=200&h=100&fit=crop',
      industry: 'Healthcare',
      result: '95% uptime achieved',
      testimonial: 'Reliable, secure, and fast. Our patients can now book appointments online without any issues.',
      person: 'Dr. Meera Shah',
      position: 'Director'
    }
  ];

  const seoMetrics = [
    { label: 'Avg. Traffic Increase', value: '300%', icon: 'TrendingUp' },
    { label: 'Page Speed Improvement', value: '65%', icon: 'Zap' },
    { label: 'Search Rankings', value: '#1-3', icon: 'Award' },
    { label: 'Client Retention', value: '98%', icon: 'Heart' }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, clients.length]);

  const nextClient = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
    setIsAutoPlaying(false);
  };

  const prevClient = () => {
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-surface relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
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
            className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Icon name="Users" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Client Success</span>
          </motion.div>

          <h2 className="text-3xl lg:text-5xl font-bold font-headline text-primary mb-4">
            Trusted by Mumbai's
            <span className="text-gradient-primary block">Growing Businesses</span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Real results from real businesses across various industries
          </p>
        </motion.div>

        {/* Client Carousel */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Client Testimonial Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card border border-border rounded-2xl p-8 shadow-floating relative overflow-hidden">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5"></div>
              
              <div className="relative z-10">
                {/* Client Logo */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-8 bg-surface rounded-lg overflow-hidden">
                      <Image
                        src={clients[currentIndex].logo}
                        alt={`${clients[currentIndex].name} logo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">
                        {clients[currentIndex].name}
                      </h4>
                      <p className="text-sm text-text-secondary">
                        {clients[currentIndex].industry}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                    ))}
                  </div>
                </div>

                {/* Result Badge */}
                <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-6">
                  <Icon name="TrendingUp" size={16} className="text-accent" />
                  <span className="text-sm font-medium text-accent">
                    {clients[currentIndex].result}
                  </span>
                </div>

                {/* Testimonial */}
                <blockquote className="text-lg text-text-primary mb-6 leading-relaxed">
                  "{clients[currentIndex].testimonial}"
                </blockquote>

                {/* Person Info */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {clients[currentIndex].person.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-primary">
                      {clients[currentIndex].person}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {clients[currentIndex].position}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex space-x-2">
                {clients.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-secondary w-8' : 'bg-border'
                    }`}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlaying(false);
                    }}
                  />
                ))}
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={prevClient}
                  className="w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center text-text-secondary hover:text-primary hover:bg-card transition-all duration-300"
                >
                  <Icon name="ChevronLeft" size={20} />
                </button>
                <button
                  onClick={nextClient}
                  className="w-10 h-10 bg-surface border border-border rounded-full flex items-center justify-center text-text-secondary hover:text-primary hover:bg-card transition-all duration-300"
                >
                  <Icon name="ChevronRight" size={20} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* SEO Results Dashboard */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center lg:text-left mb-8">
              <h3 className="text-2xl font-bold font-headline text-primary mb-2">
                Live SEO Results
              </h3>
              <p className="text-text-secondary">
                Real-time performance metrics from client projects
              </p>
            </div>

            {seoMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="bg-card border border-border rounded-xl p-6 shadow-floating"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                      <Icon name={metric.icon} size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary font-medium">
                        {metric.label}
                      </p>
                      <p className="text-2xl font-bold text-primary">
                        {metric.value}
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-accent">
                      <Icon name="TrendingUp" size={16} />
                      <span className="text-sm font-medium">+{Math.floor(Math.random() * 20 + 10)}%</span>
                    </div>
                    <p className="text-xs text-text-secondary">vs last month</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Live Ticker */}
            <motion.div
              className="bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 rounded-xl p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <div>
                  <p className="text-sm font-medium text-primary">
                    Live Update
                  </p>
                  <p className="text-xs text-text-secondary">
                    Client website just reached #2 ranking for "Mumbai web development"
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Client Logos Grid */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-text-secondary mb-8">
            Trusted by 50+ businesses across Mumbai and Maharashtra
          </p>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                className="w-20 h-10 bg-surface rounded-lg overflow-hidden"
                whileHover={{ scale: 1.1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientShowcase;