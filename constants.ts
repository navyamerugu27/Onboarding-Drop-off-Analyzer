
import { OnboardingStep } from './types';

export const MOCK_CURRENT_WEEK_DATA: OnboardingStep[] = [
    { step: 'Visited Sign Up Page', users: 10000 },
    { step: 'Created Account', users: 8500 },
    { step: 'Started Profile Setup', users: 8200 },
    { step: 'Uploaded Profile Picture', users: 5500 },
    { step: 'Connected Social Account', users: 5100 },
    { step: 'Entered Payment Info', users: 2500 },
    { step: 'Started Free Trial', users: 2450 },
    { step: 'Completed Onboarding Tutorial', users: 1800 },
];

export const MOCK_PREVIOUS_WEEK_DATA: OnboardingStep[] = [
    { step: 'Visited Sign Up Page', users: 9800 },
    { step: 'Created Account', users: 8100 },
    { step: 'Started Profile Setup', users: 7900 },
    { step: 'Uploaded Profile Picture', users: 4800 }, // Steeper drop-off here
    { step: 'Connected Social Account', users: 4500 },
    { step: 'Entered Payment Info', users: 2100 },
    { step: 'Started Free Trial', users: 2050 },
    { step: 'Completed Onboarding Tutorial', users: 1500 }, // Lower final conversion
];
