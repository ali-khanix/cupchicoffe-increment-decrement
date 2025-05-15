'use client'

import TopNavbar from '@/components/TopNavbar'
import BottomNavbar from '@/components/BottomNavbar'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import { Trash2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

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
export default function CartPage() {
  const { cart, removeFromCart } = useCart()
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="px-4">
      <TopNavbar />

      <div className="mt-[180px]">
        <h1 className="text-2xl font-semibold mb-4">لیست سفارش ها</h1>

        {cart.length === 0 ? (
          <p>لیست سفارش های شما خالی است</p>
        ) : (
          <div>
            <ul className="space-y-4 flex flex-col">
              {cart.map((item, idx) => (
                <>
                  <Dialog>
                    <div className="bg-zinc-100 dark:bg-zinc-900 dark:bg-zinc-800 border-2 border-primary dark:border-secondary rounded-2xl overflow-hidden relative p-2">
                      <div className="flex items-center gap-8 flex-col ">
                        {/* ✅ Dialog Trigger: Only wrap image + text */}
                        <DialogTrigger asChild key={idx}>
                          <div className="flex items-center w-full cursor-pointer gap-2">
                            {/* Text Content */}
                            <div className="w-1/2 pr-2 flex flex-col justify-between space-y-2 mb-8">
                              <h2 className="text-lg font-medium text-zinc-200">
                                {item.name} - {item.price.toLocaleString()}
                              </h2>
                              <p className="text-sm text-zinc-400 truncate">
                                {item.description}
                              </p>
                            </div>

                            {/* Image */}
                            <div className="relative w-1/2 h-30">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover rounded-2xl"
                              />
                            </div>
                          </div>
                        </DialogTrigger>

                        {/* ❌ Delete Button OUTSIDE dialog trigger */}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="shrink-0 absolute bottom-2 right-2 flex items-center space-x-1 text-red-500 hover:text-red-600 transition"
                      >
                        <Trash2 strokeWidth={1.5} size={18} />
                        <span className="text-sm">حذف</span>
                      </button>
                    </div>

                    {/* Dialog Content */}
                    <DialogContent className="dark:border-secondary">
                      <DialogHeader className="text-right">
                        <DialogClose>
                          <X />
                        </DialogClose>
                        <div className="image">
                          <Image
                            className="object-cover w-full h-60 rounded-lg"
                            width={500}
                            height={240}
                            src={item.image}
                            alt={item.name}
                          />
                        </div>
                        <div className="content mt-6 flex flex-col space-y-2">
                          <DialogTitle className="text-2xl">
                            {item.name}
                          </DialogTitle>
                          <DialogDescription className="text-base">
                            {item.description}
                          </DialogDescription>
                        </div>
                      </DialogHeader>

                      <DialogFooter>
                        <Button
                          variant={'default'}
                          onClick={() => removeFromCart(item.id)}
                          className="flex items-center space-x-1 bg-red-700 text-red-200 py-6 mt-2"
                        >
                          <Trash2 strokeWidth={1.5} size={20} />
                          <span className="text-sm">حذف</span>
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </>
              ))}
            </ul>

            <div className="border-t border-gray-300 mt-10 mb-[100px] pt-4">
              <p className="font-bold flex justify-between items-center">
                <span>جمع سبد خرید:</span>
                <span>{total.toLocaleString()} تومان</span>
              </p>
            </div>
          </div>
        )}
      </div>

      <BottomNavbar />
    </div>
  )
}
