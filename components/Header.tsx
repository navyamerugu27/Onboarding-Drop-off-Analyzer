import React from 'react';
import { Icon } from './Icon';

export const Header: React.FC = () => {
  return (
    <header className="p-4 border-b border-purple-500/20 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-teal-500 flex items-center justify-center rounded-lg">
                <Icon name="chart" className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-gray-100">Onboarding Drop-off Analyzer</h1>
        </div>
        <div className="text-sm text-gray-400 font-medium bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700">Weekly Report</div>
      </div>
    </header>
  );
};