'use client'

import { MenuItem } from '@/types/product-types'
import Image from 'next/image'
import { Button } from './ui/button'
import { Plus, X } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { DialogClose } from '@radix-ui/react-dialog'
interface ProductCartProps {
  product: MenuItem
  onAdd: () => void
}

const ProductCart = ({ product, onAdd }: ProductCartProps) => {
  return (
    <Dialog>
      <div className="bg-white rounded-2xl overflow-hidden p-2 border-primary border-[2px]">
        {/* Dialog Trigger wraps only clickable preview area */}
        <DialogTrigger asChild>
          <div className="cursor-pointer">
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
            <div className="p-2 rounded text-right">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="whitespace-nowrap overflow-hidden text-ellipsis text-[12px] text-gray-700">
                {product.description}
              </p>
            </div>
          </div>
        </DialogTrigger>

        {/* Price + Add to Cart button (outside trigger) */}
        <div className="flex items-center justify-between mt-2 px-2">
          <p className="text-gray-800 font-semibold">
            {product.price.toLocaleString()}{' '}
            <span className="text-[12px]">تومان</span>
          </p>

          <Button variant="default" onClick={onAdd} className="rounded">
            <Plus size={24} />
          </Button>
        </div>
      </div>

      <DialogContent className="text-right">
        <DialogHeader>
          <DialogClose>
            <X />
          </DialogClose>
          <Image
            width={200}
            height={200}
            className="object-cover w-full rounded-lg max-h-80"
            src={product.image}
            alt={product.description}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="flex flex-col space-y-2 items-start mt-4">
            <DialogTitle className="text-right">{product.name}</DialogTitle>
            <DialogDescription>{product.description}</DialogDescription>
            <p className="text-gray-800 font-semibold">
              <span className="text-xl">{product.price.toLocaleString()} </span>
              <span className="text-[12px]">تومان</span>
            </p>
          </div>
        </DialogHeader>
        <DialogFooter>
          <Button variant={'default'} onClick={onAdd} className="py-6 rounded">
            اضافه به سبد خرید
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ProductCart
