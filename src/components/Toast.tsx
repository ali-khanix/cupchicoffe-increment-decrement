'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

type ToastProps = {
  message: string
  duration?: number
}

export default function Toast({ message, duration = 3000 }: ToastProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, duration)
    return () => clearTimeout(timer)
  }, [duration])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-100 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-xl shadow-xl z-50"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
