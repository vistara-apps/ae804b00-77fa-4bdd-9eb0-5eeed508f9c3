'use client';

import { useState } from 'react';
import { X, TrendingUp, TrendingDown, Info } from 'lucide-react';
import type { Region } from '../types';

interface PredictionModalProps {
  region: Region;
  onClose: () => void;
}

export function PredictionModal({ region, onClose }: PredictionModalProps) {
  const [predictionType, setPredictionType] = useState<'long' | 'short'>('long');
  const [amount, setAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fee = parseFloat(amount) * 0.005 || 0;
  const contribution = fee * 0.5;

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate transaction
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-surface rounded-lg max-w-md w-full p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">Predict Growth</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-bg rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-lg mb-2">{region.name}</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-text-secondary">Current Growth</p>
                <p className="font-semibold text-lg">{region.gdpGrowthRate.toFixed(2)}%</p>
              </div>
              <div>
                <p className="text-text-secondary">HDI</p>
                <p className="font-semibold text-lg">{region.hdi.toFixed(3)}</p>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">Position Type</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setPredictionType('long')}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg border-2 transition-all ${
                  predictionType === 'long'
                    ? 'border-success bg-success bg-opacity-10 text-success'
                    : 'border-primary border-opacity-20 hover:border-opacity-40'
                }`}
              >
                <TrendingUp className="w-5 h-5" />
                <span className="font-medium">Long</span>
              </button>
              <button
                onClick={() => setPredictionType('short')}
                className={`flex items-center justify-center gap-2 py-3 px-4 rounded-lg border-2 transition-all ${
                  predictionType === 'short'
                    ? 'border-error bg-error bg-opacity-10 text-error'
                    : 'border-primary border-opacity-20 hover:border-opacity-40'
                }`}
              >
                <TrendingDown className="w-5 h-5" />
                <span className="font-medium">Short</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Amount (USDC)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full px-4 py-3 bg-bg border border-primary border-opacity-20 rounded-lg focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="bg-bg rounded-lg p-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-text-secondary">Trading Fee (0.5%)</span>
              <span className="font-medium">${fee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-text-secondary">Public Goods Contribution</span>
                <Info className="w-4 h-4 text-text-secondary" />
              </div>
              <span className="font-medium text-success">${contribution.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!amount || isSubmitting}
            className="w-full py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Processing...' : `Place ${predictionType === 'long' ? 'Long' : 'Short'} Position`}
          </button>

          <p className="text-xs text-text-secondary text-center">
            Transaction is gasless and sponsored by GeoTrade
          </p>
        </div>
      </div>
    </div>
  );
}
