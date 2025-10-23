'use client';

import { Heart, TrendingUp, Users, ExternalLink } from 'lucide-react';

export function ImpactDashboard() {
  const contributions = [
    {
      id: '1',
      fund: 'Gitcoin Climate Solutions',
      amount: 45.32,
      date: '2024-01-15',
      txHash: '0x1234...5678'
    },
    {
      id: '2',
      fund: 'Base Education Grant',
      amount: 32.18,
      date: '2024-01-14',
      txHash: '0xabcd...efgh'
    },
    {
      id: '3',
      fund: 'Global Health Initiative',
      amount: 28.76,
      date: '2024-01-13',
      txHash: '0x9876...5432'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-surface rounded-lg p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <Heart className="w-8 h-8 text-error" />
          <div>
            <h2 className="text-2xl font-bold text-text-primary">Impact Dashboard</h2>
            <p className="text-sm text-text-secondary">Your contribution to public goods</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-bg rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-success" />
              <span className="text-sm text-text-secondary">Total Contributed</span>
            </div>
            <p className="text-2xl font-bold text-text-primary">$106.26</p>
          </div>
          
          <div className="bg-bg rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm text-text-secondary">Funds Supported</span>
            </div>
            <p className="text-2xl font-bold text-text-primary">3</p>
          </div>
          
          <div className="bg-bg rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-error" />
              <span className="text-sm text-text-secondary">Impact Rank</span>
            </div>
            <p className="text-2xl font-bold text-text-primary">#127</p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-text-primary mb-3">Recent Contributions</h3>
          {contributions.map((contribution) => (
            <div
              key={contribution.id}
              className="flex items-center justify-between p-4 bg-bg rounded-lg hover:bg-primary/5 transition-all duration-200"
            >
              <div className="flex-1">
                <p className="font-medium text-text-primary">{contribution.fund}</p>
                <p className="text-sm text-text-secondary">{contribution.date}</p>
              </div>
              
              <div className="flex items-center gap-4">
                <p className="font-bold text-success">${contribution.amount.toFixed(2)}</p>
                <a
                  href={`https://basescan.org/tx/${contribution.txHash}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-primary/10 rounded-lg transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4 text-primary" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-200">
          Share Your Impact
        </button>
      </div>
    </div>
  );
}
