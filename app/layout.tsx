import { Geist, Geist_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Hishmat Rai - Full Stack Developer',
  description: 'Full Stack Developer specializing in MERN stack, building scalable web applications and solving complex problems.',
  generator: 'v0.app',
  keywords: 'Full Stack Developer, MERN Stack, React, Node.js, MongoDB, Web Development',
  authors: [{ name: 'Hishmat Rai' }],
  openGraph: {
    title: 'Hishmat Rai - Full Stack Developer',
    description: 'Full Stack Developer specializing in MERN stack, building scalable web applications and solving complex problems.',
    type: 'website',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#0f172a',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
