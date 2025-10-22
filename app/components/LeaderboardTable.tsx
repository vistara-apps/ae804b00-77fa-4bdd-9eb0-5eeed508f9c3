'use client';

import { Award, TrendingUp } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  username: string;
  basename: string;
  accuracy: number;
  totalTrades: number;
  profit: number;
  contributions: number;
}

export function LeaderboardTable() {
  const entries: LeaderboardEntry[] = [
    {
      rank: 1,
      username: 'cryptotrader',
      basename: 'cryptotrader.base.eth',
      accuracy: 87.5,
      totalTrades: 234,
      profit: 12450,
      contributions: 62.25,
    },
    {
      rank: 2,
      username: 'geoinvestor',
      basename: 'geoinvestor.base.eth',
      accuracy: 84.2,
      totalTrades: 189,
      profit: 9870,
      contributions: 49.35,
    },
    {
      rank: 3,
      username: 'worldtrader',
      basename: 'worldtrader.base.eth',
      accuracy: 82.1,
      totalTrades: 156,
      profit: 8230,
      contributions: 41.15,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-fg">Global Leaderboard</h2>
          <p className="text-sm text-secondary mt-1">
            Top predictors and contributors
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-lg border border-accent/20">
          <Award className="w-5 h-5 text-accent" />
          <span className="text-sm font-medium text-accent">Your Rank: #42</span>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {entries.slice(0, 3).map((entry, index) => (
          <div
            key={entry.rank}
            className={`bg-surface rounded-lg border p-4 text-center ${
              index === 0
                ? 'border-accent col-start-2 row-start-1'
                : 'border-surface'
            }`}
          >
            <div
              className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center ${
                index === 0
                  ? 'bg-accent text-white'
                  : index === 1
                  ? 'bg-secondary text-white'
                  : 'bg-surface text-fg'
              }`}
            >
              <span className="text-xl font-bold">#{entry.rank}</span>
            </div>
            <div className="font-semibold text-fg">{entry.username}</div>
            <div className="text-xs text-secondary mt-1">{entry.basename}</div>
            <div className="mt-3 pt-3 border-t border-surface">
              <div className="text-sm text-secondary">Accuracy</div>
              <div className="text-lg font-bold text-success">{entry.accuracy}%</div>
            </div>
          </div>
        ))}
      </div>

      {/* Leaderboard Table */}
      <div className="bg-surface rounded-lg border border-surface overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-bg border-b border-surface">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">
                  Rank
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">
                  Accuracy
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">
                  Trades
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">
                  Profit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-secondary uppercase tracking-wider">
                  Contributions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface">
              {entries.map((entry) => (
                <tr
                  key={entry.rank}
                  className="hover:bg-bg transition-colors duration-200"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-fg">
                        #{entry.rank}
                      </span>
                      {entry.rank <= 3 && (
                        <Award className="w-4 h-4 text-accent" />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-fg">
                        {entry.username}
                      </div>
                      <div className="text-xs text-secondary">
                        {entry.basename}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-success" />
                      <span className="text-sm font-medium text-success">
                        {entry.accuracy}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-fg">{entry.totalTrades}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-success">
                      ${entry.profit.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-accent">
                      ${entry.contributions.toFixed(2)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
