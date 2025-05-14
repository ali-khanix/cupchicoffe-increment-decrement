'use client'

import gsap from 'gsap'

// Components
import { Button } from './ui/button'

// Hooks
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'

// components/Tag.tsx
type TagProps = {
  label: string
  onClick: () => void
  active?: boolean
}

const Tag = ({ label, onClick, active = false }: TagProps) => {
  const btnRef = useRef<HTMLButtonElement>(null)

  useGSAP(() => {
    if (!btnRef.current) return

    gsap.to(btnRef.current, {
      backgroundColor: active ? '#253b39' : 'transparent',
      color: active ? '#fffff' : '#transparent',
      duration: 0.3,
      ease: 'power2.out',
    })
  }, [active])
  return (
    <Button
      ref={btnRef}
      className={`p-4 rounded-full ${active ? 'bg-primary text-white' : 'bg-transparent text-primary'} text-sm`}
      onClick={onClick}
    >
      {label}
    </Button>
  )
}

export default Tag
