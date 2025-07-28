import React from 'react';
import Icon from '../../../components/AppIcon';

const MetricsOverview = () => {
  const overviewMetrics = [
    {
      id: 1,
      title: "Total Organic Traffic Increase",
      value: "847%",
      change: "+312K monthly visitors",
      icon: "TrendingUp",
      color: "text-success",
      bgColor: "bg-success/10",
      description: "Cumulative traffic growth across all client projects"
    },
    {
      id: 2,
      title: "Average Ranking Improvement",
      value: "23.4",
      change: "positions gained",
      icon: "ArrowUp",
      color: "text-accent",
      bgColor: "bg-accent/10",
      description: "Mean ranking improvement for targeted keywords"
    },
    {
      id: 3,
      title: "Business Value Generated",
      value: "₹2.8Cr",
      change: "+₹45L this quarter",
      icon: "DollarSign",
      color: "text-warning",
      bgColor: "bg-warning/10",
      description: "Estimated revenue impact from SEO improvements"
    },
    {
      id: 4,
      title: "Client Retention Rate",
      value: "94%",
      change: "+8% YoY",
      icon: "Users",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      description: "Long-term partnership success rate"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {overviewMetrics.map((metric) => (
        <div
          key={metric.id}
          className="bg-card border border-border rounded-xl p-6 shadow-subtle hover:shadow-floating transition-all duration-normal group"
        >
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-lg ${metric.bgColor} group-hover:scale-110 transition-transform duration-normal`}>
              <Icon 
                name={metric.icon} 
                size={24} 
                className={metric.color}
              />
            </div>
            <div className="text-right">
              <div className={`text-2xl font-bold font-headline ${metric.color}`}>
                {metric.value}
              </div>
              <div className="text-sm text-text-secondary">
                {metric.change}
              </div>
            </div>
          </div>
          <h3 className="font-semibold text-text-primary mb-2 font-headline">
            {metric.title}
          </h3>
          <p className="text-sm text-text-secondary font-body">
            {metric.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MetricsOverview;