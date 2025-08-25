import React from 'react';

interface IconProps {
  name: 'mixpanel' | 'posthog' | 'amplitude' | 'arrow-right' | 'lightbulb' | 'priority' | 'effort' | 'chart' | 'conversion' | 'drop-off' | 'warning' | 'arrow-up-right' | 'arrow-down-right';
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className = 'w-6 h-6' }) => {
  const icons: { [key: string]: React.ReactNode } = {
    mixpanel: (
      <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.712 11.853a.3.3 0 00-.324.493l10.5 18.25-6.04 10.5a.3.3 0 00.26.453h12.12a.3.3 0 00.26-.453l-6.04-10.5 10.5-18.25a.3.3 0 00-.26-.453H24.712z" fill="#D8D8D8"></path><path d="M22.95 3.553a.3.3 0 00-.52 0l-19.5 34a.3.3 0 00.26.453H15.81a.3.3 0 00.26-.453L5.57 18.053l10.5-18.25a.3.3 0 00-.26-.453H3.69a.3.3 0 00-.26.453l8.68 15.1L2.29 37.553a.3.3 0 00.26.453h12.12a.3.3 0 00.26-.453L8.89 27.053l14.32-24a.3.3 0 00-.26-.453H22.95z" fill="#A0A0A0"></path></svg>
    ),
    posthog: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12.025 2.003c-2.477 0-4.68.89-6.402 2.316-.363.303-.538.795-.42 1.248l.966 3.738c.09.345.39.591.753.591h5.309c.27 0 .52-.144.66-.375l2.493-4.089c.225-.375.12-.867-.24-1.128-1.56-1.128-3.528-1.845-5.625-1.845zm-3.138 9.006L.962 14.748c-.465.177-.6.78-.297 1.182 1.62 2.16 4.14 3.51 7.02 3.825.405.045.765-.21.885-.585l1.62-5.04c.12-.375-.075-.78-.435-.915l-6.525-2.4zM22.74 8.22l-7.92-3.555c-.39-.18-.855.045-1.02.48l-2.055 5.34c-.15.405.075.855.48 1.02l7.92 3.555c.39.18.855-.045 1.02-.48l2.055-5.34c.165-.405-.06-.855-.48-1.02z"></path></svg>
    ),
    amplitude: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M17.432 3.324l-9.102 14.07L4.568 12.6l-3.32 2.154L8.33 24l12.42-18.522z"></path></svg>
    ),
    'arrow-right': (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
    ),
    lightbulb: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
    ),
    priority: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6H8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path></svg>
    ),
    effort: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
    ),
    chart: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
    ),
    conversion: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
    ),
    'drop-off': (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>
    ),
    warning: (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
    ),
    'arrow-up-right': (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path></svg>
    ),
    'arrow-down-right': (
        <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"></path></svg>
    ),
  };

  return icons[name] || null;
};