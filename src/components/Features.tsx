import { type CSSProperties } from 'react'
import styles from './Features.module.css'

const services = [
  {
    title: 'La Hora Del Perreo',
    description:
      'Nuestro show insignia lleva la fiesta a otro nivel: sets de reggaetón curados, interacción constante con el público y un equipo que sabe cómo leer cada momento.',
    includes:
      'Incluye: host + DJ, dinámicas participativas, cápsulas listas para redes.',
    idealFor: 'Ideal para: clubes, festivales boutique y activaciones de marca nocturnas.',
    highlights: [
      { icon: '🎛️', text: 'Hosts y DJ preparados para animar, entrevistar y mantener la energía arriba' },
      { icon: '🎁', text: 'Dinámicas participativas, giveaways y cápsulas cortas para redes sociales' },
      { icon: '🚚', text: 'Producción ágil para venues, festivales o activaciones con marcas' },
    ],
    image: '/images/service-perreo.avif',
    alt: 'DJ animando a una multitud en un club con luces rosas',
  },
  {
    title: 'Producción de Eventos',
    description:
      'Desde la idea creativa hasta el último encore, diseñamos experiencias en vivo completas para artistas, bandas y marcas que buscan impacto real.',
    includes:
      'Incluye: stage design, backline, hospitality y coordinación integral de crew.',
    idealFor: 'Ideal para: giras, lanzamientos con fans y festivales con múltiples escenarios.',
    highlights: [
      { icon: '🎚️', text: 'Riders técnicos, stage design y logística de backline adaptados a cada venue' },
      { icon: '🛡️', text: 'Coordinación con tour managers, hospitality, acreditaciones y seguridad' },
      { icon: '📈', text: 'Integración con ticketing, experiencias VIP y métricas post-evento' },
    ],
    image: '/images/service-eventos.avif',
    alt: 'Escenario iluminado con cabinas de producción durante un show',
  },
  {
    title: 'Producción Audio Visual',
    description:
      'Generamos contenido que cuenta la historia detrás del show: live sessions, aftermovies y piezas cortas optimizadas para plataformas digitales.',
    includes: 'Incluye: crew de filmación, dirección creativa y edición multi-formato.',
    idealFor: 'Ideal para: campañas digitales, live sessions y recaps inmediatos post-show.',
    highlights: [
      { icon: '🎥', text: 'Equipo de filmación en vivo y crew de fotografía especializado en conciertos' },
      { icon: '✂️', text: 'Guion, dirección y edición con entregables en múltiples formatos y ratios' },
      { icon: '⚡', text: 'Entrega rápida de highlights para social media y campañas posteriores' },
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
      <div className={styles.grid}>
        {services.map((service, index) => (
          <article
            key={service.title}
            className={styles.card}
            style={{ '--delay': `${index * 120}ms` } as CSSProperties}
          >
            <figure className={styles.media}>
              <img src={service.image} alt={service.alt} loading="lazy" />
            </figure>
            <div className={styles.cardHeader}>
              <span className={styles.badge}>{String(index + 1).padStart(2, '0')}</span>
              <div className={styles.titleBlock}>
                <div className={styles.cardTitle}>
              
                  <h3>{service.title}</h3>
                </div>
                <p className={styles.description}>{service.description}</p>
              </div>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.meta}>{service.includes}</span>
              <span className={styles.meta}>{service.idealFor}</span>
            </div>
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
          </article>
        ))}
      </div>
    </section>
  )
}

export default Features
