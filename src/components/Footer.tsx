import styles from './Footer.module.css'

type Contact = {
  area: string
  name: string
  role: string
  email?: string
  phone?: string
}

const contacts: Contact[] = [
  {
    area: 'Booking Colombia',
    name: 'Juan Camilo Fajardo',
    role: 'Agente y estrategia de gira',
    email: 'juan@pulsewave.studio',
    phone: '+57 320 826 1659',
  },
  {
    area: 'Booking Países Bajos',
    name: 'Mariana Gómez',
    role: 'Tour manager EU',
    email: 'mariana@pulsewave.studio',
    phone: '+31 6 87 45 12 30',
  },
  {
    area: 'Road Management',
    name: 'Laura Pineda',
    role: 'Coordinación de ruta y hospitality',
    email: 'laura@pulsewave.studio',
    phone: '+57 311 506 2400',
  },
  {
    area: 'Press',
    name: 'Santiago Rivas',
    role: 'PR & Media Relations',
    email: 'press@pulsewave.studio',
    phone: '+57 300 928 7745',
  },
  {
    area: 'Comercial',
    name: 'Natalia Ortiz',
    role: 'Alianzas y patrocinios',
    email: 'natalia@pulsewave.studio',
    phone: '+57 315 778 9921',
  },
]

const Footer = () => {
  return (
    <footer className={`${styles.footer} container`} id="contact">
      <div className={styles.header}>
        <p className={styles.kicker}>Contacto</p>
        <h3>Hablemos de tu próximo movimiento.</h3>
        <p className={styles.lead}>
          Escríbenos para diseñar una ruta de gira, coordinar prensa, cerrar patrocinios o
          planear tu próximo lanzamiento.
        </p>
      </div>

      <div className={styles.grid}>
        {contacts.map(({ area, name, role, email, phone }) => (
          <article key={area} className={styles.card}>
            <p className={styles.area}>{area}</p>
            <div>
              <p className={styles.name}>{name}</p>
              <p className={styles.role}>{role}</p>
            </div>
            <div className={styles.links}>
              {email && (
                <a className={styles.contactLink} href={`mailto:${email}`}>
                  <span aria-hidden="true">✉️</span>
                  <span className={styles.linkLabel}>{email}</span>
                </a>
              )}
              {phone && (
                <a className={styles.contactLink} href={`tel:${phone.replace(/\s+/g, '')}`}>
                  <span aria-hidden="true">📞</span>
                  <span className={styles.linkLabel}>{phone}</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </footer>
  )
}

export default Footer
