import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/styles.css";
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
