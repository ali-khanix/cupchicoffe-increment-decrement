import type { Metadata } from 'next'

import { CartProvider } from '@/context/CartContext'
import { ThemeProvider } from 'next-themes'

import './globals.css'

import { iranSans } from '@/fonts/font'

export const metadata: Metadata = {
  title: 'Coffee Shop',
  description: 'Order your favorite drinks',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${iranSans.variable} antialiased`}>
        <ThemeProvider attribute={'class'} enableSystem defaultTheme="system">
          <CartProvider>
            <main>{children}</main>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
