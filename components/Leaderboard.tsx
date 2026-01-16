
import React from 'react';
import { MOCK_LEADERBOARD, MonogramSVG, COLORS } from '../constants';
import MaxiMeter from './MaxiMeter';

const Leaderboard: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 pb-24 relative">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-12 w-12 bg-[#FFD600] rounded-[12px] flex items-center justify-center border-2 border-[#1C1C1C] rotate-3">
            <span className="font-header font-black text-2xl">M</span>
        </div>
        <h3 className="text-3xl font-header font-bold text-[#1C1C1C]">Maxi Tracker <span className="text-gray-400 font-light font-body">/ Route 2024</span></h3>
      </div>

      {/* The Route Map Line */}
      <div className="absolute left-[34px] md:left-[50px] top-[140px] bottom-0 w-2 bg-gray-200 z-0">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-[#E2231A] via-[#FFD600] to-[#3FA9F5] opacity-50"></div>
      </div>

      <div className="space-y-6 relative z-10">
        {MOCK_LEADERBOARD.map((user, idx) => (
          <div 
            key={user.id} 
            className={`flex items-center gap-4 md:gap-8 group transition-all transform hover:-translate-y-1`}
          >
            {/* The Bus Stop Pin */}
            <div className="flex-shrink-0 relative">
                <div className={`h-12 w-12 md:h-16 md:w-16 rounded-full border-4 ${idx < 3 ? 'border-[#FFD600]' : 'border-white shadow-md'} bg-white flex items-center justify-center z-10 relative group-hover:scale-110 transition-transform`}>
                    {user.isOG ? (
                         <div className="p-1"><MonogramSVG className="h-8 w-8 md:h-10 md:w-10" /></div>
                    ) : (
                        <img src={user.avatar} className="rounded-full h-full w-full object-cover p-1" alt={user.name} />
                    )}
                </div>
                {/* Connector Node */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 bg-[#E2231A] rounded-full -z-10 blur-sm opacity-0 group-hover:opacity-100"></div>
            </div>

            {/* The Signage Plate */}
            <div className="flex-grow bg-white border-2 border-gray-100 shadow-sm rounded-[24px] p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group-hover:border-[#E2231A] group-hover:shadow-xl transition-all">
              <div className="flex items-center gap-4">
                <div className="bg-[#1C1C1C] text-white font-header font-bold px-3 py-1 rounded-lg text-sm md:text-base">
                  #{user.rank}
                </div>
                <div>
                  <h4 className="font-header font-bold text-lg md:text-xl text-[#1C1C1C] flex items-center gap-2">
                    {user.name}
                    {user.isOG && (
                        <span className="bg-[#FFD600] text-[10px] px-2 py-0.5 rounded-full text-[#1C1C1C] font-black uppercase">MAXI OG</span>
                    )}
                  </h4>
                  <p className="text-gray-400 font-medium text-sm">{user.handle}</p>
                </div>
              </div>
              
              <div className="w-full md:w-48">
                <MaxiMeter score={user.maxiScore} />
              </div>

              <div className="flex items-center gap-2">
                <button className="p-2 hover:bg-red-50 rounded-full transition-colors text-[#E2231A]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6a3 3 0 100 2.684m0-2.684l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
                </button>
                <div className="h-10 w-10 bg-[#3FA9F5] rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-[#3FA9F5]/80">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-[#1C1C1C] rounded-[40px] p-8 md:p-12 text-white text-center">
          <h4 className="text-2xl md:text-3xl font-header font-black mb-4">Reached the Terminus?</h4>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">Not on the leaderboard yet? Start buidling, tweeting, and attending ETHMumbai events to increase your Maxi Score.</p>
          <button className="bg-white text-[#1C1C1C] font-bold py-4 px-12 rounded-[40px] hover:bg-[#FFD600] transition-colors uppercase tracking-widest">
              Refresh Station
          </button>
      </div>
    </section>
  );
};

export default Leaderboard;
