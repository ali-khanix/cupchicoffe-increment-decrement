'use client'

// Components
import { Button } from './ui/button'

// Hooks
import { useRef } from 'react'

// components/Tag.tsx
type TagProps = {
  label: string
  onClick: () => void
  active?: boolean
}

const Tag = ({ label, onClick, active = false }: TagProps) => {
  const btnRef = useRef<HTMLButtonElement>(null)

  return (
    <Button
      ref={btnRef}
      className={`p-4 rounded-full ${active ? 'dark:bg-secondary text-secondary dark:text-zinc-700 bg-primary' : 'bg-transparent text-primary dark:text-secondary'} text-sm`}
      onClick={onClick}
    >
      {label}
    </Button>
  )
}

export default Tag
