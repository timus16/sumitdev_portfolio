import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalSEOAudit = () => {
  const [selectedAudit, setSelectedAudit] = useState(0);

  const auditResults = [
    {
      id: 1,
      client: "E-commerce Fashion Store",
      auditDate: "January 2025",
      coreWebVitals: {
        lcp: { before: 4.2, after: 1.8, unit: "s", status: "improved" },
        fid: { before: 180, after: 45, unit: "ms", status: "improved" },
        cls: { before: 0.25, after: 0.05, unit: "", status: "improved" }
      },
      pageSpeed: {
        desktop: { before: 65, after: 94, unit: "/100" },
        mobile: { before: 42, after: 87, unit: "/100" }
      },
      technicalIssues: {
        before: 47,
        after: 3,
        resolved: [
          "Duplicate meta descriptions",
          "Missing alt tags",
          "Broken internal links",
          "Slow server response time",
          "Unoptimized images"
        ]
      },
      mobileUsability: {
        score: { before: 78, after: 96, unit: "/100" },
        issues: [
          "Text too small to read",
          "Clickable elements too close",
          "Content wider than screen"
        ]
      }
    },
    {
      id: 2,
      client: "Local Restaurant Chain",
      auditDate: "December 2024",
      coreWebVitals: {
        lcp: { before: 3.8, after: 2.1, unit: "s", status: "improved" },
        fid: { before: 220, after: 65, unit: "ms", status: "improved" },
        cls: { before: 0.18, after: 0.08, unit: "", status: "improved" }
      },
      pageSpeed: {
        desktop: { before: 58, after: 89, unit: "/100" },
        mobile: { before: 38, after: 82, unit: "/100" }
      },
      technicalIssues: {
        before: 32,
        after: 2,
        resolved: [
          "Missing structured data",
          "Slow loading images",
          "HTTP instead of HTTPS",
          "Missing XML sitemap",
          "Poor URL structure"
        ]
      },
      mobileUsability: {
        score: { before: 72, after: 94, unit: "/100" },
        issues: [
          "Viewport not configured",
          "Touch elements overlap",
          "Font size too small"
        ]
      }
    }
  ];

  const currentAudit = auditResults[selectedAudit];

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

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-subtle">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold font-headline text-text-primary">
          Technical SEO Audit Results
        </h2>
        <div className="flex space-x-2">
          {auditResults.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedAudit(index)}
              className={`px-3 py-1 rounded-full text-sm transition-all duration-normal ${
                selectedAudit === index 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-surface text-text-secondary hover:bg-border'
              }`}
            >
              Case {index + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
            <Icon name="Activity" size={20} className="text-secondary" />
          </div>
          <div>
            <h3 className="font-semibold text-text-primary font-headline">
              {currentAudit.client}
            </h3>
            <p className="text-sm text-text-secondary">
              Audit completed: {currentAudit.auditDate}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Core Web Vitals */}
        <div className="space-y-6">
          <div className="bg-surface rounded-lg p-4">
            <h4 className="font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="Zap" size={18} className="mr-2 text-accent" />
              Core Web Vitals
            </h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-text-primary">Largest Contentful Paint</div>
                  <div className="text-sm text-text-secondary">Loading performance</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-text-secondary">
                    {currentAudit.coreWebVitals.lcp.before}{currentAudit.coreWebVitals.lcp.unit} → 
                    <span className="text-success font-medium ml-1">
                      {currentAudit.coreWebVitals.lcp.after}{currentAudit.coreWebVitals.lcp.unit}
                    </span>
                  </div>
                  <div className="text-xs text-success">
                    {Math.round(((currentAudit.coreWebVitals.lcp.before - currentAudit.coreWebVitals.lcp.after) / currentAudit.coreWebVitals.lcp.before) * 100)}% faster
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-text-primary">First Input Delay</div>
                  <div className="text-sm text-text-secondary">Interactivity</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-text-secondary">
                    {currentAudit.coreWebVitals.fid.before}{currentAudit.coreWebVitals.fid.unit} → 
                    <span className="text-success font-medium ml-1">
                      {currentAudit.coreWebVitals.fid.after}{currentAudit.coreWebVitals.fid.unit}
                    </span>
                  </div>
                  <div className="text-xs text-success">
                    {Math.round(((currentAudit.coreWebVitals.fid.before - currentAudit.coreWebVitals.fid.after) / currentAudit.coreWebVitals.fid.before) * 100)}% faster
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-text-primary">Cumulative Layout Shift</div>
                  <div className="text-sm text-text-secondary">Visual stability</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-text-secondary">
                    {currentAudit.coreWebVitals.cls.before} → 
                    <span className="text-success font-medium ml-1">
                      {currentAudit.coreWebVitals.cls.after}
                    </span>
                  </div>
                  <div className="text-xs text-success">
                    {Math.round(((currentAudit.coreWebVitals.cls.before - currentAudit.coreWebVitals.cls.after) / currentAudit.coreWebVitals.cls.before) * 100)}% better
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Page Speed Scores */}
          <div className="bg-surface rounded-lg p-4">
            <h4 className="font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="Gauge" size={18} className="mr-2 text-warning" />
              PageSpeed Insights
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-sm text-text-secondary mb-2">Desktop</div>
                <div className="flex items-center justify-center space-x-2">
                  <div className={`text-2xl font-bold ${getScoreColor(currentAudit.pageSpeed.desktop.before)}`}>
                    {currentAudit.pageSpeed.desktop.before}
                  </div>
                  <Icon name="ArrowRight" size={16} className="text-text-secondary" />
                  <div className={`text-2xl font-bold ${getScoreColor(currentAudit.pageSpeed.desktop.after)}`}>
                    {currentAudit.pageSpeed.desktop.after}
                  </div>
                </div>
                <div className="text-xs text-success mt-1">
                  +{currentAudit.pageSpeed.desktop.after - currentAudit.pageSpeed.desktop.before} points
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-text-secondary mb-2">Mobile</div>
                <div className="flex items-center justify-center space-x-2">
                  <div className={`text-2xl font-bold ${getScoreColor(currentAudit.pageSpeed.mobile.before)}`}>
                    {currentAudit.pageSpeed.mobile.before}
                  </div>
                  <Icon name="ArrowRight" size={16} className="text-text-secondary" />
                  <div className={`text-2xl font-bold ${getScoreColor(currentAudit.pageSpeed.mobile.after)}`}>
                    {currentAudit.pageSpeed.mobile.after}
                  </div>
                </div>
                <div className="text-xs text-success mt-1">
                  +{currentAudit.pageSpeed.mobile.after - currentAudit.pageSpeed.mobile.before} points
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Issues & Mobile Usability */}
        <div className="space-y-6">
          <div className="bg-surface rounded-lg p-4">
            <h4 className="font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="AlertCircle" size={18} className="mr-2 text-destructive" />
              Technical Issues Resolved
            </h4>
            <div className="flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-destructive">
                      {currentAudit.technicalIssues.before}
                    </div>
                    <div className="text-sm text-text-secondary">Before</div>
                  </div>
                  <Icon name="ArrowRight" size={20} className="text-text-secondary" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-success">
                      {currentAudit.technicalIssues.after}
                    </div>
                    <div className="text-sm text-text-secondary">After</div>
                  </div>
                </div>
                <div className="text-sm text-success mt-2">
                  {currentAudit.technicalIssues.before - currentAudit.technicalIssues.after} issues resolved
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-text-primary mb-2">Key Issues Fixed:</div>
              {currentAudit.technicalIssues.resolved.map((issue, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span className="text-text-secondary">{issue}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface rounded-lg p-4">
            <h4 className="font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="Smartphone" size={18} className="mr-2 text-secondary" />
              Mobile Usability
            </h4>
            <div className="text-center mb-4">
              <div className="flex items-center justify-center space-x-4">
                <div className="text-center">
                  <div className={`text-3xl font-bold ${getScoreColor(currentAudit.mobileUsability.score.before)}`}>
                    {currentAudit.mobileUsability.score.before}
                  </div>
                  <div className="text-sm text-text-secondary">Before</div>
                </div>
                <Icon name="ArrowRight" size={20} className="text-text-secondary" />
                <div className="text-center">
                  <div className={`text-3xl font-bold ${getScoreColor(currentAudit.mobileUsability.score.after)}`}>
                    {currentAudit.mobileUsability.score.after}
                  </div>
                  <div className="text-sm text-text-secondary">After</div>
                </div>
              </div>
              <div className="text-sm text-success mt-2">
                +{currentAudit.mobileUsability.score.after - currentAudit.mobileUsability.score.before} point improvement
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium text-text-primary mb-2">Issues Resolved:</div>
              {currentAudit.mobileUsability.issues.map((issue, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span className="text-text-secondary">{issue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSEOAudit;