'use client';

import { Trophy, Medal, Award } from 'lucide-react';

export function LeaderboardView() {
  const leaderboardData = [
    { rank: 1, username: 'cryptotrader.eth', score: 9847, contributions: 1234.56, accuracy: 87 },
    { rank: 2, username: 'geomaster.base', score: 8932, contributions: 987.32, accuracy: 84 },
    { rank: 3, username: 'worldinvestor', score: 7654, contributions: 765.43, accuracy: 81 },
    { rank: 4, username: 'marketpro.eth', score: 6543, contributions: 654.32, accuracy: 79 },
    { rank: 5, username: 'globaltrader', score: 5432, contributions: 543.21, accuracy: 76 },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-orange-600" />;
      default:
        return <span className="text-text-secondary font-bold">#{rank}</span>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-surface rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-bold text-text-primary mb-6">Global Leaderboard</h2>
        
        <div className="space-y-3">
          {leaderboardData.map((user) => (
            <div
              key={user.rank}
              className="flex items-center gap-4 p-4 bg-bg rounded-lg hover:bg-primary/5 transition-all duration-200"
            >
              <div className="flex items-center justify-center w-12">
                {getRankIcon(user.rank)}
              </div>
              
              <div className="flex-1">
                <p className="font-semibold text-text-primary">{user.username}</p>
                <p className="text-sm text-text-secondary">
                  Accuracy: <span className="text-success">{user.accuracy}%</span>
                </p>
              </div>
              
              <div className="text-right">
                <p className="font-bold text-primary">{user.score.toLocaleString()}</p>
                <p className="text-xs text-text-secondary">
                  ${user.contributions.toFixed(2)} contributed
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-surface rounded-lg p-6 shadow-lg">
          <h3 className="text-sm font-medium text-text-secondary mb-2">Your Rank</h3>
          <p className="text-3xl font-bold text-primary">#42</p>
        </div>
        <div className="bg-surface rounded-lg p-6 shadow-lg">
          <h3 className="text-sm font-medium text-text-secondary mb-2">Total Score</h3>
          <p className="text-3xl font-bold text-text-primary">3,456</p>
        </div>
        <div className="bg-surface rounded-lg p-6 shadow-lg">
          <h3 className="text-sm font-medium text-text-secondary mb-2">Accuracy</h3>
          <p className="text-3xl font-bold text-success">72%</p>
        </div>
      </div>
    </div>
  );
}
