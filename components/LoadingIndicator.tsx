
import React, { useState, useEffect } from 'react';

const messages = [
  "Connecting to analytics data source...",
  "Analyzing user journeys and event sequences...",
  "Identifying significant drop-off points...",
  "Clustering potential friction reasons...",
  "Generating actionable UX recommendations...",
  "Compiling your weekly report...",
];

export const LoadingIndicator: React.FC = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <div className="w-16 h-16 border-4 border-t-purple-400 border-gray-600 rounded-full animate-spin mb-6"></div>
      <h2 className="text-2xl font-semibold text-white mb-2">AI Analysis in Progress</h2>
      <p className="text-gray-400 transition-opacity duration-500 w-80">
        {messages[currentMessageIndex]}
      </p>
    </div>
  );
};
