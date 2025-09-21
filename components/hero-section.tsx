"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Ticket, Heart, Clock, PartyPopper, Shirt, UtensilsCrossed, Video, Sparkles } from "lucide-react"

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

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2024-12-25T23:59:59").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const carouselTimer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
    }, 5000)

    return () => clearInterval(carouselTimer)
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
              alt={`Christmas party scene ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? "bg-accent scale-125" : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="space-y-6 md:space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight">
              The Christmas Party
              <br />
              <span className="sparkle-animation bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                You Can't Miss
              </span>
            </h1>
            <div className="flex justify-center">
              <div className="animate-bounce">
                <PartyPopper className="h-10 w-10 md:h-14 md:w-14 text-accent" />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-secondary">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 md:px-4">
              <Shirt className="h-4 w-4 md:h-5 md:w-5" />
              <span>Pajamas</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 md:px-4">
              <UtensilsCrossed className="h-4 w-4 md:h-5 md:w-5" />
              <span>BBQ</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 md:px-4">
              <Video className="h-4 w-4 md:h-5 md:w-5" />
              <span>Movies</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 md:px-4">
              <Sparkles className="h-4 w-4 md:h-5 md:w-5" />
              <span>Magic</span>
            </div>
          </div>

          <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium px-4">
            We believe Christmas shouldn't be Detty December — but{" "}
            <span className=" font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Joy, Love & Light
            </span>
            .
          </p>

          <div className="bg-black/40 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 max-w-md md:max-w-lg mx-auto border border-white/10">
            <div className="flex items-center justify-center gap-2 text-white/80 text-xs md:text-sm lg:text-base mb-4 md:mb-6">
              <Clock className="h-3 w-3 md:h-4 md:w-4" />
              <span>Countdown to Midnight in PJs</span>
            </div>
            <div className="grid grid-cols-4 gap-2 md:gap-3 lg:gap-4 text-center">
              <div className="bg-gradient-to-b from-accent/30 to-accent/10 rounded-lg md:rounded-xl p-2 md:p-3 lg:p-4 border border-accent/20">
                <div className="text-lg md:text-2xl lg:text-3xl font-bold text-white">{timeLeft.days}</div>
                <div className="text-xs md:text-sm text-white/70 font-medium">Days</div>
              </div>
              <div className="bg-gradient-to-b from-accent/30 to-accent/10 rounded-lg md:rounded-xl p-2 md:p-3 lg:p-4 border border-accent/20">
                <div className="text-lg md:text-2xl lg:text-3xl font-bold text-white">{timeLeft.hours}</div>
                <div className="text-xs md:text-sm text-white/70 font-medium">Hours</div>
              </div>
              <div className="bg-gradient-to-b from-accent/30 to-accent/10 rounded-lg md:rounded-xl p-2 md:p-3 lg:p-4 border border-accent/20">
                <div className="text-lg md:text-2xl lg:text-3xl font-bold text-white">{timeLeft.minutes}</div>
                <div className="text-xs md:text-sm text-white/70 font-medium">Minutes</div>
              </div>
              <div className="bg-gradient-to-b from-accent/30 to-accent/10 rounded-lg md:rounded-xl p-2 md:p-3 lg:p-4 border border-accent/20">
                <div className="text-lg md:text-2xl lg:text-3xl font-bold text-white">{timeLeft.seconds}</div>
                <div className="text-xs md:text-sm text-white/70 font-medium">Seconds</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-6 md:pt-8 pb-12 md:pb-16 lg:pb-20 px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-white font-bold px-6 md:px-8 py-3 md:py-4 text-sm md:text-base lg:text-lg rounded-full shadow-2xl hover:shadow-accent/25 transition-all duration-300 hover:scale-105 border border-accent/20"
            >
              <Ticket className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Join the Waitlist
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-white/80 text-white hover:bg-white hover:text-primary font-bold px-6 md:px-8 py-3 md:py-4 text-sm md:text-base lg:text-lg rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105 bg-white/10 backdrop-blur-sm"
            >
              <Heart className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Make a Wish
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 md:w-8 md:h-12 border-2 border-white/50 rounded-full flex justify-center items-start pt-2">
            <ChevronDown className="h-3 w-3 md:h-4 md:w-4 text-white/70 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
