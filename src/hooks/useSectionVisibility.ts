import { useEffect, useRef, useState } from 'react'

const defaultOptions: IntersectionObserverInit = {
  rootMargin: '0px 0px -10% 0px',
  threshold: 0.25,
}

export const useSectionVisibility = (options?: IntersectionObserverInit) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting))
      },
      { ...defaultOptions, ...options },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [options])

  return { ref, isVisible }
}
