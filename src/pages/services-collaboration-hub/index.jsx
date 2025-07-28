import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ServiceCard from './components/ServiceCard';
import ProjectCalculator from './components/ProjectCalculator';
import ProcessTimeline from './components/ProcessTimeline';
import TestimonialCard from './components/TestimonialCard';
import ConsultationBooking from './components/ConsultationBooking';
import PricingTable from './components/PricingTable';

const ServicesCollaborationHub = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'wordpress',
      title: 'WordPress Development',
      description: 'Custom WordPress websites built for performance, SEO, and user experience. From simple business sites to complex e-commerce solutions.',
      icon: 'Code',
      features: [
        'Custom theme development',
        'Plugin development & integration',
        'E-commerce functionality',
        'Performance optimization',
        'SEO-ready structure',
        'Mobile-responsive design',
        'Security implementation',
        'Content management training'
      ],
      startingPrice: 25000,
      duration: '2-8 weeks',
      isPopular: true,
      deliverables: ['Custom Design', 'SEO Setup', 'Training', 'Documentation', 'Support']
    },
    {
      id: 'seo',
      title: 'Technical SEO',
      description: 'Comprehensive SEO optimization to improve search rankings, organic traffic, and overall website visibility in Mumbai and beyond.',
      icon: 'Search',
      features: [
        'Technical SEO audit',
        'Keyword research & strategy',
        'On-page optimization',
        'Local SEO setup',
        'Schema markup implementation',
        'Site speed optimization',
        'Content optimization',
        'Monthly reporting'
      ],
      startingPrice: 15000,
      duration: '1-3 months',
      isPopular: false,
      deliverables: ['Audit Report', 'Strategy Plan', 'Implementation', 'Monitoring', 'Reports']
    },
    {
      id: 'performance',
      title: 'Performance Optimization',
      description: 'Speed up your website with advanced caching, CDN setup, database optimization, and Core Web Vitals improvements.',
      icon: 'Zap',
      features: [
        'Site speed analysis',
        'Caching implementation',
        'CDN configuration',
        'Image optimization',
        'Database optimization',
        'Code minification',
        'Server optimization',
        'Performance monitoring'
      ],
      startingPrice: 20000,
      duration: '1-3 weeks',
      isPopular: false,
      deliverables: ['Speed Report', 'Optimization', 'CDN Setup', 'Monitoring', 'Documentation']
    },
    {
      id: 'maintenance',
      title: 'Website Maintenance',
      description: 'Ongoing website care including updates, security monitoring, backups, and performance optimization to keep your site running smoothly.',
      icon: 'Settings',
      features: [
        'Regular updates',
        'Security monitoring',
        'Automated backups',
        'Performance monitoring',
        'Content updates',
        'Bug fixes',
        'Uptime monitoring',
        'Priority support'
      ],
      startingPrice: 8000,
      duration: 'Monthly',
      isPopular: false,
      deliverables: ['Updates', 'Backups', 'Reports', 'Support', 'Monitoring']
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      company: 'Mumbai Textiles',
      role: 'Marketing Director',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: 'Sumit transformed our outdated website into a modern, fast-loading e-commerce platform. Our online sales increased by 180% within 3 months of launch.',
      rating: 5,
      serviceType: 'WordPress Development',
      results: [
        { value: '+180%', metric: 'Online Sales' },
        { value: '2.3s', metric: 'Load Time' }
      ],
      projectValue: 85000
    },
    {
      id: 2,
      name: 'Rajesh Patel',
      company: 'Patel & Associates',
      role: 'Managing Partner',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      content: 'The SEO work Sumit did for our law firm was exceptional. We now rank #1 for multiple legal keywords in Mumbai and get 5x more qualified leads.',
      rating: 5,
      serviceType: 'Technical SEO',
      results: [
        { value: '#1', metric: 'Local Rankings' },
        { value: '+400%', metric: 'Organic Traffic' }
      ],
      projectValue: 45000
    },
    {
      id: 3,
      name: 'Anita Desai',
      company: 'Desai Restaurants',
      role: 'Owner',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'Our restaurant website was painfully slow. Sumit optimized it and now it loads in under 2 seconds. Customer online orders have doubled!',
      rating: 5,
      serviceType: 'Performance Optimization',
      results: [
        { value: '1.8s', metric: 'Load Time' },
        { value: '+120%', metric: 'Online Orders' }
      ],
      projectValue: 35000
    },
    {
      id: 4,
      name: 'Vikram Singh',
      company: 'Singh Enterprises',
      role: 'CEO',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'The monthly maintenance service is fantastic. Our website is always up-to-date, secure, and running perfectly. Great peace of mind for our business.',
      rating: 5,
      serviceType: 'Website Maintenance',
      results: [
        { value: '99.9%', metric: 'Uptime' },
        { value: '0', metric: 'Security Issues' }
      ],
      projectValue: 15000
    }
  ];

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    // Scroll to calculator section
    document.getElementById('project-calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium font-cta mb-6">
              <Icon name="Sparkles" size={16} />
              <span>Professional Web Services</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6 font-headline">
              Services & 
              <span className="text-gradient-primary"> Collaboration</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 font-body leading-relaxed">
              Comprehensive web development and SEO services designed for Mumbai businesses. 
              From custom WordPress sites to technical SEO optimization, I deliver measurable results 
              that drive growth and online success.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                onClick={() => document.getElementById('consultation-booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Calculator"
                iconPosition="left"
                onClick={() => document.getElementById('project-calculator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Calculate Project Cost
              </Button>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelectService={handleServiceSelect}
              />
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-floating mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-text-primary mb-2 font-headline">Proven Results</h2>
              <p className="text-text-secondary font-body">Real outcomes from real projects</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2 font-headline">50+</div>
                <div className="text-sm text-text-secondary font-body">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2 font-headline">95%</div>
                <div className="text-sm text-text-secondary font-body">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2 font-headline">2.5x</div>
                <div className="text-sm text-text-secondary font-body">Avg. Traffic Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warning mb-2 font-headline">24/7</div>
                <div className="text-sm text-text-secondary font-body">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Calculator Section */}
      <section id="project-calculator" className="py-16 px-4 lg:px-6 bg-surface">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4 font-headline">Project Calculator</h2>
            <p className="text-text-secondary font-body">Get instant estimates for your project requirements</p>
          </div>
          <ProjectCalculator />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4 font-headline">Transparent Pricing</h2>
            <p className="text-text-secondary font-body">Clear, competitive rates for Mumbai market</p>
          </div>
          <PricingTable />
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-16 px-4 lg:px-6 bg-surface">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4 font-headline">How We Work Together</h2>
            <p className="text-text-secondary font-body">A transparent, collaborative approach to every project</p>
          </div>
          <ProcessTimeline />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4 font-headline">Client Success Stories</h2>
            <p className="text-text-secondary font-body">Real results from Mumbai businesses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Booking Section */}
      <section id="consultation-booking" className="py-16 px-4 lg:px-6 bg-surface">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4 font-headline">Ready to Get Started?</h2>
            <p className="text-text-secondary font-body">Book a free consultation to discuss your project</p>
          </div>
          <ConsultationBooking />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4 font-headline">Frequently Asked Questions</h2>
            <p className="text-text-secondary font-body">Common questions about services and process</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "What's included in the free consultation?",
                answer: "The 30-minute consultation includes project requirement discussion, initial recommendations, timeline estimation, and next steps. There's no obligation to proceed."
              },
              {
                question: "Do you work with businesses outside Mumbai?",
                answer: "Yes! While I'm based in Mumbai, I work with clients across India and internationally. All communication and project management is handled remotely."
              },
              {
                question: "What's your typical project timeline?",
                answer: "Timelines vary by project complexity. Simple websites take 2-3 weeks, while complex e-commerce or custom applications can take 8-12 weeks. I provide detailed timelines during consultation."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Yes! All projects include free support period (1-12 months depending on package). I also offer monthly maintenance packages for ongoing care."
              },
              {
                question: "Can you help improve my existing website's SEO?",
                answer: "Absolutely! I offer comprehensive SEO audits and optimization services for existing websites. Most clients see significant improvements within 2-3 months."
              },
              {
                question: "What payment terms do you offer?",
                answer: "I typically work with 50% upfront and 50% on completion for smaller projects. Larger projects can be broken into milestone-based payments. All payments in INR."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 shadow-subtle">
                <h3 className="text-lg font-semibold text-text-primary mb-3 font-headline">{faq.question}</h3>
                <p className="text-text-secondary font-body leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 lg:px-6 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-headline">Ready to Transform Your Web Presence?</h2>
          <p className="text-white/90 mb-8 font-body text-lg">
            Join 50+ satisfied clients who've seen real results from professional web development and SEO services.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="default"
              size="lg"
              iconName="Calendar"
              iconPosition="left"
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => document.getElementById('consultation-booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              iconName="Phone"
              iconPosition="left"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Call +91 98765 43210
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm font-headline">S</span>
                </div>
                <span className="text-xl font-bold font-headline">SumitDev</span>
              </div>
              <p className="text-primary-foreground/80 font-body">
                Professional web development and SEO services for Mumbai businesses.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 font-headline">Services</h4>
              <ul className="space-y-2 text-primary-foreground/80 font-body">
                <li>WordPress Development</li>
                <li>Technical SEO</li>
                <li>Performance Optimization</li>
                <li>Website Maintenance</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 font-headline">Contact</h4>
              <ul className="space-y-2 text-primary-foreground/80 font-body">
                <li>+91 98765 43210</li>
                <li>hello@sumitdev.in</li>
                <li>Mumbai, Maharashtra</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 font-headline">Follow</h4>
              <div className="flex space-x-4">
                <Icon name="Twitter" size={20} className="text-primary-foreground/80 hover:text-secondary cursor-pointer" />
                <a href="https://www.linkedin.com/in/sumitkumar-gupta-react/" target="_blank" rel="noopener noreferrer">
                  <Icon name="Linkedin" size={20} className="text-primary-foreground/80 hover:text-secondary cursor-pointer" />
                </a>
                <Icon name="Github" size={20} className="text-primary-foreground/80 hover:text-secondary cursor-pointer" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
            <p className="text-primary-foreground/60 font-body">
              © {new Date().getFullYear()} SumitDev. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesCollaborationHub;