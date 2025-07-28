import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingTable = () => {
  const [selectedCategory, setSelectedCategory] = useState('wordpress');

  const pricingData = {
    wordpress: {
      title: "WordPress Development",
      packages: [
        {
          name: "Starter Business",
          price: 25000,
          duration: "2-3 weeks",
          description: "Perfect for small businesses and startups",
          features: [
            "5-page responsive website",
            "Mobile-optimized design",
            "Basic SEO setup",
            "Contact form integration",
            "Google Analytics setup",
            "1 month free support"
          ],
          popular: false
        },
        {
          name: "Professional Business",
          price: 50000,
          duration: "3-4 weeks",
          description: "Ideal for growing businesses",
          features: [
            "10-page responsive website",
            "Custom design & branding",
            "Advanced SEO optimization",
            "Blog/news section",
            "Social media integration",
            "Performance optimization",
            "3 months free support"
          ],
          popular: true
        },
        {
          name: "E-commerce Store",
          price: 75000,
          duration: "4-6 weeks",
          description: "Complete online store solution",
          features: [
            "Unlimited products",
            "Payment gateway integration",
            "Inventory management",
            "Order tracking system",
            "Customer accounts",
            "SEO-optimized product pages",
            "6 months free support"
          ],
          popular: false
        },
        {
          name: "Custom Application",
          price: 150000,
          duration: "8-12 weeks",
          description: "Tailored solutions for complex needs",
          features: [
            "Custom functionality",
            "Database design",
            "User management system",
            "API integrations",
            "Advanced security",
            "Performance optimization",
            "12 months free support"
          ],
          popular: false
        }
      ]
    },
    seo: {
      title: "Technical SEO Services",
      packages: [
        {
          name: "SEO Audit",
          price: 15000,
          duration: "1 week",
          description: "Comprehensive website analysis",
          features: [
            "Technical SEO audit",
            "Keyword research",
            "Competitor analysis",
            "Performance review",
            "Detailed report",
            "Action plan"
          ],
          popular: false
        },
        {
          name: "Monthly Retainer",
          price: 25000,
          duration: "Monthly",
          description: "Ongoing SEO optimization",
          features: [
            "Monthly keyword tracking",
            "Content optimization",
            "Technical improvements",
            "Link building",
            "Monthly reports",
            "Strategy adjustments"
          ],
          popular: true
        },
        {
          name: "Local SEO Package",
          price: 35000,
          duration: "2-3 months",
          description: "Dominate local search results",
          features: [
            "Google My Business optimization",
            "Local keyword targeting",
            "Citation building",
            "Review management",
            "Local content strategy",
            "Monthly local reports"
          ],
          popular: false
        },
        {
          name: "Complete Overhaul",
          price: 75000,
          duration: "3-4 months",
          description: "Full SEO transformation",
          features: [
            "Complete site restructure",
            "Technical SEO fixes",
            "Content strategy",
            "Link building campaign",
            "Performance optimization",
            "Ongoing monitoring"
          ],
          popular: false
        }
      ]
    },
    performance: {
      title: "Performance Optimization",
      packages: [
        {
          name: "Basic Optimization",
          price: 20000,
          duration: "1-2 weeks",
          description: "Essential speed improvements",
          features: [
            "Image optimization",
            "Basic caching setup",
            "Code minification",
            "Database cleanup",
            "Performance report",
            "1 month monitoring"
          ],
          popular: false
        },
        {
          name: "Advanced Performance",
          price: 50000,
          duration: "2-3 weeks",
          description: "Comprehensive speed optimization",
          features: [
            "Advanced caching layers",
            "CDN implementation",
            "Database optimization",
            "Code optimization",
            "Server configuration",
            "3 months monitoring"
          ],
          popular: true
        },
        {
          name: "Enterprise Performance",
          price: 100000,
          duration: "3-4 weeks",
          description: "Maximum performance solution",
          features: [
            "Custom performance strategy",
            "Advanced server optimization",
            "Load balancing setup",
            "Performance monitoring",
            "24/7 support",
            "12 months monitoring"
          ],
          popular: false
        }
      ]
    },
    maintenance: {
      title: "Website Maintenance",
      packages: [
        {
          name: "Basic Maintenance",
          price: 8000,
          duration: "Monthly",
          description: "Essential website care",
          features: [
            "WordPress updates",
            "Plugin updates",
            "Security monitoring",
            "Weekly backups",
            "Uptime monitoring",
            "Email support"
          ],
          popular: false
        },
        {
          name: "Premium Support",
          price: 20000,
          duration: "Monthly",
          description: "Comprehensive website care",
          features: [
            "All basic features",
            "Content updates",
            "Performance monitoring",
            "Security scans",
            "Monthly reports",
            "Priority support"
          ],
          popular: true
        },
        {
          name: "Enterprise Package",
          price: 40000,
          duration: "Monthly",
          description: "Complete website management",
          features: [
            "All premium features",
            "24/7 monitoring",
            "Emergency support",
            "Custom development",
            "SEO maintenance",
            "Dedicated account manager"
          ],
          popular: false
        }
      ]
    }
  };

  const categories = [
    { id: 'wordpress', label: 'WordPress', icon: 'Code' },
    { id: 'seo', label: 'SEO', icon: 'Search' },
    { id: 'performance', label: 'Performance', icon: 'Zap' },
    { id: 'maintenance', label: 'Maintenance', icon: 'Settings' }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-floating">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-accent to-warning rounded-lg flex items-center justify-center">
          <Icon name="DollarSign" size={20} className="text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-text-primary font-headline">Transparent Pricing</h3>
          <p className="text-sm text-text-secondary font-body">Choose the right package for your needs</p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium font-body transition-all duration-normal ${
              selectedCategory === category.id
                ? 'bg-primary text-primary-foreground shadow-subtle'
                : 'bg-surface text-text-primary hover:bg-border'
            }`}
          >
            <Icon name={category.icon} size={16} />
            <span>{category.label}</span>
          </button>
        ))}
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {pricingData[selectedCategory].packages.map((pkg, index) => (
          <div
            key={index}
            className={`relative bg-background border rounded-lg p-4 hover:shadow-floating transition-all duration-normal ${
              pkg.popular ? 'border-secondary ring-2 ring-secondary/20' : 'border-border'
            }`}
          >
            {pkg.popular && (
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium font-cta">
                  Popular
                </span>
              </div>
            )}

            <div className="text-center mb-4">
              <h4 className="text-lg font-semibold text-text-primary mb-1 font-headline">{pkg.name}</h4>
              <div className="text-2xl font-bold text-secondary mb-1 font-headline">
                ₹{pkg.price.toLocaleString('en-IN')}
              </div>
              <p className="text-sm text-text-secondary font-body">{pkg.duration}</p>
            </div>

            <p className="text-sm text-text-secondary text-center mb-4 font-body">{pkg.description}</p>

            <ul className="space-y-2 mb-6">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <Icon name="Check" size={14} className="text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-text-secondary font-body">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              variant={pkg.popular ? "default" : "outline"}
              fullWidth
              size="sm"
              iconName="ArrowRight"
              iconPosition="right"
              className={pkg.popular ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground" : ""}
            >
              Get Started
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-surface rounded-lg border-l-4 border-accent">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-accent mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-1 font-headline">Custom Solutions Available</h4>
            <p className="text-sm text-text-secondary font-body">
              Need something different? All packages can be customized to fit your specific requirements. 
              Contact me for a personalized quote based on your unique needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;