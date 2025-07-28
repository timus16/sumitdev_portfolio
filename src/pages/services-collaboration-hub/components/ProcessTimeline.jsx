import React from 'react';
import Icon from '../../../components/AppIcon';

const ProcessTimeline = () => {
  const processSteps = [
    {
      id: 1,
      title: "Initial Consultation",
      description: "Free 30-minute discovery call to understand your requirements, goals, and current challenges.",
      duration: "30 mins",
      icon: "MessageCircle",
      deliverables: ["Project brief", "Requirements analysis", "Initial timeline"]
    },
    {
      id: 2,
      title: "Technical Audit",
      description: "Comprehensive analysis of your current website, SEO status, and technical infrastructure.",
      duration: "2-3 days",
      icon: "Search",
      deliverables: ["Audit report", "Recommendations", "Priority matrix"]
    },
    {
      id: 3,
      title: "Strategy Development",
      description: "Custom strategy creation based on audit findings and your business objectives.",
      duration: "3-5 days",
      icon: "Target",
      deliverables: ["Project roadmap", "Technical specifications", "Timeline"]
    },
    {
      id: 4,
      title: "Implementation Phase",
      description: "Development and optimization work with regular progress updates and milestone reviews.",
      duration: "2-12 weeks",
      icon: "Code",
      deliverables: ["Weekly updates", "Milestone demos", "Quality assurance"]
    },
    {
      id: 5,
      title: "Testing & Launch",
      description: "Thorough testing across devices and browsers before going live with your optimized site.",
      duration: "3-5 days",
      icon: "Rocket",
      deliverables: ["Testing report", "Launch checklist", "Go-live support"]
    },
    {
      id: 6,
      title: "Ongoing Optimization",
      description: "Continuous monitoring, performance tracking, and optimization based on real user data.",
      duration: "Ongoing",
      icon: "TrendingUp",
      deliverables: ["Monthly reports", "Performance insights", "Optimization updates"]
    }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-floating">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
          <Icon name="GitBranch" size={20} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-text-primary font-headline">Collaboration Process</h3>
          <p className="text-sm text-text-secondary font-body">How we work together</p>
        </div>
      </div>

      <div className="relative">
        {processSteps.map((step, index) => (
          <div key={step.id} className="relative flex items-start space-x-4 pb-8 last:pb-0">
            {/* Timeline Line */}
            {index < processSteps.length - 1 && (
              <div className="absolute left-6 top-12 w-0.5 h-full bg-border"></div>
            )}
            
            {/* Step Icon */}
            <div className="relative z-10 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-subtle">
              <Icon name={step.icon} size={20} className="text-white" />
            </div>

            {/* Step Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-semibold text-text-primary font-headline">{step.title}</h4>
                <span className="text-sm text-text-secondary bg-surface px-3 py-1 rounded-full font-body">
                  {step.duration}
                </span>
              </div>
              
              <p className="text-text-secondary mb-3 font-body leading-relaxed">{step.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {step.deliverables.map((deliverable, idx) => (
                  <span key={idx} className="inline-flex items-center space-x-1 text-xs bg-success/10 text-success px-2 py-1 rounded-full font-body">
                    <Icon name="Check" size={12} />
                    <span>{deliverable}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-surface rounded-lg border-l-4 border-accent">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-accent mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-1 font-headline">Flexible Approach</h4>
            <p className="text-sm text-text-secondary font-body">
              Every project is unique. This process adapts to your specific needs, timeline, and budget constraints. 
              We maintain transparent communication throughout each phase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;