import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocalExpertiseSection = () => {
  const [selectedExpertise, setSelectedExpertise] = useState('local-seo');

  const localExpertise = {
    'local-seo': {
      name: 'Mumbai Local SEO',
      icon: 'MapPin',
      color: 'from-success to-secondary',
      description: 'Specialized local search optimization for Mumbai businesses',
      features: [
        'Google My Business optimization',
        'Local keyword research and targeting',
        'Mumbai-specific schema markup',
        'Local citation building',
        'Neighborhood-based content strategy',
        'Multi-location SEO management'
      ],
      results: [
        { metric: 'Local Rankings', improvement: '+250%', description: 'Average improvement in local search visibility' },
        { metric: 'GMB Views', improvement: '+180%', description: 'Increase in Google My Business profile views' },
        { metric: 'Local Calls', improvement: '+320%', description: 'More phone calls from local searches' }
      ],
      caseStudy: {
        client: 'Mumbai Restaurant Chain',
        challenge: 'Low visibility in local searches across 8 locations',
        solution: 'Implemented location-specific SEO strategy with optimized GMB profiles',
        result: '400% increase in local search traffic within 6 months'
      }
    },
    'multilingual': {
      name: 'Multilingual Implementation',
      icon: 'Languages',
      color: 'from-accent to-warning',
      description: 'Hindi, Marathi, and English website implementations',
      features: [
        'Multi-language WordPress setup',
        'Hreflang implementation',
        'Cultural adaptation strategies',
        'Regional content optimization',
        'Language-specific SEO',
        'RTL language support'
      ],
      results: [
        { metric: 'Regional Traffic', improvement: '+200%', description: 'Increase in traffic from regional searches' },
        { metric: 'User Engagement', improvement: '+150%', description: 'Better engagement with localized content' },
        { metric: 'Conversion Rate', improvement: '+85%', description: 'Higher conversions from regional visitors' }
      ],
      caseStudy: {
        client: 'Educational Institute',
        challenge: 'Needed to serve content in Hindi, Marathi, and English',
        solution: 'Built multilingual WordPress site with proper SEO structure',
        result: 'Expanded reach to 3x more regional audience'
      }
    },
    'payment-gateways': {
      name: 'Indian Payment Integration',
      icon: 'CreditCard',
      color: 'from-primary to-secondary',
      description: 'Razorpay, PayU, and UPI integration expertise',
      features: [
        'Razorpay payment gateway setup',
        'PayU integration and testing',
        'UPI payment implementation',
        'Paytm business integration',
        'Multi-currency support (INR focus)',
        'Payment security optimization'
      ],
      results: [
        { metric: 'Payment Success', improvement: '+95%', description: 'Payment completion rate improvement' },
        { metric: 'Checkout Speed', improvement: '+60%', description: 'Faster payment processing' },
        { metric: 'User Trust', improvement: '+120%', description: 'Increased confidence in payment security' }
      ],
      caseStudy: {
        client: 'E-commerce Startup',
        challenge: 'High payment abandonment rates with international gateways',
        solution: 'Integrated multiple Indian payment options with UPI priority',
        result: '70% reduction in payment abandonment'
      }
    },
    'compliance': {
      name: 'Indian Web Compliance',
      icon: 'Shield',
      color: 'from-secondary to-accent',
      description: 'GDPR, data localization, and Indian digital compliance',
      features: [
        'Data Protection Act compliance',
        'Cookie consent implementation',
        'Privacy policy generation',
        'Terms of service drafting',
        'Data localization strategies',
        'Accessibility compliance (WCAG)'
      ],
      results: [
        { metric: 'Compliance Score', improvement: '+100%', description: 'Full compliance with Indian regulations' },
        { metric: 'User Trust', improvement: '+90%', description: 'Improved user confidence' },
        { metric: 'Legal Risk', improvement: '-100%', description: 'Eliminated compliance-related risks' }
      ],
      caseStudy: {
        client: 'FinTech Company',
        challenge: 'Needed complete compliance with Indian financial regulations',
        solution: 'Implemented comprehensive compliance framework',
        result: 'Successfully passed regulatory audits'
      }
    }
  };

  const currentExpertise = localExpertise[selectedExpertise];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-headline text-text-primary mb-4">
          Mumbai Market Expertise
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Specialized knowledge and experience serving the unique needs of Mumbai and Maharashtra businesses, 
          with deep understanding of local market dynamics and regulatory requirements.
        </p>
      </div>

      {/* Expertise Selection */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(localExpertise).map(([key, expertise]) => (
          <motion.button
            key={key}
            onClick={() => setSelectedExpertise(key)}
            className={`p-6 rounded-xl border transition-all duration-normal text-left ${
              selectedExpertise === key
                ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-primary' :'bg-card border-border hover:border-secondary'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${expertise.color} flex items-center justify-center mb-4`}>
              <Icon name={expertise.icon} size={24} className="text-white" />
            </div>
            <h3 className="font-semibold text-text-primary mb-2">{expertise.name}</h3>
            <p className="text-sm text-text-secondary">{expertise.description}</p>
          </motion.button>
        ))}
      </div>

      {/* Detailed View */}
      <motion.div
        key={selectedExpertise}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border rounded-2xl p-8"
      >
        <div className="flex items-center space-x-4 mb-8">
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${currentExpertise.color} flex items-center justify-center`}>
            <Icon name={currentExpertise.icon} size={32} className="text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-text-primary">{currentExpertise.name}</h3>
            <p className="text-text-secondary">{currentExpertise.description}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Features & Capabilities */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-4">Key Capabilities</h4>
              <div className="space-y-3">
                {currentExpertise.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-text-secondary">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div>
              <h4 className="text-lg font-semibold text-text-primary mb-4">Typical Results</h4>
              <div className="space-y-4">
                {currentExpertise.results.map((result, index) => (
                  <motion.div
                    key={result.metric}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-surface/50 rounded-xl p-4 border border-border"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-text-primary">{result.metric}</span>
                      <span className="text-2xl font-bold text-success">{result.improvement}</span>
                    </div>
                    <p className="text-sm text-text-secondary">{result.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Case Study */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-border">
            <h4 className="text-lg font-semibold text-text-primary mb-4">Featured Case Study</h4>
            
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-primary mb-2">{currentExpertise.caseStudy.client}</h5>
              </div>

              <div>
                <h6 className="font-medium text-text-primary mb-1">Challenge</h6>
                <p className="text-sm text-text-secondary">{currentExpertise.caseStudy.challenge}</p>
              </div>

              <div>
                <h6 className="font-medium text-text-primary mb-1">Solution</h6>
                <p className="text-sm text-text-secondary">{currentExpertise.caseStudy.solution}</p>
              </div>

              <div className="bg-card rounded-lg p-4 border border-border">
                <h6 className="font-medium text-success mb-1">Result</h6>
                <p className="text-sm font-semibold text-text-primary">{currentExpertise.caseStudy.result}</p>
              </div>

              <Button variant="outline" size="sm" iconName="ExternalLink" className="w-full">
                View Full Case Study
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mumbai Business Insights */}
      <div className="bg-surface/50 rounded-2xl p-8 border border-border">
        <h3 className="text-xl font-semibold text-text-primary mb-6">Mumbai Business Landscape Insights</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-success to-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="TrendingUp" size={32} className="text-white" />
            </div>
            <h4 className="font-semibold text-text-primary mb-2">Market Understanding</h4>
            <p className="text-sm text-text-secondary">
              Deep knowledge of Mumbai's diverse business ecosystem, from traditional industries to emerging startups.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-warning rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Users" size={32} className="text-white" />
            </div>
            <h4 className="font-semibold text-text-primary mb-2">Cultural Sensitivity</h4>
            <p className="text-sm text-text-secondary">
              Understanding of local customs, languages, and business practices that influence digital strategy.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Icon name="Zap" size={32} className="text-white" />
            </div>
            <h4 className="font-semibold text-text-primary mb-2">Rapid Adaptation</h4>
            <p className="text-sm text-text-secondary">
              Quick adaptation to changing local regulations, market trends, and consumer behavior patterns.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button variant="default" iconName="MapPin" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Explore Mumbai-Specific Solutions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LocalExpertiseSection;