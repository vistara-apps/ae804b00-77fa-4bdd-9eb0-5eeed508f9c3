'use client';

import { useState } from 'react';
import { Wallet } from 'lucide-react';

export function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    // In production, this would use OnchainKit's ConnectWallet
    setIsConnected(true);
  };

  if (isConnected) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-lg border border-accent/20">
        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
          <span className="text-xs font-bold text-white">GT</span>
        </div>
        <div className="text-sm">
          <div className="font-medium text-fg">geotrade.base.eth</div>
          <div className="text-xs text-secondary">0x1234...5678</div>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={handleConnect}
      className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-all duration-200 shadow-lg shadow-accent/20"
    >
      <Wallet className="w-4 h-4" />
      <span>Connect</span>
    </button>
  );
}
