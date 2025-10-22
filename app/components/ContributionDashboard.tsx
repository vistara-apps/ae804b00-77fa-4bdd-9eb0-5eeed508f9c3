'use client';

import { DollarSign, TrendingUp, Heart, ExternalLink } from 'lucide-react';

interface Contribution {
  id: string;
  fund: string;
  amount: number;
  timestamp: string;
  txHash: string;
}

export function ContributionDashboard() {
  const totalContributions = 248.75;
  const contributions: Contribution[] = [
    {
      id: '1',
      fund: 'Gitcoin Grants',
      amount: 12.50,
      timestamp: '2024-01-15',
      txHash: '0x1234...5678',
    },
    {
      id: '2',
      fund: 'Base Grants',
      amount: 8.25,
      timestamp: '2024-01-14',
      txHash: '0xabcd...efgh',
    },
    {
      id: '3',
      fund: 'Local Development Pool',
      amount: 15.75,
      timestamp: '2024-01-13',
      txHash: '0x9876...5432',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-fg">Impact Dashboard</h2>
        <p className="text-sm text-secondary mt-1">
          Your contributions to public goods
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-surface rounded-lg border border-surface p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-accent" />
            </div>
            <TrendingUp className="w-5 h-5 text-success" />
          </div>
          <div className="text-2xl font-bold text-fg mb-1">
            ${totalContributions.toFixed(2)}
          </div>
          <div className="text-sm text-secondary">Total Contributions</div>
        </div>

        <div className="bg-surface rounded-lg border border-surface p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
              <Heart className="w-6 h-6 text-success" />
            </div>
            <span className="text-xs px-2 py-1 bg-success/10 text-success rounded">
              +12%
            </span>
          </div>
          <div className="text-2xl font-bold text-fg mb-1">47</div>
          <div className="text-sm text-secondary">Trades with Impact</div>
        </div>

        <div className="bg-surface rounded-lg border border-surface p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-warning" />
            </div>
            <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">
              Top 5%
            </span>
          </div>
          <div className="text-2xl font-bold text-fg mb-1">0.5%</div>
          <div className="text-sm text-secondary">Contribution Rate</div>
        </div>
      </div>

      {/* Contribution History */}
      <div className="bg-surface rounded-lg border border-surface overflow-hidden">
        <div className="px-6 py-4 border-b border-surface">
          <h3 className="font-semibold text-fg">Recent Contributions</h3>
        </div>
        <div className="divide-y divide-surface">
          {contributions.map((contribution) => (
            <div
              key={contribution.id}
              className="px-6 py-4 hover:bg-bg transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="font-medium text-fg">{contribution.fund}</div>
                  <div className="text-sm text-secondary mt-1">
                    {contribution.timestamp}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-accent">
                    ${contribution.amount.toFixed(2)}
                  </div>
                  <a
                    href={`https://basescan.org/tx/${contribution.txHash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-secondary hover:text-accent transition-colors duration-200 flex items-center gap-1 justify-end mt-1"
                  >
                    <span>{contribution.txHash}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Share Impact */}
      <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-fg mb-2">Share Your Impact</h3>
            <p className="text-sm text-secondary mb-4">
              Show your community how you're contributing to public goods through
              GeoTrade predictions.
            </p>
            <button className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent/90 transition-all duration-200 shadow-lg shadow-accent/20">
              Share to Farcaster
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
