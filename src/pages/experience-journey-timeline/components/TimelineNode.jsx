import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TimelineNode = ({ 
  experience, 
  index, 
  isActive, 
  onNodeClick, 
  isExpanded, 
  onToggleExpand 
}) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { threshold: 0.3, once: false });
  const [imageLoaded, setImageLoaded] = useState(false);

  const nodeVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: -45,
      z: -100
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      z: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut"
      }
    },
    active: {
      scale: 1.05,
      z: 50,
      boxShadow: "0 20px 40px rgba(0, 217, 255, 0.3)",
      transition: { duration: 0.3 }
    }
  };

  const skillBadgeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <motion.div
      ref={nodeRef}
      className={`relative mb-16 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}
      variants={nodeVariants}
      initial="hidden"
      animate={isInView ? (isActive ? "active" : "visible") : "hidden"}
      onClick={() => onNodeClick(experience.id)}
    >
      {/* Timeline Connector */}
      <div className={`absolute top-8 w-4 h-4 bg-gradient-to-br from-secondary to-accent rounded-full border-4 border-background shadow-floating z-10 ${
        index % 2 === 0 ? 'md:-right-2' : 'md:-left-2'
      } left-1/2 transform -translate-x-1/2 md:translate-x-0`}>
        <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-30"></div>
      </div>

      {/* Main Node Card */}
      <motion.div
        className={`relative bg-card border border-border rounded-xl p-6 shadow-floating hover:shadow-dramatic transition-all duration-normal cursor-pointer ${
          isActive ? 'ring-2 ring-secondary' : ''
        }`}
        whileHover={{ y: -5, rotateX: 5 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-subtle">
                <Icon name={experience.icon} size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-headline text-primary">
                  {experience.role}
                </h3>
                <p className="text-secondary font-medium">
                  {experience.company}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-text-secondary">
              <span className="flex items-center gap-1">
                <Icon name="Calendar" size={16} />
                {experience.duration}
              </span>
              <span className="flex items-center gap-1">
                <Icon name="MapPin" size={16} />
                {experience.location}
              </span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            onClick={(e) => {
              e.stopPropagation();
              onToggleExpand(experience.id);
            }}
            className="ml-4"
          >
            {isExpanded ? 'Less' : 'More'}
          </Button>
        </div>

        {/* Brief Description */}
        <p className="text-text-primary mb-4 leading-relaxed">
          {experience.description}
        </p>

        {/* Key Achievements Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {experience.achievements.slice(0, 2).map((achievement, i) => (
            <div key={i} className="bg-surface rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <Icon name="TrendingUp" size={16} className="text-success" />
                <span className="text-sm font-medium text-success">
                  {achievement.metric}
                </span>
              </div>
              <p className="text-xs text-text-secondary">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>

        {/* Skills Preview */}
        <div className="flex flex-wrap gap-2 mb-4">
          {experience.skills.slice(0, 4).map((skill, i) => (
            <motion.span
              key={skill}
              custom={i}
              variants={skillBadgeVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
            >
              {skill}
            </motion.span>
          ))}
          {experience.skills.length > 4 && (
            <span className="px-3 py-1 bg-muted text-text-secondary text-xs rounded-full">
              +{experience.skills.length - 4} more
            </span>
          )}
        </div>

        {/* Expanded Content */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {isExpanded && (
            <div className="pt-4 border-t border-border space-y-6">
              {/* Detailed Achievements */}
              <div>
                <h4 className="text-lg font-semibold font-headline text-primary mb-3">
                  Key Achievements
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {experience.achievements.map((achievement, i) => (
                    <div key={i} className="bg-surface rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Award" size={18} className="text-accent" />
                        <span className="font-medium text-accent">
                          {achievement.metric}
                        </span>
                      </div>
                      <p className="text-sm text-text-primary mb-2">
                        {achievement.description}
                      </p>
                      <p className="text-xs text-text-secondary">
                        {achievement.impact}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Showcase */}
              {experience.projects && experience.projects.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold font-headline text-primary mb-3">
                    Featured Projects
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {experience.projects.map((project, i) => (
                      <div key={i} className="bg-card border border-border rounded-lg overflow-hidden">
                        <div className="h-32 overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.name}
                            className="w-full h-full object-cover transition-transform duration-normal hover:scale-105"
                            onLoad={() => setImageLoaded(true)}
                          />
                        </div>
                        <div className="p-4">
                          <h5 className="font-semibold text-primary mb-1">
                            {project.name}
                          </h5>
                          <p className="text-sm text-text-secondary mb-3">
                            {project.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-success font-medium">
                              {project.result}
                            </span>
                            {project.liveUrl && (
                              <Button
                                variant="ghost"
                                size="xs"
                                iconName="ExternalLink"
                                iconPosition="right"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(project.liveUrl, '_blank');
                                }}
                              >
                                View
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* All Skills */}
              <div>
                <h4 className="text-lg font-semibold font-headline text-primary mb-3">
                  Technologies & Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      custom={i}
                      variants={skillBadgeVariants}
                      initial="hidden"
                      animate="visible"
                      className="px-3 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-sm font-medium rounded-lg border border-primary/20 hover:border-secondary/40 transition-colors duration-normal"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              {experience.testimonial && (
                <div className="bg-gradient-to-r from-secondary/5 to-accent/5 rounded-lg p-4 border-l-4 border-secondary">
                  <div className="flex items-start gap-3">
                    <Icon name="Quote" size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-text-primary italic mb-2">
                        "{experience.testimonial.content}"
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {experience.testimonial.author.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-primary">
                            {experience.testimonial.author}
                          </p>
                          <p className="text-xs text-text-secondary">
                            {experience.testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                {experience.caseStudyUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Download"
                    iconPosition="left"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(experience.caseStudyUrl, '_blank');
                    }}
                  >
                    Case Study PDF
                  </Button>
                )}
                <Button
                  variant="secondary"
                  size="sm"
                  iconName="MessageCircle"
                  iconPosition="left"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle contact about this experience
                  }}
                >
                  Discuss This Role
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default TimelineNode;