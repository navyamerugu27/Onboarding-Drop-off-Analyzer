import React from 'react';
import { AnalyticsPlatform } from '../types';
import { Icon } from './Icon';

interface AnalyticsConnectProps {
  onConnect: (platform: AnalyticsPlatform) => void;
}

type Platform = {
  name: AnalyticsPlatform;
  icon: 'mixpanel' | 'posthog' | 'amplitude';
  color: string;
};

const platforms: Platform[] = [
  { name: 'Mixpanel', icon: 'mixpanel', color: 'border-blue-500' },
  { name: 'PostHog', icon: 'posthog', color: 'border-orange-500' },
  { name: 'Amplitude', icon: 'amplitude', color: 'border-sky-400' },
];

export const AnalyticsConnect: React.FC<AnalyticsConnectProps> = ({ onConnect }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-bold text-white mb-2">Connect Your Analytics</h2>
        <p className="text-gray-400 mb-8">
          Select your product analytics platform to begin analyzing your onboarding funnel.
        </p>
        <div className="space-y-4">
          {platforms.map((platform) => (
            <button
              key={platform.name}
              onClick={() => onConnect(platform.name)}
              className={`w-full flex items-center justify-between p-4 bg-gray-800 border border-gray-700 rounded-lg transition-all duration-300 group hover:border-purple-500/80 hover:bg-gray-800/50 transform hover:-translate-y-1 border-l-4 ${platform.color}`}
            >
              <div className="flex items-center space-x-4">
                <Icon name={platform.icon} className="w-8 h-8 text-gray-400 group-hover:text-white" />
                <span className="text-lg font-semibold text-gray-200">{platform.name}</span>
              </div>
              <Icon name="arrow-right" className="w-6 h-6 text-gray-500 group-hover:text-purple-400 transform transition-transform group-hover:translate-x-1" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};