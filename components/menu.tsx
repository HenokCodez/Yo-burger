"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface MenuItem {
  id: string
  name: string
  description: string
  price: string
  image: string
  popular?: boolean
  spicy?: boolean
}

const menuData = {
  breakfast: [
    {
      id: "b1",
      name: "Morning Glory Burger",
      description: "Beef patty with fried egg, crispy bacon, cheese, and fresh tomatoes on a toasted bun",
      price: "180 ETB",
      image: "/placeholder-gj6w1.png",
      popular: true,
    },
    {
      id: "b2",
      name: "Ethiopian Sunrise",
      description: "Spiced beef patty with berbere seasoning, scrambled eggs, and injera bread",
      price: "160 ETB",
      image: "/placeholder-9wd83.png",
      spicy: true,
    },
    {
      id: "b3",
      name: "Veggie Morning Delight",
      description: "Plant-based patty with avocado, spinach, tomatoes, and herb mayo",
      price: "140 ETB",
      image: "/placeholder-o90dh.png",
    },
    {
      id: "b4",
      name: "Coffee House Special",
      description: "Double beef patty with caramelized onions, cheese, and Ethiopian coffee BBQ sauce",
      price: "200 ETB",
      image: "/placeholder-tjnoq.png",
    },
  ],
  lunch: [
    {
      id: "l1",
      name: "Yo Classic Burger",
      description: "Our signature beef patty with lettuce, tomato, onion, pickles, and special sauce",
      price: "220 ETB",
      image: "/classic-beef-burger-with-fresh-vegetables.jpg",
      popular: true,
    },
    {
      id: "l2",
      name: "Spicy Berbere Burger",
      description: "Beef patty seasoned with traditional berbere spice, jalapeños, and pepper jack cheese",
      price: "240 ETB",
      image: "/placeholder-czk3w.png",
      spicy: true,
    },
    {
      id: "l3",
      name: "Adama Special",
      description: "Double beef patty with mushrooms, Swiss cheese, and truffle aioli",
      price: "280 ETB",
      image: "/placeholder-yei0d.png",
      popular: true,
    },
    {
      id: "l4",
      name: "Chicken Awaze Burger",
      description: "Grilled chicken breast with awaze sauce, red onions, and fresh herbs",
      price: "200 ETB",
      image: "/placeholder-m6uhw.png",
      spicy: true,
    },
    {
      id: "l5",
      name: "Fish Burger Delight",
      description: "Crispy fish fillet with tartar sauce, lettuce, and tomato on a sesame bun",
      price: "190 ETB",
      image: "/placeholder-1n5c3.png",
    },
    {
      id: "l6",
      name: "Veggie Paradise",
      description: "House-made veggie patty with grilled vegetables, hummus, and sprouts",
      price: "170 ETB",
      image: "/placeholder-ldzlu.png",
    },
  ],
  dinner: [
    {
      id: "d1",
      name: "Premium Wagyu Burger",
      description: "Premium wagyu beef patty with caramelized onions, aged cheddar, and truffle mayo",
      price: "450 ETB",
      image: "/placeholder-v6lxq.png",
      popular: true,
    },
    {
      id: "d2",
      name: "Ethiopian Fusion Burger",
      description: "Beef patty with doro wat sauce, hard-boiled egg, and traditional spices",
      price: "320 ETB",
      image: "/placeholder-to5f4.png",
      spicy: true,
    },
    {
      id: "d3",
      name: "BBQ Smokehouse",
      description: "Slow-cooked beef brisket with BBQ sauce, coleslaw, and crispy onions",
      price: "380 ETB",
      image: "/placeholder-8mgo3.png",
    },
    {
      id: "d4",
      name: "Gourmet Lamb Burger",
      description: "Seasoned lamb patty with feta cheese, cucumber, and mint yogurt sauce",
      price: "350 ETB",
      image: "/placeholder-6f1ll.png",
    },
    {
      id: "d5",
      name: "Surf & Turf Deluxe",
      description: "Beef patty topped with grilled shrimp, garlic aioli, and mixed greens",
      price: "420 ETB",
      image: "/placeholder-cgrxd.png",
    },
  ],
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<"breakfast" | "lunch" | "dinner">("lunch")

  const categories = [
    { id: "breakfast", name: "Breakfast", icon: "🌅" },
    { id: "lunch", name: "Lunch", icon: "☀️" },
    { id: "dinner", name: "Dinner", icon: "🌙" },
  ]

  return (
    <section id="menu" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Menu</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From sunrise to sunset, discover flavors that celebrate the best of Ethiopian cuisine and international
              favorites
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-card rounded-full p-2 shadow-lg">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "ghost"}
                  className={`mx-1 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActiveCategory(category.id as "breakfast" | "lunch" | "dinner")}
                >
                  <span className="mr-2 text-lg">{category.icon}</span>
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Menu Items Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuData[activeCategory].map((item, index) => (
              <Card
                key={item.id}
                className="group overflow-hidden bg-card hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {item.popular && (
                      <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    )}
                    {item.spicy && (
                      <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        🌶️ Spicy
                      </span>
                    )}
                  </div>

                  {/* Price Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-lg">
                      {item.price}
                    </span>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0"
                    >
                      Order Now
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-card rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">Can't decide? Try our Chef's Special!</h3>
              <p className="text-muted-foreground mb-6">
                Let our experienced chefs surprise you with their daily creation using the freshest ingredients
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4">
                Ask About Today's Special
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
