import styles from './About.module.css'

const ensembleImage = '/images/about-ensemble.jpg.avif'

const About = () => {
  return (
    <section className={`${styles.section} container`} id="about">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.overline}>Sobre el colectivo</p>
          <h2>Elite Klan</h2>
          <p className={styles.subtitle}>Música que cuenta una historia</p>
        </header>

        <div className={styles.grid}>
          <div className={styles.copy}>
            <p>
              ELITE KLAN es una agrupación Barranquillera del género musical Urbano (Reggaetón, Dance
              Hall, Hip hop, reggae) conformada por jóvenes músicos de amplia experiencia: los
              hermanos Elkin Orozco “DJ NITRO” (multi-instrumentista, DJ y productor musical) y
              Antonio Orozco “ANTO ELK” (vocalista melódico), conocidos por el público como un grupo
              de “reggaetón con clase”.
            </p>
            <p>
              Desde el año de su conformación en el 2010, el grupo se ha caracterizado por su
              versatilidad en el escenario. Su fresca propuesta en escena y la interpretación de las
              canciones que componen su repertorio hacen de Elite Klan una de las mejores agrupaciones
              del género urbano a nivel regional. El estilo vocal de Anto Elk y el ingenio de Dj
              Nitro convierten cada presentación en una excelente muestra artística que deja al
              público satisfecho durante y después del show.
            </p>

            <p>
              La agrupación es reconocida por sus presentaciones en eventos públicos y privados. Su
              desempeño en eventos sociales les ha dado la oportunidad de tocar en distintas ciudades
              frente a importantes familias no solo de la región Caribe, sino del país, hecho que
              también ha catapultado al grupo a presentarse en grandes tarimas.
            </p>
          </div>

          <figure className={styles.media}>
            <img
              className="imageHighlight"
              src={ensembleImage}
              alt="Equipo Elite Klan reunido en una mesa de planificación"
              loading="lazy"
            />
            <figcaption>Equipo creativo en sintonía: gestión, producción y narrativa en un mismo pulso.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default About
