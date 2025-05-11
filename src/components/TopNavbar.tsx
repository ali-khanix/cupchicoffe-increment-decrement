import Logo from './Logo'

import TagNav from './TagNav'
import { drinks } from '@/data/products'

const TopNavbar = () => {
  const categories = Array.from(new Set(drinks.map((p) => p.category)))
  return (
    <nav className="bg-neutral-100 h-[140px] nav fixed top-0 left-0 w-full z-50 text-black px-6 flex flex-col justify-center items-center">
      <Logo />
      <TagNav categories={categories} />
    </nav>
  )
}

export default TopNavbar
