import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

import { shouldReduceMotion } from '../utils/motion'

import styles from './Discography.module.css'

gsap.registerPlugin(ScrollTrigger)

const albumId = '7nDRET5n3NjBfIeyTo58dH'
const albumUrl = `https://open.spotify.com/album/${albumId}`
const albumEmbedUrl = `https://open.spotify.com/embed/album/${albumId}?utm_source=generator&theme=0`

const Discography = () => {
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
    <section ref={sectionRef} className={`${styles.section} container`} id="discography">
      <div className={styles.header}>
        <p className={styles.kicker}>Discografía</p>
        <h2>Álbum listo para streaming</h2>
        <p className={styles.lead}>
          Reproduce directamente el álbum «Elite Klan en la Casa» y explora su lista completa de canciones.
        </p>
      </div>

      <div className={styles.layout}>
        <div className={styles.listCard}>
          <div className={styles.listHeader}>
            <div>
              <p className={styles.listKicker}>Lista activa</p>
              <h3>Elite Klan en la Casa</h3>
            </div>
            <a className={styles.listLink} href={albumUrl} target="_blank" rel="noreferrer">
              Abrir en Spotify
            </a>
          </div>

          <div className={styles.playerEmbed}>
            <iframe
              title="Reproductor álbum Elite Klan en la Casa"
              src={albumEmbedUrl}
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discography
