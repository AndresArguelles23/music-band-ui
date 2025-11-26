import styles from './Shows.module.css'

type Showcase = {
  title: string
  location: string
  highlight: string
  format: 'Video' | 'Foto'
  detail: string
  tags: string[]
  accent: string
  mediaType: 'video' | 'image'
  src: string
  poster?: string
}

const showcases: Showcase[] = [
  {
    title: 'Aftermovie - La Hora del Perreo',
    location: 'Teatro Municipal, Medellín',
    highlight:
      'Cámaras en steady + drone interior para capturar la entrada, crowd surfing y los momentos de llamadas con el público.',
    format: 'Video',
    detail: '00:45 • Corte vertical y horizontal',
    tags: ['Aftermovie', 'Iluminación sincronizada', 'Entrega express'],
    accent: '#22d3ee',
    mediaType: 'video',
    src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
    poster: 'https://images.unsplash.com/photo-1446057032654-9d8885db76c6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Live Session - Versión acústica',
    location: 'Warehouse Studio, Bogotá',
    highlight:
      'Set íntimo con audio multitrack, close ups de cuerdas y paneos suaves sobre el público para un release minimalista.',
    format: 'Video',
    detail: '01:10 • Formato live session',
    tags: ['Audio HQ', 'Multi-cámara', 'Color grading cálido'],
    accent: '#a855f7',
    mediaType: 'video',
    src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    poster: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Galería - Festival Bruma',
    location: 'Bosque de Chapultepec, CDMX',
    highlight:
      'Secuencia de fotos con crowd shots, backstage, detalles de merch y pirotecnia para prensa y marcas.',
    format: 'Foto',
    detail: '12 capturas curadas',
    tags: ['Backstage', 'Press kit', 'Formato carré'],
    accent: '#f59e0b',
    mediaType: 'image',
    src: 'https://images.unsplash.com/photo-1507878866276-a947ef722fee?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Recap - Showcase íntimo',
    location: 'Club Subsuelo, Barcelona',
    highlight:
      'Clip corto pensado para stories: entrada del artista, drop principal, interacción con fans y cierre con CTA.',
    format: 'Video',
    detail: '00:30 • Story/Reel',
    tags: ['Vertical', 'CTA integrado', 'Entrega overnight'],
    accent: '#22c55e',
    mediaType: 'video',
    src: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
    poster: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=80',
  },
]

const Shows = () => {
  return (
    <section className={`${styles.section} container`} id="shows">
      <header className={styles.header}>
        <p className={styles.kicker}>Shows & showcases</p>
        <h2>Visualiza cómo se vive el show antes de que suceda.</h2>
        <p className={styles.lead}>
          Mientras cerramos los reels finales, te dejamos mockups de video y foto para que imagines el
          ritmo de nuestras producciones. Ajustamos duración, formato y narrativa según la ciudad y el
          venue.
        </p>
      </header>

      <div className={styles.grid}>
        {showcases.map((item) => (
          <article key={item.title} className={styles.card}>
            <div className={styles.media} style={{ ['--accent' as string]: item.accent }}>
              {item.mediaType === 'video' ? (
                <video
                  className={styles.mediaAsset}
                  src={item.src}
                  poster={item.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              ) : (
                <img className={styles.mediaAsset} src={item.src} alt={item.title} loading="lazy" />
              )}
              <div className={styles.mediaTint} aria-hidden="true" />
              <div className={styles.badge}>{item.format}</div>
              <div className={styles.mockContent}>
                <p className={styles.mockTitle}>{item.title}</p>
                <p className={styles.mockDetail}>{item.detail}</p>
                <div className={styles.overlay}>Ver previsualización</div>
              </div>
            </div>

            <div className={styles.content}>
              <div className={styles.meta}>
                <span>{item.location}</span>
                <span className={styles.accentDot} aria-hidden="true" />
                <span>{item.format}</span>
              </div>
              <p className={styles.highlight}>{item.highlight}</p>
              <div className={styles.tags} aria-label={`Etiquetas para ${item.title}`}>
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.note}>
        <p>
          ¿Quieres ver el deck completo? Envía tu venue y fechas tentativas y te compartimos reels,
          galerías y riders listos para prensa.
        </p>
        <a className={styles.link} href="#contact">
          Solicitar carpeta de shows
        </a>
      </div>
    </section>
  )
}

export default Shows
