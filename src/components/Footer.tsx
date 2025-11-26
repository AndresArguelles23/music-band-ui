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

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/eliteklan',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.icon}>
        <path d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3Zm0 2A2.5 2.5 0 0 0 5 7.5v9A2.5 2.5 0 0 0 7.5 19h9A2.5 2.5 0 0 0 19 16.5v-9A2.5 2.5 0 0 0 16.5 5h-9Zm9.75 1.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5ZM12 8.25A3.75 3.75 0 1 1 8.25 12 3.75 3.75 0 0 1 12 8.25Zm0 2A1.75 1.75 0 1 0 13.75 12 1.75 1.75 0 0 0 12 10.25Z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@eliteklan',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.icon}>
        <path d="M21.8 8.5a2.75 2.75 0 0 0-1.94-1.95C18.09 6 12 6 12 6s-6.09 0-7.86.55A2.75 2.75 0 0 0 2.2 8.5 28.54 28.54 0 0 0 1.75 12c-.06 1.2.03 2.39.19 3.57a2.75 2.75 0 0 0 1.95 1.94C5.91 18 12 18 12 18s6.09 0 7.86-.55a2.75 2.75 0 0 0 1.94-1.94c.17-1.18.25-2.37.2-3.57.05-1.2-.04-2.39-.2-3.57Zm-12.8 6.55V8.95l5.2 3.05-5.2 3.05Z" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/eliteklan',
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.icon}>
        <path d="M4.1 4h3.5l4.1 5.3L15.4 4H20l-6.3 7.3L20 20h-3.5l-4.4-5.6L7.6 20H4l6.5-7.6L4.1 4Zm2.4 1 11 14H17L6 5h.5Z" />
      </svg>
    ),
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

      <div className={styles.bottomBar}>
        <div className={styles.branding}>
          <p className={styles.brandName}>Elite Klan</p>
          <a className={styles.emailLink} href="mailto:kyllarecords@hotmail.com">
            kyllarecords@hotmail.com
          </a>
        </div>

        <div className={styles.socialLinks} aria-label="Redes sociales de Elite Klan">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              className={styles.socialButton}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <p className={styles.copyright}>Elite Klan ©2025</p>
      </div>
    </footer>
  )
}

export default Footer
