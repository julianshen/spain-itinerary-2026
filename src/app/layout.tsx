import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "🇪🇸 西班牙之旅 2026 | 馬德里·塞維亞·格拉納達·巴塞隆納",
  description: "Julian 的西班牙 11 天行程規劃 — 從馬德里出發，一路南下安達魯西亞，再回到巴塞隆納走完高第之旅",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${notoSansTC.variable} antialiased`}
    >
      <body className="bg-stone-950 text-stone-100 font-sans">{children}</body>
    </html>
  );
}
