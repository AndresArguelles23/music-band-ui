import { useSectionVisibility } from '../hooks/useSectionVisibility'
import styles from './Hero.module.css'

const heroGraphic = '/images/hero.avif'

const Hero = () => {
  const { ref, isVisible } = useSectionVisibility()

  return (
    <section
      ref={ref}
      className={`${styles.hero} container ${isVisible ? 'is-visible' : ''}`}
      id="artists"
    >
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
        <img src={heroGraphic} alt="Escena musical en vivo" loading="lazy" />
      </div>
    </section>
  )
}

export default Hero
