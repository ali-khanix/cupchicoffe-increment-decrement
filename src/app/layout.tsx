import type { Metadata } from 'next'

import { CartProvider } from '@/context/CartContext'

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
        <CartProvider>
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  )
}
