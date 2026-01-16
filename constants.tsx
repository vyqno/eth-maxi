
import React from 'react';

export const COLORS = {
  BEST_RED: '#E2231A',
  BUS_BLACK: '#1C1C1C',
  WHITE: '#FFFFFF',
  BUS_YELLOW: '#FFD600',
  ETH_BLUE: '#3FA9F5',
  BUS_GREEN: '#00A859',
};

export const MonogramSVG: React.FC<{ className?: string, color?: string }> = ({ className, color = COLORS.BEST_RED }) => (
  <svg viewBox="0 0 100 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Ethereum Diamond Shape */}
    <path d="M50 0L10 65L50 140L90 65L50 0Z" fill={color} />
    {/* Inner Bus Silhouette cutout (simplified) */}
    <rect x="25" y="45" width="50" height="35" rx="4" fill="white" />
    <rect x="30" y="50" width="18" height="15" rx="1" fill={color} />
    <rect x="52" y="50" width="18" height="15" rx="1" fill={color} />
    <circle cx="35" cy="72" r="3" fill={color} />
    <circle cx="65" cy="72" r="3" fill={color} />
  </svg>
);

export const MOCK_LEADERBOARD: any[] = [
  { id: '1', rank: 1, name: 'Vitalik Mumbaikar', handle: '@v_mumbai', maxiScore: 98, isOG: true, avatar: 'https://picsum.photos/seed/v/100' },
  { id: '2', rank: 2, name: 'Dadar De-Fi', handle: '@dadar_defi', maxiScore: 92, isOG: true, avatar: 'https://picsum.photos/seed/d/100' },
  { id: '3', rank: 3, name: 'Bandra Buidler', handle: '@bandra_b', maxiScore: 89, isOG: true, avatar: 'https://picsum.photos/seed/b/100' },
  { id: '4', rank: 4, name: 'Colaba Crypto', handle: '@colaba_eth', maxiScore: 85, isOG: false, avatar: 'https://picsum.photos/seed/c/100' },
  { id: '5', rank: 5, name: 'Juhu Jpeg', handle: '@juhu_nft', maxiScore: 78, isOG: false, avatar: 'https://picsum.photos/seed/j/100' },
  { id: '6', rank: 6, name: 'Ghatkopar Gas', handle: '@ghatkopar', maxiScore: 72, isOG: false, avatar: 'https://picsum.photos/seed/g/100' },
  { id: '7', rank: 7, name: 'Worli Whale', handle: '@worli_w', maxiScore: 68, isOG: false, avatar: 'https://picsum.photos/seed/w/100' },
];
