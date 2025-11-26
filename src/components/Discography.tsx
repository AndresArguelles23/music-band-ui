import styles from './Discography.module.css'

const albumId = '7nDRET5n3NjBfIeyTo58dH'
const albumUrl = `https://open.spotify.com/album/${albumId}`
const albumEmbedUrl = `https://open.spotify.com/embed/album/${albumId}?utm_source=generator&theme=0`

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
