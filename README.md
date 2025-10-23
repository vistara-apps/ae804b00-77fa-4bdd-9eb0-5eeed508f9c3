# GeoTrade - Base Mini App

Invest in regional growth: onchain geo-economic data & prediction markets for public good.

## Features

- 🌍 Interactive global economic map
- 📊 Real-time geo-economic data visualization
- 📈 Long/Short prediction markets on regional growth
- 💚 Automated public goods contributions
- 🏆 Global leaderboard system
- 💰 Gasless transactions via Base
- 🔗 Farcaster integration for social features

## Tech Stack

- Next.js 15 with App Router
- React 19
- OnchainKit for Base integration
- MiniKit for Farcaster features
- TypeScript
- Tailwind CSS
- Coinbase theme

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

3. Add your API keys to `.env.local`

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/       # React components
├── data/            # Mock data
├── types/           # TypeScript types
├── layout.tsx       # Root layout
├── page.tsx         # Main page
└── globals.css      # Global styles

public/
└── .well-known/
    └── farcaster.json  # Mini App manifest
```

## Key Components

- **GeoMap**: Interactive world map with region data
- **RegionTable**: Sortable table of top regions
- **PredictionModal**: Interface for placing long/short positions
- **Leaderboard**: Global rankings of top predictors
- **ImpactDashboard**: Public goods contribution tracking

## Deployment

Deploy to Vercel:

```bash
npm run build
```

## License

MIT
