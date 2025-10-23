'use client';

import { Globe, Bell, User } from 'lucide-react';
import { ConnectWallet } from './ConnectWallet';

export function Header() {
  return (
    <header className="bg-surface border-b border-primary border-opacity-20 px-4 md:px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Globe className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold">GeoTrade</h1>
            <p className="text-xs text-text-secondary hidden md:block">
              Invest in regional growth
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button 
            className="p-2 hover:bg-bg rounded-lg transition-colors"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
          </button>
          
          <ConnectWallet />
        </div>
      </div>
    </header>
  );
}
