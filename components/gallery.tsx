"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface GalleryImage {
  id: string
  src: string
  alt: string
  category: "food" | "interior" | "team"
}

const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "/placeholder.svg?key=gallery1",
    alt: "Signature Yo Burger with fresh ingredients",
    category: "food",
  },
  {
    id: "2",
    src: "/placeholder.svg?key=gallery2",
    alt: "Modern restaurant interior with warm lighting",
    category: "interior",
  },
  {
    id: "3",
    src: "/placeholder.svg?key=gallery3",
    alt: "Gourmet burger platter with sides",
    category: "food",
  },
  {
    id: "4",
    src: "/placeholder.svg?key=gallery4",
    alt: "Friendly restaurant staff preparing food",
    category: "team",
  },
  {
    id: "5",
    src: "/placeholder.svg?key=gallery5",
    alt: "Cozy dining area with Ethiopian decor",
    category: "interior",
  },
  {
    id: "6",
    src: "/placeholder.svg?key=gallery6",
    alt: "Fresh breakfast burger with coffee",
    category: "food",
  },
  {
    id: "7",
    src: "/placeholder.svg?key=gallery7",
    alt: "Open kitchen showing food preparation",
    category: "interior",
  },
  {
    id: "8",
    src: "/placeholder.svg?key=gallery8",
    alt: "Spicy berbere burger with traditional spices",
    category: "food",
  },
  {
    id: "9",
    src: "/placeholder.svg?key=gallery9",
    alt: "Restaurant exterior at Dada Mall",
    category: "interior",
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [filter, setFilter] = useState<"all" | "food" | "interior" | "team">("all")

  const filteredImages = filter === "all" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredImages[newIndex])
  }

  const filterButtons = [
    { id: "all", label: "All Photos", icon: "📸" },
    { id: "food", label: "Food", icon: "🍔" },
    { id: "interior", label: "Interior", icon: "🏠" },
    { id: "team", label: "Team", icon: "👥" },
  ]

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Gallery</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Take a visual journey through our delicious food, welcoming atmosphere, and passionate team
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center mb-12">
            <div className="bg-card rounded-full p-2 shadow-lg">
              {filterButtons.map((button) => (
                <Button
                  key={button.id}
                  variant={filter === button.id ? "default" : "ghost"}
                  className={`mx-1 px-6 py-3 rounded-full transition-all duration-300 ${
                    filter === button.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setFilter(button.id as "all" | "food" | "interior" | "team")}
                >
                  <span className="mr-2">{button.icon}</span>
                  {button.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <Card
                key={image.id}
                className="group overflow-hidden cursor-pointer bg-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openLightbox(image)}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                      <p className="text-sm font-medium">View Image</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-4xl max-h-full">
                <img
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain"
                />

                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={() => navigateImage("prev")}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={() => navigateImage("next")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white text-lg font-medium bg-black/50 rounded-lg px-4 py-2">{selectedImage.alt}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
