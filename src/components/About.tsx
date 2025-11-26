import styles from './About.module.css'

const About = () => {
  return (
    <section className={`${styles.section} container`} id="about">
      <div className={styles.inner}>
        <p className={styles.overline}>Sobre el colectivo</p>
        <h2>Elite Klan</h2>
        <p className={styles.subtitle}>Una presencia creativa</p>
        <div className={styles.content}>
          <p>
            Elite Klan nació entre salas de ensayo y escenarios improvisados, uniendo productores,
            mánagers y creativos que comparten la obsesión por un sonido pulido y experiencias en
            vivo que se sienten únicas en cada ciudad.
          </p>
          <p>
            Nos movemos como equipo nómada: escuchamos a detalle, diseñamos estrategias que respetan
            la identidad de cada artista y articulamos a todo el crew para que la logística, la
            técnica y la narrativa trabajen a favor del show.
          </p>
          <p>
            Desde la primera demo hasta el último encore, acompañamos a las bandas para que su
            energía permanezca intacta mientras crecen. Somos presencia creativa, soporte operativo y
            socio estratégico al mismo tiempo.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
