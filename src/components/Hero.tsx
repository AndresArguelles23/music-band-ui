import heroGraphic from '../assets/hero-illustration.svg'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={`${styles.hero} container`} id="artists">
      <div className={styles.copy}>
        <p className={styles.tagline}>Producción y management musical</p>
        <h1>Haz que tu banda se escuche en todas partes</h1>
        <p className={styles.subtitle}>
          Creamos experiencias en vivo impecables, lanzamientos que destacan y estrategias
          digitales que conectan con tu audiencia.
        </p>
        <div className={styles.actions}>
          <a className={styles.primary} href="#contact">
            Agendar consulta
          </a>
          <a className={styles.secondary} href="#features">
            Conoce nuestros servicios
          </a>
        </div>
        <dl className={styles.metrics}>
          <div>
            <dt>Giras completadas</dt>
            <dd>120+</dd>
          </div>
          <div>
            <dt>Reproducciones</dt>
            <dd>50M</dd>
          </div>
          <div>
            <dt>Colaboraciones</dt>
            <dd>30 ciudades</dd>
          </div>
        </dl>
      </div>
      <div className={styles.visual}>
        <img src={heroGraphic} alt="Escena musical en vivo" loading="lazy" />
      </div>
    </section>
  )
}

export default Hero
