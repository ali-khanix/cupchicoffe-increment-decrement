'use client'

import { MenuItem } from '@/types/product-types'
import { createContext, ReactNode, useContext, useState } from 'react'

type CartContextType = {
  cart: MenuItem[]
  addToCart: (product: MenuItem) => void
  removeFromCart: (id: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')

  return context
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<MenuItem[]>([])

  const addToCart = (product: MenuItem) => {
    setCart((prev) => [...prev, product])
  }

  const removeFromCart = (id: number) => {
    const index = cart.findIndex((item) => item.id === id)
    if (index > -1) {
      const newCart = [...cart]
      newCart.splice(index, 1)
      setCart(newCart)
    }
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}
