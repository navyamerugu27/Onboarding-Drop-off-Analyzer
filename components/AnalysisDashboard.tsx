import React, { useState } from 'react';
import { AnalysisResult, OnboardingStep, DashboardKPIs } from '../types';
import { DropOffChart } from './DropOffChart';
import { FrictionPointCard } from './FrictionPointCard';
import { Icon } from './Icon';

interface AnalysisDashboardProps {
  result: AnalysisResult;
  onboardingData: {
    current: OnboardingStep[];
    previous: OnboardingStep[];
  };
  kpis: DashboardKPIs;
  onReset: () => void;
}

const ChangeIndicator: React.FC<{ change: number }> = ({ change }) => {
    const isPositive = change >= 0;
    const color = isPositive ? 'text-green-400' : 'text-red-400';
    const icon = isPositive ? 'arrow-up-right' : 'arrow-down-right';

    return (
        <span className={`flex items-center text-xs font-bold ${color}`}>
            <Icon name={icon} className="w-3.5 h-3.5 mr-0.5" />
            {change.toFixed(1)}% vs last week
        </span>
    );
};

const StatCard: React.FC<{ icon: 'conversion' | 'drop-off' | 'chart' | 'warning', title: string, value: string, subValue?: string, change?: number, color: string }> = ({ icon, title, value, subValue, change, color }) => (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 flex items-center space-x-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}>
            <Icon name={icon} className="w-6 h-6 text-white"/>
        </div>
        <div>
            <p className="text-sm text-gray-400">{title}</p>
            <div className="flex items-baseline space-x-2">
                <p className="text-2xl font-bold text-white">{value}</p>
                {change !== undefined && <ChangeIndicator change={change} />}
            </div>
             {subValue && <p className="text-xs text-gray-500 mt-1">{subValue}</p>}
        </div>
    </div>
);

export const AnalysisDashboard: React.FC<AnalysisDashboardProps> = ({ result, onboardingData, kpis, onReset }) => {
  const [chartView, setChartView] = useState<'current' | 'previous'>('current');
    
  return (
    <div className="container mx-auto p-4 md:p-8 space-y-8">
      
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-white">This Week's Onboarding Analysis</h2>
        <button
          onClick={onReset}
          className="bg-purple-600/80 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
        >
          Analyze Again
        </button>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard 
                icon="conversion" 
                title="Overall Conversion" 
                value={`${kpis.overallConversion.value.toFixed(1)}%`} 
                change={kpis.overallConversion.change}
                color="bg-gradient-to-br from-teal-500 to-green-500"
            />
            <StatCard 
                icon="warning" 
                title="Biggest Drop-off Point" 
                value={`${kpis.biggestDropOff.percentage.toFixed(1)}%`}
                subValue={`at "${kpis.biggestDropOff.step}"`}
                color="bg-gradient-to-br from-red-500 to-orange-500"
            />
            <StatCard 
                icon="chart" 
                title="Total Users Started" 
                value={kpis.totalUsers.value.toLocaleString()}
                change={kpis.totalUsers.change}
                color="bg-gradient-to-br from-blue-500 to-indigo-500"
            />
        </div>

      <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-purple-300 mb-2">AI Summary (Week-over-Week)</h3>
        <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{result.overallSummary}</p>
      </div>
      
      <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-white">Onboarding Funnel Visualization</h3>
            <div className="flex items-center space-x-1 bg-gray-800/80 border border-gray-700 p-1 rounded-lg">
                <button 
                    onClick={() => setChartView('current')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${chartView === 'current' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                >
                    Current Week
                </button>
                <button 
                    onClick={() => setChartView('previous')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${chartView === 'previous' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                >
                    Previous Week
                </button>
            </div>
          </div>
          <DropOffChart data={chartView === 'current' ? onboardingData.current : onboardingData.previous} />
      </div>

      <div>
        <h3 className="text-2xl font-bold text-white mb-4">Key Friction Points & Recommendations (Current Week)</h3>
        <div className="space-y-6">
          {result.keyFrictionPoints.map((point, index) => (
            <FrictionPointCard key={index} frictionPoint={point} />
          ))}
        </div>
      </div>

    </div>
  );
};
