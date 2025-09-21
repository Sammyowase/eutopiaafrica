"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function FinalCTASection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2024-12-25T00:00:00").getTime()

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
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-white/90 backdrop-blur-sm border-2 border-accent/30 shadow-2xl">
          <CardContent className="p-12 text-center">
            <div className="space-y-8">
              <div className="text-5xl mb-6 sparkle-animation">🎄</div>

              <h2 className="text-3xl md:text-4xl font-bold gradient-text leading-tight">
                This isn't just a party.
                <br />
                It's a Christmas tradition every student will talk about.
              </h2>

              {/* Countdown */}
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-6 max-w-md mx-auto">
                <p className="text-muted-foreground text-sm mb-4">⏰ Countdown to Midnight in PJs</p>
                <div className="grid grid-cols-4 gap-3 text-center">
                  <div className="bg-white/80 rounded-lg p-3">
                    <div className="text-xl font-bold text-primary">{timeLeft.days}</div>
                    <div className="text-xs text-muted-foreground">Days</div>
                  </div>
                  <div className="bg-white/80 rounded-lg p-3">
                    <div className="text-xl font-bold text-primary">{timeLeft.hours}</div>
                    <div className="text-xs text-muted-foreground">Hours</div>
                  </div>
                  <div className="bg-white/80 rounded-lg p-3">
                    <div className="text-xl font-bold text-primary">{timeLeft.minutes}</div>
                    <div className="text-xs text-muted-foreground">Minutes</div>
                  </div>
                  <div className="bg-white/80 rounded-lg p-3">
                    <div className="text-xl font-bold text-primary">{timeLeft.seconds}</div>
                    <div className="text-xs text-muted-foreground">Seconds</div>
                  </div>
                </div>
              </div>

              {/* Final CTAs */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-bold px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span className="mr-2">🚀</span>
                  Bring It to My School
                </Button>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white font-bold px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <span className="mr-2">🎟</span>
                  Get My Ticket
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                Limited spots available • First come, first served • Don't miss out on the magic
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
