
import React from 'react';
import { COLORS } from '../constants';

interface MaxiMeterProps {
  score: number;
}

const MaxiMeter: React.FC<MaxiMeterProps> = ({ score }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-1">
        <span className="text-[10px] font-bold text-gray-400 uppercase">Maxi Meter</span>
        <span className="text-xs font-bold text-[#00A859]">{score}%</span>
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden border border-gray-300">
        <div 
          className="h-full bg-[#00A859] transition-all duration-1000 ease-out"
          style={{ width: `${score}%` }}
        >
            <div className="w-full h-full bg-white/20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default MaxiMeter;
