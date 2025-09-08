import type { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Menu from "@/components/menu"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import Reservation from "@/components/reservation"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import FAQ from "@/components/faq"

export const metadata: Metadata = {
  title: "Yo Burger & Restaurant | Best Burgers in Adama, Ethiopia",
  description:
    "Experience Ethiopia's finest burgers at Yo Burger & Restaurant in Adama. Fresh ingredients, authentic flavors, and warm hospitality. Located at Mebrat Hail, Dada Mall.",
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Reservation />
      <Contact />
      <Footer />
    </main>
  )
}
