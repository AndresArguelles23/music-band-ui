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
        <div className={styles.bookingCta}>
          <div className={styles.bookingCopy}>
            <h3>¿Listos para su próximo evento?</h3>
            <p>
              Creamos shows a medida para bodas, cumpleaños, eventos corporativos y festivales.
              Llevamos repertorio, producción y energía para que tu público no deje de cantar.
            </p>
            <ul className={styles.eventBadges}>
              <li>Shows privados</li>
              <li>Bodas y aniversarios</li>
              <li>Eventos corporativos</li>
              <li>Festivales y plazas públicas</li>
            </ul>
          </div>
          <div className={styles.bookingAction}>
            <span>Agenda tu fecha y asegura el soundtrack perfecto.</span>
            <a className={styles.primary} href="#contact">
              Reservar mi evento
            </a>
          </div>
        </div>
      </div>
      <div className={styles.visual}>
        <img src={heroGraphic} alt="Escena musical en vivo" loading="lazy" />
      </div>
    </section>
  )
}

export default Hero
