'use client';

import { Home, TrendingUp, Trophy, Heart, ChevronRight } from 'lucide-react';

interface SidebarProps {
  activeView: string;
  onViewChange: (view: 'geoboard' | 'predictions' | 'leaderboard' | 'impact') => void;
}

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  const menuItems = [
    { id: 'geoboard', label: 'GeoBoard', icon: Home },
    { id: 'predictions', label: 'Predictions', icon: TrendingUp },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'impact', label: 'Impact', icon: Heart },
  ];

  return (
    <aside className="w-16 md:w-64 bg-surface border-r border-primary border-opacity-20 flex flex-col">
      <nav className="flex-1 p-2 md:p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id as any)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all ${
                isActive 
                  ? 'bg-primary text-white' 
                  : 'hover:bg-bg text-text-secondary hover:text-text-primary'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="hidden md:inline font-medium">{item.label}</span>
              {isActive && (
                <ChevronRight className="w-4 h-4 ml-auto hidden md:inline" />
              )}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
