'use client'

import TopNavbar from '@/components/TopNavbar'
import BottomNavbar from '@/components/BottomNavbar'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import { Trash2 } from 'lucide-react'

export default function CartPage() {
  const { cart, removeFromCart } = useCart()
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="px-4">
      <TopNavbar />
      <div className="mt-[140px]">
        <h1 className="text-2xl font-semibold mb-4">سبد خرید شما</h1>
        {cart.length === 0 ? (
          <p>سبد شما خالی است</p>
        ) : (
          <div className="">
            <ul className="space-y-2 flex flex-col gap-3">
              {cart.map((item, idx) => (
                <li
                  key={idx}
                  className="p-2 rounded-2xl overflow-hidden w-full flex justify-between items-center bg-white"
                >
                  <div className="mr-2 flex flex-col items-start justify-center space-y-4">
                    <h2 className="text-lg font-medium">
                      {item.name} - {item.price.toLocaleString()}
                    </h2>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center justify-center space-x-1 text-red-500"
                    >
                      <p className="font-normal">حذف</p>
                      <Trash2
                        strokeWidth={1.5}
                        size={20}
                        className="font-bold"
                      />
                    </button>
                  </div>
                  <div className="relative w-1/3 h-20">
                    <Image
                      className="object-cover rounded-2xl"
                      src={item.image}
                      alt={item.name}
                      fill
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t-1 border-gray-400 mt-10 mb-[100px]">
              <p className="mt-4 font-bold flex justify-between items-center">
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
