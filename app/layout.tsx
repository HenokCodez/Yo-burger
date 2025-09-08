import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Yo Burger & Restaurant | Best Burgers in Adama, Ethiopia",
  description:
    "Experience Ethiopia's finest burgers at Yo Burger & Restaurant in Adama. Fresh ingredients, authentic flavors, and warm hospitality. Located at Mebrat Hail, Dada Mall.",
  keywords:
    "burger restaurant, Adama Ethiopia, best burgers, Ethiopian restaurant, Yo Burger, Mebrat Hail, Dada Mall, fresh burgers, local restaurant, Ethiopian cuisine, halal food, family restaurant",
  generator: "v0.app",
  authors: [{ name: "Yo Burger & Restaurant" }],
  creator: "Yo Burger & Restaurant",
  publisher: "Yo Burger & Restaurant",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Yo Burger & Restaurant | Best Burgers in Adama, Ethiopia",
    description:
      "Experience Ethiopia's finest burgers at Yo Burger & Restaurant in Adama. Fresh ingredients, authentic flavors, and warm hospitality.",
    type: "website",
    locale: "en_US",
    siteName: "Yo Burger & Restaurant",
    url: "https://yoburger.et",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yo Burger & Restaurant - Best Burgers in Adama, Ethiopia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yo Burger & Restaurant | Best Burgers in Adama, Ethiopia",
    description: "Experience Ethiopia's finest burgers at Yo Burger & Restaurant in Adama.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://yoburger.et",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0891b2" />
        <meta name="msapplication-TileColor" content="#0891b2" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Restaurant",
                  "@id": "https://yoburger.et/#restaurant",
                  name: "Yo Burger & Restaurant",
                  description:
                    "Experience Ethiopia's finest burgers with fresh ingredients, authentic flavors, and warm hospitality.",
                  url: "https://yoburger.et",
                  telephone: "+251940360515",
                  email: "info@yoburger.et",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Mebrat Hail, Dada Mall",
                    addressLocality: "Adama",
                    addressRegion: "Oromia",
                    addressCountry: "Ethiopia",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: "8.5400",
                    longitude: "39.2625",
                  },
                  servesCuisine: ["Burger", "Ethiopian", "Fast Food", "American"],
                  priceRange: "$$",
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                      opens: "08:00",
                      closes: "22:00",
                    },
                  ],
                  acceptsReservations: true,
                  hasMenu: "https://yoburger.et/#menu",
                  image: ["https://yoburger.et/restaurant-interior.jpg", "https://yoburger.et/signature-burger.jpg"],
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    reviewCount: "500",
                    bestRating: "5",
                    worstRating: "1",
                  },
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://yoburger.et/#business",
                  name: "Yo Burger & Restaurant",
                  image: "https://yoburger.et/logo.png",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Mebrat Hail, Dada Mall",
                    addressLocality: "Adama",
                    addressRegion: "Oromia",
                    addressCountry: "Ethiopia",
                  },
                  telephone: "+251940360515",
                  openingHours: "Mo-Su 08:00-22:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
