"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  comment: string
  avatar: string
  date: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Meron Tadesse",
    location: "Adama, Ethiopia",
    rating: 5,
    comment:
      "The best burgers in Adama! The Ethiopian fusion flavors are incredible, and the service is always warm and welcoming. The berbere burger is a must-try!",
    avatar: "/placeholder.svg?key=avatar1",
    date: "2 weeks ago",
  },
  {
    id: "2",
    name: "David Johnson",
    location: "Addis Ababa, Ethiopia",
    rating: 5,
    comment:
      "I travel to Adama regularly for work, and Yo Burger is always my first stop. The quality is consistent, and the atmosphere is perfect for both business meetings and casual dining.",
    avatar: "/placeholder.svg?key=avatar2",
    date: "1 month ago",
  },
  {
    id: "3",
    name: "Hanan Mohammed",
    location: "Adama, Ethiopia",
    rating: 5,
    comment:
      "Amazing food and great prices! The staff remembers my order every time I visit. It feels like eating with family. The veggie options are also fantastic!",
    avatar: "/placeholder.svg?key=avatar3",
    date: "3 weeks ago",
  },
  {
    id: "4",
    name: "Sarah Williams",
    location: "Nazret, Ethiopia",
    rating: 4,
    comment:
      "Delicious burgers with a unique Ethiopian twist. The restaurant is clean, modern, and the location at Dada Mall is very convenient. Highly recommend!",
    avatar: "/placeholder.svg?key=avatar4",
    date: "1 week ago",
  },
  {
    id: "5",
    name: "Alemayehu Bekele",
    location: "Adama, Ethiopia",
    rating: 5,
    comment:
      "The premium wagyu burger is worth every birr! The quality of ingredients and attention to detail is impressive. This place sets the standard for burgers in Ethiopia.",
    avatar: "/placeholder.svg?key=avatar5",
    date: "4 days ago",
  },
  {
    id: "6",
    name: "Lisa Chen",
    location: "Addis Ababa, Ethiopia",
    rating: 5,
    comment:
      "Visited during my trip to Ethiopia and was blown away by the fusion of local and international flavors. The coffee house special burger was incredible!",
    avatar: "/placeholder.svg?key=avatar6",
    date: "2 months ago",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? "text-accent fill-current" : "text-gray-300"}`}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Don't just take our word for it - hear from the people who make Yo Burger their favorite dining
              destination
            </p>
          </div>

          {/* Main Testimonial Carousel */}
          <div className="relative mb-12">
            <Card className="bg-card p-8 md:p-12 shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start mb-4">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed italic">
                    "{testimonials[currentIndex].comment}"
                  </blockquote>

                  {/* Author Info */}
                  <div>
                    <div className="font-bold text-foreground text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-muted-foreground">
                      {testimonials[currentIndex].location} • {testimonials[currentIndex].date}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mb-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold text-primary mb-2">4.9</div>
              <div className="text-muted-foreground">Average Rating</div>
              <div className="flex justify-center mt-2">{renderStars(5)}</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Happy Reviews</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
