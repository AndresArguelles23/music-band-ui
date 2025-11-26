import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

import { shouldReduceMotion } from '../utils/motion'

import styles from './Hero.module.css'

gsap.registerPlugin(ScrollTrigger)

const heroGraphic = '/images/hero.avif'

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
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
    }, section)

    return () => context.revert()
  }, [])

  return (
    <section ref={sectionRef} className={`${styles.hero} container`} id="artists">
      <div className={styles.content}>
        <p className={styles.eyebrow}>Banda en vivo a la carta</p>
        <h1>Eleva tu evento con un show que suena como tu playlist favorita</h1>
        <p className={styles.lede}>
          Creamos atmósferas que emocionan: arreglos en vivo, visuales sincronizados y un equipo
          técnico que llega listo para que solo te preocupes por disfrutar.
        </p>

        <ul className={styles.featureList}>
          <li>Setlist personalizado por mood, década o género.</li>
          <li>Ingeniería de audio, iluminación y backline incluidos.</li>
          <li>Coordinación con wedding planner y anfitriones sin fricciones.</li>
        </ul>

        <div className={styles.actions}>
          <a className={styles.primary} href="#contact">
            Reservar fecha
          </a>
          <a className={styles.secondary} href="#shows">
            Ver fechas y ciudades
          </a>
        </div>

        <div className={styles.guarantee}>
          <span>Respuesta en menos de 24 horas.</span>
          <span>Pruebas de sonido y walkthrough incluidos.</span>
        </div>
      </div>

      <div className={styles.showcase}>
        <div className={styles.photoCard}>
          <div className={styles.imageWrap}>
            <span className={styles.gradientFrame} aria-hidden="true" />
            <img className="imageHighlight" src={heroGraphic} alt="La banda tocando en vivo" loading="lazy" />
          </div>
          <div className={styles.cardFooter}>
            <div>
              <p className={styles.cardTitle}>Show eléctrico en vivo</p>
              <p className={styles.cardSubtitle}>Club Terraza · 1200 asistentes</p>
            </div>
            <div className={styles.badgeStack}>
              <span>90 min de repertorio</span>
              <span>Soundcheck incluido</span>
            </div>
          </div>
        </div>

        <div className={styles.callout}>
          <div>
            <h3>Listos para tu celebración</h3>
            <p>
              Monitoreo in-ear, versiones extendidas y transiciones sin cortes. Nos encargamos del
              rider técnico y de coordinar con tu equipo para que todo fluya.
            </p>
          </div>
          <div className={styles.metrics}>
            <div>
              <strong>250+</strong>
              <span>Eventos privados</span>
            </div>
            <div>
              <strong>4</strong>
              <span>Formaciones según el venue</span>
            </div>
            <div>
              <strong>24h</strong>
              <span>Tiempo de respuesta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
