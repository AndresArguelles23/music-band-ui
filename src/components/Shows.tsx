import { useEffect, useRef, useState, type MouseEvent, type WheelEvent } from 'react'

import styles from './Shows.module.css'

type VideoShowcase = {
  title: string
  description: string
  videoId: string
}

const videos: VideoShowcase[] = [
  {
    title: 'Live Session - Versión acústica',
    description:
      'Close ups de cuerdas, tomas laterales y planos cálidos que capturan el vibe íntimo del grupo en estudio.',
    videoId: 'ktvTqknDobU',
  },
  {
    title: 'Aftermovie - Festival Bruma',
    description:
      'Compilado de tomas aéreas y crowd shots con drops sincronizados a los beats para redes sociales.',
    videoId: 'kXYiU_JCYtU',
  },
  {
    title: 'Versión en vivo - Arena Central',
    description:
      'Edición multitrack con cortes rápidos y flashes de iluminación para mostrar la energía del show principal.',
    videoId: '1w7OgIMMRc4',
  },
  {
    title: 'Reel vertical - Backstage y prueba de sonido',
    description:
      'Formato 9:16 con detalles de instrumentos, risas de camerino y un teaser del arranque del concierto.',
    videoId: 'hTWKbfoikeg',
  },
  {
    title: 'Sesión íntima - Versión unplugged',
    description:
      'Micrófonos de ambiente y paneos suaves para acompañar armonías vocales en un set minimalista.',
    videoId: 'a7SouU3ECpU',
  },
]

const Shows = () => {
  const [activeIndex, setActiveIndex] = useState(videos.length)
  const [isPaused, setIsPaused] = useState(false)
  const [isInstant, setIsInstant] = useState(false)
  const wheelLockRef = useRef(false)
  const trackRef = useRef<HTMLDivElement>(null)
  const activeIndexRef = useRef(activeIndex)

  const loopedVideos = [...videos, ...videos, ...videos]

  useEffect(() => {
    activeIndexRef.current = activeIndex
  }, [activeIndex])

  const goTo = (index: number) => {
    const candidates = [index, index + videos.length, index + videos.length * 2]
    const target = candidates.reduce((closest, current) =>
      Math.abs(current - activeIndex) < Math.abs(closest - activeIndex) ? current : closest,
    )

    setActiveIndex(target)
  }

  const handleDirection = (direction: 'prev' | 'next') => {
    setActiveIndex((prev) => prev + (direction === 'next' ? 1 : -1))
  }

  useEffect(() => {
    if (isPaused) return

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => prev + 1)
    }, 5200)

    return () => window.clearInterval(timer)
  }, [isPaused])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const handleTransitionEnd = () => {
      const currentIndex = activeIndexRef.current
      if (currentIndex >= videos.length * 2 || currentIndex < videos.length) {
        const normalized = ((currentIndex % videos.length) + videos.length) % videos.length
        setIsInstant(true)
        setActiveIndex(videos.length + normalized)
      }
    }

    track.addEventListener('transitionend', handleTransitionEnd)
    return () => track.removeEventListener('transitionend', handleTransitionEnd)
  }, [])

  useEffect(() => {
    if (!isInstant) return

    const id = window.requestAnimationFrame(() => {
      setIsInstant(false)
    })

    return () => window.cancelAnimationFrame(id)
  }, [isInstant])

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

  const visibleIndex = ((activeIndex % videos.length) + videos.length) % videos.length

  const isCardVisible = (idx: number) =>
    ((idx % videos.length) + videos.length) % videos.length === visibleIndex

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
          <div
            ref={trackRef}
            className={styles.track}
            style={{ ['--index' as string]: activeIndex, transition: isInstant ? 'none' : undefined }}
          >
            {loopedVideos.map((video, idx) => {
              const isVisible = isCardVisible(idx)
              const isCurrent = idx === activeIndex

              return (
                <article
                  key={`${video.title}-${idx}`}
                  className={`${styles.card} ${isVisible ? styles.active : ''}`}
                  onMouseMove={handleTilt}
                  onMouseLeave={resetTilt}
                  tabIndex={isCurrent ? 0 : -1}
                  aria-hidden={!isCurrent}
                >
                  <div className={styles.frame}>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1`}
                      title={video.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
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
                className={`${styles.dot} ${idx === visibleIndex ? styles.dotActive : ''}`}
                aria-label={`Ir al video ${video.title}`}
                aria-selected={idx === visibleIndex}
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
