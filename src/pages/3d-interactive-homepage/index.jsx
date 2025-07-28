import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ServicesCards from './components/ServicesCards';
import SkillsConstellation from './components/SkillsConstellation';
import ClientShowcase from './components/ClientShowcase';
import FloatingNavigation from './components/FloatingNavigation';

const InteractiveHomepage = () => {
  useEffect(() => {
    // Set page title
    document.title = 'SumitDev - SEO-Driven Development | Mumbai Web Developer';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Mumbai-based web developer specializing in WordPress optimization, technical SEO, and performance enhancement. 150+ websites optimized with 300% average traffic increase.');
    }

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* Services Cards Section */}
        <ServicesCards />

        {/* Skills Constellation Section */}
        <SkillsConstellation />

        {/* Client Showcase Section */}
        <ClientShowcase />

        {/* Floating Navigation */}
        <FloatingNavigation />

        {/* Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,217,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,217,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px] animate-pulse-slow"></div>
          </div>

          {/* Floating Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-t from-primary to-primary/90 text-primary-foreground py-12 mt-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Brand */}
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center shadow-floating">
                  <span className="text-white font-bold text-lg font-headline">S</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-headline">SumitDev</h3>
                  <p className="text-sm text-primary-foreground/80">SEO-Driven Development</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Transforming websites into search engine magnets and user experience champions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold font-headline mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Portfolio', 'Services', 'About', 'Contact'].map((link) => (
                  <div key={link}>
                    <a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors duration-300 text-sm">
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold font-headline mb-4">Get In Touch</h4>
              <div className="space-y-2 text-sm">
                <p className="text-primary-foreground/80">Mumbai, Maharashtra</p>
                <p className="text-primary-foreground/80">sumit@sumitdev.com</p>
                <p className="text-primary-foreground/80">+91 98765 43210</p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} SumitDev. All rights reserved. Built with React & passion for performance.
            </p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default InteractiveHomepage;