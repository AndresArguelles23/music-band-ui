import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

import { canUseMotion, shouldReduceMotion } from '../utils/motion'
import styles from './Footer.module.css'

gsap.registerPlugin(ScrollTrigger)

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
    brandColor: '#E4405F',
    iconPath:
      'M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.0611 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@eliteklan',
    brandColor: '#FF0000',
    iconPath:
      'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
  {
    name: 'X',
    href: 'https://twitter.com/eliteklan',
    brandColor: '#000000',
    iconPath:
      'M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z',
  },
]

const Footer = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const context = gsap.context(() => {
      if (shouldReduceMotion()) return

      gsap.from(section, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          once: true,
        },
      })
    }, section)

    return () => context.revert()
  }, [])

  const handleEnter = (target: EventTarget & HTMLElement) => {
    if (!canUseMotion()) return

    gsap.to(target, { duration: 0.18, scale: 1.02, y: -2, overwrite: true })
  }

  const handleLeave = (target: EventTarget & HTMLElement) => {
    if (!canUseMotion()) return

    gsap.to(target, { duration: 0.18, scale: 1, y: 0, overwrite: true })
  }

  return (
    <footer ref={sectionRef} className={`${styles.footer} container`} id="contact">
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
                <a
                  className={styles.contactLink}
                  href={`mailto:${email}`}
                  onMouseEnter={(event) => handleEnter(event.currentTarget)}
                  onFocus={(event) => handleEnter(event.currentTarget)}
                  onMouseLeave={(event) => handleLeave(event.currentTarget)}
                  onBlur={(event) => handleLeave(event.currentTarget)}
                >
                  <span className={styles.linkLabel}>{email}</span>
                </a>
              )}
              {phone && (
                <a
                  className={styles.contactLink}
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  onMouseEnter={(event) => handleEnter(event.currentTarget)}
                  onFocus={(event) => handleEnter(event.currentTarget)}
                  onMouseLeave={(event) => handleLeave(event.currentTarget)}
                  onBlur={(event) => handleLeave(event.currentTarget)}
                >
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
          <a
            className={styles.contactLink}
            href="mailto:kyllarecords@hotmail.com"
            onMouseEnter={(event) => handleEnter(event.currentTarget)}
            onFocus={(event) => handleEnter(event.currentTarget)}
            onMouseLeave={(event) => handleLeave(event.currentTarget)}
            onBlur={(event) => handleLeave(event.currentTarget)}
          >
            <span className={styles.linkLabel}>kyllarecords@hotmail.com</span>
          </a>
        </div>
        <div className={styles.socialBlock}>
          <p className={styles.socialLabel}>Síguenos</p>
          <div className={styles.socialLinks}>
            {socials.map(({ name, href, iconPath, brandColor }) => (
              <a
                key={name}
                className={styles.socialIcon}
                href={href}
                aria-label={name}
                target="_blank"
                rel="noreferrer"
                style={{ color: brandColor, borderColor: `${brandColor}59`, backgroundColor: `${brandColor}14` }}
                onMouseEnter={(event) => handleEnter(event.currentTarget)}
                onFocus={(event) => handleEnter(event.currentTarget)}
                onMouseLeave={(event) => handleLeave(event.currentTarget)}
                onBlur={(event) => handleLeave(event.currentTarget)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={styles.icon} role="img">
                  <title>{name}</title>
                  <path fill="currentColor" d={iconPath} />
                </svg>
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
