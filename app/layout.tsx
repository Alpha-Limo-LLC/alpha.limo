import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import Icons from "./icons";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import "./styles/style.css";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const notoMono = Noto_Sans_Mono({
  variable: "--font-noto-sans-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alpha Limo LLC",
  description: "Alpha Limo LLC is a premier transportation service provider offering luxury and reliable limo services for all occasions. Experience comfort and style with our professional chauffeurs and top-notch vehicles.",
  keywords: "alpha limo, alpha limo llc, limo services",
  authors: [{ name: "Bryan C. Hohs", url: "https://www.alpha.limo" }],
  creator: "Bryan C. Hohs",
  publisher: "Bryan C. Hohs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-white ${notoSans.variable} ${notoMono.variable} antialiased`}
      >
        <Icons />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
