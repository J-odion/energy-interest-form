import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kairosenergy Interest form',
  description: 'Submitt your interest in our products and we reply within hours',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
