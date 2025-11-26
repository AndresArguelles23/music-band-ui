import heroGraphic from '../assets/hero-illustration.svg'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={`${styles.hero} container`} id="artists">
      <div className={styles.copy}>
        <p className={styles.tagline}>Shows en vivo para bodas, cumpleaños y eventos</p>
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
