import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CompetitiveAnalysis = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const competitiveData = [
    {
      industry: "Web Development",
      client: "SumitDev Portfolio",
      competitors: [
        { name: "SumitDev", position: 1, traffic: 12500, keywords: 145, domain: 68 },
        { name: "WebTech Mumbai", position: 3, traffic: 8200, keywords: 98, domain: 52 },
        { name: "Digital Craft", position: 5, traffic: 6800, keywords: 87, domain: 48 },
        { name: "Mumbai Devs", position: 7, traffic: 4500, keywords: 65, domain: 42 },
        { name: "Code Solutions", position: 9, traffic: 3200, keywords: 54, domain: 38 }
      ],
      keywordGaps: [
        { keyword: "react developer mumbai", ourRank: 1, competitorRank: 8, volume: 1200 },
        { keyword: "wordpress development", ourRank: 2, competitorRank: 12, volume: 2400 },
        { keyword: "seo optimization", ourRank: 1, competitorRank: 15, volume: 1800 },
        { keyword: "web design mumbai", ourRank: 3, competitorRank: 7, volume: 3200 }
      ],
      marketShare: [
        { name: "SumitDev", value: 35, color: "#28A745" },
        { name: "WebTech Mumbai", value: 22, color: "#00D9FF" },
        { name: "Digital Craft", value: 18, color: "#FFB800" },
        { name: "Others", value: 25, color: "#6C757D" }
      ]
    },
    {
      industry: "Digital Marketing",
      client: "Marketing Pro Agency",
      competitors: [
        { name: "Marketing Pro", position: 2, traffic: 15200, keywords: 189, domain: 72 },
        { name: "Digital Leaders", position: 1, traffic: 18500, keywords: 234, domain: 78 },
        { name: "Growth Hackers", position: 4, traffic: 11800, keywords: 156, domain: 65 },
        { name: "Brand Builders", position: 6, traffic: 8900, keywords: 123, domain: 58 },
        { name: "Social Media Co", position: 8, traffic: 6200, keywords: 98, domain: 45 }
      ],
      keywordGaps: [
        { keyword: "digital marketing mumbai", ourRank: 2, competitorRank: 1, volume: 3200 },
        { keyword: "social media marketing", ourRank: 3, competitorRank: 1, volume: 2800 },
        { keyword: "ppc advertising", ourRank: 4, competitorRank: 2, volume: 1900 },
        { keyword: "content marketing", ourRank: 1, competitorRank: 5, volume: 2100 }
      ],
      marketShare: [
        { name: "Digital Leaders", value: 28, color: "#DC3545" },
        { name: "Marketing Pro", value: 26, color: "#28A745" },
        { name: "Growth Hackers", value: 20, color: "#00D9FF" },
        { name: "Others", value: 26, color: "#6C757D" }
      ]
    },
    {
      industry: "E-commerce",
      client: "Fashion Forward Store",
      competitors: [
        { name: "Fashion Forward", position: 1, traffic: 25600, keywords: 312, domain: 75 },
        { name: "Style Central", position: 2, traffic: 22100, keywords: 289, domain: 71 },
        { name: "Trendy Threads", position: 4, traffic: 18900, keywords: 245, domain: 68 },
        { name: "Fashion Hub", position: 6, traffic: 14200, keywords: 198, domain: 62 },
        { name: "Clothing Co", position: 8, traffic: 11500, keywords: 167, domain: 55 }
      ],
      keywordGaps: [
        { keyword: "online fashion store", ourRank: 1, competitorRank: 4, volume: 4200 },
        { keyword: "women clothing mumbai", ourRank: 2, competitorRank: 3, volume: 3800 },
        { keyword: "designer dresses", ourRank: 1, competitorRank: 6, volume: 2900 },
        { keyword: "fashion accessories", ourRank: 3, competitorRank: 2, volume: 3400 }
      ],
      marketShare: [
        { name: "Fashion Forward", value: 32, color: "#28A745" },
        { name: "Style Central", value: 28, color: "#FD7E14" },
        { name: "Trendy Threads", value: 22, color: "#00D9FF" },
        { name: "Others", value: 18, color: "#6C757D" }
      ]
    }
  ];

  const currentData = competitiveData[selectedIndustry];

  const getPositionColor = (position) => {
    if (position <= 3) return "text-success";
    if (position <= 10) return "text-warning";
    return "text-destructive";
  };

  const getPositionBg = (position) => {
    if (position <= 3) return "bg-success/10";
    if (position <= 10) return "bg-warning/10";
    return "bg-destructive/10";
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-subtle">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold font-headline text-text-primary">
          Competitive Analysis
        </h2>
        <div className="flex space-x-2">
          {competitiveData.map((data, index) => (
            <Button
              key={index}
              variant={selectedIndustry === index ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedIndustry(index)}
            >
              {data.industry}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Competitor Rankings */}
        <div className="space-y-6">
          <div className="bg-surface rounded-lg p-4">
            <h3 className="font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="Trophy" size={18} className="mr-2 text-accent" />
              Competitor Rankings - {currentData.industry}
            </h3>
            <div className="space-y-3">
              {currentData.competitors.map((competitor, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg border transition-all duration-normal ${
                    competitor.name === currentData.client || competitor.name.includes('SumitDev') || competitor.name.includes('Fashion Forward') || competitor.name.includes('Marketing Pro')
                      ? 'border-primary bg-primary/5' :'border-border bg-card'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${getPositionBg(competitor.position)} ${getPositionColor(competitor.position)}`}>
                        #{competitor.position}
                      </div>
                      <div>
                        <div className="font-medium text-text-primary">
                          {competitor.name}
                          {(competitor.name === currentData.client || competitor.name.includes('SumitDev') || competitor.name.includes('Fashion Forward') || competitor.name.includes('Marketing Pro')) && (
                            <span className="ml-2 px-2 py-0.5 bg-success text-success-foreground text-xs rounded-full">
                              Our Client
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-text-secondary">
                          Domain Authority: {competitor.domain}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-text-primary">
                        {competitor.traffic.toLocaleString()}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {competitor.keywords} keywords
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Market Share */}
          <div className="bg-surface rounded-lg p-4">
            <h3 className="font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="PieChart" size={18} className="mr-2 text-secondary" />
              Market Share Distribution
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={currentData.marketShare}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {currentData.marketShare.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E9ECEF',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                    formatter={(value) => [`${value}%`, 'Market Share']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {currentData.marketShare.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-text-secondary">
                    {item.name}: {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Keyword Gap Analysis */}
        <div className="space-y-6">
          <div className="bg-surface rounded-lg p-4">
            <h3 className="font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="Target" size={18} className="mr-2 text-warning" />
              Keyword Gap Analysis
            </h3>
            <div className="space-y-4">
              {currentData.keywordGaps.map((gap, index) => (
                <div key={index} className="p-3 bg-card rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="font-medium text-text-primary text-sm">
                        {gap.keyword}
                      </div>
                      <div className="text-xs text-text-secondary">
                        Search Volume: {gap.volume.toLocaleString()}/month
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className={`text-lg font-bold ${getPositionColor(gap.ourRank)}`}>
                          #{gap.ourRank}
                        </div>
                        <div className="text-xs text-text-secondary">Our Rank</div>
                      </div>
                      <Icon name="Vs" size={16} className="text-text-secondary" />
                      <div className="text-center">
                        <div className={`text-lg font-bold ${getPositionColor(gap.competitorRank)}`}>
                          #{gap.competitorRank}
                        </div>
                        <div className="text-xs text-text-secondary">Competitor</div>
                      </div>
                    </div>
                    <div className="text-right">
                      {gap.ourRank < gap.competitorRank ? (
                        <div className="flex items-center space-x-1 text-success">
                          <Icon name="TrendingUp" size={16} />
                          <span className="text-sm font-medium">
                            +{gap.competitorRank - gap.ourRank} ahead
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-1 text-warning">
                          <Icon name="TrendingDown" size={16} />
                          <span className="text-sm font-medium">
                            -{gap.ourRank - gap.competitorRank} behind
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic Comparison Chart */}
          <div className="bg-surface rounded-lg p-4">
            <h3 className="font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="BarChart3" size={18} className="mr-2 text-primary" />
              Traffic Comparison
            </h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={currentData.competitors} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#E9ECEF" />
                  <XAxis 
                    type="number" 
                    stroke="#6C757D"
                    fontSize={12}
                    tickFormatter={(value) => `${(value/1000).toFixed(0)}K`}
                  />
                  <YAxis 
                    type="category" 
                    dataKey="name" 
                    stroke="#6C757D"
                    fontSize={12}
                    width={100}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E9ECEF',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                    formatter={(value) => [value.toLocaleString(), 'Monthly Traffic']}
                  />
                  <Bar 
                    dataKey="traffic" 
                    fill="#00D9FF"
                    radius={[0, 4, 4, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-border flex justify-center">
        <Button 
          variant="outline" 
          iconName="Download" 
          iconPosition="right"
        >
          Download Competitive Analysis Report
        </Button>
      </div>
    </div>
  );
};

export default CompetitiveAnalysis;