import featureIcon from '../assets/spark-icon.svg'
import styles from './Features.module.css'

const features = [
  {
    title: 'Producción integral',
    description: 'Desde pre-producción hasta mezcla y master en estudios certificados.',
  },
  {
    title: 'Estrategia digital',
    description: 'Campañas multicanal, contenido creativo y analítica en tiempo real.',
  },
  {
    title: 'Booking y prensa',
    description: 'Negociamos fechas, activamos prensa local y gestionamos acreditaciones.',
  },
]

const services = [
  'Diseño de escenario y riders técnicos adaptados a cada venue',
  'Equipos de tour management y stage management bilingües',
  'Producción de contenido en vivo y cápsulas documentales',
  'Integración con partners de ticketing y experiencias VIP',
]

const Features = () => {
  return (
    <section className={styles.section} id="features">
      <div className={styles.header}>
        <p className={styles.kicker}>Servicios clave</p>
        <h2>Sonido, estrategia y logística sin perder el estilo.</h2>
        <p className={styles.lead}>
          Acompañamos a bandas emergentes y artistas consolidados para que cada lanzamiento y
          cada show sume a su historia.
        </p>
      </div>
      <div className={styles.grid}>
        {features.map((feature) => (
          <article key={feature.title} className={styles.card}>
            <img src={featureIcon} alt="Icono destacado" aria-hidden />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
      <ul className={styles.list} aria-label="Lista de servicios detallados">
        {services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </section>
  )
}

export default Features
