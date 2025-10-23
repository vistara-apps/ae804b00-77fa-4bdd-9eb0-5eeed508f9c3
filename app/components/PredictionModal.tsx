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
  const [isProcessing, setIsProcessing] = useState(false);

  const feePercentage = 0.5;
  const publicGoodsPercentage = 50;
  
  const calculateFee = () => {
    const amountNum = parseFloat(amount) || 0;
    return (amountNum * feePercentage) / 100;
  };

  const calculateContribution = () => {
    const fee = calculateFee();
    return (fee * publicGoodsPercentage) / 100;
  };

  const handleSubmit = async () => {
    setIsProcessing(true);
    // Simulate transaction
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-surface rounded-lg max-w-md w-full shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-primary/20">
          <div>
            <h3 className="text-xl font-bold text-text-primary">{region.name}</h3>
            <p className="text-sm text-text-secondary mt-1">
              Current Growth: <span className="text-success font-semibold">{region.gdpGrowthRate}%</span>
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-primary/10 rounded-lg transition-all duration-200"
          >
            <X className="w-5 h-5 text-text-secondary" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Prediction Type */}
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-3">
              Prediction Type
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setPredictionType('long')}
                className={`flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all duration-200 ${
                  predictionType === 'long'
                    ? 'border-success bg-success/10 text-success'
                    : 'border-primary/20 text-text-secondary hover:border-primary/40'
                }`}
              >
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">Long</span>
              </button>
              <button
                onClick={() => setPredictionType('short')}
                className={`flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all duration-200 ${
                  predictionType === 'short'
                    ? 'border-error bg-error/10 text-error'
                    : 'border-primary/20 text-text-secondary hover:border-primary/40'
                }`}
              >
                <TrendingDown className="w-5 h-5" />
                <span className="font-semibold">Short</span>
              </button>
            </div>
          </div>

          {/* Amount Input */}
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Amount (USDC)
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full px-4 py-3 bg-bg border border-primary/20 rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-primary transition-colors duration-200"
            />
          </div>

          {/* Fee Breakdown */}
          {amount && parseFloat(amount) > 0 && (
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-2">
              <div className="flex items-start gap-2">
                <Info className="w-4 h-4 text-primary mt-0.5" />
                <div className="flex-1 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Trading Fee ({feePercentage}%)</span>
                    <span className="text-text-primary font-medium">
                      ${calculateFee().toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Public Goods Contribution</span>
                    <span className="text-success font-semibold">
                      ${calculateContribution().toFixed(2)}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-primary/20 flex justify-between">
                    <span className="text-text-primary font-medium">Total Cost</span>
                    <span className="text-text-primary font-bold">
                      ${(parseFloat(amount) + calculateFee()).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={!amount || parseFloat(amount) <= 0 || isProcessing}
            className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {isProcessing ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Processing...
              </span>
            ) : (
              `Place ${predictionType === 'long' ? 'Long' : 'Short'} Position`
            )}
          </button>

          <p className="text-xs text-text-secondary text-center">
            ⚡ Gas-free transaction powered by Base Paymaster
          </p>
        </div>
      </div>
    </div>
  );
}
