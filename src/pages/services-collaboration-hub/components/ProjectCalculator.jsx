import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';
import Select from '../../../components/ui/Select';

const ProjectCalculator = () => {
  const [selectedService, setSelectedService] = useState('');
  const [projectType, setProjectType] = useState('');
  const [features, setFeatures] = useState([]);
  const [timeline, setTimeline] = useState('');
  const [estimatedCost, setEstimatedCost] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const serviceOptions = [
    { value: 'wordpress', label: 'WordPress Development' },
    { value: 'seo', label: 'Technical SEO' },
    { value: 'performance', label: 'Performance Optimization' },
    { value: 'maintenance', label: 'Website Maintenance' }
  ];

  const projectTypeOptions = {
    wordpress: [
      { value: 'business', label: 'Business Website', basePrice: 25000 },
      { value: 'ecommerce', label: 'E-commerce Store', basePrice: 75000 },
      { value: 'portfolio', label: 'Portfolio Website', basePrice: 20000 },
      { value: 'blog', label: 'Blog/News Site', basePrice: 30000 },
      { value: 'custom', label: 'Custom Application', basePrice: 150000 }
    ],
    seo: [
      { value: 'audit', label: 'SEO Audit', basePrice: 15000 },
      { value: 'optimization', label: 'Complete Optimization', basePrice: 75000 },
      { value: 'monthly', label: 'Monthly Retainer', basePrice: 25000 },
      { value: 'local', label: 'Local SEO', basePrice: 35000 }
    ],
    performance: [
      { value: 'basic', label: 'Basic Optimization', basePrice: 20000 },
      { value: 'advanced', label: 'Advanced Performance', basePrice: 50000 },
      { value: 'monitoring', label: 'Ongoing Monitoring', basePrice: 15000 }
    ],
    maintenance: [
      { value: 'basic', label: 'Basic Maintenance', basePrice: 8000 },
      { value: 'premium', label: 'Premium Support', basePrice: 20000 },
      { value: 'enterprise', label: 'Enterprise Package', basePrice: 40000 }
    ]
  };

  const featureOptions = {
    wordpress: [
      { id: 'responsive', label: 'Mobile Responsive Design', price: 5000 },
      { id: 'cms', label: 'Content Management System', price: 8000 },
      { id: 'seo-basic', label: 'Basic SEO Setup', price: 10000 },
      { id: 'analytics', label: 'Analytics Integration', price: 3000 },
      { id: 'security', label: 'Security Features', price: 7000 },
      { id: 'backup', label: 'Automated Backups', price: 4000 },
      { id: 'multilingual', label: 'Multi-language Support', price: 15000 },
      { id: 'payment', label: 'Payment Gateway', price: 12000 }
    ],
    seo: [
      { id: 'keyword', label: 'Keyword Research', price: 8000 },
      { id: 'content', label: 'Content Optimization', price: 12000 },
      { id: 'technical', label: 'Technical SEO', price: 15000 },
      { id: 'local-seo', label: 'Local SEO Setup', price: 10000 },
      { id: 'schema', label: 'Schema Markup', price: 6000 },
      { id: 'reporting', label: 'Monthly Reporting', price: 5000 }
    ],
    performance: [
      { id: 'caching', label: 'Advanced Caching', price: 8000 },
      { id: 'cdn', label: 'CDN Setup', price: 5000 },
      { id: 'images', label: 'Image Optimization', price: 6000 },
      { id: 'database', label: 'Database Optimization', price: 10000 },
      { id: 'monitoring', label: 'Performance Monitoring', price: 7000 }
    ],
    maintenance: [
      { id: 'updates', label: 'Regular Updates', price: 2000 },
      { id: 'security-scan', label: 'Security Scanning', price: 3000 },
      { id: 'backup-service', label: 'Backup Service', price: 2500 },
      { id: 'support', label: '24/7 Support', price: 8000 }
    ]
  };

  const timelineOptions = [
    { value: '1-2', label: '1-2 weeks' },
    { value: '2-4', label: '2-4 weeks' },
    { value: '1-2-months', label: '1-2 months' },
    { value: '2-3-months', label: '2-3 months' },
    { value: '3-6-months', label: '3-6 months' }
  ];

  useEffect(() => {
    calculateEstimate();
  }, [selectedService, projectType, features, timeline]);

  const calculateEstimate = () => {
    if (!selectedService || !projectType) {
      setEstimatedCost(0);
      return;
    }

    const basePrice = projectTypeOptions[selectedService]?.find(
      option => option.value === projectType
    )?.basePrice || 0;

    const featuresPrice = features.reduce((total, featureId) => {
      const feature = featureOptions[selectedService]?.find(f => f.id === featureId);
      return total + (feature?.price || 0);
    }, 0);

    const timelineMultiplier = timeline === '1-2' ? 1.2 : timeline === '2-4' ? 1.1 : 1;
    
    const total = (basePrice + featuresPrice) * timelineMultiplier;
    setEstimatedCost(total);
    setShowResults(total > 0);
  };

  const handleFeatureChange = (featureId, checked) => {
    if (checked) {
      setFeatures([...features, featureId]);
    } else {
      setFeatures(features.filter(id => id !== featureId));
    }
  };

  const resetCalculator = () => {
    setSelectedService('');
    setProjectType('');
    setFeatures([]);
    setTimeline('');
    setEstimatedCost(0);
    setShowResults(false);
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-floating">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-warning rounded-lg flex items-center justify-center">
            <Icon name="Calculator" size={20} className="text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-text-primary font-headline">Project Calculator</h3>
            <p className="text-sm text-text-secondary font-body">Get instant cost estimates</p>
          </div>
        </div>
        {showResults && (
          <Button variant="ghost" size="sm" iconName="RotateCcw" onClick={resetCalculator}>
            Reset
          </Button>
        )}
      </div>

      <div className="space-y-6">
        <Select
          label="Select Service"
          placeholder="Choose a service"
          options={serviceOptions}
          value={selectedService}
          onChange={setSelectedService}
          required
        />

        {selectedService && (
          <Select
            label="Project Type"
            placeholder="Choose project type"
            options={projectTypeOptions[selectedService] || []}
            value={projectType}
            onChange={setProjectType}
            required
          />
        )}

        {selectedService && projectType && (
          <div>
            <label className="block text-sm font-medium text-text-primary mb-3 font-headline">
              Additional Features
            </label>
            <div className="space-y-3 max-h-48 overflow-y-auto">
              {featureOptions[selectedService]?.map((feature) => (
                <Checkbox
                  key={feature.id}
                  label={`${feature.label} (+₹${feature.price.toLocaleString('en-IN')})`}
                  checked={features.includes(feature.id)}
                  onChange={(e) => handleFeatureChange(feature.id, e.target.checked)}
                />
              ))}
            </div>
          </div>
        )}

        {selectedService && projectType && (
          <Select
            label="Timeline"
            placeholder="Select timeline"
            options={timelineOptions}
            value={timeline}
            onChange={setTimeline}
          />
        )}

        {showResults && (
          <div className="bg-surface rounded-lg p-4 border-l-4 border-secondary">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-text-primary font-headline">Estimated Cost</span>
              <span className="text-2xl font-bold text-secondary font-headline">
                ₹{estimatedCost.toLocaleString('en-IN')}
              </span>
            </div>
            <p className="text-xs text-text-secondary font-body">
              *Final pricing may vary based on specific requirements and complexity
            </p>
            <div className="mt-4 flex space-x-3">
              <Button variant="default" size="sm" iconName="MessageCircle" iconPosition="left">
                Discuss Project
              </Button>
              <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCalculator;