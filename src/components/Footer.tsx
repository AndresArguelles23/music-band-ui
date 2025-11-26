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
    name: 'Elkin Orozco Hoyos',
    role: 'Agente y estrategia de gira',
    email: 'kyllarecords@hotmail.com',
    phone: '+57 3017387044',
  },
  {
    area: 'Booking Países Bajos',
    name: 'Blake Velasco',
    role: 'Tour manager EU',
    email: 'kyllarecords@hotmail.com',
    phone: '+31 614374494',
  },
  {
    area: 'Road Management',
    name: 'Andrés Vergara',
    role: 'Coordinación de ruta y hospitality',
    email: 'kyllarecords@hotmail.com',
    phone: '+57 3017387044',
  },
  {
    area: 'Press',
    name: 'Mario Rubiano',
    role: 'PR & Media Relations',
    email: 'kyllarecords@hotmail.com',
    phone: '+57 3016597715',
  },
  {
    area: 'Comercial',
    name: 'Karolyne Brigante',
    role: 'Alianzas y patrocinios',
    email: 'kyllarecords@hotmail.com',
    phone: '+57 3011129247',
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
