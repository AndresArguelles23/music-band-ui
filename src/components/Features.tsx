import { type CSSProperties } from 'react'
import styles from './Features.module.css'

const services = [
  {
    title: 'La Hora Del Perreo',
    description:
      'Show de música urbana con hits actuales y clásicos, además de animaciones que suben el ambiente por una hora inolvidable.',
    includes:
      'Incluye: equipo de 8 a 10 personas, opción en vivo o streaming y show con o sin bailarinas.',
    idealFor:
      'Ideal para: eventos sociales y empresariales, discotecas, bares y activaciones que buscan una rumba garantizada.',
    highlights: [
      { icon: '🎤', text: 'Presentación de alta calidad en REGGAETON, DANCE HALL, CHAMPETA URBANA, LATIN TRAP y AFROBEAT' },
      { icon: '💃', text: 'Formato flexible: con o sin bailarinas según las exigencias del cliente' },
      { icon: '🕺', text: 'Animaciones y dinámica en escena para que cada momento mantenga la energía arriba' },
    ],
    image: '/images/service-perreo.avif',
    alt: 'DJ animando a una multitud en un club con luces rosas',
  },
  {
    title: 'Producción de Eventos',
    description:
      'Contamos con los equipos necesarios para hacer realidad el evento de tus sueños: sonido, luces, pantallas y efectos listos para tu fiesta.',
    includes:
      'Incluye: amplificación, luces de escenario y ambientación, pista de baile, pantallas LED, tarima y estructuras.',
    idealFor:
      'Ideal para: eventos sociales de todo tipo, aniversarios empresariales, lanzamientos y celebraciones en establecimientos.',
    highlights: [
      { icon: '💡', text: 'Iluminación de ambientación y profesional para tarimas y espectáculos' },
      { icon: '🎆', text: 'Efectos especiales y escenografía: Ventury, Crio Jet, humo y burbujas' },
      { icon: '🔊', text: 'Sonido con DJ y amplificación, más red de grupos musicales aliados' },
    ],
    image: '/images/service-eventos.avif',
    alt: 'Escenario iluminado con cabinas de producción durante un show',
  },
  {
    title: 'Producción Audio Visual',
    description:
      'Equipo humano y tecnológico listo para producciones musicales y de video de cualquier tipo para que hagas realidad tus sueños.',
    includes: 'Incluye: crew de filmación, dirección creativa y edición en múltiples formatos.',
    idealFor: 'Ideal para: producciones musicales, videos promocionales y contenido para plataformas digitales.',
    highlights: [
      { icon: '🎥', text: 'Producción audiovisual integral con grabación, dirección y crew especializado' },
      { icon: '✂️', text: 'Edición multi-formato para redes, campañas y material promocional' },
      { icon: '🚀', text: 'Entregables listos para impulsar la difusión de tu proyecto' },
    ],
    image: '/images/service-audiovisual.avif',
    alt: 'Camarógrafo grabando un concierto con luces moradas',
  },
]

const Features = () => {
  return (
    <section className={`${styles.section} container`} id="features">
      <div className={styles.header}>
        <p className={styles.kicker}>Servicios clave</p>
        <h2>Sonido, estrategia y logística sin perder el estilo.</h2>
        <p className={styles.lead}>
          Acompañamos a bandas emergentes y artistas consolidados para que cada lanzamiento y
          cada show sume a su historia.
        </p>
      </div>
      <div className={styles.list}>
        {services.map((service, index) => (
          <article
            key={service.title}
            className={styles.service}
            style={{ '--delay': `${index * 120}ms` } as CSSProperties }
          >
            <div className={styles.serviceHeader}>
              <span className={styles.badge}>{String(index + 1).padStart(2, '0')}</span>
              <div className={styles.titleBlock}>
                <h3>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
                <div className={styles.metaRow}>
                  <span className={styles.meta}>{service.includes}</span>
                  <span className={styles.meta}>{service.idealFor}</span>
                </div>
              </div>
            </div>
            <div className={styles.contentRow}>
              <figure className={styles.media}>
                <img className="imageHighlight" src={service.image} alt={service.alt} loading="lazy" />
              </figure>
              <ul className={styles.points} aria-label={`Aspectos clave de ${service.title}`}>
                {service.highlights.map((point) => (
                  <li key={point.text}>
                    <span className={styles.pointIcon} aria-hidden>
                      {point.icon}
                    </span>
                    <span className={styles.pointText}>{point.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Features
