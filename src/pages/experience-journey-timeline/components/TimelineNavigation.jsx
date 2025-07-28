import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TimelineNavigation = ({ 
  experiences, 
  activeExperience, 
  onNavigateToExperience,
  scrollProgress 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const activeIndex = experiences.findIndex(exp => exp.id === activeExperience);
    if (activeIndex !== -1) {
      setCurrentIndex(activeIndex);
    }
  }, [activeExperience, experiences]);

  const navigationVariants = {
    collapsed: {
      width: 64,
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    expanded: {
      width: 280,
      transition: { duration: 0.3, ease: "easeInOut" }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { delay: 0.1, duration: 0.2 }
    }
  };

  const handlePrevious = () => {
    const prevIndex = Math.max(0, currentIndex - 1);
    onNavigateToExperience(experiences[prevIndex].id);
  };

  const handleNext = () => {
    const nextIndex = Math.min(experiences.length - 1, currentIndex + 1);
    onNavigateToExperience(experiences[nextIndex].id);
  };

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      variants={navigationVariants}
      animate={isExpanded ? "expanded" : "collapsed"}
    >
      <div className="bg-card/95 backdrop-blur-brand border border-border rounded-2xl shadow-dramatic overflow-hidden">
        {/* Collapsed State - Navigation Orb */}
        {!isExpanded && (
          <motion.div
            className="p-4 cursor-pointer"
            onClick={() => setIsExpanded(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Progress Ring */}
                <svg className="w-8 h-8 transform -rotate-90">
                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    stroke="var(--color-border)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    stroke="var(--color-secondary)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 14}`}
                    strokeDashoffset={`${2 * Math.PI * 14 * (1 - scrollProgress)}`}
                    className="transition-all duration-300"
                  />
                </svg>
                
                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="Navigation" size={16} className="text-primary" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Expanded State - Full Navigation */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={contentVariants}
              className="p-4"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-sm font-semibold font-headline text-primary">
                    Journey Timeline
                  </h3>
                  <p className="text-xs text-text-secondary">
                    {currentIndex + 1} of {experiences.length}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="xs"
                  iconName="X"
                  onClick={() => setIsExpanded(false)}
                />
              </div>

              {/* Current Experience Info */}
              <div className="mb-4 p-3 bg-surface rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={experiences[currentIndex]?.icon || 'Briefcase'} size={16} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-primary truncate">
                      {experiences[currentIndex]?.role}
                    </h4>
                    <p className="text-xs text-text-secondary truncate">
                      {experiences[currentIndex]?.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs text-text-secondary mb-2">
                  <span>Progress</span>
                  <span>{Math.round(scrollProgress * 100)}%</span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-secondary to-accent rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${scrollProgress * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2 mb-4">
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ChevronLeft"
                  disabled={currentIndex === 0}
                  onClick={handlePrevious}
                  className="flex-1"
                >
                  Previous
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="ChevronRight"
                  iconPosition="right"
                  disabled={currentIndex === experiences.length - 1}
                  onClick={handleNext}
                  className="flex-1"
                >
                  Next
                </Button>
              </div>

              {/* Quick Jump Menu */}
              <div className="space-y-1 max-h-32 overflow-y-auto">
                {experiences.map((exp, index) => (
                  <motion.button
                    key={exp.id}
                    className={`w-full text-left p-2 rounded-lg text-xs transition-all duration-normal ${
                      index === currentIndex
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-surface text-text-secondary hover:text-primary'
                    }`}
                    onClick={() => {
                      onNavigateToExperience(exp.id);
                      setIsExpanded(false);
                    }}
                    whileHover={{ x: 2 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        index === currentIndex ? 'bg-white' : 'bg-text-secondary'
                      }`} />
                      <span className="truncate">{exp.role}</span>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="flex gap-2 mt-4 pt-3 border-t border-border">
                <Button
                  variant="ghost"
                  size="xs"
                  iconName="Download"
                  onClick={() => {
                    // Handle resume download
                    window.open('/assets/resume.pdf', '_blank');
                  }}
                  className="flex-1"
                >
                  Resume
                </Button>
                <Button
                  variant="ghost"
                  size="xs"
                  iconName="MessageCircle"
                  onClick={() => {
                    // Handle contact
                    window.location.href = 'mailto:sumit@example.com';
                  }}
                  className="flex-1"
                >
                  Contact
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default TimelineNavigation;