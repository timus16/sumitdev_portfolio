import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import MetricsOverview from './components/MetricsOverview';
import CaseStudyWidget from './components/CaseStudyWidget';
import TechnicalSEOAudit from './components/TechnicalSEOAudit';
import KeywordTracker from './components/KeywordTracker';
import LocalSEOResults from './components/LocalSEOResults';
import CompetitiveAnalysis from './components/CompetitiveAnalysis';
import MobileOptimization from './components/MobileOptimization';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const SEOResultsDashboard = () => {
  return (
    <>
      <Helmet>
        <title>SEO Results Dashboard - Proven Performance & Growth | SumitDev</title>
        <meta name="description" content="Explore real SEO results and performance improvements achieved for clients. Interactive dashboard showcasing traffic growth, ranking improvements, and business impact across Mumbai-based projects." />
        <meta name="keywords" content="SEO results, performance dashboard, traffic growth, ranking improvements, Mumbai SEO, conversion optimization, technical SEO audit" />
        <meta property="og:title" content="SEO Results Dashboard - Proven Performance & Growth" />
        <meta property="og:description" content="Interactive dashboard showcasing real SEO improvements, traffic growth, and business impact for Mumbai-based clients." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/seo-results-dashboard" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-primary via-primary/95 to-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="TrendingUp" size={16} />
                <span>Real Results • Measurable Growth</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold font-headline text-white mb-6">
                SEO Results
                <span className="block text-gradient-accent">Dashboard</span>
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 font-body">
                Explore real SEO improvements achieved for clients through interactive charts, 
                performance metrics, and detailed case studies showcasing measurable business impact.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  variant="secondary" 
                  size="lg"
                  iconName="BarChart3" 
                  iconPosition="left"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  View Live Analytics
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  iconName="Download" 
                  iconPosition="right"
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Download Reports
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">847%</div>
                <div className="text-white/80 text-sm lg:text-base">Avg Traffic Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">23.4</div>
                <div className="text-white/80 text-sm lg:text-base">Positions Gained</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">₹2.8Cr</div>
                <div className="text-white/80 text-sm lg:text-base">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">94%</div>
                <div className="text-white/80 text-sm lg:text-base">Client Retention</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Dashboard Content */}
        <main className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Metrics Overview */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold font-headline text-text-primary mb-4">
                  Performance Overview
                </h2>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                  Comprehensive metrics showcasing the cumulative impact of SEO strategies 
                  across all client projects and campaigns.
                </p>
              </div>
              <MetricsOverview />
            </section>

            {/* Case Study Widget */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold font-headline text-text-primary mb-4">
                  Client Success Stories
                </h2>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                  Detailed case studies showcasing the journey from initial challenges 
                  to remarkable SEO success for Mumbai-based businesses.
                </p>
              </div>
              <CaseStudyWidget />
            </section>

            {/* Technical SEO Audit */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold font-headline text-text-primary mb-4">
                  Technical SEO Improvements
                </h2>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                  Visual audits showing Core Web Vitals enhancements, site speed optimizations, 
                  and mobile usability fixes with measurable impact.
                </p>
              </div>
              <TechnicalSEOAudit />
            </section>

            {/* Keyword Tracker */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold font-headline text-text-primary mb-4">
                  Keyword Ranking Progress
                </h2>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                  Interactive timeline controls showing the gradual climb to first-page positions 
                  for high-value keywords and search terms.
                </p>
              </div>
              <KeywordTracker />
            </section>

            {/* Local SEO Results */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold font-headline text-text-primary mb-4">
                  Local SEO Success
                </h2>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                  Google My Business optimizations, local pack appearances, and review management 
                  outcomes for Mumbai-area businesses.
                </p>
              </div>
              <LocalSEOResults />
            </section>

            {/* Competitive Analysis */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold font-headline text-text-primary mb-4">
                  Competitive Analysis
                </h2>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                  How client websites now outrank competitors for valuable search terms 
                  across different industries and market segments.
                </p>
              </div>
              <CompetitiveAnalysis />
            </section>

            {/* Mobile Optimization */}
            <section>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold font-headline text-text-primary mb-4">
                  Mobile Optimization Impact
                </h2>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                  Responsive design improvements and their impact on mobile search performance, 
                  particularly relevant for Mumbai's mobile-first market.
                </p>
              </div>
              <MobileOptimization />
            </section>

            {/* Methodology Section */}
            <section className="bg-surface rounded-2xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold font-headline text-text-primary mb-4">
                  Our SEO Methodology
                </h2>
                <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                  Understanding the strategic approach behind these remarkable improvements 
                  and consistent results across diverse industries.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-card rounded-xl shadow-subtle">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Search" size={32} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2 font-headline">
                    Technical Audit
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Comprehensive site analysis identifying performance bottlenecks and optimization opportunities.
                  </p>
                </div>

                <div className="text-center p-6 bg-card rounded-xl shadow-subtle">
                  <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Target" size={32} className="text-secondary" />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2 font-headline">
                    Keyword Strategy
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Data-driven keyword research and competitive analysis for maximum impact.
                  </p>
                </div>

                <div className="text-center p-6 bg-card rounded-xl shadow-subtle">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Code" size={32} className="text-accent" />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2 font-headline">
                    Implementation
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Strategic execution of technical fixes, content optimization, and performance enhancements.
                  </p>
                </div>

                <div className="text-center p-6 bg-card rounded-xl shadow-subtle">
                  <div className="w-16 h-16 bg-success/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="BarChart3" size={32} className="text-success" />
                  </div>
                  <h3 className="font-semibold text-text-primary mb-2 font-headline">
                    Monitoring
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Continuous tracking, analysis, and optimization based on real performance data.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 lg:p-12">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold font-headline text-white mb-4">
                  Ready to Achieve Similar Results?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Let's discuss how these proven SEO strategies can drive growth 
                  and measurable results for your business.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Button 
                    variant="secondary" 
                    size="lg"
                    iconName="Calendar" 
                    iconPosition="left"
                    className="bg-white text-primary hover:bg-white/90"
                  >
                    Schedule SEO Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    iconName="FileText" 
                    iconPosition="right"
                    className="border-white text-white hover:bg-white hover:text-primary"
                  >
                    Get Free SEO Audit
                  </Button>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg font-headline">S</span>
                </div>
                <h3 className="text-2xl font-bold font-headline">SumitDev</h3>
              </div>
              <p className="text-white/80 mb-6">
                SEO-driven development that delivers measurable results for Mumbai businesses.
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-white/60">
                <span>© {new Date().getFullYear()} SumitDev. All rights reserved.</span>
                <span>•</span>
                <span>Mumbai, Maharashtra</span>
                <span>•</span>
                <span>Results-Driven SEO</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default SEOResultsDashboard;