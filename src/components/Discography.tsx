import styles from './Discography.module.css'

const playlistUrl = 'https://open.spotify.com/playlist/37i9dQZF1DX3WvGXE8FqYX'

const tracks = [
  {
    title: 'Luz del Horizonte',
    artist: 'PulseWave x Aurora Norte',
    album: 'Cielo Eléctrico',
    duration: '3:48',
    cover: 'https://i.scdn.co/image/ab67616d0000b273f81fa1b6e0d2b6fb0f3a657a',
    spotifyUrl: 'https://open.spotify.com/track/0eGsygTp906u18L0Oimnem',
    highlight: true,
    description:
      'Guitarras de neón, un estribillo inolvidable y sintetizadores que levantan cualquier escenario.',
  },
  {
    title: 'Resonancia Polar',
    artist: 'Luna Rivera',
    album: 'Noches Prisma',
    duration: '4:02',
    cover: 'https://i.scdn.co/image/ab67616d0000b273e7a3addc4dfd78e93d3a5b1c',
    spotifyUrl: 'https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC',
  },
  {
    title: 'Latido Infinito',
    artist: 'Diego P. & PulseWave',
    album: 'Plan de Vuelo',
    duration: '3:27',
    cover: 'https://i.scdn.co/image/ab67616d0000b2739ac6de4d3eaf8d9f3b0f7c23',
    spotifyUrl: 'https://open.spotify.com/track/1301WleyT98MSxVHPZCA6M',
  },
  {
    title: 'Cables y Carreteras',
    artist: 'Trío Horizonte',
    album: 'Kilómetro 00',
    duration: '3:59',
    cover: 'https://i.scdn.co/image/ab67616d0000b273779fba7eaae0c9641a31f172',
    spotifyUrl: 'https://open.spotify.com/track/6rqhFgbbKwnb9MLmUQDhG6',
    tag: 'En vivo',
  },
  {
    title: 'Mapa de Chispas',
    artist: 'PulseWave',
    album: 'Set de Media Noche',
    duration: '4:15',
    cover: 'https://i.scdn.co/image/ab67616d0000b2732e2a2f4b6d0e9876c6d2b0e6',
    spotifyUrl: 'https://open.spotify.com/track/7ouMYWpwJ422jRcDASZB7P',
  },
]

const Discography = () => {
  const featuredTrack = tracks.find((track) => track.highlight) ?? tracks[0]

  return (
    <section className={`${styles.section} container`} id="discography">
      <div className={styles.header}>
        <p className={styles.kicker}>Discografía</p>
        <h2>Setlist listo para streaming</h2>
        <p className={styles.lead}>
          Abre la playlist en Spotify y descubre los lanzamientos que acompañan cada gira, campaña y
          colaboración de PulseWave.
        </p>
      </div>

      <div className={styles.layout}>
        <article className={styles.featured}>
          <div className={styles.featuredBadge}>Nuevo lanzamiento</div>
          <div className={styles.featuredArtwork}>
            <img src={featuredTrack.cover} alt={`Portada de ${featuredTrack.album}`} loading="lazy" />
          </div>
          <div className={styles.featuredInfo}>
            <p className={styles.featuredSubtitle}>{featuredTrack.album}</p>
            <h3>{featuredTrack.title}</h3>
            <p className={styles.featuredArtist}>{featuredTrack.artist}</p>
            <p className={styles.featuredDescription}>{featuredTrack.description}</p>
            <div className={styles.featuredActions}>
              <a
                className={styles.primaryButton}
                href={featuredTrack.spotifyUrl}
                target="_blank"
                rel="noreferrer"
              >
                Escuchar en Spotify
              </a>
              <a className={styles.secondaryButton} href={playlistUrl} target="_blank" rel="noreferrer">
                Abrir playlist completa
              </a>
            </div>
          </div>
        </article>

        <div className={styles.listCard}>
          <div className={styles.listHeader}>
            <div>
              <p className={styles.listKicker}>Lista activa</p>
              <h3>Selección curada por el equipo</h3>
            </div>
            <a className={styles.listLink} href={playlistUrl} target="_blank" rel="noreferrer">
              Reproducir en Spotify
            </a>
          </div>

          <ul className={styles.trackList}>
            {tracks.map((track, index) => (
              <li key={track.title} className={styles.trackRow}>
                <div className={styles.trackMeta}>
                  <span className={styles.index}>{String(index + 1).padStart(2, '0')}</span>
                  <div className={styles.thumbnail}>
                    <img src={track.cover} alt={`Portada de ${track.album}`} loading="lazy" />
                  </div>
                  <div>
                    <div className={styles.titleLine}>
                      <span className={styles.title}>{track.title}</span>
                      {track.tag ? <span className={styles.pill}>{track.tag}</span> : null}
                    </div>
                    <p className={styles.artist}>{track.artist}</p>
                    <p className={styles.album}>{track.album}</p>
                  </div>
                </div>
                <div className={styles.trackActions}>
                  <span className={styles.duration}>{track.duration}</span>
                  <a
                    className={styles.iconButton}
                    href={track.spotifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Reproducir ${track.title} en Spotify`}
                  >
                    ▶
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Discography
