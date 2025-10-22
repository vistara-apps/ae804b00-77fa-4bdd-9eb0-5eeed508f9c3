'use client';

import { useState, useEffect } from 'react';
import { Globe, TrendingUp, TrendingDown, DollarSign, Users, Award } from 'lucide-react';
import { ConnectWallet } from './components/ConnectWallet';
import { GeoMap } from './components/GeoMap';
import { PredictionCard } from './components/PredictionCard';
import { LeaderboardTable } from './components/LeaderboardTable';
import { ContributionDashboard } from './components/ContributionDashboard';

type TabType = 'map' | 'predictions' | 'leaderboard' | 'impact';

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('map');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="animate-pulse text-fg">Loading GeoTrade...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-surface bg-surface/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-fg">GeoTrade</h1>
                <p className="text-xs text-secondary">Invest in Regional Growth</p>
              </div>
            </div>
            <ConnectWallet />
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="border-b border-surface bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto">
            <TabButton
              active={activeTab === 'map'}
              onClick={() => setActiveTab('map')}
              icon={<Globe className="w-4 h-4" />}
              label="GeoMap"
            />
            <TabButton
              active={activeTab === 'predictions'}
              onClick={() => setActiveTab('predictions')}
              icon={<TrendingUp className="w-4 h-4" />}
              label="Predictions"
            />
            <TabButton
              active={activeTab === 'leaderboard'}
              onClick={() => setActiveTab('leaderboard')}
              icon={<Award className="w-4 h-4" />}
              label="Leaderboard"
            />
            <TabButton
              active={activeTab === 'impact'}
              onClick={() => setActiveTab('impact')}
              icon={<DollarSign className="w-4 h-4" />}
              label="Impact"
            />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {activeTab === 'map' && <GeoMap />}
        {activeTab === 'predictions' && <PredictionsView />}
        {activeTab === 'leaderboard' && <LeaderboardTable />}
        {activeTab === 'impact' && <ContributionDashboard />}
      </main>
    </div>
  );
}

function TabButton({ 
  active, 
  onClick, 
  icon, 
  label 
}: { 
  active: boolean; 
  onClick: () => void; 
  icon: React.ReactNode; 
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-200
        border-b-2 whitespace-nowrap
        ${active 
          ? 'border-accent text-accent' 
          : 'border-transparent text-secondary hover:text-fg hover:border-surface'
        }
      `}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function PredictionsView() {
  const predictions = [
    {
      id: '1',
      region: 'Southeast Asia',
      type: 'long' as const,
      currentPrice: 1.24,
      change: 5.2,
      volume: 125000,
      status: 'open' as const,
    },
    {
      id: '2',
      region: 'Sub-Saharan Africa',
      type: 'long' as const,
      currentPrice: 0.89,
      change: 3.8,
      volume: 89000,
      status: 'open' as const,
    },
    {
      id: '3',
      region: 'Eastern Europe',
      type: 'short' as const,
      currentPrice: 1.12,
      change: -2.1,
      volume: 67000,
      status: 'open' as const,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-fg">Active Markets</h2>
          <p className="text-sm text-secondary mt-1">
            Trade on regional development trajectories
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-success text-white rounded-lg text-sm font-medium hover:bg-success/90 transition-colors duration-200 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Long
          </button>
          <button className="px-4 py-2 bg-error text-white rounded-lg text-sm font-medium hover:bg-error/90 transition-colors duration-200 flex items-center gap-2">
            <TrendingDown className="w-4 h-4" />
            Short
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {predictions.map((prediction) => (
          <PredictionCard key={prediction.id} {...prediction} />
        ))}
      </div>
    </div>
  );
}
