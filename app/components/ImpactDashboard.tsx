'use client';

import { Heart, TrendingUp, Users, DollarSign } from 'lucide-react';
import { mockPublicGoods } from '../data/mockData';

export function ImpactDashboard() {
  const totalContributions = mockPublicGoods.reduce((sum, fund) => sum + fund.totalContributions, 0);

  return (
    <div className="space-y-6">
      <div className="bg-surface rounded-lg p-4 md:p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <Heart className="w-8 h-8 text-error" />
          <h2 className="text-xl md:text-2xl font-bold">Your Impact</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-bg rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-5 h-5 text-success" />
              <p className="text-text-secondary text-sm">Total Contributed</p>
            </div>
            <p className="text-2xl font-bold text-success">${totalContributions.toLocaleString()}</p>
          </div>

          <div className="bg-bg rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <p className="text-text-secondary text-sm">Active Predictions</p>
            </div>
            <p className="text-2xl font-bold">12</p>
          </div>

          <div className="bg-bg rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-5 h-5 text-warning" />
              <p className="text-text-secondary text-sm">Funds Supported</p>
            </div>
            <p className="text-2xl font-bold">{mockPublicGoods.length}</p>
          </div>
        </div>
      </div>

      <div className="bg-surface rounded-lg p-4 md:p-6 shadow-lg">
        <h3 className="text-xl font-bold mb-4">Public Goods Funds</h3>
        <div className="space-y-4">
          {mockPublicGoods.map((fund) => (
            <div key={fund.id} className="bg-bg rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">{fund.name}</h4>
                  <p className="text-sm text-text-secondary">{fund.description}</p>
                </div>
                <div className="text-right ml-4">
                  <p className="text-xl font-bold text-success">${fund.totalContributions.toLocaleString()}</p>
                  <p className="text-xs text-text-secondary">Total Raised</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <p className="text-text-secondary">
                  Last contribution: {new Date(fund.lastContributionTimestamp).toLocaleDateString()}
                </p>
                <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
