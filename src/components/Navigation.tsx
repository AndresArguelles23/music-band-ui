import { type CSSProperties, useEffect, useRef, useState } from 'react'

import styles from './Navigation.module.css'

const navItems = [
  { href: '#features', label: 'Servicios' },
  { href: '#videos', label: 'Videos' },
  { href: '#about', label: 'Nosotros' },
  { href: '#faq', label: 'FAQ' },
  { href: '#discography', label: 'Discografía' },
  { href: '#contact', label: 'Contacto' },
]

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [navTarget, setNavTarget] = useState<string | null>(null)
  const [navProgress, setNavProgress] = useState(0)
  const [navActive, setNavActive] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const settleTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    let frameId: number

    const updateProgress = () => {
      const scrollTop = window.scrollY
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0

      setScrollProgress(nextProgress)
      frameId = window.requestAnimationFrame(updateProgress)
    }

    frameId = window.requestAnimationFrame(updateProgress)

    return () => {
      window.cancelAnimationFrame(frameId)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  useEffect(() => {
    if (!navTarget) {
      return
    }

    const targetElement = document.querySelector(navTarget)

    if (!targetElement) return

    const startScroll = window.scrollY
    const targetScroll = window.scrollY + targetElement.getBoundingClientRect().top
    const travelDistance = Math.max(Math.abs(targetScroll - startScroll), 1)

    let frameId: number

    const animate = () => {
      const currentScroll = window.scrollY
      const traveled = Math.min(Math.abs(currentScroll - startScroll), travelDistance)
      const progressRatio = Math.min(traveled / travelDistance, 1)

      setNavProgress(Math.max(5, progressRatio * 100))
      frameId = window.requestAnimationFrame(animate)
    }

    frameId = window.requestAnimationFrame(animate)

    const observer = new IntersectionObserver(
      (entries) => {
        const hasIntersected = entries.some((entry) => entry.isIntersecting)

        if (!hasIntersected) return

        setNavProgress(100)
        if (settleTimeoutRef.current !== null) {
          window.clearTimeout(settleTimeoutRef.current)
        }

        settleTimeoutRef.current = window.setTimeout(() => {
          setNavActive(false)
          setNavTarget(null)
        }, 260)
        observer.disconnect()
      },
      {
        rootMargin: '-15% 0px -60% 0px',
        threshold: 0.25,
      },
    )

    observer.observe(targetElement)

    return () => {
      window.cancelAnimationFrame(frameId)
      observer.disconnect()
      if (settleTimeoutRef.current !== null) {
        window.clearTimeout(settleTimeoutRef.current)
      }
    }
  }, [navTarget])

  const closeMenu = () => setMenuOpen(false)

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const targetElement = document.querySelector(href)

    if (!targetElement) {
      setNavActive(false)
      setNavTarget(null)
      return
    }

    setNavTarget(href)
    setNavProgress(8)
    setNavActive(true)
  }

  const handleBlur = () => {
    window.setTimeout(() => {
      const activeElement = document.activeElement

      if (
        activeElement &&
        (panelRef.current?.contains(activeElement) || menuButtonRef.current?.contains(activeElement))
      ) {
        return
      }

      setMenuOpen(false)
    }, 0)
  }

  return (
    <header className={styles.header}>
      <div className={`${styles.progressContainer} ${navActive ? styles.progressActive : ''}`} aria-hidden>
        <span
          className={styles.progressBar}
          style={{ '--progress': `${scrollProgress}%` } as CSSProperties}
        />
        <span
          className={`${styles.progressBarAccent} ${navActive ? styles.progressBarAccentVisible : ''}`}
          style={{ '--progress': `${navProgress}%` } as CSSProperties}
        />
      </div>
      <div className={styles.brand}>Elite Klan</div>
      <nav className={styles.navLinks} aria-label="Primary">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => handleNavClick(item.href)}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles.menuButton}
          onClick={handleToggleMenu}
          onBlur={handleBlur}
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          ref={menuButtonRef}
        >
          <span className={styles.menuIcon} aria-hidden="true">
            <span className={`${styles.bar} ${menuOpen ? styles.barTopOpen : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barMiddleOpen : ''}`} />
            <span className={`${styles.bar} ${menuOpen ? styles.barBottomOpen : ''}`} />
          </span>
          <span className={styles.menuLabel}>Menú</span>
        </button>
        <a className={styles.cta} href="#contact">
          Reserva ahora
        </a>
      </div>

      <div
        id="primary-menu"
        className={`${styles.mobilePanel} ${menuOpen ? styles.mobilePanelOpen : ''}`}
        role="menu"
        aria-hidden={!menuOpen}
        onBlur={handleBlur}
        ref={panelRef}
      >
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            role="menuitem"
            onClick={() => handleNavClick(item.href)}
          >
            {item.label}
          </a>
        ))}
        <a className={`${styles.cta} ${styles.mobileCta}`} href="#contact" onClick={closeMenu}>
          Reserva ahora
        </a>
      </div>
    </header>
  )
}

export default Navigation
