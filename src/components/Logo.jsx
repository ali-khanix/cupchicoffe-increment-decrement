'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Link href={'/'}>
      <div className="relative h-auto w-[180px] mx-auto py-6">
        <Image
          alt="لوگو کافه کاپ چی"
          src={`${theme === 'dark' ? '/logo-h-(cream).svg' : '/logo-h-(green).svg'}`}
          className=" object-contain"
          priority
          fill
        />
      </div>
    </Link>
  )
}

export default Logo
