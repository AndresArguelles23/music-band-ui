import styles from './Testimonials.module.css'

const testimonials = [
  {
    quote:
      'El equipo de PulseWave entendió nuestro sonido y lo llevó a un nivel que nunca habíamos logrado en vivo.',
    name: 'Luna Rivera',
    role: 'Vocalista, Aurora Norte',
  },
  {
    quote:
      'Su plan de lanzamiento digital nos dio claridad y resultados medibles desde el primer single.',
    name: 'Diego P.',
    role: 'Productor independiente',
  },
  {
    quote:
      'Coordinan prensa, logística y soporte técnico sin fricciones. Podemos enfocarnos en tocar.',
    name: 'Trío Horizonte',
    role: 'Banda indie',
  },
]

const Testimonials = () => {
  return (
    <section className={`${styles.section} container`} id="testimonials">
      <div className={styles.header}>
        <p className={styles.kicker}>Lo que dicen nuestros artistas</p>
        <h2>Historias que resuenan en cada escenario.</h2>
      </div>
      <div className={styles.cards}>
        {testimonials.map((testimonial) => (
          <figure key={testimonial.name} className={styles.card}>
            <blockquote>“{testimonial.quote}”</blockquote>
            <figcaption>
              <span className={styles.name}>{testimonial.name}</span>
              <span className={styles.role}>{testimonial.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
