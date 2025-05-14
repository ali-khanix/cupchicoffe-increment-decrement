// app/products/components/ProductSection.tsx

import ProductCart from '@/components/ProductCart'
import { MenuItem } from '@/types/product-types'

type Props = {
  category: string
  items: MenuItem[]
  onAdd: (item: MenuItem) => void
}

export default function ProductSection({ category, items, onAdd }: Props) {
  return (
    <div id={category}>
      <h2 className="text-2xl font-semibold my-4 mt-12">{category}</h2>
      <div className="grid grid-cols-2 gap-4">
        {items.map((item, index) => (
          <ProductCart key={index} product={item} onAdd={() => onAdd(item)} />
        ))}
      </div>
    </div>
  )
}
