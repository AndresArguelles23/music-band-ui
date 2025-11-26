import { useId, useState } from 'react'

import styles from './FAQ.module.css'

type FAQItem = {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: '¿Pueden adaptar el show a diferentes tipos de eventos?',
    answer:
      'Sí. Trabajamos sets a medida para festivales, venues íntimos, lanzamientos de marca y eventos corporativos, alineando música, hosts y dinámica con el público esperado.',
  },
  {
    question: '¿Cómo coordinan la producción técnica y logística?',
    answer:
      'Integramos riders, stage management, pruebas de sonido y hospitality en un plan unificado. Nuestro equipo coordina con el venue y proveedores para que todo fluya sin fricciones.',
  },
  {
    question: '¿Ofrecen contenido audiovisual del evento?',
    answer:
      'Sí. Podemos sumar crew de foto y video para capturar el show, crear aftermovies y entregar piezas optimizadas para redes en diferentes formatos y ratios.',
  },
  {
    question: '¿Con cuánta anticipación debemos reservar?',
    answer:
      'Recomendamos asegurar fecha y requerimientos con un mínimo de 3 a 4 semanas. Para festivales o producciones complejas, es ideal comenzar a planear con más tiempo.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const panelPrefix = useId()

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section className={`${styles.section} container`} id="faq">
      <div className={styles.header}>
        <p className={styles.kicker}>Preguntas frecuentes</p>
        <h2>Todo lo que necesitas saber para armar tu próximo show.</h2>
        <p className={styles.lead}>
          Resolvemos dudas comunes sobre formatos, logística y entregables para que puedas enfocarte en la
          música.
        </p>
      </div>

      <div className={styles.accordion}>
        {faqs.map((item, index) => {
          const isOpen = openIndex === index
          const panelId = `${panelPrefix}-panel-${index}`
          const buttonId = `${panelPrefix}-button-${index}`

          return (
            <article key={item.question} className={styles.item}>
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  className={styles.trigger}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(index)}
                >
                  <span>{item.question}</span>
                  <span aria-hidden className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`}>
                    <span className={styles.bar} />
                    <span className={`${styles.bar} ${styles.barVertical}`} />
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}
              >
                <p>{item.answer}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default FAQ
