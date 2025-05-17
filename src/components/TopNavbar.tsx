'use client'

import Logo from './Logo'

import TagNav from './TagNav'
import { drinks } from '@/data/products'

const TopNavbar = () => {
  const categories = Array.from(new Set(drinks.map((p) => p.category)))
  return (
    <nav className="bg-gray-100 dark:bg-zinc-800 max-h-40 fixed top-0 left-0 w-full z-50 px-6 flex flex-col justify-center items-center shadow-[0px_1px_3px_3px_rgb(165,165,165)] dark:shadow-[0px_0px_15px_1px_rgba(1,1,1,.5)]">
      <Logo />
      <TagNav categories={categories} />
    </nav>
  )
}

export default TopNavbar
