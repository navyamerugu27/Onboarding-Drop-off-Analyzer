import React from 'react';
import { FunnelChart, Funnel, Tooltip, LabelList, ResponsiveContainer } from 'recharts';
import { OnboardingStep } from '../types';

interface DropOffChartProps {
  data: OnboardingStep[];
}

export const DropOffChart: React.FC<DropOffChartProps> = ({ data }) => {
    const chartData = data.map((item, index) => {
        const prevUsers = index > 0 ? data[index - 1].users : data[0].users;
        const conversion = ((item.users / data[0].users) * 100).toFixed(1);
        const dropOff = index > 0 ? (((prevUsers - item.users) / prevUsers) * 100).toFixed(1) : '0.0';
        
        // Create a color gradient from teal to purple
        const colorPercentage = index / (data.length - 1);
        const hue = 210 + colorPercentage * 60; // 210 (teal/blue) to 270 (purple)
        
        return {
            name: item.step,
            value: item.users,
            fill: `hsl(${hue}, 70%, 55%)`,
            conversion: `${conversion}%`,
            dropOff: `${dropOff}%`
        };
    });

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="p-3 bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-lg shadow-lg text-sm">
          <p className="font-bold text-white">{`${data.name}`}</p>
          <p className="text-gray-300">{`Users: ${data.value.toLocaleString()}`}</p>
          <p className="text-teal-400">{`Overall Conversion: ${data.conversion}`}</p>
          {data.name !== chartData[0].name && (
            <p className="text-red-400">{`Step Drop-off: ${data.dropOff}`}</p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-96 bg-gray-800/50 p-4 rounded-lg border border-gray-700">
      <ResponsiveContainer width="100%" height="100%">
        <FunnelChart>
          <Tooltip content={<CustomTooltip />} />
          <Funnel dataKey="value" data={chartData} isAnimationActive>
            <LabelList position="right" fill="#fff" stroke="none" dataKey="name" className="text-xs md:text-sm" />
             <LabelList 
                position="center" 
                fill="#fff" 
                stroke="none" 
                dataKey="conversion" 
                formatter={(v: string) => `(${v})`}
                className="font-bold text-xs" 
            />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
    </div>
  );
};