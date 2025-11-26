import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { type CSSProperties, useEffect, useRef } from 'react'

import { shouldReduceMotion } from '../utils/motion'

import styles from './Features.module.css'

gsap.registerPlugin(ScrollTrigger)

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
      { text: 'Presentación de alta calidad en REGGAETON, DANCE HALL, CHAMPETA URBANA, LATIN TRAP y AFROBEAT' },
      { text: 'Formato flexible: con o sin bailarinas según las exigencias del cliente' },
      { text: 'Animaciones y dinámica en escena para que cada momento mantenga la energía arriba' },
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
      { text: 'Iluminación de ambientación y profesional para tarimas y espectáculos' },
      { text: 'Efectos especiales y escenografía: Ventury, Crio Jet, humo y burbujas' },
      { text: 'Sonido con DJ y amplificación, más red de grupos musicales aliados' },
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
      { text: 'Producción audiovisual integral con grabación, dirección y crew especializado' },
      { text: 'Edición multi-formato para redes, campañas y material promocional' },
      { text: 'Entregables listos para impulsar la difusión de tu proyecto' },
    ],
    image: '/images/service-audiovisual.avif',
    alt: 'Camarógrafo grabando un concierto con luces moradas',
  },
]

const Features = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const list = listRef.current
    if (!section) return

    const context = gsap.context(() => {
      if (shouldReduceMotion()) return

      gsap.from(section, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          once: true,
        },
      })

      if (!list) return

      const articles = Array.from(list.querySelectorAll('article'))

      gsap.from(articles, {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          once: true,
        },
      })
    }, section)

    return () => context.revert()
  }, [])

  return (
    <section ref={sectionRef} className={`${styles.section} container`} id="features">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.kicker}>Servicios clave</p>
          <h2>Sonido, estrategia y logística sin perder el estilo.</h2>
          <p className={styles.lead}>
            Acompañamos a bandas emergentes y artistas consolidados para que cada lanzamiento y
            cada show sume a su historia.
          </p>
        </header>

        <div ref={listRef} className={styles.list}>
          {services.map((service, index) => (
            <article
              key={service.title}
              className={styles.service}
              style={{ '--delay': `${index * 120}ms` } as CSSProperties }
            >
              <div className={styles.copy}>
                <div className={styles.titleRow}>
                  <span className={styles.badge}>{String(index + 1).padStart(2, '0')}</span>
                  <div className={styles.titleBlock}>
                    <h3>{service.title}</h3>
                    <p className={styles.description}>{service.description}</p>
                  </div>
                </div>

                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <p className={styles.metaLabel}>Incluye</p>
                    <p className={styles.meta}>{service.includes}</p>
                  </div>
                  <div className={styles.metaItem}>
                    <p className={styles.metaLabel}>Ideal para</p>
                    <p className={styles.meta}>{service.idealFor}</p>
                  </div>
                </div>

                <ul className={styles.points} aria-label={`Aspectos clave de ${service.title}`}>
                  {service.highlights.map((point) => (
                    <li key={point.text}>
                      <span className={styles.pointText}>{point.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <figure className={styles.media}>
                <img className="imageHighlight" src={service.image} alt={service.alt} loading="lazy" />
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
