'use client';

import { useState } from 'react';
import type { Region } from '../types';

interface GeoMapProps {
  onRegionSelect: (region: Region) => void;
}

export function GeoMap({ onRegionSelect }: GeoMapProps) {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const mockRegions: Region[] = [
    {
      id: '1',
      name: 'United States',
      type: 'country',
      latitude: 37.0902,
      longitude: -95.7129,
      currentGDP: 25462.7,
      gdpGrowthRate: 2.1,
      literacyRate: 99,
      hdi: 0.926,
      lastUpdated: '2024-01-15',
      dataSources: ['World Bank', 'IMF']
    },
    {
      id: '2',
      name: 'China',
      type: 'country',
      latitude: 35.8617,
      longitude: 104.1954,
      currentGDP: 17963.2,
      gdpGrowthRate: 5.2,
      literacyRate: 97,
      hdi: 0.768,
      lastUpdated: '2024-01-15',
      dataSources: ['World Bank', 'OECD']
    },
    {
      id: '3',
      name: 'India',
      type: 'country',
      latitude: 20.5937,
      longitude: 78.9629,
      currentGDP: 3737.9,
      gdpGrowthRate: 7.2,
      literacyRate: 74,
      hdi: 0.633,
      lastUpdated: '2024-01-15',
      dataSources: ['World Bank', 'IMF']
    }
  ];

  const getColorByGrowth = (growthRate: number) => {
    if (growthRate >= 6) return '#ef4444'; // High growth - red
    if (growthRate >= 4) return '#f97316'; // Medium-high - orange
    if (growthRate >= 2) return '#fbbf24'; // Medium - yellow
    return '#fde047'; // Low growth - light yellow
  };

  return (
    <div className="relative w-full h-96 md:h-[500px] bg-gray-100 rounded-lg overflow-hidden">
      {/* Simplified world map visualization */}
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 1000 500" className="w-full h-full">
          {/* Continents as simplified shapes */}
          <g>
            {/* North America */}
            <path
              d="M 100 100 L 250 80 L 280 150 L 200 200 L 150 180 Z"
              fill={getColorByGrowth(2.1)}
              stroke="#fff"
              strokeWidth="2"
              className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
              onMouseEnter={() => setHoveredRegion('1')}
              onMouseLeave={() => setHoveredRegion(null)}
              onClick={() => onRegionSelect(mockRegions[0])}
            />
            
            {/* Asia */}
            <path
              d="M 600 120 L 800 100 L 850 200 L 750 250 L 650 200 Z"
              fill={getColorByGrowth(5.2)}
              stroke="#fff"
              strokeWidth="2"
              className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
              onMouseEnter={() => setHoveredRegion('2')}
              onMouseLeave={() => setHoveredRegion(null)}
              onClick={() => onRegionSelect(mockRegions[1])}
            />
            
            {/* India */}
            <path
              d="M 650 250 L 700 240 L 720 300 L 680 320 L 650 300 Z"
              fill={getColorByGrowth(7.2)}
              stroke="#fff"
              strokeWidth="2"
              className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
              onMouseEnter={() => setHoveredRegion('3')}
              onMouseLeave={() => setHoveredRegion(null)}
              onClick={() => onRegionSelect(mockRegions[2])}
            />
            
            {/* Europe */}
            <path
              d="M 450 120 L 550 110 L 560 180 L 480 190 L 450 160 Z"
              fill="#fde047"
              stroke="#fff"
              strokeWidth="2"
              className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
            />
            
            {/* Africa */}
            <path
              d="M 450 220 L 550 210 L 560 350 L 480 360 L 450 300 Z"
              fill="#f97316"
              stroke="#fff"
              strokeWidth="2"
              className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
            />
            
            {/* South America */}
            <path
              d="M 250 280 L 320 270 L 330 400 L 270 410 L 250 350 Z"
              fill="#fbbf24"
              stroke="#fff"
              strokeWidth="2"
              className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
            />
            
            {/* Australia */}
            <path
              d="M 750 350 L 850 340 L 860 400 L 780 410 L 750 380 Z"
              fill="#fde047"
              stroke="#fff"
              strokeWidth="2"
              className="cursor-pointer hover:opacity-80 transition-opacity duration-200"
            />
          </g>
        </svg>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: '#ef4444' }}></div>
            <span className="text-xs text-gray-700">High Growth (&gt;6%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded" style={{ backgroundColor: '#fbbf24' }}></div>
            <span className="text-xs text-gray-700">Low Growth (&lt;3%)</span>
          </div>
        </div>
      </div>

      {/* Hover tooltip */}
      {hoveredRegion && (
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl max-w-xs animate-fade-in">
          {mockRegions.find(r => r.id === hoveredRegion) && (
            <div>
              <h4 className="font-bold text-gray-900 mb-2">
                {mockRegions.find(r => r.id === hoveredRegion)?.name}
              </h4>
              <div className="space-y-1 text-sm text-gray-700">
                <p>GDP Growth: <span className="font-semibold text-primary">
                  {mockRegions.find(r => r.id === hoveredRegion)?.gdpGrowthRate}%
                </span></p>
                <p>HDI: {mockRegions.find(r => r.id === hoveredRegion)?.hdi}</p>
                <p className="text-xs text-gray-500 mt-2">Click to predict</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
