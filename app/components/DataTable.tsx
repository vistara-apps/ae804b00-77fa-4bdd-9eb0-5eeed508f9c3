'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';
import type { Region } from '../types';

interface DataTableProps {
  onRegionSelect: (region: Region) => void;
}

export function DataTable({ onRegionSelect }: DataTableProps) {
  const mockData: Region[] = [
    {
      id: '1',
      name: 'India',
      type: 'country',
      latitude: 20.5937,
      longitude: 78.9629,
      currentGDP: 3737.9,
      gdpGrowthRate: 7.2,
      literacyRate: 74,
      hdi: 0.633,
      lastUpdated: '2024-01-15',
      dataSources: ['World Bank']
    },
    {
      id: '2',
      name: 'Vietnam',
      type: 'country',
      latitude: 14.0583,
      longitude: 108.2772,
      currentGDP: 408.8,
      gdpGrowthRate: 6.5,
      literacyRate: 95,
      hdi: 0.703,
      lastUpdated: '2024-01-15',
      dataSources: ['IMF']
    },
    {
      id: '3',
      name: 'China',
      type: 'country',
      latitude: 35.8617,
      longitude: 104.1954,
      currentGDP: 17963.2,
      gdpGrowthRate: 5.2,
      literacyRate: 97,
      hdi: 0.768,
      lastUpdated: '2024-01-15',
      dataSources: ['OECD']
    },
    {
      id: '4',
      name: 'United States',
      type: 'country',
      latitude: 37.0902,
      longitude: -95.7129,
      currentGDP: 25462.7,
      gdpGrowthRate: 2.1,
      literacyRate: 99,
      hdi: 0.926,
      lastUpdated: '2024-01-15',
      dataSources: ['World Bank']
    }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-primary/20">
            <th className="text-left py-3 px-4 text-sm font-semibold text-text-secondary">Region</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-text-secondary">GDP Growth</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-text-secondary">HDI</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-text-secondary">Literacy</th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-text-secondary">Action</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((region) => (
            <tr 
              key={region.id}
              className="border-b border-primary/10 hover:bg-primary/5 transition-colors duration-200 cursor-pointer"
              onClick={() => onRegionSelect(region)}
            >
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">
                      {region.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-text-primary">{region.name}</p>
                    <p className="text-xs text-text-secondary capitalize">{region.type}</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  {region.gdpGrowthRate > 4 ? (
                    <TrendingUp className="w-4 h-4 text-success" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-warning" />
                  )}
                  <span className={`font-semibold ${
                    region.gdpGrowthRate > 4 ? 'text-success' : 'text-warning'
                  }`}>
                    {region.gdpGrowthRate}%
                  </span>
                </div>
              </td>
              <td className="py-4 px-4">
                <span className="text-text-primary">{region.hdi.toFixed(3)}</span>
              </td>
              <td className="py-4 px-4">
                <span className="text-text-primary">{region.literacyRate}%</span>
              </td>
              <td className="py-4 px-4">
                <button className="px-3 py-1.5 bg-primary text-white text-sm rounded-md hover:bg-opacity-90 transition-all duration-200">
                  Predict
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
