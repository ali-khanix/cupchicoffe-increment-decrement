// app/products/components/LoadingScreen.tsx

import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDarkMode(document.documentElement.classList.contains('dark'))
    }
  }, [])
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
      {isDarkMode ? (
        // Cream animation for dark mode
        <DotLottieReact
          src="https://lottie.host/1272d5d0-694f-40f8-a4a3-ea85074d0487/Bgqi7MFLhN.lottie"
          loop
          autoplay
        />
      ) : (
        // Green animation for light mode
        <DotLottieReact
          src="https://lottie.host/18039ec0-b06c-41f0-9bb3-7150a3b4f155/hgEydVsRzB.lottie"
          loop
          autoplay
        />
      )}
    </div>
  )
}
