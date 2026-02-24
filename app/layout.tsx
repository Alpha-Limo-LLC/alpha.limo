import config from "./alpha/config";
import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import { ThemeProvider } from '@mui/material/styles';
import EmotionRegistry from './alpha/EmotionRegistry';
import Light from './alpha/theme';
import Icons from "./alpha/icons";
import "./styles/style.css";
import "./styles/globals.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const notoMono = Noto_Sans_Mono({
  variable: "--font-noto-sans-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: config.meta_title,
  description: config.meta_description,
  keywords: config.meta_keywords,
  authors: [{ name: config.meta_author_name, url: config.meta_author_url }],
  creator: config.meta_creator,
  publisher: config.meta_publisher,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} ${notoMono.variable} antialiased`}
      >
        <Icons />
          <ThemeProvider theme={Light} defaultMode="light">
            <EmotionRegistry>
              {children}
            </EmotionRegistry>
          </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
