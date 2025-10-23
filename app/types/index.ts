export interface Region {
  id: string;
  name: string;
  type: 'country' | 'state' | 'city';
  latitude: number;
  longitude: number;
  currentGDP: number;
  gdpGrowthRate: number;
  literacyRate: number;
  hdi: number;
  lastUpdated: string;
  dataSources: string[];
}

export interface User {
  fid: string;
  basename: string;
  walletAddress: string;
  pfpUrl: string;
  displayName: string;
  reputationScore: number;
  totalContributions: number;
  leaderboardRank: number;
}

export interface PredictionMarket {
  id: string;
  regionId: string;
  marketType: 'long' | 'short';
  openingPrice: number;
  currentPrice: number;
  closingPrice?: number;
  status: 'open' | 'closed' | 'resolved';
  volume: number;
  liquidityPool: number;
  creationTimestamp: string;
  resolutionTimestamp?: string;
  feePercentage: number;
}

export interface Trade {
  id: string;
  marketId: string;
  userId: string;
  type: 'long' | 'short';
  amount: number;
  price: number;
  timestamp: string;
  feesPaid: number;
  contributionAmount: number;
}

export interface PublicGoodFund {
  id: string;
  name: string;
  description: string;
  recipientAddress: string;
  totalContributions: number;
  lastContributionTimestamp: string;
  associatedRegionId?: string;
}
