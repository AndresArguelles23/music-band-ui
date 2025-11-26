import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>PulseWave</div>
      <nav className={styles.navLinks} aria-label="Primary">
        <a href="#features">Servicios</a>
        <a href="#artists">Artistas</a>
        <a href="#testimonials">Testimonios</a>
        <a href="#contact">Contacto</a>
      </nav>
      <a className={styles.cta} href="#contact">
        Reserva ahora
      </a>
    </header>
  )
}

export default Navigation
