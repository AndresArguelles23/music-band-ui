import { useEffect, useRef, useState, type MouseEvent, type WheelEvent } from 'react'

import styles from './Shows.module.css'

type VideoShowcase = {
  title: string
  description: string
  videoId: string
  vibe: string
  accent: string
  length: string
}

const videos: VideoShowcase[] = [
  {
    title: 'Live Session - Versión acústica',
    description:
      'Close ups de cuerdas, tomas laterales y planos cálidos que capturan el vibe íntimo del grupo en estudio.',
    videoId: 'ktvTqknDobU',
    vibe: 'Live Session',
    accent: '#a855f7',
    length: '4:12',
  },
  {
    title: 'Aftermovie - Festival Bruma',
    description:
      'Compilado de tomas aéreas y crowd shots con drops sincronizados a los beats para redes sociales.',
    videoId: 'kXYiU_JCYtU',
    vibe: 'Aftermovie',
    accent: '#22d3ee',
    length: '3:05',
  },
  {
    title: 'Versión en vivo - Arena Central',
    description:
      'Edición multitrack con cortes rápidos y flashes de iluminación para mostrar la energía del show principal.',
    videoId: '1w7OgIMMRc4',
    vibe: 'Live Show',
    accent: '#f59e0b',
    length: '5:48',
  },
  {
    title: 'Reel vertical - Backstage y prueba de sonido',
    description:
      'Formato 9:16 con detalles de instrumentos, risas de camerino y un teaser del arranque del concierto.',
    videoId: 'hTWKbfoikeg',
    vibe: 'Reel',
    accent: '#22c55e',
    length: '0:45',
  },
  {
    title: 'Sesión íntima - Versión unplugged',
    description:
      'Micrófonos de ambiente y paneos suaves para acompañar armonías vocales en un set minimalista.',
    videoId: 'a7SouU3ECpU',
    vibe: 'Acústico',
    accent: '#ec4899',
    length: '3:28',
  },
]

const Shows = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const wheelLockRef = useRef(false)

  const goTo = (index: number) => {
    setActiveIndex((index + videos.length) % videos.length)
  }

  const handleDirection = (direction: 'prev' | 'next') => {
    goTo(activeIndex + (direction === 'next' ? 1 : -1))
  }

  useEffect(() => {
    if (isPaused) return

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % videos.length)
    }, 5200)

    return () => window.clearInterval(timer)
  }, [isPaused])

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (wheelLockRef.current) return
    const delta = Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX

    if (Math.abs(delta) < 30) return

    wheelLockRef.current = true
    const direction: 'prev' | 'next' = delta > 0 ? 'next' : 'prev'
    handleDirection(direction)

    window.setTimeout(() => {
      wheelLockRef.current = false
    }, 700)
  }

  const handleTilt = (event: MouseEvent<HTMLElement>) => {
    const card = event.currentTarget as HTMLElement
    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateY = ((x - centerX) / centerX) * 6
    const rotateX = -((y - centerY) / centerY) * 6

    card.style.setProperty('--tilt-x', `${rotateX}deg`)
    card.style.setProperty('--tilt-y', `${rotateY}deg`)
  }

  const resetTilt = (event: MouseEvent<HTMLElement>) => {
    const card = event.currentTarget as HTMLElement
    card.style.setProperty('--tilt-x', '0deg')
    card.style.setProperty('--tilt-y', '0deg')
  }

  return (
    <section className={`${styles.section} container`} id="videos">
      <header className={styles.header}>
        <p className={styles.kicker}>Videos</p>
        <h2>Revive los momentos del grupo en todos sus formatos.</h2>
        <p className={styles.lead}>
          Seleccionamos los shows con más energía y las sesiones íntimas para que conozcas el rango visual del
          proyecto. Mira en carrusel, pausa cada video o salta al siguiente highlight.
        </p>
      </header>

      <div className={styles.carouselWrapper}>
        <div className={styles.controls} aria-hidden="true">
          <button type="button" className={styles.control} onClick={() => handleDirection('prev')}>
            ←
          </button>
          <button type="button" className={styles.control} onClick={() => handleDirection('next')}>
            →
          </button>
        </div>

        <div
          className={styles.carousel}
          role="region"
          aria-roledescription="Carrusel de videos"
          aria-label="Videos destacados del grupo"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onWheel={handleWheel}
        >
          <div className={styles.track} style={{ ['--index' as string]: activeIndex }}>
            {videos.map((video, idx) => {
              const isActive = idx === activeIndex

              return (
                <article
                  key={video.title}
                  className={`${styles.card} ${isActive ? styles.active : ''}`}
                  style={{ ['--accent' as string]: video.accent }}
                  onMouseMove={handleTilt}
                  onMouseLeave={resetTilt}
                  tabIndex={isActive ? 0 : -1}
                  aria-hidden={!isActive}
                >
                  <div className={styles.frame}>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1`}
                      title={video.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                    <div className={styles.badge}>{video.vibe}</div>
                    <div className={styles.time}>{video.length}</div>
                  </div>
                  <div className={styles.content}>
                    <h3>{video.title}</h3>
                    <p>{video.description}</p>
                  </div>
                </article>
              )
            })}
          </div>

          <div className={styles.dots} role="tablist" aria-label="Seleccionar video">
            {videos.map((video, idx) => (
              <button
                key={video.title}
                className={`${styles.dot} ${idx === activeIndex ? styles.dotActive : ''}`}
                aria-label={`Ir al video ${video.title}`}
                aria-selected={idx === activeIndex}
                role="tab"
                onClick={() => goTo(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shows
