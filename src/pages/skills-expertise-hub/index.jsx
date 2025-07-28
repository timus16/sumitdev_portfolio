import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import SkillConstellation from './components/SkillConstellation';
import SkillDetailPanel from './components/SkillDetailPanel';
import InteractiveToolsSection from './components/InteractiveToolsSection';
import TechStackVisualization from './components/TechStackVisualization';
import LocalExpertiseSection from './components/LocalExpertiseSection';

const SkillsExpertiseHub = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillSelect = (skill) => {
    setSelectedSkill(skill);
  };

  const handleCloseSkillPanel = () => {
    setSelectedSkill(null);
  };

  const certifications = [
    {
      id: 1,
      name: "Google Analytics Certified",
      issuer: "Google",
      date: "2024-01-15",
      badge: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center",
      verified: true
    },
    {
      id: 2,
      name: "React Advanced Patterns",
      issuer: "Meta",
      date: "2023-11-20",
      badge: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop&crop=center",
      verified: true
    },
    {
      id: 3,
      name: "WordPress Developer",
      issuer: "WordPress.org",
      date: "2023-08-10",
      badge: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center",
      verified: true
    },
    {
      id: 4,
      name: "Core Web Vitals Expert",
      issuer: "Google",
      date: "2024-03-10",
      badge: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop&crop=center",
      verified: true
    }
  ];

  const skillMetrics = [
    { label: 'Years of Experience', value: '5+', icon: 'Calendar' },
    { label: 'Projects Completed', value: '150+', icon: 'Briefcase' },
    { label: 'Technologies Mastered', value: '25+', icon: 'Code2' },
    { label: 'Client Satisfaction', value: '98%', icon: 'Heart' }
  ];

  return (
    <>
      <Helmet>
        <title>Skills & Expertise Hub - SumitDev Portfolio | Interactive Technology Showcase</title>
        <meta name="description" content="Explore Sumit's comprehensive skill set through interactive 3D visualizations. Frontend development, SEO optimization, WordPress mastery, and Mumbai market expertise." />
        <meta name="keywords" content="React developer skills, SEO expertise, WordPress development, Mumbai web developer, technical skills, frontend backend" />
        <meta property="og:title" content="Skills & Expertise Hub - Interactive Technology Showcase" />
        <meta property="og:description" content="Interactive 3D constellation of technical skills including React, Next.js, SEO optimization, and Mumbai market specialization." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/skills-expertise-hub" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 lg:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-secondary/10 to-accent/10 px-4 py-2 rounded-full border border-secondary/20 mb-6">
                <Icon name="Zap" size={16} className="text-secondary" />
                <span className="text-sm font-medium text-secondary">Interactive Skills Showcase</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold font-headline text-text-primary mb-6">
                Skills & Expertise
                <span className="block text-gradient-primary">Constellation</span>
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                Explore my comprehensive skill set through interactive 3D visualizations, live code examples, 
                and real-world project applications. Each skill represents years of hands-on experience 
                and continuous learning in the ever-evolving web development landscape.
              </p>

              {/* Skill Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {skillMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card border border-border rounded-xl p-6 text-center shadow-subtle"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon name={metric.icon} size={24} className="text-white" />
                    </div>
                    <div className="text-2xl font-bold text-text-primary mb-1">{metric.value}</div>
                    <div className="text-sm text-text-secondary">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Interactive Skill Constellation */}
        <section className="py-16 px-4 lg:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-headline text-text-primary mb-4">
                  Interactive Skill Constellation
                </h2>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  Click on any skill node to explore detailed proficiency levels, years of experience, 
                  recent project applications, and live code examples.
                </p>
              </div>

              <SkillConstellation 
                onSkillSelect={handleSkillSelect}
                selectedSkill={selectedSkill}
              />
            </motion.div>
          </div>
        </section>

        {/* Technology Stack Visualization */}
        <section className="py-16 px-4 lg:px-6 bg-surface/30">
          <div className="max-w-7xl mx-auto">
            <TechStackVisualization />
          </div>
        </section>

        {/* Interactive SEO Tools */}
        <section className="py-16 px-4 lg:px-6">
          <div className="max-w-7xl mx-auto">
            <InteractiveToolsSection />
          </div>
        </section>

        {/* Mumbai Market Expertise */}
        <section className="py-16 px-4 lg:px-6 bg-surface/30">
          <div className="max-w-7xl mx-auto">
            <LocalExpertiseSection />
          </div>
        </section>

        {/* Certifications & Achievements */}
        <section className="py-16 px-4 lg:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-headline text-text-primary mb-4">
                Certifications & Achievements
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Professional certifications and industry recognition that validate my expertise 
                and commitment to staying current with best practices.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 text-center shadow-subtle hover:shadow-floating transition-all duration-normal"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                    <Icon name="Award" size={32} className="text-white" />
                  </div>
                  
                  <h3 className="font-semibold text-text-primary mb-2">{cert.name}</h3>
                  <p className="text-sm text-text-secondary mb-3">Issued by {cert.issuer}</p>
                  <p className="text-xs text-text-secondary mb-4">
                    {new Date(cert.date).toLocaleDateString('en-IN', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-success" />
                    <span className="text-xs text-success font-medium">Verified</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 lg:px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold font-headline text-text-primary">
                Ready to Leverage These Skills?
              </h2>
              <p className="text-xl text-text-secondary">
                Let's discuss how my expertise can help bring your project vision to life 
                with cutting-edge technology and proven SEO strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="default" 
                  size="lg"
                  iconName="MessageCircle"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-cta"
                >
                  Start a Project Discussion
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  iconName="Download"
                  className="font-cta"
                >
                  Download Skills Resume
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skill Detail Panel */}
        <SkillDetailPanel 
          skill={selectedSkill}
          onClose={handleCloseSkillPanel}
        />
      </div>
    </>
  );
};

export default SkillsExpertiseHub;