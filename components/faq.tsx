"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "What are your opening hours?",
    answer:
      "We're open every day from 8:00 AM to 10:00 PM, including weekends and holidays. Come visit us anytime for a delicious meal!",
  },
  {
    id: "2",
    question: "Do you offer vegetarian and vegan options?",
    answer:
      "Yes! We have several vegetarian options including our Veggie Paradise burger made with a house-made veggie patty, and our Morning Delight with plant-based ingredients. We're happy to accommodate dietary preferences.",
  },
  {
    id: "3",
    question: "Can I make a reservation?",
    answer:
      "You can make a reservation through our website or by calling us at +251 94 036 0515. We recommend reservations for groups of 4 or more, especially during peak hours.",
  },
  {
    id: "4",
    question: "Do you offer delivery services?",
    answer:
      "Yes, we offer delivery within Adama city. You can order through our website or call us directly. Delivery typically takes 30-45 minutes depending on your location.",
  },
  {
    id: "5",
    question: "What makes Yo Burger special?",
    answer:
      "We combine the best of Ethiopian hospitality with international burger craftsmanship. Our unique berbere-spiced burgers, fresh local ingredients, and warm atmosphere create an unforgettable dining experience.",
  },
  {
    id: "6",
    question: "Do you cater for events?",
    answer:
      "Yes! We provide catering services for corporate events, private parties, and special occasions. Contact us at least 48 hours in advance to discuss your catering needs.",
  },
  {
    id: "7",
    question: "Are your burgers halal?",
    answer:
      "Yes, all our meat is halal certified. We understand the importance of dietary requirements and ensure our food meets halal standards.",
  },
  {
    id: "8",
    question: "Where exactly are you located?",
    answer:
      "We're located at Mebrat Hail, inside Dada Mall in Adama, Ethiopia. There's ample parking available at the mall, and we're easily accessible by public transportation.",
  },
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Got questions? We've got answers! Here are the most common questions our customers ask.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <Card
                key={item.id}
                className="bg-card shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">{item.question}</h3>
                  <div
                    className={`transform transition-transform duration-200 ${
                      openItems.includes(item.id) ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-5 h-5 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {openItems.includes(item.id) && (
                  <div className="px-6 pb-6">
                    <div className="pt-2 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions? We're here to help!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+251940360515"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Us
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById("contact")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-semibold"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }),
        }}
      />
    </section>
  )
}
