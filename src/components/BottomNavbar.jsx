'use client'

// Components
import Link from 'next/link'

// Hooks
import { useCart } from '@/context/CartContext'

// Icons
import { Home, NotebookPen, ShoppingCart } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from './ThemeToggle'

const BottomNavbar = () => {
  const { cart } = useCart()
  const path = usePathname()

  return (
    <nav className="bg-zinc-200 dark:bg-zinc-800 h-[55px] fixed bottom-0 left-0 w-full z-50 text-black py-8 shadow-[0px_1px_3px_3px_rgb(165,165,165)] dark:shadow-[0px_0px_10px_1px_rgba(1,1,1,.5)]">
      <div className="flex items-center justify-center gap-20 h-full w-full ">
        <Link className="relative" href={'cart'}>
          <NotebookPen
            className={
              path === '/cart'
                ? 'text-zinc-800 dark:text-zinc-200'
                : 'text-zinc-400 dark:text-zinc-700'
            }
            size={28}
          />
          <span className="absolute -top-3 -right-3 z-10 bg-red-500 rounded-full w-6 h-6 flex justify-center items-center text-secondary">
            {cart.length}
          </span>
        </Link>

        <Link
          className={
            path === '/products'
              ? 'text-zinc-800 dark:text-zinc-200'
              : 'text-gray-400 dark:text-zinc-700'
          }
          href={'/products'}
        >
          <Home size={28} />
        </Link>

        {/* Dark mode toggle */}
        <ThemeToggle />
      </div>
    </nav>
  )
}

export default BottomNavbar
