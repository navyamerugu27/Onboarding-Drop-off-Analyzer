import React from 'react';
import { FrictionPoint } from '../types';
import { Icon } from './Icon';
import { RecommendationCard } from './RecommendationCard';

interface FrictionPointCardProps {
  frictionPoint: FrictionPoint;
}

export const FrictionPointCard: React.FC<FrictionPointCardProps> = ({ frictionPoint }) => {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden">
      <header className="p-6 bg-gradient-to-r from-gray-800 to-gray-800/50 border-b border-gray-700">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-xl font-bold text-white">{frictionPoint.step}</h3>
                <p className="text-gray-400">Identified Friction Point</p>
            </div>
            <div className="text-center">
                <div className="text-3xl font-bold text-red-400">
                    {frictionPoint.dropOffPercentage.toFixed(1)}%
                </div>
                 <div className="text-xs text-red-400/80">Drop-off</div>
            </div>
        </div>
      </header>
      
      <div className="p-6 space-y-6">
        <div>
          <h4 className="font-semibold text-gray-300 mb-2">Likely Reasons for Drop-off:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-400 pl-2">
            {frictionPoint.clusteredDropOffReasons.map((reason, index) => (
              <li key={index}>{reason}</li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-700 pt-6">
          <h4 className="font-semibold text-gray-300 mb-3 flex items-center space-x-2">
              <Icon name="lightbulb" className="w-5 h-5 text-yellow-300" />
              <span>AI-Powered UX Recommendations</span>
          </h4>
          <div className="space-y-3">
            {frictionPoint.uxRecommendations.map((rec, index) => (
              <RecommendationCard key={index} recommendation={rec} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};