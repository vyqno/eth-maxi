
export interface LeaderboardUser {
  id: string;
  rank: number;
  name: string;
  handle: string;
  maxiScore: number;
  isOG: boolean;
  avatar: string;
}

export interface MaxiAnalysis {
  score: number;
  commentary: string;
  badge: string;
}
