import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
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
      <footer className="relative bg-gradient-to-t from-primary to-primary/90 text-primary-foreground pt-16 pb-8 mt-20 border-t border-primary/20">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Animated CTA Banner */}
          <div className="flex flex-col items-center justify-center mb-12">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 18 }}
              className="bg-accent/90 text-accent-foreground rounded-2xl px-8 py-6 shadow-lg flex flex-col items-center gap-3 w-full max-w-2xl"
            >
              <h2 className="text-2xl md:text-3xl font-bold font-headline mb-1 text-center">
                Ready to grow your business or launch your next project?
              </h2>
              <p className="text-accent-foreground/90 text-base md:text-lg text-center mb-2">
                Let’s build something remarkable together. Get a free consultation or just say hello!
              </p>
              <div className="flex flex-wrap gap-4 justify-center mt-2">
                <a href="#footer-contact-form" className="group inline-flex items-center px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg shadow hover:bg-primary/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent">
                  <Icon name="Mail" size={22} className="mr-2 group-hover:animate-bounce" />
                  Contact Me
                </a>
                <a href="tel:+919137021658" className="group inline-flex items-center px-6 py-2 bg-secondary text-secondary-foreground font-semibold rounded-lg shadow hover:bg-secondary/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent">
                  <Icon name="Phone" size={22} className="mr-2 group-hover:animate-pulse" />
                  Call Now
                </a>
                <a href="https://www.linkedin.com/in/sumitkumar-gupta-react/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center px-6 py-2 bg-[#0077b5] text-white font-semibold rounded-lg shadow hover:bg-[#005983] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent">
                  <Icon name="Linkedin" size={22} className="mr-2 group-hover:animate-spin" />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-4 gap-10 text-left">
            {/* Brand & Mission */}
            <div className="col-span-2 flex flex-col justify-between">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center shadow-floating">
                  <span className="text-white font-bold text-lg font-headline">S</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-headline">SumitDev</h3>
                  <p className="text-xs text-primary-foreground/80">Web & Mobile Solutions</p>
                </div>
              </div>
              <p className="text-primary-foreground/80 text-sm mb-4 max-w-xs">
                Building high-performance websites & apps for modern businesses. Trusted by startups & enterprises in Mumbai and beyond.
              </p>
              <div className="flex space-x-3 mt-2">
                <a href="https://www.linkedin.com/in/sumitkumar-gupta-react/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent focus:text-accent transition-transform duration-200 hover:scale-110 active:scale-95"><Icon name="Linkedin" size={22} /></a>
                <a href="mailto:sumitg7@zohomail.in" aria-label="Email" className="hover:text-accent focus:text-accent transition-transform duration-200 hover:scale-110 active:scale-95"><Icon name="Mail" size={22} /></a>
                <a href="tel:+919137021658" aria-label="Phone" className="hover:text-accent focus:text-accent transition-transform duration-200 hover:scale-110 active:scale-95"><Icon name="Phone" size={22} /></a>
                <a href="https://github.com/timus16" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-accent focus:text-accent transition-transform duration-200 hover:scale-110 active:scale-95"><Icon name="Github" size={22} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold font-headline mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/portfolio-showcase-galaxy" className="hover:text-accent transition-colors">Portfolio</a></li>
                <li><a href="/services-collaboration-hub" className="hover:text-accent transition-colors">Services</a></li>
                <li><a href="/skills-expertise-hub" className="hover:text-accent transition-colors">Skills</a></li>
                <li><a href="/seo-results-dashboard" className="hover:text-accent transition-colors">SEO Results</a></li>
                <li><a href="#footer-contact-form" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-1" id="footer-contact-form">
              <h4 className="font-bold font-headline mb-4">Contact</h4>
              <form action="https://formspree.io/f/xwkgyyqg" method="POST" className="space-y-4 bg-card/90 rounded-xl shadow-floating p-6">
                <input type="hidden" name="_subject" value="Portfolio Contact Form Submission" />
                <input type="hidden" name="to" value="sumitg7@zohomail.in" />
                <div>
                  <label className="block text-xs font-medium mb-1 text-primary" htmlFor="name">Full Name</label>
                  <input required type="text" id="name" name="name" autoComplete="name" placeholder="Your Name" className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent bg-background/80 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1 text-primary" htmlFor="email">Email Address</label>
                  <input required type="email" id="email" name="email" autoComplete="email" placeholder="you@email.com" className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent bg-background/80 text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1 text-primary" htmlFor="message">Message</label>
                  <textarea required id="message" name="message" rows="3" placeholder="How can I help you?" className="w-full px-3 py-2 border border-border rounded focus:outline-none focus:ring-2 focus:ring-accent bg-background/80 text-sm"></textarea>
                </div>
                <button type="submit" className="w-full bg-accent text-accent-foreground font-bold py-2 rounded shadow hover:bg-accent/90 hover:scale-105 active:scale-95 transition-all duration-150 text-sm flex items-center justify-center gap-2">
                  <Icon name="Send" size={18} className="animate-pulse" />
                  Send Message
                </button>
                <p className="text-xs text-center text-primary-foreground/80 mt-2">Or call <a href="tel:+919137021658" className="text-accent font-semibold">9137021658</a></p>
              </form>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-12 pt-6 text-center text-xs">
            <p className="text-primary-foreground/60">
              &copy; {new Date().getFullYear()} SumitDev. All rights reserved. Built with React, Vite & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default InteractiveHomepage;