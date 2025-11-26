import styles from './Testimonials.module.css'

const testimonials = [
  {
    quote:
      'El equipo de PulseWave entendió nuestro sonido y lo llevó a un nivel que nunca habíamos logrado en vivo.',
    name: 'Luna Rivera',
    role: 'Vocalista, Aurora Norte',
    avatar:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=facearea&w=160&h=160&q=80',
    alt: 'Retrato de Luna Rivera sonriendo con micrófono en mano',
  },
  {
    quote:
      'Su plan de lanzamiento digital nos dio claridad y resultados medibles desde el primer single.',
    name: 'Diego P.',
    role: 'Productor independiente',
    avatar:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=facearea&w=160&h=160&q=80',
    alt: 'Retrato de Diego P. en estudio con auriculares y laptop',
  },
  {
    quote:
      'Coordinan prensa, logística y soporte técnico sin fricciones. Podemos enfocarnos en tocar.',
    name: 'Trío Horizonte',
    role: 'Banda indie',
    avatar:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=facearea&w=160&h=160&q=80',
    alt: 'Retrato de tres integrantes de Trío Horizonte posando juntos',
  },
]

const Testimonials = () => {
  return (
    <section className={`${styles.section} container`} id="testimonials">
      <div className={styles.header}>
        <p className={styles.kicker}>Lo que dicen nuestros artistas</p>
        <h2>Historias que resuenan en cada escenario.</h2>
      </div>
      <div className={`${styles.cards} grid container--dense`}>
        {testimonials.map((testimonial) => (
          <figure key={testimonial.name} className={styles.card}>
            <blockquote>“{testimonial.quote}”</blockquote>
            <figcaption className={styles.attribution}>
              <img
                className={styles.avatar}
                src={testimonial.avatar}
                alt={testimonial.alt}
                loading="lazy"
              />
              <div>
                <span className={styles.name}>{testimonial.name}</span>
                <span className={styles.role}>{testimonial.role}</span>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
