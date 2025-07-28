import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const CertificationBadges = ({ certifications, onCertificationClick }) => {
  const badgesRef = useRef(null);
  const isInView = useInView(badgesRef, { threshold: 0.2 });
  const [hoveredCert, setHoveredCert] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const badgeVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotateY: -90
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.1,
      rotateY: 15,
      z: 50,
      transition: { duration: 0.2 }
    }
  };

  const getCertificationIcon = (type) => {
    const iconMap = {
      'Google': 'Chrome',
      'WordPress': 'Wordpress',
      'SEO': 'TrendingUp',
      'Analytics': 'BarChart3',
      'Performance': 'Zap',
      'Security': 'Shield',
      'Development': 'Code'
    };
    return iconMap[type] || 'Award';
  };

  const getCertificationColor = (type) => {
    const colorMap = {
      'Google': 'from-blue-500 to-green-500',
      'WordPress': 'from-blue-600 to-gray-700',
      'SEO': 'from-purple-500 to-pink-500',
      'Analytics': 'from-orange-500 to-red-500',
      'Performance': 'from-yellow-500 to-orange-500',
      'Security': 'from-green-500 to-teal-500',
      'Development': 'from-indigo-500 to-purple-500'
    };
    return colorMap[type] || 'from-primary to-secondary';
  };

  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-20 hidden xl:block">
      <motion.div
        ref={badgesRef}
        className="relative w-20"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Background Glow */}
        <div className="absolute -inset-4 bg-gradient-to-b from-secondary/10 via-accent/5 to-secondary/10 rounded-full blur-xl"></div>
        
        {/* Title */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-center">
          <h3 className="text-sm font-bold font-headline text-primary mb-1 whitespace-nowrap">
            Certifications
          </h3>
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto"></div>
        </div>

        {/* Certification Badges */}
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={badgeVariants}
              whileHover="hover"
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredCert(cert.id)}
              onMouseLeave={() => setHoveredCert(null)}
              onClick={() => onCertificationClick(cert)}
            >
              {/* Badge Container */}
              <div className={`w-16 h-16 bg-gradient-to-br ${getCertificationColor(cert.type)} rounded-xl shadow-floating flex items-center justify-center relative overflow-hidden`}>
                {/* Badge Icon */}
                <Icon 
                  name={getCertificationIcon(cert.type)} 
                  size={24} 
                  className="text-white z-10 relative" 
                />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                {/* Verification Badge */}
                {cert.verified && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-success rounded-full flex items-center justify-center">
                    <Icon name="Check" size={12} className="text-white" />
                  </div>
                )}
                
                {/* Year Badge */}
                <div className="absolute -bottom-1 -right-1 bg-background text-primary text-xs font-bold px-1 py-0.5 rounded border border-border">
                  {cert.year}
                </div>
              </div>

              {/* Hover Tooltip */}
              {hoveredCert === cert.id && (
                <motion.div
                  initial={{ opacity: 0, x: -20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  className="absolute left-20 top-0 bg-card border border-border rounded-lg shadow-dramatic p-4 w-64 z-30"
                  style={{ transformOrigin: 'left center' }}
                >
                  {/* Tooltip Arrow */}
                  <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-card"></div>
                  
                  {/* Certification Logo */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${getCertificationColor(cert.type)} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon name={getCertificationIcon(cert.type)} size={20} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-primary text-sm leading-tight">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-text-secondary mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Certification Details */}
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2 text-xs">
                      <Icon name="Calendar" size={12} className="text-text-secondary" />
                      <span className="text-text-secondary">
                        Issued: {cert.issueDate}
                      </span>
                    </div>
                    {cert.expiryDate && (
                      <div className="flex items-center gap-2 text-xs">
                        <Icon name="Clock" size={12} className="text-text-secondary" />
                        <span className="text-text-secondary">
                          Expires: {cert.expiryDate}
                        </span>
                      </div>
                    )}
                    {cert.credentialId && (
                      <div className="flex items-center gap-2 text-xs">
                        <Icon name="Hash" size={12} className="text-text-secondary" />
                        <span className="text-text-secondary font-mono">
                          {cert.credentialId}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Skills Covered */}
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs font-medium text-primary mb-2">Skills Covered:</p>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.slice(0, 3).map((skill, i) => (
                          <span key={i} className="px-2 py-1 bg-surface text-xs text-text-secondary rounded">
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 3 && (
                          <span className="px-2 py-1 bg-muted text-xs text-text-secondary rounded">
                            +{cert.skills.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {cert.verificationUrl && (
                      <Button
                        variant="outline"
                        size="xs"
                        iconName="ExternalLink"
                        iconPosition="right"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(cert.verificationUrl, '_blank');
                        }}
                        className="flex-1"
                      >
                        Verify
                      </Button>
                    )}
                    {cert.certificateUrl && (
                      <Button
                        variant="secondary"
                        size="xs"
                        iconName="Download"
                        iconPosition="right"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(cert.certificateUrl, '_blank');
                        }}
                        className="flex-1"
                      >
                        View
                      </Button>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Connection Line to Next Badge */}
              {index < certifications.length - 1 && (
                <div className="absolute left-1/2 -bottom-2 w-px h-4 bg-gradient-to-b from-secondary/40 to-transparent transform -translate-x-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-accent rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${10 + i * 15}%`,
              }}
              animate={{
                x: [0, 10, 0],
                y: [0, -15, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Bottom Summary */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mb-2"></div>
          <p className="text-xs text-text-secondary whitespace-nowrap">
            {certifications.length} Verified
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CertificationBadges;