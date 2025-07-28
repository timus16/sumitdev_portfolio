import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, onSelectService }) => {
  const {
    id,
    title,
    description,
    icon,
    features,
    startingPrice,
    duration,
    isPopular,
    deliverables
  } = service;

  return (
    <div className={`relative bg-card border border-border rounded-xl p-6 shadow-floating hover:shadow-dramatic transition-all duration-normal group ${
      isPopular ? 'ring-2 ring-secondary' : ''
    }`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium font-cta">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center shadow-subtle">
            <Icon name={icon} size={24} className="text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-text-primary font-headline">{title}</h3>
            <p className="text-sm text-text-secondary font-body">Starting from ₹{startingPrice.toLocaleString('en-IN')}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-text-secondary font-body">Duration</p>
          <p className="text-sm font-medium text-text-primary font-body">{duration}</p>
        </div>
      </div>

      <p className="text-text-secondary mb-6 font-body leading-relaxed">{description}</p>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-text-primary mb-3 font-headline">Key Features</h4>
        <ul className="space-y-2">
          {features.slice(0, 4).map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
              <span className="text-sm text-text-secondary font-body">{feature}</span>
            </li>
          ))}
          {features.length > 4 && (
            <li className="text-sm text-text-secondary font-body italic">
              +{features.length - 4} more features
            </li>
          )}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-text-primary mb-3 font-headline">Deliverables</h4>
        <div className="flex flex-wrap gap-2">
          {deliverables.slice(0, 3).map((deliverable, index) => (
            <span key={index} className="px-3 py-1 bg-surface text-text-primary text-xs rounded-full font-body">
              {deliverable}
            </span>
          ))}
          {deliverables.length > 3 && (
            <span className="px-3 py-1 bg-surface text-text-secondary text-xs rounded-full font-body">
              +{deliverables.length - 3} more
            </span>
          )}
        </div>
      </div>

      <Button
        variant={isPopular ? "default" : "outline"}
        fullWidth
        iconName="ArrowRight"
        iconPosition="right"
        className={isPopular ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground" : ""}
        onClick={() => onSelectService(service)}
      >
        Get Started
      </Button>
    </div>
  );
};

export default ServiceCard;