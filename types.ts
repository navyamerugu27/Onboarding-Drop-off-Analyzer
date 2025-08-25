export interface OnboardingStep {
  step: string;
  users: number;
}

export interface Recommendation {
  recommendation: string;
  priority: 'High' | 'Medium' | 'Low';
  effort: 'High' | 'Medium' | 'Low';
}

export interface FrictionPoint {
  step: string;
  dropOffPercentage: number;
  clusteredDropOffReasons: string[];
  uxRecommendations: Recommendation[];
}

export interface AnalysisResult {
  overallSummary: string;
  keyFrictionPoints: FrictionPoint[];
}

export interface KPIChange {
  value: number;
  change: number; // Percentage change
}

export interface BiggestDropOff {
  step: string;
  percentage: number;
}

export interface DashboardKPIs {
  overallConversion: KPIChange;
  biggestDropOff: BiggestDropOff;
  totalUsers: KPIChange;
}

export enum AppState {
  IDLE,
  CONNECTING,
  ANALYZING,
  SUCCESS,
  ERROR,
}

export type AnalyticsPlatform = 'Mixpanel' | 'PostHog' | 'Amplitude';