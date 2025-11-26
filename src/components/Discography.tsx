import styles from './Discography.module.css'

const albumUrl = 'https://open.spotify.com/album/7nDRET5n3NjBfIeyTo58dH'

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
    title: 'Tu y Yo',
    artist: 'Elite Klan',
    album: 'Elite Klan en la Casa',
    duration: '3:06',
    cover: 'https://i.scdn.co/image/ab67616d0000b27348230999f88ae83ac3a924c6',
    spotifyUrl: 'https://open.spotify.com/track/3iOMyzdyxeEBxx71Yt7BYL',
  },
  {
    title: 'Usted',
    artist: 'Elite Klan',
    album: 'Elite Klan en la Casa',
    duration: '3:06',
    cover: 'https://i.scdn.co/image/ab67616d0000b27348230999f88ae83ac3a924c6',
    spotifyUrl: 'https://open.spotify.com/track/0wZt6n6CTgEqfERanp8DNZ',
  },
  {
    title: 'Loco de Amor',
    artist: 'Elite Klan',
    album: 'Elite Klan en la Casa',
    duration: '3:41',
    cover: 'https://i.scdn.co/image/ab67616d0000b27348230999f88ae83ac3a924c6',
    spotifyUrl: 'https://open.spotify.com/track/2YIDbBAeKaUIhS8rmGpYek',
  },
  {
    title: 'Estamos Hot',
    artist: 'Elite Klan',
    album: 'Elite Klan en la Casa',
    duration: '3:26',
    cover: 'https://i.scdn.co/image/ab67616d0000b27348230999f88ae83ac3a924c6',
    spotifyUrl: 'https://open.spotify.com/track/5u8ODYZWayLKoR77iZ7jt5',
  },
  {
    title: 'Ella',
    artist: 'Elite Klan',
    album: 'Elite Klan en la Casa',
    duration: '3:18',
    cover: 'https://i.scdn.co/image/ab67616d0000b27348230999f88ae83ac3a924c6',
    spotifyUrl: 'https://open.spotify.com/track/5bT2pIRe7sN1bEfHuh0Nnt',
  },
  {
    title: 'Me Verás',
    artist: 'Elite Klan',
    album: 'Elite Klan en la Casa',
    duration: '3:50',
    cover: 'https://i.scdn.co/image/ab67616d0000b27348230999f88ae83ac3a924c6',
    spotifyUrl: 'https://open.spotify.com/track/1WvTR0D1f0oTjcGPPzwEg9',
  },
  {
    title: 'Sabes',
    artist: 'Elite Klan',
    album: 'Elite Klan en la Casa',
    duration: '3:53',
    cover: 'https://i.scdn.co/image/ab67616d0000b27348230999f88ae83ac3a924c6',
    spotifyUrl: 'https://open.spotify.com/track/78DYFrszgkRdu3VPd1gJAB',
  },
  {
    title: 'Loca Manía',
    artist: 'Elite Klan',
    album: 'Elite Klan en la Casa',
    duration: '3:41',
    cover: 'https://i.scdn.co/image/ab67616d0000b27348230999f88ae83ac3a924c6',
    spotifyUrl: 'https://open.spotify.com/track/3ZfQPG1fjrnYWjMOkK7yVd',
  },
  {
    title: 'Quien Te Mando (feat. Fausto Chatela)',
    artist: 'Elite Klan feat. Fausto Chatela',
    album: 'Elite Klan en la Casa',
    duration: '3:44',
    cover: 'https://i.scdn.co/image/ab67616d0000b27348230999f88ae83ac3a924c6',
    spotifyUrl: 'https://open.spotify.com/track/3tDzyEX68k0hGw4X6utwO2',
  },
  {
    title: 'A la Segura',
    artist: 'Elite Klan',
    album: 'Elite Klan en la Casa',
    duration: '3:11',
    cover: 'https://i.scdn.co/image/ab67616d0000b27348230999f88ae83ac3a924c6',
    spotifyUrl: 'https://open.spotify.com/track/1qwivQ0VK4H3PgDWOgeBxc',
  },
  {
    title: 'Si Tu No Estas (feat. Rhio Esteban)',
    artist: 'Elite Klan feat. Rhio Esteban',
    album: 'Elite Klan en la Casa',
    duration: '3:28',
    cover: 'https://i.scdn.co/image/ab67616d0000b27348230999f88ae83ac3a924c6',
    spotifyUrl: 'https://open.spotify.com/track/46v35pVZ5FQlmsIGSGOEiZ',
  },
]

const Discography = () => {
  return (
    <section className={`${styles.section} container`} id="discography">
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
              src="https://open.spotify.com/embed/album/7nDRET5n3NjBfIeyTo58dH?utm_source=generator&theme=0"
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
