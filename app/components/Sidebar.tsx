'use client';

import { 
  Home, 
  TrendingUp, 
  Wallet, 
  BarChart3, 
  DollarSign, 
  Target, 
  Award, 
  Globe,
  Users,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  activeView: 'geoboard' | 'leaderboard' | 'impact';
  onViewChange: (view: 'geoboard' | 'leaderboard' | 'impact') => void;
}

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  const menuItems = [
    { id: 'geoboard', icon: Home, label: 'GeoBoard', view: 'geoboard' as const },
    { id: 'leaderboard', icon: Award, label: 'Leaderboard', view: 'leaderboard' as const },
    { id: 'impact', icon: Target, label: 'Impact', view: 'impact' as const },
  ];

  const sections = [
    { icon: TrendingUp, label: 'Predictions', hasSubmenu: true },
    { icon: Wallet, label: 'Wallet', hasSubmenu: true },
    { icon: BarChart3, label: 'Onchain', hasSubmenu: true },
    { icon: DollarSign, label: 'Barter', hasSubmenu: true },
    { icon: Award, label: 'Regulars', hasSubmenu: false },
    { icon: Globe, label: 'Irregular', hasSubmenu: true },
    { icon: Users, label: 'Countries', hasSubmenu: false },
  ];

  return (
    <aside className="w-64 bg-surface border-r border-primary/20 overflow-y-auto hidden md:block">
      <div className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.view;
          
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.view)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-text-secondary hover:bg-primary/10 hover:text-text-primary'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
              {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
            </button>
          );
        })}

        <div className="pt-4 mt-4 border-t border-primary/20">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <button
                key={index}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:bg-primary/10 hover:text-text-primary transition-all duration-200"
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{section.label}</span>
                {section.hasSubmenu && (
                  <ChevronRight className="w-4 h-4 ml-auto" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
