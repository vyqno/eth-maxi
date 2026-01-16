
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Leaderboard from './components/Leaderboard';
import MaxiChecker from './components/MaxiChecker';
import { COLORS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-[#E2231A] selection:text-white">
      {/* Visual Background Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#E2231A_1px,_transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <Header />
      
      <main>
        <Hero />
        
        {/* The Gemini Interactive Section */}
        <MaxiChecker />

        {/* The Leaderboard */}
        <Leaderboard />
      </main>

      <footer className="bg-white border-t-2 border-gray-100 py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
             <div className="h-8 w-8"><img src="https://picsum.photos/seed/eth/50" className="rounded-full grayscale" alt="Eth" /></div>
             <p className="font-header font-black text-lg tracking-tighter">ETHMUMBAI 2024</p>
          </div>
          
          <div className="flex gap-8 font-body font-bold text-sm text-gray-500">
            <a href="#" className="hover:text-[#E2231A] transition-colors">Manifesto</a>
            <a href="#" className="hover:text-[#E2231A] transition-colors">Route Maps</a>
            <a href="#" className="hover:text-[#E2231A] transition-colors">Safety Rules</a>
          </div>

          <p className="text-gray-400 text-xs text-center md:text-right">
            Inspired by the iconic BEST Bus Service.<br/>
            Always keep your ETH close and your keys closer.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
