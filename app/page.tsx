'use client';

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { GeoMap } from './components/GeoMap';
import { RegionTable } from './components/RegionTable';
import { PredictionModal } from './components/PredictionModal';
import { Leaderboard } from './components/Leaderboard';
import { ImpactDashboard } from './components/ImpactDashboard';
import type { Region } from './types';

export default function Home() {
  const [activeView, setActiveView] = useState<'geoboard' | 'predictions' | 'leaderboard' | 'impact'>('geoboard');
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [showPredictionModal, setShowPredictionModal] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  const handleRegionSelect = (region: Region) => {
    setSelectedRegion(region);
    setShowPredictionModal(true);
  };

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse-slow text-primary text-xl font-semibold">
          Loading GeoTrade...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeView={activeView} onViewChange={setActiveView} />
        
        <main className="flex-1 overflow-auto">
          {activeView === 'geoboard' && (
            <div className="p-4 md:p-6 space-y-6 animate-fade-in">
              <div className="bg-surface rounded-lg p-4 md:p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl md:text-2xl font-bold">Global Economic Map</h2>
                  <div className="flex gap-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-success"></div>
                      <span className="text-text-secondary">High Growth</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-error"></div>
                      <span className="text-text-secondary">Low Growth</span>
                    </div>
                  </div>
                </div>
                <GeoMap onRegionSelect={handleRegionSelect} />
              </div>
              
              <div className="bg-surface rounded-lg p-4 md:p-6 shadow-lg">
                <h2 className="text-xl md:text-2xl font-bold mb-4">Top Regions</h2>
                <RegionTable onRegionSelect={handleRegionSelect} />
              </div>
            </div>
          )}

          {activeView === 'predictions' && (
            <div className="p-4 md:p-6 animate-fade-in">
              <div className="bg-surface rounded-lg p-4 md:p-6 shadow-lg">
                <h2 className="text-xl md:text-2xl font-bold mb-4">Your Predictions</h2>
                <div className="text-center py-12 text-text-secondary">
                  <p className="text-lg mb-4">No active predictions yet</p>
                  <button 
                    onClick={() => setActiveView('geoboard')}
                    className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all"
                  >
                    Explore Regions
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeView === 'leaderboard' && (
            <div className="p-4 md:p-6 animate-fade-in">
              <Leaderboard />
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
