import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const InteractiveToolsSection = () => {
  const [activeDemo, setActiveDemo] = useState('meta-generator');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [coreVitalsUrl, setCoreVitalsUrl] = useState('');
  const [vitalsResults, setVitalsResults] = useState(null);

  const tools = [
    {
      id: 'meta-generator',
      name: 'Meta Tag Generator',
      description: 'Generate optimized meta tags for better SEO',
      icon: 'Tag',
      color: 'from-secondary to-accent'
    },
    {
      id: 'core-vitals',
      name: 'Core Web Vitals Checker',
      description: 'Analyze website performance metrics',
      icon: 'Gauge',
      color: 'from-accent to-warning'
    },
    {
      id: 'schema-builder',
      name: 'Schema Markup Builder',
      description: 'Create structured data for search engines',
      icon: 'Code2',
      color: 'from-primary to-secondary'
    }
  ];

  const handleVitalsCheck = () => {
    // Mock Core Web Vitals results
    setTimeout(() => {
      setVitalsResults({
        lcp: { value: 2.1, score: 85, status: 'good' },
        fid: { value: 45, score: 92, status: 'good' },
        cls: { value: 0.08, score: 78, status: 'needs-improvement' },
        fcp: { value: 1.3, score: 88, status: 'good' },
        ttfb: { value: 180, score: 82, status: 'good' }
      });
    }, 1500);
  };

  const generateMetaTags = () => {
    if (!metaTitle || !metaDescription) return '';
    
    return `<!-- Generated Meta Tags -->
<title>${metaTitle}</title>
<meta name="description" content="${metaDescription}" />
<meta property="og:title" content="${metaTitle}" />
<meta property="og:description" content="${metaDescription}" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${metaTitle}" />
<meta name="twitter:description" content="${metaDescription}" />
<meta name="twitter:site" content="@sumit23679" />
<meta name="twitter:creator" content="@sumit23679" />`;
  };

  const getVitalsColor = (status) => {
    switch (status) {
      case 'good': return 'text-success';
      case 'needs-improvement': return 'text-warning';
      case 'poor': return 'text-destructive';
      default: return 'text-text-secondary';
    }
  };

  const getVitalsBg = (status) => {
    switch (status) {
      case 'good': return 'bg-success/10 border-success/20';
      case 'needs-improvement': return 'bg-warning/10 border-warning/20';
      case 'poor': return 'bg-destructive/10 border-destructive/20';
      default: return 'bg-surface border-border';
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-headline text-text-primary mb-4">
          Interactive SEO Tools
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Experience hands-on demonstrations of SEO optimization tools and techniques I use in real projects.
        </p>
      </div>

      {/* Tool Selection */}
      <div className="flex flex-wrap justify-center gap-4">
        {tools.map((tool) => (
          <motion.button
            key={tool.id}
            onClick={() => setActiveDemo(tool.id)}
            className={`flex items-center space-x-3 px-6 py-4 rounded-xl border transition-all duration-normal ${
              activeDemo === tool.id
                ? 'bg-gradient-to-r from-primary/10 to-secondary/10 border-primary text-primary' :'bg-card border-border text-text-secondary hover:border-secondary hover:text-text-primary'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center`}>
              <Icon name={tool.icon} size={20} className="text-white" />
            </div>
            <div className="text-left">
              <div className="font-semibold">{tool.name}</div>
              <div className="text-sm opacity-80">{tool.description}</div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Tool Demos */}
      <div className="bg-card border border-border rounded-2xl p-8">
        {activeDemo === 'meta-generator' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <Icon name="Tag" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Meta Tag Generator</h3>
                <p className="text-text-secondary">Create SEO-optimized meta tags for your website</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Input
                  label="Page Title"
                  placeholder="Enter your page title (50-60 characters)"
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  description={`${metaTitle.length}/60 characters`}
                />
                <Input
                  label="Meta Description"
                  placeholder="Enter your meta description (150-160 characters)"
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  description={`${metaDescription.length}/160 characters`}
                />
                <Button 
                  variant="default" 
                  iconName="Wand2" 
                  disabled={!metaTitle || !metaDescription}
                  className="w-full"
                >
                  Generate Meta Tags
                </Button>
              </div>

              <div className="bg-primary/5 rounded-xl p-4 border border-border">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">Generated Code</h4>
                  <Button variant="outline" size="sm" iconName="Copy">
                    Copy
                  </Button>
                </div>
                <pre className="text-sm font-mono text-text-secondary overflow-x-auto">
                  <code>{generateMetaTags() || '<!-- Enter title and description to generate meta tags -->'}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        )}

        {activeDemo === 'core-vitals' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-warning flex items-center justify-center">
                <Icon name="Gauge" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Core Web Vitals Checker</h3>
                <p className="text-text-secondary">Analyze website performance and user experience metrics</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex space-x-4">
                <Input
                  placeholder="Enter website URL (e.g., https://example.com)"
                  value={coreVitalsUrl}
                  onChange={(e) => setCoreVitalsUrl(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  variant="default" 
                  iconName="Search" 
                  onClick={handleVitalsCheck}
                  disabled={!coreVitalsUrl}
                >
                  Analyze
                </Button>
              </div>

              {vitalsResults && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6"
                >
                  <div className={`p-4 rounded-xl border ${getVitalsBg(vitalsResults.lcp.status)}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">LCP</span>
                      <span className={`text-sm font-medium ${getVitalsColor(vitalsResults.lcp.status)}`}>
                        {vitalsResults.lcp.status.replace('-', ' ')}
                      </span>
                    </div>
                    <div className="text-2xl font-bold mb-1">{vitalsResults.lcp.value}s</div>
                    <div className="text-sm text-text-secondary">Largest Contentful Paint</div>
                    <div className="mt-2 bg-border rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${vitalsResults.lcp.status === 'good' ? 'bg-success' : vitalsResults.lcp.status === 'needs-improvement' ? 'bg-warning' : 'bg-destructive'}`}
                        style={{ width: `${vitalsResults.lcp.score}%` }}
                      />
                    </div>
                  </div>

                  <div className={`p-4 rounded-xl border ${getVitalsBg(vitalsResults.fid.status)}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">FID</span>
                      <span className={`text-sm font-medium ${getVitalsColor(vitalsResults.fid.status)}`}>
                        {vitalsResults.fid.status.replace('-', ' ')}
                      </span>
                    </div>
                    <div className="text-2xl font-bold mb-1">{vitalsResults.fid.value}ms</div>
                    <div className="text-sm text-text-secondary">First Input Delay</div>
                    <div className="mt-2 bg-border rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${vitalsResults.fid.status === 'good' ? 'bg-success' : vitalsResults.fid.status === 'needs-improvement' ? 'bg-warning' : 'bg-destructive'}`}
                        style={{ width: `${vitalsResults.fid.score}%` }}
                      />
                    </div>
                  </div>

                  <div className={`p-4 rounded-xl border ${getVitalsBg(vitalsResults.cls.status)}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">CLS</span>
                      <span className={`text-sm font-medium ${getVitalsColor(vitalsResults.cls.status)}`}>
                        {vitalsResults.cls.status.replace('-', ' ')}
                      </span>
                    </div>
                    <div className="text-2xl font-bold mb-1">{vitalsResults.cls.value}</div>
                    <div className="text-sm text-text-secondary">Cumulative Layout Shift</div>
                    <div className="mt-2 bg-border rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${vitalsResults.cls.status === 'good' ? 'bg-success' : vitalsResults.cls.status === 'needs-improvement' ? 'bg-warning' : 'bg-destructive'}`}
                        style={{ width: `${vitalsResults.cls.score}%` }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}

        {activeDemo === 'schema-builder' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Code2" size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Schema Markup Builder</h3>
                <p className="text-text-secondary">Generate structured data for better search engine understanding</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="h-20 flex-col">
                    <Icon name="Building" size={24} className="mb-2" />
                    <span>Local Business</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Icon name="ShoppingBag" size={24} className="mb-2" />
                    <span>Product</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Icon name="FileText" size={24} className="mb-2" />
                    <span>Article</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Icon name="Calendar" size={24} className="mb-2" />
                    <span>Event</span>
                  </Button>
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-4 border border-border">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">Schema Preview</h4>
                  <Button variant="outline" size="sm" iconName="Copy">
                    Copy JSON-LD
                  </Button>
                </div>
                <pre className="text-sm font-mono text-text-secondary overflow-x-auto">
                  <code>{`{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SumitDev Web Solutions",
  "description": "Professional web development and SEO services in Mumbai",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mumbai, Maharashtra",
    "addressCountry": "IN"
  },
  "telephone": "+91-XXXXXXXXXX",
  "url": "https://sumitdev.com",
  "priceRange": "₹₹"
}`}</code>
                </pre>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default InteractiveToolsSection;