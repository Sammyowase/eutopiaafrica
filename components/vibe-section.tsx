"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { Zap, UtensilsCrossed, Users, X, Check, Flame } from "lucide-react"

const vibeCards = [
  {
    negative: "No Clubs.",
    positive: "Just Fireworks.",
    icon: Zap,
    bgColor: "bg-gradient-to-br from-red-50 to-accent/10",
  },
  {
    negative: "No Alcohol.",
    positive: "Just Food.",
    icon: UtensilsCrossed,
    bgColor: "bg-gradient-to-br from-blue-50 to-primary/10",
  },
  {
    negative: "No Stress.",
    positive: "Just Friends.",
    icon: Users,
    bgColor: "bg-gradient-to-br from-green-50 to-secondary/20",
  },
]

export function VibeSection() {
  const [currentCard, setCurrentCard] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % vibeCards.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto max-w-4xl">
        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold gradient-text mb-4">The Vibe</h2>
          </div>
          <Card className={`${vibeCards[currentCard].bgColor} border-2 border-accent/20 shadow-xl`}>
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                {(() => {
                  const IconComponent = vibeCards[currentCard].icon
                  return <IconComponent className="h-16 w-16 mx-auto text-accent" />
                })()}
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4">
                  <X className="h-6 w-6 text-red-500" />
                  <span className="text-xl font-semibold text-red-600 line-through">
                    {vibeCards[currentCard].negative}
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <Check className="h-6 w-6 text-green-500" />
                  <span className="text-xl font-semibold text-green-600">{vibeCards[currentCard].positive}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-center mt-4 space-x-2">
            {vibeCards.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentCard ? "bg-accent" : "bg-gray-300"
                }`}
                onClick={() => setCurrentCard(index)}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:block">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">The Vibe</h2>
            <p className="text-lg text-muted-foreground">This is what makes us different</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {vibeCards.map((card, index) => {
              const IconComponent = card.icon
              return (
                <Card
                  key={index}
                  className={`${card.bgColor} border-2 border-accent/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <IconComponent className="h-10 w-10 mx-auto text-accent" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center space-x-2">
                        <X className="h-5 w-5 text-red-500" />
                        <span className="text-lg font-semibold text-red-600 line-through">{card.negative}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="text-lg font-semibold text-green-600">{card.positive}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Tradition Statement */}
        <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-2 border-accent/30 shadow-2xl">
          <CardContent className="p-8 text-center">
            <div className="mb-4">
              <Flame className="h-10 w-10 mx-auto text-accent" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">A Tradition, Not Just a Party.</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're not trying to compete with clubs or bars. We're creating something completely different — a
              Christmas tradition that brings joy, builds friendships, and creates memories that last forever.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
