"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import "./styles.scss"

interface CarouselProps {
  items: {
    id: string | number
    content: React.ReactNode
  }[]
  autoPlay?: boolean
  interval?: number
  className?: string
}

export default function Carousel({ items, autoPlay = true, interval = 5000, className }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Clone the first item to the end and the last item to the beginning for the infinite loop effect
  const extendedItems = [items[items.length - 1], ...items, items[0]]

  const goToSlide = (index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex(index)

    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false)

      // Handle infinite loop logic
      if (index === extendedItems.length - 1) {
        setCurrentIndex(1)
      } else if (index === 0) {
        setCurrentIndex(extendedItems.length - 2)
      }
    }, 500) // Match this with the CSS transition duration
  }

  const nextSlide = () => {
    goToSlide(currentIndex + 1)
  }

  const prevSlide = () => {
    goToSlide(currentIndex - 1)
  }

  // Auto play functionality
  useEffect(() => {
    if (autoPlay) {
      timerRef.current = setInterval(() => {
        nextSlide()
      }, interval)
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [autoPlay, interval, currentIndex])

  return (
    <div className={`carousel ${className || ""}`}>
      <div
        className="carousel__track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${extendedItems.length * 100}%`,
        }}
      >
        {extendedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="carousel__slide"
            style={{ width: `${100 / extendedItems.length}%` }}
          >
            {item.content}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        className="carousel__button carousel__button--prev"
        onClick={prevSlide}
        disabled={isAnimating}
        aria-label="Anterior"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button
        className="carousel__button carousel__button--next"
        onClick={nextSlide}
        disabled={isAnimating}
        aria-label="Próximo"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="carousel__indicators">
        {items.map((_, index) => {
          const isActive =
            currentIndex === index + 1 ||
            (currentIndex === extendedItems.length - 1 && index === 0) ||
            (currentIndex === 0 && index === items.length - 1)

          return (
            <button
              key={index}
              className={`carousel__indicator ${isActive ? "carousel__indicator--active" : ""}`}
              onClick={() => goToSlide(index + 1)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          )
        })}
      </div>
    </div>
  )
}

