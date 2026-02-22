import Config from "./config";
import Head from "next/head";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import { ThemeProvider } from '@mui/material/styles';
import Theme from './theme';
import Icons from "./icons";
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
      <Head>
        <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/assets/icons/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/assets/icons/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/assets/icons/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/assets/icons/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon-precomposed" sizes="60x60" href="/assets/icons/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/assets/icons/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon-precomposed" sizes="76x76" href="/assets/icons/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/assets/icons/apple-touch-icon-152x152.png" />
        <link rel="icon" type="image/png" href="/assets/icons/favicon-196x196.png" sizes="196x196" />
        <link rel="icon" type="image/png" href="/assets/icons/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="/assets/icons/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/assets/icons/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/assets/icons/favicon-128.png" sizes="128x128" />
        <meta name="application-name" content="Alpha Limo LLC"/>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/assets/icons/mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="/assets/icons/mstile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="/assets/icons/mstile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="/assets/icons/mstile-310x150.png" />
        <meta name="msapplication-square310x310logo" content="/assets/icons/mstile-310x310.png" />
      </Head>
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
