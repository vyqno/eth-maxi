
import React from 'react';
import { MonogramSVG, COLORS } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full p-4 md:p-6 flex justify-center pointer-events-none">
      <div className="bg-[#E2231A] w-full max-w-5xl rounded-[40px] shadow-2xl p-2 pointer-events-auto flex items-center justify-between">
        {/* Left: The Monogram inside a white plate */}
        <div className="bg-white rounded-full p-2 ml-2 flex items-center justify-center h-12 w-12 md:h-14 md:w-14">
          <MonogramSVG className="h-10 w-10" />
        </div>

        {/* Center: Branding */}
        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 text-white">
          <h1 className="font-header text-xl md:text-3xl font-bold tracking-tight">ETHMUMBAI</h1>
          <span className="hidden md:inline-block text-white/50">|</span>
          <h1 className="font-devanagari text-xl md:text-3xl font-bold">ईथ मुंबई</h1>
        </div>

        {/* Right: Mumbai Pulse Indicator */}
        <div className="mr-4 flex items-center gap-2">
            <div className="hidden md:flex flex-col items-end text-white/90 text-xs">
                <span className="font-bold">ROUTE: ETH-MAXI</span>
                <span>DESTINATION: MOON</span>
            </div>
            <div className="h-3 w-3 rounded-full bg-[#00A859] animate-pulse"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
