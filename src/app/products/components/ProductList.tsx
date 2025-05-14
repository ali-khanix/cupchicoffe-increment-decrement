import ProductSection from './ProductSection'
import { MenuItem } from '@/types/product-types'

type Props = {
  categories: {
    category: string
    items: MenuItem[]
  }[]

  onAdd: (item: MenuItem) => void
}

const ProductList = ({ categories, onAdd }: Props) => {
  return (
    <>
      {categories.map((category, index) => {
        return (
          <ProductSection
            key={index}
            category={category.category}
            items={category.items}
            onAdd={onAdd}
          />
        )
      })}
    </>
  )
}

export default ProductList
