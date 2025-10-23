'use client';

import { Wallet, Bell, User } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <header className="bg-surface border-b border-primary/20 px-4 md:px-6 py-3 md:py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm md:text-base">G</span>
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold text-text-primary">GeoTrade</h1>
            <p className="text-xs text-text-secondary hidden md:block">Invest in Regional Growth</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-text-primary hover:text-primary transition-colors duration-200">
            GeoBoard
          </a>
          <a href="#" className="text-text-secondary hover:text-primary transition-colors duration-200">
            Regions
          </a>
          <a href="#" className="text-text-secondary hover:text-primary transition-colors duration-200">
            Insights
          </a>
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button className="p-2 hover:bg-primary/10 rounded-lg transition-all duration-200">
            <Bell className="w-5 h-5 text-text-secondary" />
          </button>
          
          {isConnected ? (
            <button className="flex items-center gap-2 px-3 md:px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg hover:bg-primary/20 transition-all duration-200">
              <User className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary hidden md:inline">Connected</span>
            </button>
          ) : (
            <button 
              onClick={() => setIsConnected(true)}
              className="flex items-center gap-2 px-3 md:px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all duration-200"
            >
              <Wallet className="w-4 h-4" />
              <span className="text-sm font-medium">Connect</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
