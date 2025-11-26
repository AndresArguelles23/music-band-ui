import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={`${styles.footer} container`} id="contact">
      <div>
        <p className={styles.kicker}>Contacto</p>
        <h3>Hablemos de tu próximo show.</h3>
        <p className={styles.lead}>
          Escríbenos para diseñar una ruta de gira, coordinar prensa o planear tu próximo
          lanzamiento.
        </p>
      </div>
      <div className={styles.actions}>
        <a href="mailto:hola@pulsewave.studio" className={styles.primary}>
          hola@pulsewave.studio
        </a>
        <p className={styles.meta}>Respuesta garantizada en menos de 24 horas.</p>
      </div>
    </footer>
  )
}

export default Footer
