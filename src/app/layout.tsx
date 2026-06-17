import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "🇪🇸 西班牙之旅 2026 | 馬德里·塞維亞·格拉納達·巴塞隆納",
  description: "Julian 的西班牙 11 天行程規劃 — 從馬德里出發，一路南下安達魯西亞，再回到巴塞隆納走完高第之旅",
  openGraph: {
    title: "🇪🇸 西班牙之旅 2026",
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
    <html lang="zh-TW" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-[#222222]">{children}</body>
    </html>
  );
}
