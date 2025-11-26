import styles from './Hero.module.css'

const heroGraphic = '/images/hero.avif'

const Hero = () => {
  return (
    <section className={`${styles.hero} container`} id="artists">
      <div className={styles.copy}>
        <p className={styles.tagline}>Shows en vivo para bodas, cumpleaños y eventos</p>
        <h1>
          Contrata a la banda que convierte tu celebración en un{' '}
          <span className={styles.highlight}>concierto inolvidable</span>
        </h1>
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
        <div className={styles.metrics}>
          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Eventos memorables</span>
            <strong>150+</strong>
            <p>Producciones de alto impacto en bodas, corporativos y festivales.</p>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Reseñas 5★</span>
            <strong>98%</strong>
            <p>Clientes que nos recomiendan por nuestra energía y puntualidad.</p>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricLabel}>Setlists a medida</span>
            <strong>100%</strong>
            <p>Adaptamos cada show al mood de tu celebración y a tus artistas favoritos.</p>
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
