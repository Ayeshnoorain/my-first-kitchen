import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'My First Kitchen',
  description: 'Home-cooked meals and baked recipes from my kitchen to yours',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-creamy">
        {children}
      </body>
    </html>
  )
} 