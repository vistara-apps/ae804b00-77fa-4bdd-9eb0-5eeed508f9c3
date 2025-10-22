# GeoTrade - Base Mini App

Invest in regional growth: onchain GEO data & prediction markets for public good.

## Features

- 🌍 **Interactive Global Map** - Real-time geo-economic data visualization
- 📈 **Prediction Markets** - Long/short positions on regional development
- 🏆 **Leaderboard** - Compete with top predictors globally
- 💝 **Public Goods** - Automated contributions from trading fees
- 🔗 **Base Integration** - Gasless transactions with OnchainKit
- 🎯 **Farcaster Native** - Social sharing and notifications

## Tech Stack

- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS
- OnchainKit (Coinbase)
- MiniKit (Farcaster)
- Base Network (L2)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_key_here
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Deployment

Deploy to Vercel or any Next.js-compatible platform:

```bash
npm run build
npm start
```

## Mini App Configuration

The app includes a Farcaster manifest at `public/.well-known/farcaster.json` for Base App integration.

## License

MIT
