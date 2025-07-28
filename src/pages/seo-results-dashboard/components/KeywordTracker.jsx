import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const KeywordTracker = () => {
  const [selectedKeyword, setSelectedKeyword] = useState(0);
  const [timeRange, setTimeRange] = useState('6months');

  const keywordData = [
    {
      keyword: "web development mumbai",
      currentPosition: 1,
      previousPosition: 15,
      searchVolume: 2400,
      difficulty: 68,
      traffic: 1250,
      conversions: 45,
      timeline: [
        { month: 'Jan', position: 15, traffic: 120 },
        { month: 'Feb', position: 12, traffic: 180 },
        { month: 'Mar', position: 8, traffic: 320 },
        { month: 'Apr', position: 5, traffic: 580 },
        { month: 'May', position: 3, traffic: 890 },
        { month: 'Jun', position: 1, traffic: 1250 }
      ]
    },
    {
      keyword: "seo services mumbai",
      currentPosition: 2,
      previousPosition: 23,
      searchVolume: 1800,
      difficulty: 72,
      traffic: 980,
      conversions: 38,
      timeline: [
        { month: 'Jan', position: 23, traffic: 45 },
        { month: 'Feb', position: 18, traffic: 85 },
        { month: 'Mar', position: 12, traffic: 220 },
        { month: 'Apr', position: 7, traffic: 450 },
        { month: 'May', position: 4, traffic: 720 },
        { month: 'Jun', position: 2, traffic: 980 }
      ]
    },
    {
      keyword: "digital marketing agency mumbai",
      currentPosition: 3,
      previousPosition: 28,
      searchVolume: 3200,
      difficulty: 75,
      traffic: 1450,
      conversions: 52,
      timeline: [
        { month: 'Jan', position: 28, traffic: 80 },
        { month: 'Feb', position: 22, traffic: 150 },
        { month: 'Mar', position: 15, traffic: 380 },
        { month: 'Apr', position: 9, traffic: 680 },
        { month: 'May', position: 5, traffic: 1100 },
        { month: 'Jun', position: 3, traffic: 1450 }
      ]
    },
    {
      keyword: "wordpress developer mumbai",
      currentPosition: 1,
      previousPosition: 19,
      searchVolume: 1600,
      difficulty: 58,
      traffic: 890,
      conversions: 34,
      timeline: [
        { month: 'Jan', position: 19, traffic: 95 },
        { month: 'Feb', position: 14, traffic: 165 },
        { month: 'Mar', position: 9, traffic: 285 },
        { month: 'Apr', position: 6, traffic: 450 },
        { month: 'May', position: 2, traffic: 680 },
        { month: 'Jun', position: 1, traffic: 890 }
      ]
    }
  ];

  const currentKeyword = keywordData[selectedKeyword];

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

  const getDifficultyColor = (difficulty) => {
    if (difficulty >= 70) return "text-destructive";
    if (difficulty >= 50) return "text-warning";
    return "text-success";
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-subtle">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h2 className="text-2xl font-bold font-headline text-text-primary mb-4 sm:mb-0">
          Keyword Ranking Progress
        </h2>
        <div className="flex space-x-2">
          <Button
            variant={timeRange === '3months' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setTimeRange('3months')}
          >
            3M
          </Button>
          <Button
            variant={timeRange === '6months' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setTimeRange('6months')}
          >
            6M
          </Button>
          <Button
            variant={timeRange === '12months' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setTimeRange('12months')}
          >
            1Y
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Keyword Selection */}
        <div className="space-y-3">
          <h3 className="font-semibold text-text-primary font-headline mb-4">
            Select Keyword
          </h3>
          {keywordData.map((keyword, index) => (
            <div
              key={index}
              onClick={() => setSelectedKeyword(index)}
              className={`p-4 rounded-lg border cursor-pointer transition-all duration-normal ${
                selectedKeyword === index
                  ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 hover:bg-surface'
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="font-medium text-text-primary text-sm mb-1">
                    {keyword.keyword}
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-text-secondary">
                    <span>Vol: {keyword.searchVolume.toLocaleString()}</span>
                    <span className={getDifficultyColor(keyword.difficulty)}>
                      KD: {keyword.difficulty}
                    </span>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded text-xs font-medium ${getPositionBg(keyword.currentPosition)} ${getPositionColor(keyword.currentPosition)}`}>
                  #{keyword.currentPosition}
                </div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-text-secondary">
                  From #{keyword.previousPosition}
                </span>
                <div className="flex items-center space-x-1 text-success">
                  <Icon name="TrendingUp" size={12} />
                  <span>+{keyword.previousPosition - keyword.currentPosition}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chart & Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Current Keyword Stats */}
          <div className="bg-surface rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-text-primary font-headline">
                "{currentKeyword.keyword}"
              </h3>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${getPositionBg(currentKeyword.currentPosition)} ${getPositionColor(currentKeyword.currentPosition)}`}>
                Position #{currentKeyword.currentPosition}
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-text-primary">
                  {currentKeyword.searchVolume.toLocaleString()}
                </div>
                <div className="text-sm text-text-secondary">Search Volume</div>
              </div>
              <div className="text-center">
                <div className={`text-2xl font-bold ${getDifficultyColor(currentKeyword.difficulty)}`}>
                  {currentKeyword.difficulty}
                </div>
                <div className="text-sm text-text-secondary">Difficulty</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">
                  {currentKeyword.traffic.toLocaleString()}
                </div>
                <div className="text-sm text-text-secondary">Monthly Traffic</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">
                  {currentKeyword.conversions}
                </div>
                <div className="text-sm text-text-secondary">Conversions</div>
              </div>
            </div>
          </div>

          {/* Ranking Progress Chart */}
          <div className="bg-surface rounded-lg p-4">
            <h4 className="font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="TrendingUp" size={18} className="mr-2 text-success" />
              Ranking Progress
            </h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={currentKeyword.timeline}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E9ECEF" />
                  <XAxis 
                    dataKey="month" 
                    stroke="#6C757D"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="#6C757D"
                    fontSize={12}
                    domain={[1, 30]}
                    reversed={true}
                    tickFormatter={(value) => `#${value}`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#FFFFFF',
                      border: '1px solid #E9ECEF',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                    formatter={(value, name) => [
                      name === 'position' ? `#${value}` : value,
                      name === 'position' ? 'Position' : 'Traffic'
                    ]}
                  />
                  <Line
                    type="monotone"
                    dataKey="position"
                    stroke="#28A745"
                    strokeWidth={3}
                    dot={{ fill: '#28A745', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: '#28A745', strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Traffic Growth Chart */}
          <div className="bg-surface rounded-lg p-4">
            <h4 className="font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="BarChart3" size={18} className="mr-2 text-secondary" />
              Traffic Growth
            </h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={currentKeyword.timeline}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E9ECEF" />
                  <XAxis 
                    dataKey="month" 
                    stroke="#6C757D"
                    fontSize={12}
                  />
                  <YAxis 
                    stroke="#6C757D"
                    fontSize={12}
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
                  <Area
                    type="monotone"
                    dataKey="traffic"
                    stroke="#00D9FF"
                    fill="#00D9FF"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeywordTracker;