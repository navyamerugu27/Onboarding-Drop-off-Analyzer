
import React, { useState, useCallback, useMemo } from 'react';
import { Header } from './components/Header';
import { AnalyticsConnect } from './components/AnalyticsConnect';
import { LoadingIndicator } from './components/LoadingIndicator';
import { AnalysisDashboard } from './components/AnalysisDashboard';
import { analyzeOnboardingData } from './services/geminiService';
import { MOCK_CURRENT_WEEK_DATA, MOCK_PREVIOUS_WEEK_DATA } from './constants';
import { AppState, AnalyticsPlatform, AnalysisResult, DashboardKPIs, OnboardingStep } from './types';

const calculateKpis = (currentData: OnboardingStep[], previousData: OnboardingStep[]): DashboardKPIs => {
    // Overall Conversion
    const currentConversion = (currentData[currentData.length - 1].users / currentData[0].users) * 100;
    const previousConversion = (previousData[previousData.length - 1].users / previousData[0].users) * 100;
    const conversionChange = currentConversion - previousConversion;

    // Total Users
    const currentUsers = currentData[0].users;
    const previousUsers = previousData[0].users;
    const usersChange = ((currentUsers - previousUsers) / previousUsers) * 100;

    // Biggest Drop-off for Current Week
    let biggestDrop = { step: '', percentage: 0 };
    for (let i = 1; i < currentData.length; i++) {
        const dropOff = ((currentData[i-1].users - currentData[i].users) / currentData[i-1].users) * 100;
        if (dropOff > biggestDrop.percentage) {
            biggestDrop = { step: currentData[i].step, percentage: dropOff };
        }
    }

    return {
        overallConversion: { value: currentConversion, change: conversionChange },
        totalUsers: { value: currentUsers, change: usersChange },
        biggestDropOff: biggestDrop
    };
};

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.IDLE);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleConnect = useCallback(async (platform: AnalyticsPlatform) => {
    setAppState(AppState.CONNECTING);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setAppState(AppState.ANALYZING);
    try {
      const result = await analyzeOnboardingData(MOCK_CURRENT_WEEK_DATA, MOCK_PREVIOUS_WEEK_DATA);
      setAnalysisResult(result);
      setAppState(AppState.SUCCESS);
    } catch (err) {
      setError('An error occurred during analysis. Please try again.');
      setAppState(AppState.ERROR);
    }
  }, []);
  
  const handleReset = useCallback(() => {
    setAppState(AppState.IDLE);
    setAnalysisResult(null);
    setError(null);
  }, []);

  const kpis = useMemo(() => {
    if (appState === AppState.SUCCESS) {
        return calculateKpis(MOCK_CURRENT_WEEK_DATA, MOCK_PREVIOUS_WEEK_DATA);
    }
    return null;
  }, [appState]);

  const renderContent = () => {
    switch (appState) {
      case AppState.IDLE:
        return <AnalyticsConnect onConnect={handleConnect} />;
      case AppState.CONNECTING:
      case AppState.ANALYZING:
        return <LoadingIndicator />;
      case AppState.SUCCESS:
        return (analysisResult && kpis) ? (
            <AnalysisDashboard 
                result={analysisResult} 
                onboardingData={{ current: MOCK_CURRENT_WEEK_DATA, previous: MOCK_PREVIOUS_WEEK_DATA }} 
                kpis={kpis}
                onReset={handleReset}
            />
        ) : null;
      case AppState.ERROR:
        return (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <h2 className="text-2xl font-semibold text-red-400 mb-2">Analysis Failed</h2>
            <p className="text-gray-400 mb-4">{error}</p>
            <button
              onClick={handleReset}
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
        <Header />
        <main className="flex-grow">
            {renderContent()}
        </main>
    </div>
  );
};

export default App;