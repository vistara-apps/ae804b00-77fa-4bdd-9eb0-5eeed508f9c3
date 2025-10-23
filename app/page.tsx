'use client';

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { GeoMap } from './components/GeoMap';
import { DataTable } from './components/DataTable';
import { PredictionModal } from './components/PredictionModal';
import { LeaderboardView } from './components/LeaderboardView';
import { ImpactDashboard } from './components/ImpactDashboard';
import type { Region } from './types';

export default function Home() {
  const [activeView, setActiveView] = useState<'geoboard' | 'leaderboard' | 'impact'>('geoboard');
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [showPredictionModal, setShowPredictionModal] = useState(false);

  useEffect(() => {
    // Call setFrameReady when component mounts
    if (typeof window !== 'undefined') {
      // MiniKit frame ready signal
      window.parent?.postMessage({ type: 'frame-ready' }, '*');
    }
  }, []);

  const handleRegionSelect = (region: Region) => {
    setSelectedRegion(region);
    setShowPredictionModal(true);
  };

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeView={activeView} onViewChange={setActiveView} />
        
        <main className="flex-1 overflow-auto">
          {activeView === 'geoboard' && (
            <div className="p-4 md:p-6 space-y-6 animate-fade-in">
              <div className="bg-surface rounded-lg p-4 md:p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl md:text-2xl font-bold text-text-primary">
                    Global Economic Heatmap
                  </h2>
                  <div className="flex gap-2">
                    <button className="px-3 py-1.5 text-sm bg-primary text-white rounded-md hover:bg-opacity-90 transition-all duration-200">
                      Local
                    </button>
                    <button className="px-3 py-1.5 text-sm bg-surface border border-primary/30 text-text-secondary rounded-md hover:bg-primary/10 transition-all duration-200">
                      Leaderboard
                    </button>
                  </div>
                </div>
                <GeoMap onRegionSelect={handleRegionSelect} />
              </div>

              <div className="bg-surface rounded-lg p-4 md:p-6 shadow-lg">
                <h3 className="text-lg md:text-xl font-bold text-text-primary mb-4">
                  Top Trending Regions
                </h3>
                <DataTable onRegionSelect={handleRegionSelect} />
              </div>
            </div>
          )}

          {activeView === 'leaderboard' && (
            <div className="p-4 md:p-6 animate-fade-in">
              <LeaderboardView />
            </div>
          )}

          {activeView === 'impact' && (
            <div className="p-4 md:p-6 animate-fade-in">
              <ImpactDashboard />
            </div>
          )}
        </main>
      </div>

      {showPredictionModal && selectedRegion && (
        <PredictionModal
          region={selectedRegion}
          onClose={() => {
            setShowPredictionModal(false);
            setSelectedRegion(null);
          }}
        />
      )}
    </div>
  );
}
