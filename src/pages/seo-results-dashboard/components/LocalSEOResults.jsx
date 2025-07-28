import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LocalSEOResults = () => {
  const [selectedBusiness, setSelectedBusiness] = useState(0);

  const localBusinessResults = [
    {
      id: 1,
      businessName: "Mumbai Dental Care",
      businessType: "Healthcare",
      location: "Bandra West, Mumbai",
      duration: "4 months",
      gmb: {
        views: { before: 1200, after: 4800, increase: 300 },
        calls: { before: 45, after: 180, increase: 300 },
        directions: { before: 80, after: 320, increase: 300 },
        websiteClicks: { before: 35, after: 150, increase: 328 }
      },
      localPack: {
        before: "Not visible",
        after: "Position 2",
        keywords: ["dentist bandra", "dental clinic mumbai", "teeth cleaning bandra"]
      },
      reviews: {
        count: { before: 12, after: 89, increase: 641 },
        rating: { before: 4.1, after: 4.8, increase: 17 },
        responseRate: { before: 25, after: 95, increase: 280 }
      },
      citations: {
        before: 8,
        after: 45,
        platforms: ["Justdial", "Sulekha", "Google", "Facebook", "Practo"]
      }
    },
    {
      id: 2,
      businessName: "Spice Garden Restaurant",
      businessType: "Restaurant",
      location: "Colaba, Mumbai",
      duration: "6 months",
      gmb: {
        views: { before: 2100, after: 8500, increase: 304 },
        calls: { before: 120, after: 450, increase: 275 },
        directions: { before: 180, after: 680, increase: 277 },
        websiteClicks: { before: 85, after: 340, increase: 300 }
      },
      localPack: {
        before: "Position 8",
        after: "Position 1",
        keywords: ["restaurant colaba", "indian food mumbai", "dinner colaba"]
      },
      reviews: {
        count: { before: 34, after: 156, increase: 358 },
        rating: { before: 4.2, after: 4.7, increase: 11 },
        responseRate: { before: 40, after: 98, increase: 145 }
      },
      citations: {
        before: 15,
        after: 62,
        platforms: ["Zomato", "Swiggy", "Google", "TripAdvisor", "Dineout"]
      }
    },
    {
      id: 3,
      businessName: "TechFix Solutions",
      businessType: "Electronics Repair",
      location: "Andheri East, Mumbai",
      duration: "5 months",
      gmb: {
        views: { before: 800, after: 3200, increase: 300 },
        calls: { before: 60, after: 240, increase: 300 },
        directions: { before: 45, after: 180, increase: 300 },
        websiteClicks: { before: 25, after: 120, increase: 380 }
      },
      localPack: {
        before: "Not visible",
        after: "Position 3",
        keywords: ["mobile repair andheri", "laptop repair mumbai", "electronics service"]
      },
      reviews: {
        count: { before: 8, after: 67, increase: 737 },
        rating: { before: 3.9, after: 4.6, increase: 17 },
        responseRate: { before: 12, after: 89, increase: 641 }
      },
      citations: {
        before: 5,
        after: 38,
        platforms: ["Justdial", "Sulekha", "Google", "Urban Company", "LocalCircles"]
      }
    }
  ];

  const currentBusiness = localBusinessResults[selectedBusiness];

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-subtle">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold font-headline text-text-primary">
          Local SEO Success Stories
        </h2>
        <div className="flex items-center space-x-2">
          <Icon name="MapPin" size={20} className="text-secondary" />
          <span className="text-sm text-text-secondary">Mumbai Area Businesses</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Business Selection */}
        <div className="space-y-3">
          <h3 className="font-semibold text-text-primary font-headline mb-4">
            Select Business
          </h3>
          {localBusinessResults.map((business, index) => (
            <div
              key={business.id}
              onClick={() => setSelectedBusiness(index)}
              className={`p-4 rounded-lg border cursor-pointer transition-all duration-normal ${
                selectedBusiness === index
                  ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 hover:bg-surface'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Icon 
                    name={business.businessType === 'Healthcare' ? 'Heart' : 
                          business.businessType === 'Restaurant' ? 'Utensils' : 'Wrench'} 
                    size={20} 
                    className="text-secondary" 
                  />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-text-primary text-sm mb-1">
                    {business.businessName}
                  </div>
                  <div className="text-xs text-text-secondary mb-1">
                    {business.businessType}
                  </div>
                  <div className="text-xs text-text-secondary">
                    {business.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Results Display */}
        <div className="lg:col-span-3 space-y-6">
          {/* Business Overview */}
          <div className="bg-surface rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-text-primary font-headline">
                  {currentBusiness.businessName}
                </h3>
                <p className="text-sm text-text-secondary">
                  {currentBusiness.businessType} • {currentBusiness.location}
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-text-secondary">Campaign Duration</div>
                <div className="font-semibold text-text-primary">{currentBusiness.duration}</div>
              </div>
            </div>
          </div>

          {/* Google My Business Metrics */}
          <div className="bg-surface rounded-lg p-4">
            <h4 className="font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="MapPin" size={18} className="mr-2 text-secondary" />
              Google My Business Performance
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-card rounded-lg">
                <div className="text-2xl font-bold text-secondary mb-1">
                  {currentBusiness.gmb.views.after.toLocaleString()}
                </div>
                <div className="text-sm text-text-secondary mb-1">Profile Views</div>
                <div className="text-xs text-success">
                  +{currentBusiness.gmb.views.increase}%
                </div>
              </div>
              <div className="text-center p-3 bg-card rounded-lg">
                <div className="text-2xl font-bold text-accent mb-1">
                  {currentBusiness.gmb.calls.after}
                </div>
                <div className="text-sm text-text-secondary mb-1">Phone Calls</div>
                <div className="text-xs text-success">
                  +{currentBusiness.gmb.calls.increase}%
                </div>
              </div>
              <div className="text-center p-3 bg-card rounded-lg">
                <div className="text-2xl font-bold text-warning mb-1">
                  {currentBusiness.gmb.directions.after}
                </div>
                <div className="text-sm text-text-secondary mb-1">Directions</div>
                <div className="text-xs text-success">
                  +{currentBusiness.gmb.directions.increase}%
                </div>
              </div>
              <div className="text-center p-3 bg-card rounded-lg">
                <div className="text-2xl font-bold text-primary mb-1">
                  {currentBusiness.gmb.websiteClicks.after}
                </div>
                <div className="text-sm text-text-secondary mb-1">Website Clicks</div>
                <div className="text-xs text-success">
                  +{currentBusiness.gmb.websiteClicks.increase}%
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Local Pack Rankings */}
            <div className="bg-surface rounded-lg p-4">
              <h4 className="font-semibold text-text-primary mb-4 flex items-center">
                <Icon name="Search" size={18} className="mr-2 text-success" />
                Local Pack Rankings
              </h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-card rounded-lg">
                  <div>
                    <div className="font-medium text-text-primary">Current Position</div>
                    <div className="text-sm text-text-secondary">Local search results</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-text-secondary">
                      {currentBusiness.localPack.before} → 
                    </div>
                    <div className="text-lg font-bold text-success">
                      {currentBusiness.localPack.after}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-text-primary mb-2">
                    Ranking Keywords:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentBusiness.localPack.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews & Reputation */}
            <div className="bg-surface rounded-lg p-4">
              <h4 className="font-semibold text-text-primary mb-4 flex items-center">
                <Icon name="Star" size={18} className="mr-2 text-accent" />
                Reviews & Reputation
              </h4>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-card rounded-lg">
                    <div className="text-xl font-bold text-accent">
                      {currentBusiness.reviews.count.after}
                    </div>
                    <div className="text-xs text-text-secondary">Total Reviews</div>
                    <div className="text-xs text-success">
                      +{currentBusiness.reviews.count.increase}%
                    </div>
                  </div>
                  <div className="text-center p-3 bg-card rounded-lg">
                    <div className="text-xl font-bold text-warning">
                      {currentBusiness.reviews.rating.after}
                    </div>
                    <div className="text-xs text-text-secondary">Avg Rating</div>
                    <div className="text-xs text-success">
                      +{currentBusiness.reviews.rating.increase}%
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-card rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Response Rate</span>
                    <span className="font-bold text-success">
                      {currentBusiness.reviews.responseRate.after}%
                    </span>
                  </div>
                  <div className="text-xs text-success mt-1">
                    +{currentBusiness.reviews.responseRate.increase}% improvement
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Citations & Directory Listings */}
          <div className="bg-surface rounded-lg p-4">
            <h4 className="font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="Globe" size={18} className="mr-2 text-primary" />
              Citations & Directory Listings
            </h4>
            <div className="flex items-center justify-between mb-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-destructive">
                  {currentBusiness.citations.before}
                </div>
                <div className="text-sm text-text-secondary">Before</div>
              </div>
              <Icon name="ArrowRight" size={24} className="text-text-secondary" />
              <div className="text-center">
                <div className="text-3xl font-bold text-success">
                  {currentBusiness.citations.after}
                </div>
                <div className="text-sm text-text-secondary">After</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-accent">
                  +{currentBusiness.citations.after - currentBusiness.citations.before}
                </div>
                <div className="text-sm text-text-secondary">New Citations</div>
              </div>
            </div>
            <div>
              <div className="text-sm font-medium text-text-primary mb-2">
                Key Platforms:
              </div>
              <div className="flex flex-wrap gap-2">
                {currentBusiness.citations.platforms.map((platform, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button 
              variant="outline" 
              iconName="ExternalLink" 
              iconPosition="right"
            >
              View Complete Local SEO Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalSEOResults;