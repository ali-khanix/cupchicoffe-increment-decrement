'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Moon, Sun } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [nextTheme, setNextTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setNextTheme(newTheme)
    setIsAnimating(true)

    // Delay actual theme switch to allow animation to play
    setTimeout(() => {
      setTheme(newTheme)
      setTimeout(() => setIsAnimating(false), 600)
    }, 100)
  }

  return (
    <>
      <Button
        onClick={toggleTheme}
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

      {/* Radial theme transition effect */}
      <AnimatePresence>
        {isAnimating && (
          <motion.div
            key="theme-circle"
            className={`fixed inset-0 z-40 pointer-events-none ${
              nextTheme === 'dark' ? 'bg-black' : 'bg-white'
            }`}
            initial={{ clipPath: 'circle(0% at 50% 50%)' }}
            animate={{ clipPath: 'circle(150% at 50% 50%)' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
        )}
      </AnimatePresence>
    </>
  )
}
