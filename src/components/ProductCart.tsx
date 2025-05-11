import { MenuItem } from '@/types/product-types'
import Image from 'next/image'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'

interface ProductCartProps {
  product: MenuItem
  onAdd: () => void
}

const ProductCart = ({ product, onAdd }: ProductCartProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden p-2 ">
      {/* Image */}
      <div className="relative overflow-hidden rounded-2xl w-full h-32">
        <Image
          fill
          className="object-cover"
          src={product.image}
          alt={product.description}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-2 rounded">
        <div>
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="whitespace-nowrap overflow-hidden text-ellipsis text-[12px] text-gray-700">
            {product.description}
          </p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-800 font-semibold">
            {product.price.toLocaleString()}{' '}
            <span className="text-[12px]">تومان</span>
          </p>

          <Button variant={'default'} onClick={onAdd} className="rounded ">
            <Plus size={24} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProductCart
