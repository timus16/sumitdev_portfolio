import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectDetails = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Eye' },
    { id: 'results', label: 'Results', icon: 'TrendingUp' },
    { id: 'technical', label: 'Technical', icon: 'Code' },
    { id: 'testimonial', label: 'Testimonial', icon: 'MessageSquare' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      rotateY: 90,
      transition: { duration: 0.4 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const renderOverviewTab = () => (
    <motion.div variants={itemVariants} className="space-y-6">
      {/* Project Images Carousel */}
      <div className="relative">
        <div className="aspect-video rounded-xl overflow-hidden bg-surface">
          <Image
            src={project.images[activeImageIndex]}
            alt={`${project.title} screenshot ${activeImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Image Navigation */}
        {project.images.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {project.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === activeImageIndex 
                    ? 'bg-secondary scale-125' :'bg-border hover:bg-text-secondary'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Project Description */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-text-primary">Project Overview</h3>
        <p className="text-text-secondary leading-relaxed">{project.description}</p>
        
        {/* Key Features */}
        <div>
          <h4 className="font-medium text-text-primary mb-3">Key Features</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="text-sm text-text-secondary">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div>
          <h4 className="font-medium text-text-primary mb-3">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-surface text-text-primary text-sm rounded-full border border-border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderResultsTab = () => (
    <motion.div variants={itemVariants} className="space-y-6">
      {/* Before/After Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h4 className="font-medium text-text-primary flex items-center">
            <Icon name="TrendingDown" size={18} className="mr-2 text-error" />
            Before
          </h4>
          <div className="bg-error/10 border border-error/20 rounded-lg p-4 space-y-2">
            {project.results.before.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">{item.metric}</span>
                <span className="text-sm font-medium text-error">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="space-y-3">
          <h4 className="font-medium text-text-primary flex items-center">
            <Icon name="TrendingUp" size={18} className="mr-2 text-success" />
            After
          </h4>
          <div className="bg-success/10 border border-success/20 rounded-lg p-4 space-y-2">
            {project.results.after.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">{item.metric}</span>
                <span className="text-sm font-medium text-success">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Achievements */}
      <div className="space-y-4">
        <h4 className="font-medium text-text-primary">Key Achievements</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {project.results.achievements.map((achievement, index) => (
            <div key={index} className="text-center p-4 bg-surface rounded-lg border border-border">
              <div className="text-2xl font-bold text-secondary mb-1">{achievement.value}</div>
              <div className="text-sm text-text-secondary">{achievement.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        <h4 className="font-medium text-text-primary">Project Timeline</h4>
        <div className="space-y-3">
          {project.results.timeline.map((milestone, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-3 h-3 bg-secondary rounded-full mt-2 flex-shrink-0" />
              <div>
                <div className="font-medium text-text-primary">{milestone.phase}</div>
                <div className="text-sm text-text-secondary">{milestone.description}</div>
                <div className="text-xs text-text-secondary mt-1">{milestone.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderTechnicalTab = () => (
    <motion.div variants={itemVariants} className="space-y-6">
      {/* Technical Challenges */}
      <div className="space-y-4">
        <h4 className="font-medium text-text-primary">Technical Challenges & Solutions</h4>
        <div className="space-y-4">
          {project.technical.challenges.map((challenge, index) => (
            <div key={index} className="border border-border rounded-lg p-4">
              <div className="flex items-start space-x-3 mb-3">
                <Icon name="AlertTriangle" size={18} className="text-warning mt-1" />
                <div>
                  <h5 className="font-medium text-text-primary">{challenge.problem}</h5>
                  <p className="text-sm text-text-secondary mt-1">{challenge.description}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle" size={18} className="text-success mt-1" />
                <div>
                  <h5 className="font-medium text-success">Solution</h5>
                  <p className="text-sm text-text-secondary mt-1">{challenge.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="space-y-4">
        <h4 className="font-medium text-text-primary">Performance Improvements</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.technical.performance.map((metric, index) => (
            <div key={index} className="text-center p-3 bg-surface rounded-lg border border-border">
              <Icon name={metric.icon} size={24} className="mx-auto mb-2 text-secondary" />
              <div className="text-lg font-semibold text-text-primary">{metric.improvement}</div>
              <div className="text-xs text-text-secondary">{metric.metric}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Code Highlights */}
      <div className="space-y-4">
        <h4 className="font-medium text-text-primary">Code Highlights</h4>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
          <pre className="text-sm text-text-primary overflow-x-auto">
            <code>{project.technical.codeSnippet}</code>
          </pre>
        </div>
      </div>
    </motion.div>
  );

  const renderTestimonialTab = () => (
    <motion.div variants={itemVariants} className="space-y-6">
      {/* Client Testimonial */}
      <div className="text-center space-y-4">
        <div className="w-20 h-20 mx-auto rounded-full overflow-hidden">
          <Image
            src={project.testimonial.clientImage}
            alt={project.testimonial.clientName}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-text-primary">{project.testimonial.clientName}</h4>
          <p className="text-sm text-text-secondary">{project.testimonial.clientPosition}</p>
          <p className="text-sm text-text-secondary">{project.testimonial.company}</p>
        </div>
      </div>

      {/* Testimonial Quote */}
      <div className="relative">
        <Icon name="Quote" size={32} className="text-secondary/20 absolute -top-2 -left-2" />
        <blockquote className="text-lg text-text-primary italic leading-relaxed pl-8">
          {project.testimonial.quote}
        </blockquote>
      </div>

      {/* Rating */}
      <div className="flex justify-center space-x-1">
        {[...Array(5)].map((_, index) => (
          <Icon
            key={index}
            name="Star"
            size={20}
            className={`${
              index < project.testimonial.rating 
                ? 'text-accent fill-current' :'text-border'
            }`}
          />
        ))}
      </div>

      {/* Additional Feedback */}
      <div className="space-y-3">
        <h5 className="font-medium text-text-primary">What they appreciated most:</h5>
        <div className="space-y-2">
          {project.testimonial.highlights.map((highlight, index) => (
            <div key={index} className="flex items-center space-x-3">
              <Icon name="CheckCircle" size={16} className="text-success" />
              <span className="text-sm text-text-secondary">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverviewTab();
      case 'results':
        return renderResultsTab();
      case 'technical':
        return renderTechnicalTab();
      case 'testimonial':
        return renderTestimonialTab();
      default:
        return renderOverviewTab();
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-4 md:inset-8 bg-card/95 backdrop-blur-brand rounded-2xl border border-border shadow-dramatic z-50 overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-border">
        <div className="flex items-center space-x-4">
          <div 
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${project.primaryColor}, ${project.secondaryColor})`
            }}
          >
            <Icon name={project.icon} size={24} className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-text-primary">{project.title}</h2>
            <p className="text-text-secondary">{project.category} • {project.year}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          {project.liveUrl && (
            <Button
              variant="outline"
              iconName="ExternalLink"
              iconPosition="right"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              View Live
            </Button>
          )}
          <Button
            variant="ghost"
            iconName="X"
            onClick={onClose}
            className="text-text-secondary hover:text-text-primary"
          />
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border px-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-3 border-b-2 transition-all duration-200 ${
              activeTab === tab.id
                ? 'border-secondary text-secondary' :'border-transparent text-text-secondary hover:text-text-primary'
            }`}
          >
            <Icon name={tab.icon} size={18} />
            <span className="font-medium">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;