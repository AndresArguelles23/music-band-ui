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

const socials = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/eliteklan/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={styles.icon}>
        <path
          fill="currentColor"
          d="M12 2.5c3.17 0 3.556.012 4.806.07 1.17.055 1.97.242 2.43.404a4.9 4.9 0 0 1 1.76 1.15 4.9 4.9 0 0 1 1.15 1.76c.162.46.349 1.26.404 2.43.058 1.25.07 1.636.07 4.806s-.012 3.556-.07 4.806c-.055 1.17-.242 1.97-.404 2.43a4.9 4.9 0 0 1-1.15 1.76 4.9 4.9 0 0 1-1.76 1.15c-.46.162-1.26.349-2.43.404-1.25.058-1.636.07-4.806.07s-3.556-.012-4.806-.07c-1.17-.055-1.97-.242-2.43-.404a4.9 4.9 0 0 1-1.76-1.15 4.9 4.9 0 0 1-1.15-1.76c-.162-.46-.349-1.26-.404-2.43C2.512 15.556 2.5 15.17 2.5 12s.012-3.556.07-4.806c.055-1.17.242-1.97.404-2.43a4.9 4.9 0 0 1 1.15-1.76 4.9 4.9 0 0 1 1.76-1.15c.46-.162 1.26-.349 2.43-.404C8.444 2.512 8.83 2.5 12 2.5m0-1.5C8.785 1 8.376 1.014 7.112 1.072 5.848 1.13 4.95 1.323 4.2 1.583a6.4 6.4 0 0 0-2.31 1.5 6.4 6.4 0 0 0-1.5 2.31C0.13 6.143-.063 7.04-.321 8.306 1.014 8.376 1 8.785 1 12c0 3.215.014 3.624.072 4.888.058 1.264.251 2.162.511 2.912.37.968.863 1.738 1.5 2.31a6.4 6.4 0 0 0 2.31 1.5c.75.26 1.648.453 2.912.511C8.376 23.986 8.785 24 12 24c3.215 0 3.624-.014 4.888-.072 1.264-.058 2.162-.251 2.912-.511a6.4 6.4 0 0 0 2.31-1.5 6.4 6.4 0 0 0 1.5-2.31c.26-.75.453-1.648.511-2.912.058-1.264.072-1.673.072-4.888 0-3.215-.014-3.624-.072-4.888-.058-1.264-.251-2.162-.511-2.912a6.4 6.4 0 0 0-1.5-2.31 6.4 6.4 0 0 0-2.31-1.5c-.75-.26-1.648-.453-2.912-.511C15.624 1.014 15.215 1 12 1Z"
        />
        <path
          fill="currentColor"
          d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324m0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-10.888a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z"
        />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@eliteklan',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={styles.icon}>
        <path
          fill="currentColor"
          d="M21.8 8.001a2.754 2.754 0 0 0-1.936-1.948C18.28 5.7 12 5.7 12 5.7s-6.28 0-7.864.353A2.754 2.754 0 0 0 2.2 8.001 28.487 28.487 0 0 0 1.85 12a28.487 28.487 0 0 0 .35 3.999c.262.93 1.02 1.657 1.936 1.948C5.72 18.3 12 18.3 12 18.3s6.28 0 7.864-.353A2.754 2.754 0 0 0 21.8 16c.236-.892.368-1.81.35-2.727.018-.918-.114-1.835-.35-2.727Z"
        />
        <path fill="var(--color-bg)" d="M10 9.75 15.2 12 10 14.25V9.75Z" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://twitter.com/eliteklan',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={styles.icon}>
        <path
          fill="currentColor"
          d="M18.901 2.25h3.168l-6.93 7.92 8.162 11.58H17.04l-4.79-6.257-5.486 6.257H3.594l7.42-8.46L3.12 2.25h7.08l4.327 5.74 4.374-5.74Zm-1.116 17.52h1.755L6.3 4.042H4.39l13.395 15.728Z"
        />
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

      <div className={styles.brandRow}>
        <div className={styles.brandIdentity}>
          <p className={styles.brandName}>Elite Klan</p>
          <a className={styles.contactLink} href="mailto:kyllarecords@hotmail.com">
            <span className={styles.linkLabel}>kyllarecords@hotmail.com</span>
          </a>
        </div>
        <div className={styles.socialBlock}>
          <p className={styles.socialLabel}>Síguenos</p>
          <div className={styles.socialLinks}>
            {socials.map(({ name, href, icon }) => (
              <a key={name} className={styles.socialIcon} href={href} aria-label={name} target="_blank" rel="noreferrer">
                {icon}
              </a>
            ))}
          </div>
        </div>
        <p className={styles.copy}>Elite Klan ©2025</p>
      </div>
    </footer>
  )
}

export default Footer
