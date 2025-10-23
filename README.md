# GeoTrade - Base Mini App

Invest in regional growth: onchain GEO data & prediction markets for public good.

## Features

- 🌍 Interactive global economic heatmap
- 📊 Real-time geo-economic data visualization
- 🎯 Prediction markets (long/short positions)
- 💚 Automated public goods contributions
- ⚡ Gasless transactions via Base Paymaster
- 🔗 Farcaster integration for social sharing
- 🏆 Global leaderboard system
- 📱 Mobile-first responsive design

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster MiniKit
- **Styling**: Tailwind CSS (Coinbase theme)
- **TypeScript**: Full type safety

## Getting Started

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Create \`.env.local\` from \`.env.local.example\`:
\`\`\`bash
cp .env.local.example .env.local
\`\`\`

3. Add your OnchainKit API key to \`.env.local\`

4. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

\`\`\`
app/
├── components/          # React components
│   ├── Providers.tsx   # OnchainKit + React Query providers
│   ├── Header.tsx      # App header with wallet connect
│   ├── Sidebar.tsx     # Navigation sidebar
│   ├── GeoMap.tsx      # Interactive world map
│   ├── DataTable.tsx   # Region data table
│   ├── PredictionModal.tsx  # Prediction interface
│   ├── LeaderboardView.tsx  # Leaderboard display
│   └── ImpactDashboard.tsx  # Public goods tracking
├── types/              # TypeScript type definitions
├── layout.tsx          # Root layout
├── page.tsx            # Main page
└── globals.css         # Global styles (Coinbase theme)
\`\`\`

## Key Features Implementation

### Gasless Transactions
All prediction market trades are gas-sponsored via Base Paymaster, providing a seamless UX.

### Public Goods Funding
A percentage of trading fees automatically routes to public goods funds (Gitcoin, Base Grants).

### Social Integration
- Farcaster notifications for market movements
- Easy sharing of predictions and impact
- Basename identity integration

### Prediction Markets
- Long/short positions on regional development
- Real-time market data
- Transparent fee structure

## Environment Variables

- \`NEXT_PUBLIC_ONCHAINKIT_API_KEY\`: Your Coinbase Developer Platform API key
- \`NEXT_PUBLIC_BASE_RPC_URL\`: Base RPC endpoint (optional)
- \`NEXT_PUBLIC_PAYMASTER_URL\`: Paymaster URL for gas sponsorship

## Deployment

Deploy to Vercel:

\`\`\`bash
npm run build
\`\`\`

Ensure environment variables are set in your deployment platform.

## License

MIT
