import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import ThemeProvider from './_components/ThemeProvider'
import Header from './_components/Header'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Shinobi',
  description: 'A modern platform for developers.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <ThemeProvider>
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
