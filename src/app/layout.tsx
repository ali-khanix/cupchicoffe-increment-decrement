import type { Metadata } from 'next'

import { CartProvider } from '@/context/CartContext'

import './globals.css'

import { iranSans } from '@/fonts/font'
import Providers from '@/lib/providers'

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
        <Providers>
          <CartProvider>
            <main>{children}</main>
          </CartProvider>
        </Providers>
      </body>
    </html>
  )
}
