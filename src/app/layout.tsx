import { Inter, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/shared/SiteHeader";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const notoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ja">
      <body
        className={`${inter.variable} ${notoSansJp.variable} ${notoSerifJp.variable}`}
      >
        <div className="page-wrapper">
          <SiteHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
