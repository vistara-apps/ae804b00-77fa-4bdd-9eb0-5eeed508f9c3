'use client';

import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

interface PredictionCardProps {
  id: string;
  region: string;
  type: 'long' | 'short';
  currentPrice: number;
  change: number;
  volume: number;
  status: 'open' | 'closed' | 'resolved';
}

export function PredictionCard({
  region,
  type,
  currentPrice,
  change,
  volume,
  status,
}: PredictionCardProps) {
  const isPositive = change > 0;

  return (
    <div className="bg-surface rounded-lg border border-surface p-5 hover:border-accent transition-all duration-200 group">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-fg group-hover:text-accent transition-colors duration-200">
            {region}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span
              className={`text-xs px-2 py-1 rounded ${
                type === 'long'
                  ? 'bg-success/10 text-success'
                  : 'bg-error/10 text-error'
              }`}
            >
              {type.toUpperCase()}
            </span>
            <span className="text-xs text-secondary">{status}</span>
          </div>
        </div>
        {type === 'long' ? (
          <TrendingUp className="w-5 h-5 text-success" />
        ) : (
          <TrendingDown className="w-5 h-5 text-error" />
        )}
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-secondary">Current Price</span>
          <span className="text-lg font-bold text-fg">${currentPrice}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-secondary">24h Change</span>
          <span
            className={`text-sm font-medium ${
              isPositive ? 'text-success' : 'text-error'
            }`}
          >
            {isPositive ? '+' : ''}
            {change}%
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-secondary">Volume</span>
          <div className="flex items-center gap-1">
            <DollarSign className="w-3 h-3 text-secondary" />
            <span className="text-sm text-fg">
              {(volume / 1000).toFixed(0)}K
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-surface">
        <button className="w-full px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium hover:bg-accent/90 transition-all duration-200 shadow-lg shadow-accent/20">
          Trade Now
        </button>
      </div>
    </div>
  );
}
