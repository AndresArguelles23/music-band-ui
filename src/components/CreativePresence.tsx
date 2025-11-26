import styles from './CreativePresence.module.css'

const CreativePresence = () => {
  return (
    <section className={`${styles.section} container`} id="creative-presence">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.kicker}>Identidad y visión</p>
          <h2>Una presencia creativa</h2>
          <p className={styles.lead}>
            Elite Klan ha crecido de la mano de la comunidad, la cultura y los sonidos de la música urbana
            latina. Conectan con la esencia del barrio, los ritmos caribeños y las propuestas que llegan
            desde Puerto Rico y el continente africano.
          </p>
        </header>

        <div className={styles.content}>
          <div className={styles.copy}>
            <p>
              Incluso de pequeños les atraía la música y los artistas extranjeros puertorriqueños y del
              continente africano. Entienden realmente lo que implica el poder del sonido e intentan crear
              música para fanáticos de todo el espectro musical.
            </p>
            <p>
              Su estilo característico es reconocible al instante y se está convirtiendo en un estilo que otros
              artistas están empezando a replicar. Con su nombre cada vez más conocido a nivel nacional, su
              carrera se encuentra en una importante encrucijada que podría irrumpir en las listas de éxitos
              internacionales.
            </p>
            <div className={styles.badges}>
              <span className={styles.badge}>Reggaetón con clase</span>
              <span className={styles.badge}>Raíces caribeñas</span>
              <span className={styles.badge}>Visión global</span>
            </div>
          </div>

          <figure className={styles.media}>
            <img
              className="imageHighlight"
              src="/images/Creativa.avif"
              alt="Integrantes de Elite Klan creando música en un ambiente iluminado"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default CreativePresence
