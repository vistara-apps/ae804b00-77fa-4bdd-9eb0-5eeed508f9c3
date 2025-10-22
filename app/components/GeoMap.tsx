'use client';

import { useState } from 'react';
import { MapPin, TrendingUp, TrendingDown, Info } from 'lucide-react';

interface Region {
  id: string;
  name: string;
  gdp: number;
  growth: number;
  hdi: number;
  color: string;
}

export function GeoMap() {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);

  const regions: Region[] = [
    { id: '1', name: 'North America', gdp: 24.5, growth: 2.1, hdi: 0.92, color: '#fbbf24' },
    { id: '2', name: 'South America', gdp: 3.2, growth: 1.8, hdi: 0.75, color: '#fb923c' },
    { id: '3', name: 'Europe', gdp: 18.3, growth: 1.5, hdi: 0.89, color: '#fbbf24' },
    { id: '4', name: 'Africa', gdp: 2.8, growth: 3.5, hdi: 0.58, color: '#ef4444' },
    { id: '5', name: 'Asia', gdp: 35.2, growth: 4.2, hdi: 0.72, color: '#f97316' },
    { id: '6', name: 'Oceania', gdp: 1.8, growth: 2.3, hdi: 0.88, color: '#fbbf24' },
  ];

  return (
    <div className="space-y-6">
      {/* Map Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-fg">Global Economic Map</h2>
          <p className="text-sm text-secondary mt-1">
            Real-time geo-economic data visualization
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-success"></div>
            <span className="text-secondary">High Growth</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-error"></div>
            <span className="text-secondary">Low Growth</span>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="bg-surface rounded-lg border border-surface p-6">
        <div className="aspect-video bg-bg rounded-lg relative overflow-hidden">
          {/* Simplified world map representation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
              <MapPin className="w-16 h-16 text-accent mx-auto" />
              <p className="text-secondary">Interactive map visualization</p>
              <p className="text-xs text-secondary/70">
                Click regions below to explore data
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Region Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {regions.map((region) => (
          <button
            key={region.id}
            onClick={() => setSelectedRegion(region)}
            className="bg-surface rounded-lg border border-surface p-4 hover:border-accent transition-all duration-200 text-left group"
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-fg group-hover:text-accent transition-colors duration-200">
                  {region.name}
                </h3>
                <p className="text-xs text-secondary mt-1">
                  GDP: ${region.gdp}T
                </p>
              </div>
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: region.color }}
              ></div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-secondary">Growth Rate</span>
                <div className="flex items-center gap-1">
                  {region.growth > 0 ? (
                    <TrendingUp className="w-4 h-4 text-success" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-error" />
                  )}
                  <span className={region.growth > 0 ? 'text-success' : 'text-error'}>
                    {region.growth}%
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-secondary">HDI</span>
                <span className="text-fg font-medium">{region.hdi}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-surface">
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2 bg-success/10 text-success rounded text-xs font-medium hover:bg-success/20 transition-colors duration-200">
                  Long
                </button>
                <button className="flex-1 px-3 py-2 bg-error/10 text-error rounded text-xs font-medium hover:bg-error/20 transition-colors duration-200">
                  Short
                </button>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Selected Region Details */}
      {selectedRegion && (
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-fg">{selectedRegion.name}</h3>
              <p className="text-sm text-secondary mt-1">Detailed Economic Overview</p>
            </div>
            <button
              onClick={() => setSelectedRegion(null)}
              className="text-secondary hover:text-fg transition-colors duration-200"
            >
              ✕
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-surface rounded-lg p-4">
              <div className="text-xs text-secondary mb-1">GDP</div>
              <div className="text-lg font-bold text-fg">${selectedRegion.gdp}T</div>
            </div>
            <div className="bg-surface rounded-lg p-4">
              <div className="text-xs text-secondary mb-1">Growth</div>
              <div className="text-lg font-bold text-success">{selectedRegion.growth}%</div>
            </div>
            <div className="bg-surface rounded-lg p-4">
              <div className="text-xs text-secondary mb-1">HDI</div>
              <div className="text-lg font-bold text-fg">{selectedRegion.hdi}</div>
            </div>
            <div className="bg-surface rounded-lg p-4">
              <div className="text-xs text-secondary mb-1">Volume</div>
              <div className="text-lg font-bold text-fg">$2.4M</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
