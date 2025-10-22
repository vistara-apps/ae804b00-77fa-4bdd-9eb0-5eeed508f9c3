import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./components/Providers";

export const metadata: Metadata = {
  title: "GeoTrade - Invest in Regional Growth",
  description: "Onchain GEO data & prediction markets for public good",
  openGraph: {
    title: "GeoTrade",
    description: "Invest in regional growth: onchain GEO data & prediction markets for public good",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
