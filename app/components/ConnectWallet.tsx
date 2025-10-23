'use client';

import { Wallet } from 'lucide-react';

export function ConnectWallet() {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all font-medium">
      <Wallet className="w-4 h-4" />
      <span className="hidden md:inline">Connect</span>
    </button>
  );
}
