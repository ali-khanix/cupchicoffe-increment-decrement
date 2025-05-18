'use client'

// Hooks
import { useCart } from '@/context/CartContext'
import { useEffect, useState } from 'react'

// Data
import { drinks } from '@/data/products'

// Components
import PageTransitionWrapper from '@/components/animations/PageTransitionWrapper'

// Data types

import ProductList from './components/ProductList'
import LoadingScreen from './components/LoadingScreen'

export default function ProductsPage() {
  const { addToCart } = useCart()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<typeof drinks>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(drinks)
      setLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingScreen />
      </div>
    )
  }

  return (
    <PageTransitionWrapper>
      <main className="mt-[140px] px-4 mb-20">
        <ProductList categories={data} onAdd={addToCart} />
      </main>
    </PageTransitionWrapper>
  )
}
