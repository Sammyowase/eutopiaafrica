"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Camera, Film, Popcorn, Utensils, Gift, ArrowRight, Ticket } from "lucide-react"

const carouselImages = [
  "/christmas-party-with-students-in-pajamas--firework.jpg",
  "/images/alexander-mass-dz40fgC_VLQ-unsplash.jpg",
  "/images/padmira-shop-j6AWfWf7AyM-unsplash.jpg",
  "/images/pexels-designecologist-2526105.jpg",
  "/images/pexels-palomaclaricefotografia-12887817.jpg",
  "/images/pexels-samerdaboul-2233729.jpg",
  "/images/vincent-guth-_E_ySzvSJRI-unsplash.jpg",
  "/university-students-christmas-celebration-in-pajam.jpg",
]

const valueItems = [
  {
    icon: Camera,
    service: "Christmas photo shoot with friends",
    price: "₦15,000+",
    color: "text-red-500",
  },
  {
    icon: Film,
    service: "Cinema movie ticket",
    price: "₦5,000",
    color: "text-red-500",
  },
  {
    icon: Popcorn,
    service: "Pepsi + popcorn",
    price: "₦3,000",
    color: "text-red-500",
  },
  {
    icon: Utensils,
    service: "BBQ night out",
    price: "₦7,000",
    color: "text-red-500",
  },
  {
    icon: Gift,
    service: "Claw machine games",
    price: "₦2,000+",
    color: "text-red-500",
  },
]

export function ValuePropositionSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedTotal, setAnimatedTotal] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const carouselTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
    }, 5000)

    return () => clearInterval(carouselTimer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate the total from 0 to 32000
          let start = 0
          const end = 32000
          const duration = 2000
          const increment = end / (duration / 16)

          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setAnimatedTotal(end)
              clearInterval(timer)
            } else {
              setAnimatedTotal(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("value-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="value-section" className="relative py-12 sm:py-16 md:py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Value proposition background ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80" />
      </div>
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 gradient-text leading-tight">
            Do the Math. This is Insane Value.
          </h2>
          <p className="text-base md:text-lg text-white/80 px-4">
            Imagine paying separately for everything we're giving you...
          </p>
        </div>

        <Card className="bg-black/40 backdrop-blur-md border-2 border-accent/20 shadow-2xl">
          <CardContent className="p-4 sm:p-6 md:p-8">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 md:mb-8 text-white">"Imagine paying separately..."</h3>

              {/* Individual Items */}
              <div className="space-y-3 md:space-y-4">
                {valueItems.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-3 sm:p-4 rounded-lg bg-white/10 transition-all duration-500 ${
                        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-accent flex-shrink-0" />
                        <span className="font-medium text-sm sm:text-base truncate text-white/90">{item.service}</span>
                      </div>
                      <div className="flex items-center space-x-2 flex-shrink-0">
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                        <span className={`text-lg sm:text-xl font-bold text-red-400 line-through`}>{item.price}</span>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Total */}
              <div className="border-t-2 border-white/20 pt-4 md:pt-6">
                <div className="flex items-center justify-between text-xl sm:text-2xl font-bold text-white">
                  <span>Total</span>
                  <span className="text-red-400 line-through">₦{animatedTotal.toLocaleString()}+</span>
                </div>
              </div>

              {/* The Deal */}
              <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl p-4 sm:p-6 text-center border border-white/10">
                <p className="text-base sm:text-lg mb-3 sm:mb-4 text-white">
                  But at <span className="font-bold text-accent">Midnight in PJs</span> you get it{" "}
                  <span className="font-bold text-primary">ALL</span>
                </p>
                <p className="text-xs sm:text-sm text-white/70 mb-3 sm:mb-4">
                  (plus karaoke, fireworks, free wishes, celebrity dinner chance)
                </p>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">for just ₦9,000</div>
                <p className="text-base sm:text-lg font-semibold text-accent">
                  This is not a deal. This is a Christmas miracle. ✨
                </p>
              </div>

              {/* CTA */}
              <div className="text-center pt-4 md:pt-6">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white font-bold px-8 sm:px-12 py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:scale-105"
                >
                  <Ticket className="mr-2 h-5 w-5" />
                  Secure My Spot Now
                </Button>
                <p className="text-xs sm:text-sm text-white/60 mt-3">
                  Limited spots available • First come, first served
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
