'use client'

import { DotLottieReact } from '@lottiefiles/dotlottie-react'
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
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black transition-colors">
      {isDarkMode ? (
        <DotLottieReact
          src="https://lottie.host/1272d5d0-694f-40f8-a4a3-ea85074d0487/Bgqi7MFLhN.lottie"
          loop
          autoplay
        />
      ) : (
        <DotLottieReact
          src="https://lottie.host/18039ec0-b06c-41f0-9bb3-7150a3b4f155/hgEydVsRzB.lottie"
          loop
          autoplay
        />
      )}
    </div>
  )
}
