import type { Metadata } from "next";
import { Noto_Sans_TC, Playfair_Display } from "next/font/google";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "西班牙之旅 2026 | 馬德里·塞維亞·格拉納達·巴塞隆納",
  description: "Julian 的西班牙 11 天行程規劃 — 從馬德里出發，一路南下安達魯西亞，再回到巴塞隆納走完高第之旅",
  openGraph: {
    title: "西班牙之旅 2026",
    description: "11 天 5 城市 — Madrid · Córdoba · Sevilla · Granada · Barcelona",
    images: ["https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`${notoSansTC.variable} ${playfair.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white text-[#1a1a1a]">{children}</body>
    </html>
  );
}
