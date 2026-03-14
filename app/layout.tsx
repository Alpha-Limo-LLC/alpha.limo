import { Box, Paper } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import type { Metadata } from 'next'
import { Noto_Sans, Noto_Sans_Mono } from 'next/font/google'
import config from './src/config'
import EmotionRegistry from './src/EmotionRegistry'
import Icons from './src/icons'
import responsiveTheme from './src/theme'
import './src/style.css'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
})

const notoMono = Noto_Sans_Mono({
  variable: '--font-noto-sans-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: config.meta_title,
  description: config.meta_description,
  keywords: config.meta_keywords,
  authors: [{ name: config.meta_author_name, url: config.meta_author_url }],
  creator: config.meta_creator,
  publisher: config.meta_publisher,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} ${notoMono.variable} antialiased`}>
        <Icons />
        <ThemeProvider theme={responsiveTheme} defaultMode="light">
          <EmotionRegistry>
            <Paper elevation={1} square={true} sx={{ minHeight: '100vh' }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '100vh',
                }}
              >
                {children}
              </Box>
            </Paper>
          </EmotionRegistry>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
