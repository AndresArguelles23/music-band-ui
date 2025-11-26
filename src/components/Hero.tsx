import styles from './Hero.module.css'

const heroGraphic = '/images/hero.avif'

const Hero = () => {
  return (
    <section className={`${styles.hero} container`} id="artists">
      <div className={styles.copy}>
        <p className={styles.tagline}>Shows para todo tipo de eventos</p>
        <h1>Contrata a la banda que convierte tu celebración en un concierto</h1>
        <p className={styles.subtitle}>
          Animamos tu fiesta con un repertorio a medida, sonido profesional y la energía que
          hará que tus invitados no dejen de bailar.
        </p>
        <div className={styles.actions}>
          <a className={styles.primary} href="#contact">
            Agendar consulta
          </a>
          <a className={styles.secondary} href="#features">
            Conoce nuestros servicios
          </a>
        </div>
      </div>
      <div className={styles.visual}>
        <div className={styles.visualFrame}>
          <div className={styles.badges} aria-hidden="true">
            <span className={styles.badgePrimary}>Setlist en vivo</span>
            <span className={styles.badgeSecondary}>Luz y sonido incluidos</span>
          </div>
          <div className={styles.imagePanel}>
            <img src={heroGraphic} alt="Escena musical en vivo" loading="lazy" />
            <span className={styles.cornerPulse} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
