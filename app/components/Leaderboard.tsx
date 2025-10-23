'use client';

import { Trophy, Medal, Award } from 'lucide-react';
import { mockLeaderboard } from '../data/mockData';

export function Leaderboard() {
  return (
    <div className="bg-surface rounded-lg p-4 md:p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <Trophy className="w-8 h-8 text-primary" />
        <h2 className="text-xl md:text-2xl font-bold">Global Leaderboard</h2>
      </div>

      <div className="space-y-3">
        {mockLeaderboard.map((user, index) => {
          const Icon = index === 0 ? Trophy : index === 1 ? Medal : Award;
          const iconColor = index === 0 ? 'text-warning' : index === 1 ? 'text-text-secondary' : 'text-primary';
          
          return (
            <div
              key={user.fid}
              className="flex items-center gap-4 p-4 bg-bg rounded-lg hover:bg-opacity-80 transition-colors"
            >
              <div className="flex items-center gap-3 flex-1">
                <Icon className={`w-6 h-6 ${iconColor}`} />
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                  {user.displayName.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{user.displayName}</p>
                  <p className="text-sm text-text-secondary">@{user.basename}</p>
                </div>
              </div>
              
              <div className="text-right">
                <p className="font-bold text-lg">{user.reputationScore}</p>
                <p className="text-xs text-text-secondary">Reputation</p>
              </div>
              
              <div className="text-right">
                <p className="font-bold text-lg text-success">${user.totalContributions.toLocaleString()}</p>
                <p className="text-xs text-text-secondary">Contributed</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
