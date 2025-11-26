import featureIcon from '../assets/spark-icon.svg'
import { useSectionVisibility } from '../hooks/useSectionVisibility'
import styles from './Features.module.css'

const services = [
  {
    title: 'La Hora Del Perreo',
    description:
      'Nuestro show insignia lleva la fiesta a otro nivel: sets de reggaetón curados, interacción constante con el público y un equipo que sabe cómo leer cada momento.',
    highlights: [
      'Hosts y DJ preparados para animar, entrevistar y mantener la energía arriba',
      'Dinámicas participativas, giveaways y cápsulas cortas para redes sociales',
      'Producción ágil para venues, festivales o activaciones con marcas',
    ],
    image: '/images/service-perreo.avif',
    alt: 'DJ animando a una multitud en un club con luces rosas',
  },
  {
    title: 'Producción de Eventos',
    description:
      'Desde la idea creativa hasta el último encore, diseñamos experiencias en vivo completas para artistas, bandas y marcas que buscan impacto real.',
    highlights: [
      'Riders técnicos, stage design y logística de backline adaptados a cada venue',
      'Coordinación con tour managers, hospitality, acreditaciones y seguridad',
      'Integración con ticketing, experiencias VIP y métricas post-evento',
    ],
    image: '/images/service-eventos.avif',
    alt: 'Escenario iluminado con cabinas de producción durante un show',
  },
  {
    title: 'Producción Audio Visual',
    description:
      'Generamos contenido que cuenta la historia detrás del show: live sessions, aftermovies y piezas cortas optimizadas para plataformas digitales.',
    highlights: [
      'Equipo de filmación en vivo y crew de fotografía especializado en conciertos',
      'Guion, dirección y edición con entregables en múltiples formatos y ratios',
      'Entrega rápida de highlights para social media y campañas posteriores',
    ],
    image: '/images/service-audiovisual.avif',
    alt: 'Camarógrafo grabando un concierto con luces moradas',
  },
]

const Features = () => {
  const { ref, isVisible } = useSectionVisibility()

  return (
    <section
      ref={ref}
      className={`${styles.section} container ${isVisible ? 'is-visible' : ''}`}
      id="features"
    >
      <div className={styles.header}>
        <p className={styles.kicker}>Servicios clave</p>
        <h2>Sonido, estrategia y logística sin perder el estilo.</h2>
        <p className={styles.lead}>
          Acompañamos a bandas emergentes y artistas consolidados para que cada lanzamiento y
          cada show sume a su historia.
        </p>
      </div>
      <div className={styles.grid}>
        {services.map((service) => (
          <article key={service.title} className={styles.card}>
            <figure className={styles.media}>
              <img src={service.image} alt={service.alt} loading="lazy" />
            </figure>
            <div className={styles.cardHeader}>
              <img src={featureIcon} alt="Icono destacado" aria-hidden />
              <div>
                <h3>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
              </div>
            </div>
            <ul className={styles.points} aria-label={`Aspectos clave de ${service.title}`}>
              {service.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Features
