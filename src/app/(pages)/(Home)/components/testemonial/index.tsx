"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "./styles.scss"

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      content: `Minha filha foi muito bem atendida pela Dra. Camila e toda a equipe. Aparelhos de última geração para diagnóstico e acompanhamento. Seguiremos o acompanhamento anual dela e retornarei para fazer os meus exames também!`,
      author: "Paula Brigagão Alcântara",
      rating: 5,
    },
    {
      id: 2,
      content: `Muito bom atendimento, e maquinas de exames modernas e profissionais capacitados, e o mais importante ATENCIOSOS.
        obrigado gostei muito.`,
      author: "Carlos Fernandes Bonfim",
      rating: 5,
    },
    {
      id: 3,
      content: "Ótimo atendimento. Todos muito atenciosos, desde a recepcionista até toda parte médica. Super indico!",
      author: "Carlos Bianchini",
      rating: 5,
    },
  ]

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  // Calculate visible testimonials with wrapping
  const getVisibleTestimonials = () => {
    const result = []
    const length = testimonials.length

    // Previous testimonial (left)
    const prevIndex = activeIndex === 0 ? length - 1 : activeIndex - 1
    result.push({ ...testimonials[prevIndex], position: "left" })

    // Active testimonial (center)
    result.push({ ...testimonials[activeIndex], position: "center" })

    // Next testimonial (right)
    const nextIndex = activeIndex === length - 1 ? 0 : activeIndex + 1
    result.push({ ...testimonials[nextIndex], position: "right" })

    return result
  }

  const visibleTestimonials = getVisibleTestimonials()

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-slider">
          <button onClick={prevSlide} className="nav-button nav-button-prev" aria-label="Ver depoimento anterior">
            <ChevronLeft className="nav-icon" />
          </button>

          <div className="carousel-container">
            {visibleTestimonials.map((testimonial) => (
              <article
                key={`${testimonial.id}-${testimonial.position}`}
                className={`testimonial-card ${testimonial.position}`}
                aria-hidden={testimonial.position !== "center"}
              >
                <div className="testimonial-content">
                  <blockquote>
                    <p className="testimonial-text">{testimonial.content}</p>
                  </blockquote>
                  <footer className="testimonial-footer">
                    <cite className="testimonial-author">{testimonial.author}</cite>
                    <div className="testimonial-rating" aria-label={`Avaliação: ${testimonial.rating} de 5 estrelas`}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star">
                          ★
                        </span>
                      ))}
                    </div>
                  </footer>
                </div>
              </article>
            ))}
          </div>

          <button onClick={nextSlide} className="nav-button nav-button-next" aria-label="Ver próximo depoimento">
            <ChevronRight className="nav-icon" />
          </button>
        </div>

        <div className="pagination">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`pagination-dot ${index === activeIndex ? "active" : ""}`}
              aria-label={`Ir para o depoimento ${index + 1}`}
              aria-current={index === activeIndex ? "true" : "false"}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

