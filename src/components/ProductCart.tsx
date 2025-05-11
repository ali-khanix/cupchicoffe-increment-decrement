import { MenuItem } from '@/types/product-types'
import Image from 'next/image'
import { Button } from './ui/button'

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
        <div>
          <p className="text-gray-800 font-semibold mt-2">
            {product.price.toLocaleString()}{' '}
            <span className="text-[12px]">تومان</span>
          </p>
        </div>

        <Button
          variant={'default'}
          onClick={onAdd}
          className="mt-2 w-full px-6 py-2 rounded opa"
        >
          اضافه به کارت
        </Button>
      </div>
    </div>
  )
}

export default ProductCart
