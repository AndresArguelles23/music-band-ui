import { useEffect, useRef, useState, type MouseEvent, type WheelEvent } from 'react'

import styles from './Shows.module.css'

type VideoShowcase = {
  title: string
  description: string
  videoId: string
}

const videos: VideoShowcase[] = [
  {
    title: 'Elite Klan - En Vivo (Primera Parte)',
    description: 'Inicio del show con tomas de escenario y close ups del público entrando en calor.',
    videoId: 'BUicDRuAGwk',
  },
  {
    title: 'Elite Klan - En Vivo (Segunda Parte)',
    description: 'Seguimos el set con luces bajas y un montaje que resalta la conexión con la audiencia.',
    videoId: 'kADYLFkNeVg',
  },
  {
    title: 'Elite Klan - En Vivo (Tercera Parte)',
    description: 'Planos medios y paneos rápidos para capturar los coros y la percusión del directo.',
    videoId: 'fvNVMwPhvig',
  },
  {
    title: 'Elite Klan - En Vivo (Cuarta Parte)',
    description: 'Tomas frontales del escenario y barridos de cámara que siguen cada cambio de ritmo.',
    videoId: '4D2YErFovwg',
  },
  {
    title: 'Elite Klan - En Vivo (Quinta Parte)',
    description: 'Luces de contra, tomas de baterías y detalles de cuerdas para remarcar la dinámica.',
    videoId: '7LAQsuH0I_I',
  },
  {
    title: 'Elite Klan - En Vivo (Sexta Parte)',
    description: 'Cámara en grúa y cortes a reacción del público en los momentos más explosivos.',
    videoId: '2Y1XmcnTD3U',
  },
  {
    title: 'Elite Klan - En Vivo (Séptima Parte)',
    description: 'Perspectivas laterales que siguen solos de guitarra y juego de luces sincronizado.',
    videoId: '0IHRXthx4LQ',
  },
  {
    title: 'Elite Klan - En Vivo (Octava Parte)',
    description: 'Plano general final con saludo a cámara y cierre del repertorio ante el público.',
    videoId: 'qTgNOWDFpmc',
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
