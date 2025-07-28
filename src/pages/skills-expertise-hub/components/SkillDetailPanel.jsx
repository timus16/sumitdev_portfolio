import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SkillDetailPanel = ({ skill, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!skill) return null;

  const mockProjects = [
    {
      id: 1,
      name: "E-commerce Platform Optimization",
      description: "Improved Core Web Vitals by 40% using advanced React optimization techniques",
      impact: "40% faster load times",
      year: 2024
    },
    {
      id: 2,
      name: "Mumbai Restaurant Chain Website",
      description: "Built responsive multi-location website with local SEO optimization",
      impact: "300% increase in organic traffic",
      year: 2023
    },
    {
      id: 3,
      name: "SaaS Dashboard Redesign",
      description: "Modernized legacy interface with React 18 and improved user experience",
      impact: "60% reduction in bounce rate",
      year: 2024
    }
  ];

  const mockCertifications = [
    {
      id: 1,
      name: "Google Analytics Certified",
      issuer: "Google",
      date: "2024-01-15",
      credential: "GA4-2024-001"
    },
    {
      id: 2,
      name: "React Advanced Patterns",
      issuer: "Meta",
      date: "2023-11-20",
      credential: "META-REACT-2023"
    },
    {
      id: 3,
      name: "Core Web Vitals Optimization",
      issuer: "Google",
      date: "2024-03-10",
      credential: "CWV-2024-003"
    }
  ];

  const mockCodeExample = `// Advanced React Hook for SEO optimization
import { useEffect, useState } from 'react';

export const useSEOOptimization = (pageData) => {
  const [seoScore, setSeoScore] = useState(0);
  
  useEffect(() => {
    // Dynamic meta tag optimization
    const updateMetaTags = () => {
      document.title = pageData.title;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', pageData.description);
      }
      
      // Schema.org structured data
      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": pageData.title,
        "description": pageData.description,
        "url": window.location.href
      });
      document.head.appendChild(schemaScript);
    };
    
    updateMetaTags();
    setSeoScore(calculateSEOScore(pageData));
  }, [pageData]);
  
  return { seoScore };
};`;

  const tabs = [
    { id: 'overview', name: 'Overview', icon: 'Eye' },
    { id: 'projects', name: 'Projects', icon: 'Briefcase' },
    { id: 'code', name: 'Code Example', icon: 'Code2' },
    { id: 'certifications', name: 'Certifications', icon: 'Award' }
  ];

  const getSkillColor = (level) => {
    if (level >= 90) return 'text-success';
    if (level >= 80) return 'text-accent';
    if (level >= 70) return 'text-warning';
    return 'text-text-secondary';
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-card border border-border rounded-2xl shadow-dramatic max-w-4xl w-full max-h-[90vh] overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border bg-gradient-to-r from-primary/5 to-secondary/5">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center">
                <Icon name={skill.icon} size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-headline text-text-primary">{skill.name}</h2>
                <div className="flex items-center space-x-4 mt-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-text-secondary">Proficiency:</span>
                    <span className={`font-semibold ${getSkillColor(skill.level)}`}>{skill.level}%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={16} className="text-text-secondary" />
                    <span className="text-sm text-text-secondary">{skill.years} years experience</span>
                  </div>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <Icon name="X" size={20} />
            </Button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-border bg-surface/50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 font-medium transition-all duration-normal ${
                  activeTab === tab.id
                    ? 'text-primary border-b-2 border-primary bg-card' :'text-text-secondary hover:text-text-primary hover:bg-surface'
                }`}
              >
                <Icon name={tab.icon} size={16} />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-96">
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  {/* Proficiency Meter */}
                  <div className="bg-surface/50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-4">Skill Proficiency</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-text-secondary">Technical Knowledge</span>
                        <span className="font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-border rounded-full h-3">
                        <motion.div
                          className="bg-gradient-to-r from-secondary to-accent h-3 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">{skill.years}</div>
                          <div className="text-sm text-text-secondary">Years Experience</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-accent">15+</div>
                          <div className="text-sm text-text-secondary">Projects Completed</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Applications */}
                  <div className="bg-surface/50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-4">Recent Applications</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 bg-card rounded-lg border border-border">
                        <Icon name="CheckCircle" size={20} className="text-success" />
                        <div>
                          <div className="font-medium">E-commerce Performance Optimization</div>
                          <div className="text-sm text-text-secondary">Improved Core Web Vitals by 40%</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-card rounded-lg border border-border">
                        <Icon name="CheckCircle" size={20} className="text-success" />
                        <div>
                          <div className="font-medium">React Component Library</div>
                          <div className="text-sm text-text-secondary">Built reusable UI components for 5+ projects</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'projects' && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-4"
                >
                  {mockProjects.map((project) => (
                    <div key={project.id} className="bg-surface/50 rounded-xl p-6 border border-border">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-text-primary">{project.name}</h3>
                        <span className="text-sm text-text-secondary bg-card px-2 py-1 rounded">{project.year}</span>
                      </div>
                      <p className="text-text-secondary mb-3">{project.description}</p>
                      <div className="flex items-center space-x-2">
                        <Icon name="TrendingUp" size={16} className="text-success" />
                        <span className="text-sm font-medium text-success">{project.impact}</span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === 'code' && (
                <motion.div
                  key="code"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <div className="bg-primary/5 rounded-xl p-6 border border-border">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Live Code Example</h3>
                      <Button variant="outline" size="sm" iconName="Copy">
                        Copy Code
                      </Button>
                    </div>
                    <pre className="bg-primary text-primary-foreground p-4 rounded-lg overflow-x-auto text-sm font-mono">
                      <code>{mockCodeExample}</code>
                    </pre>
                    <div className="mt-4 p-4 bg-card rounded-lg border border-border">
                      <h4 className="font-medium mb-2">Key Features:</h4>
                      <ul className="space-y-1 text-sm text-text-secondary">
                        <li>• Dynamic meta tag optimization</li>
                        <li>• Structured data implementation</li>
                        <li>• Real-time SEO score calculation</li>
                        <li>• Performance monitoring integration</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'certifications' && (
                <motion.div
                  key="certifications"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-4"
                >
                  {mockCertifications.map((cert) => (
                    <div key={cert.id} className="bg-surface/50 rounded-xl p-6 border border-border">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-accent to-warning rounded-lg flex items-center justify-center">
                          <Icon name="Award" size={24} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-text-primary">{cert.name}</h3>
                          <p className="text-text-secondary mb-2">Issued by {cert.issuer}</p>
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1">
                              <Icon name="Calendar" size={14} className="text-text-secondary" />
                              <span className="text-text-secondary">{new Date(cert.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Icon name="Hash" size={14} className="text-text-secondary" />
                              <span className="text-text-secondary font-mono">{cert.credential}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" iconName="ExternalLink">
                          Verify
                        </Button>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SkillDetailPanel;