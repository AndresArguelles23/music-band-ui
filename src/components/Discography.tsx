import styles from './Discography.module.css'

const playlistUrl = 'https://open.spotify.com/playlist/37i9dQZF1DWXRqgorJj26U'

type Track = {
  title: string
  artist: string
  album: string
  duration: string
  cover: string
  spotifyUrl: string
  tag?: string
}

const tracks: Track[] = [
  {
    title: 'De Música Ligera',
    artist: 'Soda Stereo',
    album: 'Canción Animal',
    duration: '3:30',
    cover: 'https://upload.wikimedia.org/wikipedia/en/5/52/CancionAnimalSodaStereo.jpg',
    spotifyUrl: 'https://open.spotify.com/track/6R6ZAavr9ISYJkH4Na4wTI',
    tag: 'Clásico',
  },
  {
    title: 'Matador',
    artist: 'Los Fabulosos Cadillacs',
    album: 'El León',
    duration: '4:38',
    cover: 'https://upload.wikimedia.org/wikipedia/en/7/76/El_leon_-_Los_Fabulosos_Cadillacs.jpg',
    spotifyUrl: 'https://open.spotify.com/track/3Qm86XLflmIXVm1wcwkgDK',
  },
  {
    title: 'Flaca',
    artist: 'Andrés Calamaro',
    album: 'Alta Suciedad',
    duration: '4:58',
    cover: 'https://upload.wikimedia.org/wikipedia/en/5/5c/AltaSuciedad.jpg',
    spotifyUrl: 'https://open.spotify.com/track/6V2oYFfXYiC1ZWeN6kVeFQ',
  },
  {
    title: 'Lamento Boliviano',
    artist: 'Enanitos Verdes',
    album: 'Big Bang',
    duration: '3:47',
    cover: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Big_Bang_%28Enanitos_Verdes_album%29.jpg',
    spotifyUrl: 'https://open.spotify.com/track/4VqPOruhp5EdPBeR92t6lQ',
  },
  {
    title: 'Mariposa Tecknicolor',
    artist: 'Fito Páez',
    album: 'Circo Beat',
    duration: '3:35',
    cover: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Circo_Beat.jpg',
    spotifyUrl: 'https://open.spotify.com/track/4s0Q6kv3CsegdeJyHzmfk9',
  },
]

const Discography = () => {
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
        <div className={styles.listCard}>
          <div className={styles.listHeader}>
            <div>
              <p className={styles.listKicker}>Lista activa</p>
              <h3>Rock argentino que suena de verdad</h3>
            </div>
            <a className={styles.listLink} href={playlistUrl} target="_blank" rel="noreferrer">
              Reproducir en Spotify
            </a>
          </div>

          <div className={styles.playerEmbed}>
            <iframe
              title="Reproductor de playlist Rock Argentino"
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DWXRqgorJj26U?utm_source=generator&theme=0"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
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
