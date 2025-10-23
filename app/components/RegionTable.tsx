'use client';

import { TrendingUp, TrendingDown } from 'lucide-react';
import { mockRegions } from '../data/mockData';
import type { Region } from '../types';

interface RegionTableProps {
  onRegionSelect: (region: Region) => void;
}

export function RegionTable({ onRegionSelect }: RegionTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-primary border-opacity-20">
            <th className="text-left py-3 px-4 text-text-secondary font-medium">Region</th>
            <th className="text-left py-3 px-4 text-text-secondary font-medium">Type</th>
            <th className="text-right py-3 px-4 text-text-secondary font-medium">GDP Growth</th>
            <th className="text-right py-3 px-4 text-text-secondary font-medium">HDI</th>
            <th className="text-right py-3 px-4 text-text-secondary font-medium">Action</th>
          </tr>
        </thead>
        <tbody>
          {mockRegions.slice(0, 5).map((region) => (
            <tr 
              key={region.id}
              className="border-b border-primary border-opacity-10 hover:bg-bg transition-colors cursor-pointer"
              onClick={() => onRegionSelect(region)}
            >
              <td className="py-4 px-4 font-medium">{region.name}</td>
              <td className="py-4 px-4 text-text-secondary capitalize">{region.type}</td>
              <td className="py-4 px-4 text-right">
                <div className="flex items-center justify-end gap-2">
                  {region.gdpGrowthRate > 0 ? (
                    <TrendingUp className="w-4 h-4 text-success" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-error" />
                  )}
                  <span className={region.gdpGrowthRate > 0 ? 'text-success' : 'text-error'}>
                    {region.gdpGrowthRate.toFixed(2)}%
                  </span>
                </div>
              </td>
              <td className="py-4 px-4 text-right">{region.hdi.toFixed(3)}</td>
              <td className="py-4 px-4 text-right">
                <button 
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all text-sm font-medium"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRegionSelect(region);
                  }}
                >
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
