'use client'

// Components
import Link from 'next/link'

// Hooks
import { useCart } from '@/context/CartContext'

// Icons
import { ShoppingCart } from 'lucide-react'
import { Menu } from 'lucide-react'

const BottomNavbar = () => {
  const { cart } = useCart()
  console.log(cart)
  return (
    <nav className="bg-neutral-200 h-[55px] nav fixed bottom-0 left-0 w-full z-50 text-black py-8">
      <div className="flex items-center justify-center gap-20 h-full w-full">
        <Link className="relative" href={'cart'}>
          <ShoppingCart className="text-gray-400 " size={28} />
          <span className="absolute -top-3 -right-3 z-10 bg-red-500 rounded-full w-6 h-6 flex justify-center items-center text-secondary">
            {cart.length}
          </span>
        </Link>

        <Link className="text-gray-400" href={'/products'}>
          <Menu size={28} />
        </Link>
      </div>
    </nav>
  )
}

export default BottomNavbar
