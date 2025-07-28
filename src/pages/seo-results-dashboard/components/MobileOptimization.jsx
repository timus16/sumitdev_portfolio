import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MobileOptimization = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const mobileProjects = [
    {
      id: 1,
      projectName: "E-commerce Fashion Store",
      clientType: "Retail",
      optimizationPeriod: "3 months",
      mobileTraffic: {
        before: 45,
        after: 78,
        timeline: [
          { month: 'Jan', percentage: 45, conversions: 2.1 },
          { month: 'Feb', percentage: 52, conversions: 2.8 },
          { month: 'Mar', percentage: 65, conversions: 3.4 },
          { month: 'Apr', percentage: 78, conversions: 4.2 }
        ]
      },
      coreWebVitals: {
        lcp: { before: 4.8, after: 2.1, target: 2.5 },
        fid: { before: 280, after: 85, target: 100 },
        cls: { before: 0.35, after: 0.08, target: 0.1 }
      },
      mobileUsability: {
        score: { before: 62, after: 94 },
        issues: [
          { issue: "Text too small to read", status: "fixed" },
          { issue: "Clickable elements too close", status: "fixed" },
          { issue: "Content wider than screen", status: "fixed" },
          { issue: "Viewport not set", status: "fixed" }
        ]
      },
      pageSpeed: {
        mobile: { before: 38, after: 89 },
        desktop: { before: 72, after: 96 }
      },
      businessImpact: {
        mobileConversions: { before: 2.1, after: 4.2 },
        mobileRevenue: { before: 180000, after: 420000 },
        bounceRate: { before: 68, after: 32 }
      }
    },
    {
      id: 2,
      projectName: "Local Restaurant Chain",
      clientType: "Food & Beverage",
      optimizationPeriod: "4 months",
      mobileTraffic: {
        before: 52,
        after: 85,
        timeline: [
          { month: 'Jan', percentage: 52, conversions: 3.2 },
          { month: 'Feb', percentage: 61, conversions: 3.8 },
          { month: 'Mar', percentage: 73, conversions: 4.5 },
          { month: 'Apr', percentage: 85, conversions: 5.8 }
        ]
      },
      coreWebVitals: {
        lcp: { before: 5.2, after: 1.9, target: 2.5 },
        fid: { before: 320, after: 65, target: 100 },
        cls: { before: 0.28, after: 0.06, target: 0.1 }
      },
      mobileUsability: {
        score: { before: 58, after: 92 },
        issues: [
          { issue: "Touch elements overlap", status: "fixed" },
          { issue: "Font size inadequate", status: "fixed" },
          { issue: "Horizontal scrolling", status: "fixed" },
          { issue: "Slow loading images", status: "fixed" }
        ]
      },
      pageSpeed: {
        mobile: { before: 34, after: 87 },
        desktop: { before: 68, after: 94 }
      },
      businessImpact: {
        mobileConversions: { before: 3.2, after: 5.8 },
        mobileRevenue: { before: 250000, after: 580000 },
        bounceRate: { before: 72, after: 28 }
      }
    },
    {
      id: 3,
      projectName: "Healthcare Services",
      clientType: "Healthcare",
      optimizationPeriod: "5 months",
      mobileTraffic: {
        before: 38,
        after: 82,
        timeline: [
          { month: 'Jan', percentage: 38, conversions: 1.8 },
          { month: 'Feb', percentage: 48, conversions: 2.4 },
          { month: 'Mar', percentage: 58, conversions: 3.1 },
          { month: 'Apr', percentage: 71, conversions: 4.2 },
          { month: 'May', percentage: 82, conversions: 5.1 }
        ]
      },
      coreWebVitals: {
        lcp: { before: 6.1, after: 2.3, target: 2.5 },
        fid: { before: 380, after: 75, target: 100 },
        cls: { before: 0.42, after: 0.09, target: 0.1 }
      },
      mobileUsability: {
        score: { before: 54, after: 96 },
        issues: [
          { issue: "Poor mobile navigation", status: "fixed" },
          { issue: "Unoptimized forms", status: "fixed" },
          { issue: "Slow image loading", status: "fixed" },
          { issue: "Inadequate touch targets", status: "fixed" }
        ]
      },
      pageSpeed: {
        mobile: { before: 31, after: 91 },
        desktop: { before: 65, after: 97 }
      },
      businessImpact: {
        mobileConversions: { before: 1.8, after: 5.1 },
        mobileRevenue: { before: 320000, after: 780000 },
        bounceRate: { before: 75, after: 25 }
      }
    }
  ];

  const currentProject = mobileProjects[selectedProject];

  const getScoreColor = (score) => {
    if (score >= 90) return "text-success";
    if (score >= 70) return "text-warning";
    return "text-destructive";
  };

  const getScoreBg = (score) => {
    if (score >= 90) return "bg-success/10";
    if (score >= 70) return "bg-warning/10";
    return "bg-destructive/10";
  };

  const getVitalStatus = (value, target) => {
    return value <= target ? "success" : "warning";
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-subtle">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold font-headline text-text-primary">
          Mobile Optimization Results
        </h2>
        <div className="flex items-center space-x-2">
          <Icon name="Smartphone" size={20} className="text-secondary" />
          <span className="text-sm text-text-secondary">Mumbai Mobile-First Market</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Project Selection */}
        <div className="space-y-3">
          <h3 className="font-semibold text-text-primary font-headline mb-4">
            Select Project
          </h3>
          {mobileProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(index)}
              className={`p-4 rounded-lg border cursor-pointer transition-all duration-normal ${
                selectedProject === index
                  ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 hover:bg-surface'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Smartphone" size={20} className="text-secondary" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-text-primary text-sm mb-1">
                    {project.projectName}
                  </div>
                  <div className="text-xs text-text-secondary mb-1">
                    {project.clientType}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {project.optimizationPeriod}
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-text-secondary">Mobile Traffic</span>
                <div className="flex items-center space-x-1">
                  <span className="text-xs text-destructive">{project.mobileTraffic.before}%</span>
                  <Icon name="ArrowRight" size={12} className="text-text-secondary" />
                  <span className="text-xs text-success">{project.mobileTraffic.after}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Display */}
        <div className="lg:col-span-3 space-y-6">
          {/* Project Overview */}
          <div className="bg-surface rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-text-primary font-headline">
                  {currentProject.projectName}
                </h3>
                <p className="text-sm text-text-secondary">
                  {currentProject.clientType} • {currentProject.optimizationPeriod}
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-text-secondary">Mobile Traffic Share</div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-destructive">
                    {currentProject.mobileTraffic.before}%
                  </span>
                  <Icon name="ArrowRight" size={16} className="text-text-secondary" />
                  <span className="text-lg font-bold text-success">
                    {currentProject.mobileTraffic.after}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Web Vitals */}
          <div className="bg-surface rounded-lg p-4">
            <h4 className="font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="Zap" size={18} className="mr-2 text-accent" />
              Core Web Vitals (Mobile)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-card rounded-lg">
                <div className="text-sm text-text-secondary mb-2">Largest Contentful Paint</div>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-lg font-bold text-destructive">
                    {currentProject.coreWebVitals.lcp.before}s
                  </span>
                  <Icon name="ArrowRight" size={16} className="text-text-secondary" />
                  <span className={`text-lg font-bold ${getVitalStatus(currentProject.coreWebVitals.lcp.after, currentProject.coreWebVitals.lcp.target) === 'success' ? 'text-success' : 'text-warning'}`}>
                    {currentProject.coreWebVitals.lcp.after}s
                  </span>
                </div>
                <div className="text-xs text-text-secondary">
                  Target: &lt;{currentProject.coreWebVitals.lcp.target}s
                </div>
                <div className={`text-xs mt-1 ${getVitalStatus(currentProject.coreWebVitals.lcp.after, currentProject.coreWebVitals.lcp.target) === 'success' ? 'text-success' : 'text-warning'}`}>
                  {getVitalStatus(currentProject.coreWebVitals.lcp.after, currentProject.coreWebVitals.lcp.target) === 'success' ? '✓ Good' : '⚠ Needs Work'}
                </div>
              </div>

              <div className="text-center p-4 bg-card rounded-lg">
                <div className="text-sm text-text-secondary mb-2">First Input Delay</div>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-lg font-bold text-destructive">
                    {currentProject.coreWebVitals.fid.before}ms
                  </span>
                  <Icon name="ArrowRight" size={16} className="text-text-secondary" />
                  <span className={`text-lg font-bold ${getVitalStatus(currentProject.coreWebVitals.fid.after, currentProject.coreWebVitals.fid.target) === 'success' ? 'text-success' : 'text-warning'}`}>
                    {currentProject.coreWebVitals.fid.after}ms
                  </span>
                </div>
                <div className="text-xs text-text-secondary">
                  Target: &lt;{currentProject.coreWebVitals.fid.target}ms
                </div>
                <div className={`text-xs mt-1 ${getVitalStatus(currentProject.coreWebVitals.fid.after, currentProject.coreWebVitals.fid.target) === 'success' ? 'text-success' : 'text-warning'}`}>
                  {getVitalStatus(currentProject.coreWebVitals.fid.after, currentProject.coreWebVitals.fid.target) === 'success' ? '✓ Good' : '⚠ Needs Work'}
                </div>
              </div>

              <div className="text-center p-4 bg-card rounded-lg">
                <div className="text-sm text-text-secondary mb-2">Cumulative Layout Shift</div>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-lg font-bold text-destructive">
                    {currentProject.coreWebVitals.cls.before}
                  </span>
                  <Icon name="ArrowRight" size={16} className="text-text-secondary" />
                  <span className={`text-lg font-bold ${getVitalStatus(currentProject.coreWebVitals.cls.after, currentProject.coreWebVitals.cls.target) === 'success' ? 'text-success' : 'text-warning'}`}>
                    {currentProject.coreWebVitals.cls.after}
                  </span>
                </div>
                <div className="text-xs text-text-secondary">
                  Target: &lt;{currentProject.coreWebVitals.cls.target}
                </div>
                <div className={`text-xs mt-1 ${getVitalStatus(currentProject.coreWebVitals.cls.after, currentProject.coreWebVitals.cls.target) === 'success' ? 'text-success' : 'text-warning'}`}>
                  {getVitalStatus(currentProject.coreWebVitals.cls.after, currentProject.coreWebVitals.cls.target) === 'success' ? '✓ Good' : '⚠ Needs Work'}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Mobile Traffic Timeline */}
            <div className="bg-surface rounded-lg p-4">
              <h4 className="font-semibold text-text-primary mb-4 flex items-center">
                <Icon name="TrendingUp" size={18} className="mr-2 text-success" />
                Mobile Traffic Growth
              </h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={currentProject.mobileTraffic.timeline}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E9ECEF" />
                    <XAxis 
                      dataKey="month" 
                      stroke="#6C757D"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="#6C757D"
                      fontSize={12}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#FFFFFF',
                        border: '1px solid #E9ECEF',
                        borderRadius: '8px',
                        fontSize: '12px'
                      }}
                      formatter={(value, name) => [
                        name === 'percentage' ? `${value}%` : `${value}%`,
                        name === 'percentage' ? 'Mobile Traffic' : 'Conversion Rate'
                      ]}
                    />
                    <Line
                      type="monotone"
                      dataKey="percentage"
                      stroke="#00D9FF"
                      strokeWidth={3}
                      dot={{ fill: '#00D9FF', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, stroke: '#00D9FF', strokeWidth: 2 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="conversions"
                      stroke="#28A745"
                      strokeWidth={2}
                      dot={{ fill: '#28A745', strokeWidth: 2, r: 3 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Page Speed Comparison */}
            <div className="bg-surface rounded-lg p-4">
              <h4 className="font-semibold text-text-primary mb-4 flex items-center">
                <Icon name="Gauge" size={18} className="mr-2 text-warning" />
                PageSpeed Scores
              </h4>
              <div className="space-y-4">
                <div className="p-3 bg-card rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-text-primary">Mobile</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-lg font-bold ${getScoreColor(currentProject.pageSpeed.mobile.before)}`}>
                        {currentProject.pageSpeed.mobile.before}
                      </span>
                      <Icon name="ArrowRight" size={16} className="text-text-secondary" />
                      <span className={`text-lg font-bold ${getScoreColor(currentProject.pageSpeed.mobile.after)}`}>
                        {currentProject.pageSpeed.mobile.after}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-success">
                    +{currentProject.pageSpeed.mobile.after - currentProject.pageSpeed.mobile.before} points improvement
                  </div>
                </div>

                <div className="p-3 bg-card rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-text-primary">Desktop</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-lg font-bold ${getScoreColor(currentProject.pageSpeed.desktop.before)}`}>
                        {currentProject.pageSpeed.desktop.before}
                      </span>
                      <Icon name="ArrowRight" size={16} className="text-text-secondary" />
                      <span className={`text-lg font-bold ${getScoreColor(currentProject.pageSpeed.desktop.after)}`}>
                        {currentProject.pageSpeed.desktop.after}
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-success">
                    +{currentProject.pageSpeed.desktop.after - currentProject.pageSpeed.desktop.before} points improvement
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-card rounded-lg">
                <div className="text-sm font-medium text-text-primary mb-2">Mobile Usability Score</div>
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${getScoreColor(currentProject.mobileUsability.score.before)}`}>
                      {currentProject.mobileUsability.score.before}
                    </div>
                    <div className="text-xs text-text-secondary">Before</div>
                  </div>
                  <Icon name="ArrowRight" size={20} className="text-text-secondary" />
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${getScoreColor(currentProject.mobileUsability.score.after)}`}>
                      {currentProject.mobileUsability.score.after}
                    </div>
                    <div className="text-xs text-text-secondary">After</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Impact & Issues Fixed */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-surface rounded-lg p-4">
              <h4 className="font-semibold text-text-primary mb-4 flex items-center">
                <Icon name="DollarSign" size={18} className="mr-2 text-accent" />
                Business Impact
              </h4>
              <div className="space-y-4">
                <div className="p-3 bg-card rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Mobile Conversion Rate</span>
                    <div className="text-right">
                      <div className="text-sm">
                        {currentProject.businessImpact.mobileConversions.before}% → 
                        <span className="text-success font-medium ml-1">
                          {currentProject.businessImpact.mobileConversions.after}%
                        </span>
                      </div>
                      <div className="text-xs text-success">
                        +{((currentProject.businessImpact.mobileConversions.after - currentProject.businessImpact.mobileConversions.before) / currentProject.businessImpact.mobileConversions.before * 100).toFixed(0)}% increase
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-card rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Mobile Revenue</span>
                    <div className="text-right">
                      <div className="text-sm">
                        ₹{(currentProject.businessImpact.mobileRevenue.before/1000).toFixed(0)}K → 
                        <span className="text-success font-medium ml-1">
                          ₹{(currentProject.businessImpact.mobileRevenue.after/1000).toFixed(0)}K
                        </span>
                      </div>
                      <div className="text-xs text-success">
                        +₹{((currentProject.businessImpact.mobileRevenue.after - currentProject.businessImpact.mobileRevenue.before)/1000).toFixed(0)}K monthly
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-card rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Mobile Bounce Rate</span>
                    <div className="text-right">
                      <div className="text-sm">
                        {currentProject.businessImpact.bounceRate.before}% → 
                        <span className="text-success font-medium ml-1">
                          {currentProject.businessImpact.bounceRate.after}%
                        </span>
                      </div>
                      <div className="text-xs text-success">
                        -{currentProject.businessImpact.bounceRate.before - currentProject.businessImpact.bounceRate.after}% reduction
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-lg p-4">
              <h4 className="font-semibold text-text-primary mb-4 flex items-center">
                <Icon name="CheckCircle" size={18} className="mr-2 text-success" />
                Mobile Issues Fixed
              </h4>
              <div className="space-y-3">
                {currentProject.mobileUsability.issues.map((issue, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-card rounded-lg">
                    <div className="w-6 h-6 bg-success/10 rounded-full flex items-center justify-center">
                      <Icon name="Check" size={14} className="text-success" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-text-primary">
                        {issue.issue}
                      </div>
                      <div className="text-xs text-success">
                        Status: Fixed
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button 
              variant="outline" 
              iconName="Smartphone" 
              iconPosition="right"
            >
              View Mobile Optimization Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileOptimization;