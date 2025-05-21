'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null)

  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains('dark')
      setIsDarkMode(isDark)
    }

    updateTheme() // Run once on mount

    // Listen for class changes on <html>
    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  if (isDarkMode === null) return null // Avoid flicker on first load

  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black transition-colors"></div>
  )
}
