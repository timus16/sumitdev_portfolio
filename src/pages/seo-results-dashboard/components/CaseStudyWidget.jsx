import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CaseStudyWidget = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      client: "Mumbai Steel Industries",
      industry: "Manufacturing",
      duration: "8 months",
      keywordTarget: "steel suppliers mumbai",
      beforeRanking: "Page 3 (Position 27)",
      afterRanking: "Position 1",
      trafficIncrease: "456%",
      conversionIncrease: "78%",
      revenueImpact: "₹18.5L monthly",
      challenges: [
        "High competition in industrial sector",
        "Technical website issues",
        "Poor local SEO presence"
      ],
      solutions: [
        "Comprehensive technical SEO audit",
        "Local business optimization",
        "Content strategy for industrial keywords"
      ],
      timeline: [
        { month: "Month 1-2", task: "Technical audit & fixes", status: "completed" },
        { month: "Month 3-4", task: "Content optimization", status: "completed" },
        { month: "Month 5-6", task: "Link building campaign", status: "completed" },
        { month: "Month 7-8", task: "Local SEO enhancement", status: "completed" }
      ]
    },
    {
      id: 2,
      client: "Digital Marketing Hub",
      industry: "Digital Services",
      duration: "6 months",
      keywordTarget: "digital marketing mumbai",
      beforeRanking: "Page 2 (Position 18)",
      afterRanking: "Position 3",
      trafficIncrease: "234%",
      conversionIncrease: "45%",
      revenueImpact: "₹12.3L monthly",
      challenges: [
        "Saturated digital marketing space",
        "Brand authority building",
        "Mobile optimization issues"
      ],
      solutions: [
        "Authority content creation",
        "Mobile-first optimization",
        "Strategic internal linking"
      ],
      timeline: [
        { month: "Month 1-2", task: "Competitive analysis", status: "completed" },
        { month: "Month 3-4", task: "Content strategy execution", status: "completed" },
        { month: "Month 5-6", task: "Authority building", status: "completed" }
      ]
    },
    {
      id: 3,
      client: "Healthcare Solutions Pvt Ltd",
      industry: "Healthcare",
      duration: "10 months",
      keywordTarget: "healthcare services mumbai",
      beforeRanking: "Not in top 50",
      afterRanking: "Position 2",
      trafficIncrease: "678%",
      conversionIncrease: "89%",
      revenueImpact: "₹25.7L monthly",
      challenges: [
        "Medical content compliance",
        "Trust signal optimization",
        "Local healthcare competition"
      ],
      solutions: [
        "Medical SEO best practices",
        "Trust signal enhancement",
        "Local healthcare optimization"
      ],
      timeline: [
        { month: "Month 1-3", task: "Compliance audit", status: "completed" },
        { month: "Month 4-6", task: "Content development", status: "completed" },
        { month: "Month 7-8", task: "Trust optimization", status: "completed" },
        { month: "Month 9-10", task: "Local presence boost", status: "completed" }
      ]
    }
  ];

  const currentCase = caseStudies[selectedCase];

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-subtle">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold font-headline text-text-primary">
          Client Success Stories
        </h2>
        <div className="flex space-x-2">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedCase(index)}
              className={`w-3 h-3 rounded-full transition-all duration-normal ${
                selectedCase === index 
                  ? 'bg-primary' :'bg-border hover:bg-text-secondary'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Client Overview */}
        <div className="space-y-6">
          <div className="bg-surface rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Building" size={24} className="text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-text-primary font-headline">
                  {currentCase.client}
                </h3>
                <p className="text-sm text-text-secondary">
                  {currentCase.industry} • {currentCase.duration}
                </p>
              </div>
            </div>
            <div className="text-sm text-text-secondary">
              Target Keyword: <span className="font-medium text-text-primary">"{currentCase.keywordTarget}"</span>
            </div>
          </div>

          {/* Results Comparison */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 text-center">
              <div className="text-sm text-text-secondary mb-1">Before</div>
              <div className="font-bold text-destructive">{currentCase.beforeRanking}</div>
            </div>
            <div className="bg-success/10 border border-success/20 rounded-lg p-4 text-center">
              <div className="text-sm text-text-secondary mb-1">After</div>
              <div className="font-bold text-success">{currentCase.afterRanking}</div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-surface rounded-lg">
              <span className="text-text-secondary">Traffic Increase</span>
              <span className="font-bold text-success">+{currentCase.trafficIncrease}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-surface rounded-lg">
              <span className="text-text-secondary">Conversion Increase</span>
              <span className="font-bold text-accent">+{currentCase.conversionIncrease}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-surface rounded-lg">
              <span className="text-text-secondary">Revenue Impact</span>
              <span className="font-bold text-warning">{currentCase.revenueImpact}</span>
            </div>
          </div>
        </div>

        {/* Strategy & Timeline */}
        <div className="space-y-6">
          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-surface rounded-lg p-4">
              <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                <Icon name="AlertTriangle" size={18} className="mr-2 text-warning" />
                Key Challenges
              </h4>
              <ul className="space-y-2">
                {currentCase.challenges.map((challenge, index) => (
                  <li key={index} className="text-sm text-text-secondary flex items-start">
                    <Icon name="Minus" size={16} className="mr-2 mt-0.5 text-text-secondary" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-surface rounded-lg p-4">
              <h4 className="font-semibold text-text-primary mb-3 flex items-center">
                <Icon name="CheckCircle" size={18} className="mr-2 text-success" />
                Solutions Implemented
              </h4>
              <ul className="space-y-2">
                {currentCase.solutions.map((solution, index) => (
                  <li key={index} className="text-sm text-text-secondary flex items-start">
                    <Icon name="Check" size={16} className="mr-2 mt-0.5 text-success" />
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-surface rounded-lg p-4">
            <h4 className="font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="Clock" size={18} className="mr-2 text-secondary" />
              Project Timeline
            </h4>
            <div className="space-y-3">
              {currentCase.timeline.map((phase, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-text-primary text-sm">
                      {phase.month}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {phase.task}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-border">
        <Button 
          variant="outline" 
          iconName="ExternalLink" 
          iconPosition="right"
          className="w-full sm:w-auto"
        >
          View Detailed Case Study
        </Button>
      </div>
    </div>
  );
};

export default CaseStudyWidget;