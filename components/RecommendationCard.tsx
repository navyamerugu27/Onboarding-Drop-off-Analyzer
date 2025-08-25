import React from 'react';
import { Recommendation } from '../types';
import { Icon } from './Icon';

interface RecommendationCardProps {
  recommendation: Recommendation;
}

const getTagStyle = (level: 'High' | 'Medium' | 'Low') => {
  switch (level) {
    case 'High': return 'bg-red-500/20 text-red-300 border-red-500/30';
    case 'Medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
    case 'Low': return 'bg-green-500/20 text-green-300 border-green-500/30';
  }
};

const getBorderStyle = (level: 'High' | 'Medium' | 'Low') => {
    switch (level) {
        case 'High': return 'border-l-red-500';
        case 'Medium': return 'border-l-yellow-500';
        case 'Low': return 'border-l-green-500';
    }
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({ recommendation }) => {
  return (
    <div className={`bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors duration-300 border-l-4 ${getBorderStyle(recommendation.priority)}`}>
      <p className="text-gray-200 mb-3">{recommendation.recommendation}</p>
      <div className="flex items-center space-x-4 text-sm">
        <div className={`flex items-center space-x-1.5 px-2 py-1 rounded-full text-xs font-medium border ${getTagStyle(recommendation.priority)}`}>
          <Icon name="priority" className="w-3.5 h-3.5" />
          <span>Priority: {recommendation.priority}</span>
        </div>
        <div className={`flex items-center space-x-1.5 px-2 py-1 rounded-full text-xs font-medium border ${getTagStyle(recommendation.effort)}`}>
          <Icon name="effort" className="w-3.5 h-3.5" />
          <span>Effort: {recommendation.effort}</span>
        </div>
      </div>
    </div>
  );
};
