import { useEffect, useRef, useState } from 'react'

import styles from './Navigation.module.css'

const navItems = [
  { href: '#features', label: 'Servicios' },
  { href: '#artists', label: 'Artistas' },
  { href: '#faq', label: 'FAQ' },
  { href: '#testimonials', label: 'Testimonios' },
  { href: '#contact', label: 'Contacto' },
]

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

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

  const closeMenu = () => setMenuOpen(false)

  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev)
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
      <div className={styles.brand}>PulseWave</div>
      <nav className={styles.navLinks} aria-label="Primary">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
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
          <a key={item.href} href={item.href} role="menuitem" onClick={closeMenu}>
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
