'use client'

import { MenuItem } from '@/types/product-types'
import Image from 'next/image'
import { Button } from './ui/button'
import { Minus, Plus, X } from 'lucide-react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog'

import { useCart } from '@/context/CartContext'

interface ProductCartProps {
  product: MenuItem
  onAdd: () => void
}

const ProductCart = ({ product }: ProductCartProps) => {
  const { cart, addToCart, increment, decrement } = useCart()

  const cartItem = cart.find((item) => item.id === product.id)

  return (
    <Dialog>
      <div className="bg-zinc-200 dark:bg-zinc-900 rounded-2xl overflow-hidden p-2 border-primary dark:border-secondary border-[1px]">
        <DialogTrigger asChild>
          <div className="cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl w-full h-32">
              <Image
                fill
                className="object-cover"
                src={product.image}
                alt={product.description}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-2 rounded text-right">
              <h2 className="text-lg font-semibold dark:text-gray-200 truncate">
                {product.name}
              </h2>
              <p className="whitespace-nowrap overflow-hidden text-ellipsis text-[12px] text-gray-700 dark:text-gray-400">
                {product.description}
              </p>
            </div>
          </div>
        </DialogTrigger>

        {/* Price + Add / Quantity Controls */}
        <div className="flex items-center justify-between mt-2 px-2">
          <p className="text-gray-800 font-semibold dark:text-zinc-200">
            {product.price.toLocaleString()}
          </p>

          {!cartItem ? (
            <Button
              variant="default"
              onClick={() => addToCart(product)}
              className="p-[2px] dark:bg-secondary dark:text-zinc-900"
            >
              <Plus size={20} />
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <Button
                variant={'ghost'}
                size="icon"
                onClick={() => decrement(product.id)}
                className="w-6 h-6 dark:text-secondary bg-transparent "
              >
                <Minus size={16} />
              </Button>
              <span className="w-5 text-center font-semibold text-zinc-900 dark:text-zinc-100">
                {cartItem.quantity}
              </span>
              <Button
                variant={'ghost'}
                size="icon"
                onClick={() => increment(product.id)}
                className="w-6 h-6 bg-transparent dark:text-secondary text-primary border-1 dark:border-secondary border-primary"
              >
                <Plus size={16} />
              </Button>
            </div>
          )}
        </div>
      </div>

      <DialogContent className="text-right border-primary dark:border-secondary">
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
            <p className="text-zinc-800 dark:text-zinc-200 font-semibold">
              <span className="text-xl">{product.price.toLocaleString()} </span>
              <span className="text-[12px]">تومان</span>
            </p>
          </div>
        </DialogHeader>
        <DialogFooter>
          {!cartItem ? (
            <Button
              variant={'default'}
              onClick={() => addToCart(product)}
              className="py-6 rounded dark:bg-secondary dark:text-zinc-900"
            >
              اضافه به سبد خرید
            </Button>
          ) : (
            <div className="flex items-center gap-3">
              <Button
                onClick={() => decrement(product.id)}
                variant="secondary"
                size="icon"
              >
                <Minus size={20} />
              </Button>
              <span className="font-semibold text-lg text-zinc-900 dark:text-zinc-200">
                {cartItem.quantity}
              </span>
              <Button
                onClick={() => increment(product.id)}
                variant="secondary"
                size="icon"
              >
                <Plus size={20} />
              </Button>
            </div>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ProductCart
