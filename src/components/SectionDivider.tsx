import { useEffect, useId, useRef, useState } from 'react'
import styles from './SectionDivider.module.css'

const SectionDivider = () => {
  const [isActive, setIsActive] = useState(false)
  const dividerRef = useRef<HTMLDivElement | null>(null)
  const gradientId = `section-divider-gradient-${useId()}`

  useEffect(() => {
    const element = dividerRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting)
      },
      {
        threshold: 0.35,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className={styles.shell} ref={dividerRef}>
      <div className={`${styles.wrapper} container`}>
        <svg className={styles.svg} viewBox="0 0 1200 80" role="presentation" aria-hidden="true">
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-primary)" />
              <stop offset="50%" stopColor="var(--color-accent)" />
              <stop offset="100%" stopColor="var(--color-secondary)" />
            </linearGradient>
          </defs>
          <path
            className={`${styles.path} ${isActive ? styles.active : ''}`}
            d="M40 40 C 220 10, 420 10, 600 40 S 980 70, 1160 40"
            stroke={`url(#${gradientId})`}
          />
        </svg>
        <div className={`${styles.glow} ${isActive ? styles.glowActive : ''}`} />
      </div>
    </div>
  )
}

export default SectionDivider
