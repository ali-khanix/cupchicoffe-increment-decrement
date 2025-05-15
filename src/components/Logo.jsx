'use client'

import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Link href={'/'}>
      <Image
        alt="لوگو کافه کاپ چی"
        width={180}
        height={180}
        src={`${theme === 'dark' ? '/logo-h-(cream).svg' : '/logo-h-(green).svg'}`}
        className="mx-auto py-4"
      />
    </Link>
  )
}

export default Logo
