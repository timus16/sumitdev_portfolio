import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialCard = ({ testimonial }) => {
  const {
    id,
    name,
    company,
    role,
    avatar,
    content,
    rating,
    serviceType,
    results,
    projectValue
  } = testimonial;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? "text-accent fill-current" : "text-border"}
      />
    ));
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-floating hover:shadow-dramatic transition-all duration-normal">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Image
              src={avatar}
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-card"></div>
          </div>
          <div>
            <h4 className="text-base font-semibold text-text-primary font-headline">{name}</h4>
            <p className="text-sm text-text-secondary font-body">{role} at {company}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          {renderStars(rating)}
        </div>
      </div>

      <blockquote className="text-text-secondary mb-4 font-body leading-relaxed italic">
        "{content}"
      </blockquote>

      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center space-x-1 text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full font-body">
          <Icon name="Tag" size={12} />
          <span>{serviceType}</span>
        </span>
        <span className="text-xs text-text-secondary font-body">
          Project Value: ₹{projectValue.toLocaleString('en-IN')}
        </span>
      </div>

      {results && (
        <div className="border-t border-border pt-4">
          <h5 className="text-sm font-semibold text-text-primary mb-2 font-headline">Key Results</h5>
          <div className="grid grid-cols-2 gap-3">
            {results.map((result, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-bold text-success font-headline">{result.value}</div>
                <div className="text-xs text-text-secondary font-body">{result.metric}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;