'use client'

import { MenuItem } from '@/types/product-types'
import { drinks } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCart from '@/components/ProductCart'

export default function ProductsPage() {
  const { addToCart } = useCart()

  return (
    <div className="mt-[140px] px-4 mb-20">
      {drinks.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <h2 className="text-2xl font-semibold my-4 mt-12">
            {category.category}
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {category.items.map((item: MenuItem, itemIndex) => (
              <ProductCart
                key={itemIndex}
                product={item}
                onAdd={() => addToCart(item)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
