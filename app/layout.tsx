import config from "./config";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import { ThemeProvider } from '@mui/material/styles';
import Icons from "./icons";
import Theme from './theme';
import "./styles/style.css";
import "./globals.css";
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
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={Theme}>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
