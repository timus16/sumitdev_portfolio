import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GalaxyControls = ({ 
  selectedProject, 
  projects, 
  onProjectSelect, 
  viewMode, 
  onViewModeChange,
  filters,
  onFilterChange 
}) => {
  const categories = ['All', 'E-commerce', 'Restaurant', 'Startup', 'Corporate', 'Local Business'];
  const technologies = ['All', 'WordPress', 'React', 'Next.js', 'Shopify', 'Custom PHP'];

  const controlVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const navigateProject = (direction) => {
    const currentIndex = projects.findIndex(p => p.id === selectedProject?.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
    } else {
      newIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
    }
    
    onProjectSelect(projects[newIndex]);
  };

  return (
    <motion.div
      variants={controlVariants}
      initial="hidden"
      animate="visible"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30"
    >
      <div className="bg-card/90 backdrop-blur-brand border border-border rounded-2xl shadow-dramatic p-4">
        <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
          
          {/* Navigation Controls */}
          <motion.div variants={itemVariants} className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              iconName="ChevronLeft"
              onClick={() => navigateProject('prev')}
              disabled={!selectedProject}
              className="w-10 h-10"
            />
            
            <div className="text-center min-w-[120px]">
              {selectedProject ? (
                <div>
                  <div className="text-sm font-medium text-text-primary">{selectedProject.title}</div>
                  <div className="text-xs text-text-secondary">
                    {projects.findIndex(p => p.id === selectedProject.id) + 1} of {projects.length}
                  </div>
                </div>
              ) : (
                <div className="text-sm text-text-secondary">Select a project</div>
              )}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              iconName="ChevronRight"
              onClick={() => navigateProject('next')}
              disabled={!selectedProject}
              className="w-10 h-10"
            />
          </motion.div>

          {/* View Mode Toggle */}
          <motion.div variants={itemVariants} className="flex items-center space-x-2">
            <span className="text-sm text-text-secondary">View:</span>
            <div className="flex bg-surface rounded-lg p-1">
              <button
                onClick={() => onViewModeChange('galaxy')}
                className={`px-3 py-1 rounded text-sm transition-all duration-200 ${
                  viewMode === 'galaxy' ?'bg-primary text-primary-foreground shadow-sm' :'text-text-secondary hover:text-text-primary'
                }`}
              >
                <Icon name="Globe" size={16} className="inline mr-1" />
                Galaxy
              </button>
              <button
                onClick={() => onViewModeChange('grid')}
                className={`px-3 py-1 rounded text-sm transition-all duration-200 ${
                  viewMode === 'grid' ?'bg-primary text-primary-foreground shadow-sm' :'text-text-secondary hover:text-text-primary'
                }`}
              >
                <Icon name="Grid3X3" size={16} className="inline mr-1" />
                Grid
              </button>
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex items-center space-x-2">
            <span className="text-sm text-text-secondary">Category:</span>
            <select
              value={filters.category}
              onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
              className="bg-surface border border-border rounded-lg px-3 py-1 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </motion.div>

          {/* Technology Filter */}
          <motion.div variants={itemVariants} className="flex items-center space-x-2">
            <span className="text-sm text-text-secondary">Tech:</span>
            <select
              value={filters.technology}
              onChange={(e) => onFilterChange({ ...filters, technology: e.target.value })}
              className="bg-surface border border-border rounded-lg px-3 py-1 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              {technologies.map(tech => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </motion.div>

          {/* Quick Actions */}
          <motion.div variants={itemVariants} className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              iconName="RotateCcw"
              onClick={() => {
                onFilterChange({ category: 'All', technology: 'All' });
                onProjectSelect(null);
              }}
              className="text-text-secondary hover:text-text-primary"
            />
            
            <Button
              variant="ghost"
              size="sm"
              iconName="Download"
              onClick={() => {
                // Mock download portfolio PDF
                const link = document.createElement('a');
                link.href = '#';
                link.download = 'SumitDev-Portfolio-2025.pdf';
                link.click();
              }}
              className="text-text-secondary hover:text-text-primary"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default GalaxyControls;