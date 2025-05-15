'use client'

import { useTheme } from 'next-themes'
import { Button } from './ui/button'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <Button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      size={'icon'}
      className="rounded-full bg-transparent"
    >
      <Sun
        size={28}
        className="absolute h-6 w-6 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 transition-all text-gray-400"
      />
      <Moon
        size={28}
        className="absolute h-6 w-6 rotate-90 scale-0 dark:-rotate-0 dark:scale-100 transition-all text-gray-400"
      />
    </Button>
  )
}
