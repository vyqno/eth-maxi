
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { COLORS } from '../constants';

const MaxiChecker: React.FC = () => {
  const [handle, setHandle] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | { score: number; commentary: string }>(null);

  const analyzeMaxi = async () => {
    if (!handle) return;
    setLoading(true);
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analyze the crypto-twitter persona of "${handle}" for an ETHMumbai community event. 
        Determine their "Maxi Score" (0-100) based on how much they love Ethereum, Mumbai culture, and buidling. 
        Provide a fun, short commentary in a Mumbai street slang (Bambaiya) style.
        Format the response as JSON: { "score": number, "commentary": string }`,
        config: {
          responseMimeType: "application/json",
        }
      });

      const data = JSON.parse(response.text);
      setResult(data);
    } catch (error) {
      console.error("Failed to analyze:", error);
      setResult({ score: 69, commentary: "Abey, server down hai! Try again later, boss. Standard Mumbai response: 69%." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="maxi-checker" className="max-w-xl mx-auto mb-24 px-6">
      <div className="bg-[#FFD600] rounded-[40px] p-8 shadow-xl border-4 border-[#1C1C1C] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-[-20px] right-[-20px] bg-white h-20 w-20 rounded-full opacity-20"></div>
        
        <h3 className="font-header text-2xl font-black text-[#1C1C1C] mb-2">Check Your Maxi Meter</h3>
        <p className="font-body text-sm font-bold text-[#1C1C1C]/70 mb-6 uppercase tracking-tight">Enter your X / Github handle to see your standing</p>
        
        <div className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="@handle_names"
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            className="bg-white border-2 border-[#1C1C1C] rounded-[24px] px-6 py-4 font-bold text-lg focus:outline-none focus:ring-4 focus:ring-[#3FA9F5]/30"
          />
          <button 
            onClick={analyzeMaxi}
            disabled={loading}
            className="bg-[#E2231A] text-white font-black py-4 rounded-[24px] border-2 border-[#1C1C1C] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
          >
            {loading ? "Analyzing Pulse..." : "GENERATE TICKET"}
          </button>
        </div>

        {result && (
          <div className="mt-8 p-6 bg-white rounded-[24px] border-2 border-[#1C1C1C] animate-in fade-in zoom-in duration-300">
            <div className="flex justify-between items-center mb-4">
               <span className="font-header font-black text-3xl text-[#E2231A]">{result.score}%</span>
               <div className="bg-[#00A859] text-white text-[10px] px-3 py-1 rounded-full font-black">VALID TICKET</div>
            </div>
            <p className="font-body font-bold text-[#1C1C1C] text-lg leading-relaxed italic">
              "{result.commentary}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MaxiChecker;
