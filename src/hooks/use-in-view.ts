'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

export function useInView(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  const setRef = useCallback((node: HTMLElement | null) => {
    if (ref.current) {
      // Cleanup previous observer
    }
    ref.current = node
  }, [])

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold])

  return { isInView, ref: setRef }
}
