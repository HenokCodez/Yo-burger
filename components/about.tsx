import { Card } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Yo Burger & Restaurant</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Where Ethiopian hospitality meets exceptional burger craftsmanship
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">Our Story</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in the vibrant city of Adama, Yo Burger & Restaurant has been serving Ethiopia's finest burgers
                with a commitment to quality that runs as deep as our Ethiopian roots. We believe that great food brings
                people together, and every burger we craft tells a story of passion, tradition, and innovation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Located in the heart of Mebrat Hail at Dada Mall, we've created a space where the warmth of Ethiopian
                hospitality meets the art of burger perfection. Our chefs use only the freshest local ingredients,
                ensuring every bite delivers an unforgettable experience.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-muted-foreground">Happy Customers</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="animate-fade-in">
              <img
                src="/modern-ethiopian-restaurant-interior-with-warm-lig.jpg"
                alt="Yo Burger & Restaurant interior"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Values Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-card hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4">Fresh Ingredients</h4>
              <p className="text-muted-foreground leading-relaxed">
                We source the finest local ingredients daily to ensure every burger is made with the freshest
                components.
              </p>
            </Card>

            <Card className="p-8 text-center bg-card hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4">Ethiopian Hospitality</h4>
              <p className="text-muted-foreground leading-relaxed">
                Experience the warmth and friendliness that Ethiopia is known for in every interaction with our team.
              </p>
            </Card>

            <Card className="p-8 text-center bg-card hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4">Quality Guarantee</h4>
              <p className="text-muted-foreground leading-relaxed">
                Every burger is crafted with precision and care, meeting our high standards for taste and presentation.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
