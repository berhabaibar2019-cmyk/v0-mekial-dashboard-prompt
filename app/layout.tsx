import type { Metadata } from 'next'
import { Readex_Pro, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { QueryProvider } from '@/components/providers/query-provider'
import './globals.css'

const _readexPro = Readex_Pro({ subsets: ["latin", "arabic"], weight: ["400", "500", "600", "700"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Mekial - نظام إدارة المبيعات الذكي',
  description: 'منصة متكاملة لإدارة المبيعات والمخزون والفواتير للمتاجر الصغيرة والمتوسطة في الجزائر',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <body className={`${_readexPro.className} font-sans antialiased bg-background text-foreground`}>
        <QueryProvider>
          {children}
        </QueryProvider>
        <Analytics />
      </body>
    </html>
  )
}
