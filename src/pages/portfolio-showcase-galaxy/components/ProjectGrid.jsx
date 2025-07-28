import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectGrid = ({ projects, onProjectSelect }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
    >
      {projects.map((project) => (
        <motion.div
          key={project.id}
          variants={cardVariants}
          whileHover={{ y: -5, scale: 1.02 }}
          className="group cursor-pointer"
          onClick={() => onProjectSelect(project)}
        >
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-subtle hover:shadow-floating transition-all duration-300">
            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                  {project.category}
                </span>
              </div>
              
              {/* Year Badge */}
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 bg-surface/90 text-text-primary text-xs font-medium rounded-full">
                  {project.year}
                </span>
              </div>
              
              {/* View Project Button */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button
                  variant="secondary"
                  size="sm"
                  iconName="Eye"
                  iconPosition="left"
                  className="text-xs"
                >
                  View Details
                </Button>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${project.primaryColor}, ${project.secondaryColor})`
                    }}
                  >
                    <Icon name={project.icon} size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary group-hover:text-secondary transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-sm text-text-secondary">{project.client}</p>
                  </div>
                </div>
                
                {project.featured && (
                  <div className="flex items-center space-x-1 text-accent">
                    <Icon name="Star" size={16} className="fill-current" />
                    <span className="text-xs font-medium">Featured</span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                {project.shortDescription}
              </p>

              {/* Key Results */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                {project.keyMetrics.slice(0, 3).map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-lg font-bold text-secondary">{metric.value}</div>
                    <div className="text-xs text-text-secondary">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-surface text-text-secondary text-xs rounded border border-border"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-surface text-text-secondary text-xs rounded border border-border">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {project.liveUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="ExternalLink"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.liveUrl, '_blank');
                      }}
                      className="text-text-secondary hover:text-text-primary"
                    />
                  )}
                  
                  {project.githubUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      iconName="Github"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, '_blank');
                      }}
                      className="text-text-secondary hover:text-text-primary"
                    />
                  )}
                </div>
                
                <div className="flex items-center space-x-1 text-text-secondary">
                  <Icon name="Clock" size={14} />
                  <span className="text-xs">{project.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectGrid;