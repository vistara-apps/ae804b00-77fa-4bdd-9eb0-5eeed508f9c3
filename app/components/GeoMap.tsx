'use client';

import { mockRegions } from '../data/mockData';
import type { Region } from '../types';

interface GeoMapProps {
  onRegionSelect: (region: Region) => void;
}

export function GeoMap({ onRegionSelect }: GeoMapProps) {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] bg-bg rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 1000 500" className="w-full h-full">
          {/* Simplified world map representation */}
          <g className="regions">
            {mockRegions.map((region, index) => {
              const x = (region.longitude + 180) * (1000 / 360);
              const y = (90 - region.latitude) * (500 / 180);
              const color = region.gdpGrowthRate > 3 ? '#22c55e' : region.gdpGrowthRate > 1 ? '#f59e0b' : '#ef4444';
              
              return (
                <g key={region.id}>
                  <circle
                    cx={x}
                    cy={y}
                    r="8"
                    fill={color}
                    opacity="0.8"
                    className="cursor-pointer hover:opacity-100 transition-opacity"
                    onClick={() => onRegionSelect(region)}
                  />
                  <text
                    x={x}
                    y={y - 15}
                    textAnchor="middle"
                    fill="currentColor"
                    fontSize="10"
                    className="pointer-events-none text-text-primary"
                  >
                    {region.name}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>
      
      <div className="absolute bottom-4 left-4 bg-surface bg-opacity-90 rounded-lg p-3 text-sm">
        <p className="text-text-secondary mb-2">Click on a region to predict</p>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-success"></div>
            <span>High Growth (&gt;3%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-warning"></div>
            <span>Medium (1-3%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-error"></div>
            <span>Low (&lt;1%)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
