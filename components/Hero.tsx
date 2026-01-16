
import React from 'react';
import { COLORS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative px-6 py-12 md:py-24 overflow-hidden flex flex-col items-center text-center">
      {/* Background Graphic elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-[#FFD600]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#3FA9F5]/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl z-10">
        <div className="inline-block bg-[#FFD600] px-4 py-1 rounded-full text-xs md:text-sm font-bold mb-6 text-[#1C1C1C] border-2 border-[#1C1C1C] uppercase tracking-widest">
            Ticket No. 0001 - Mumbai Local
        </div>
        
        <h2 className="font-header text-4xl md:text-7xl font-extrabold text-[#1C1C1C] leading-tight mb-6">
          Are you a true <span className="text-[#E2231A]">ETHMumbai</span> OG?
        </h2>
        
        <p className="font-body text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          The high-energy journey through the streets of Mumbai meets the decentralized future of Ethereum. Track the most active buidlers, contributors, and shillers in our city's ecosystem.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-[#E2231A] text-white font-bold py-4 px-10 rounded-[40px] shadow-lg hover:shadow-xl hover:scale-105 transition-all transform flex items-center gap-2">
            Check Your Maxi Score
          </button>
          <button className="bg-white text-[#1C1C1C] border-2 border-[#1C1C1C] font-bold py-4 px-10 rounded-[40px] hover:bg-[#1C1C1C] hover:text-white transition-all transform">
            View All Routes
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
