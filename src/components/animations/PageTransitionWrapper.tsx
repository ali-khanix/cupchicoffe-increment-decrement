'use client'

import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

type Props = {
  children: React.ReactNode
}

const PageTransitionWrapper = ({ children }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const el = containerRef.current
    if (!el) return

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      },
    )

    return () => {
      gsap.to(el, {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: 'power2.inOut',
      })
    }
  }, [])

  return <div ref={containerRef}>{children}</div>
}

export default PageTransitionWrapper
